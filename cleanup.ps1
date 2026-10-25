param(
  [Parameter(Mandatory = $true)]
  [ValidateSet('baseline','audit','delete','fix','layout','deps','dropcss','verify')]
  [string]$Step,
  [string]$Target
)

$ErrorActionPreference = 'Continue'
if (-not (Test-Path package.json) -or -not (Test-Path src)) {
  throw 'Run this from the project root (the folder that contains package.json).'
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$root = (Get-Location).Path + '\'

# ---------- helpers ----------
function Get-SrcFiles([string[]]$Ext = @('*.jsx','*.js','*.css')) {
  Get-ChildItem src -Recurse -File -Include $Ext
}

function Edit-Files($Files, [string]$Pattern, [string]$Replacement) {
  foreach ($f in $Files) {
    $text = [IO.File]::ReadAllText($f.FullName)
    $new  = [regex]::Replace($text, $Pattern, $Replacement)
    if ($new -ne $text) {
      [IO.File]::WriteAllText($f.FullName, $new, $utf8NoBom)
      Write-Host ('  edited ' + $f.FullName.Replace($root, ''))
    }
  }
}

function Edit-Named([string]$Path, [string]$Pattern, [string]$Replacement) {
  if (Test-Path $Path) { Edit-Files (Get-Item $Path) $Pattern $Replacement }
  else { Write-Host "  skip (not found): $Path" }
}

function Remove-Tracked([string[]]$Paths) {
  foreach ($p in $Paths) {
    if (-not (Test-Path $p)) { Write-Host "  skip (not found): $p"; continue }
    git rm -r -f -q $p 2>$null
    if ($LASTEXITCODE -ne 0) { Remove-Item $p -Recurse -Force }
    Write-Host "  removed $p"
  }
}

# ---------- steps ----------
switch ($Step) {

  'baseline' {
    Add-Content .gitignore @('', 'test-results', 'playwright-report', 'baseline')
    npx.cmd playwright test
    if (Test-Path test-results) {
      New-Item -ItemType Directory -Force baseline | Out-Null
      Copy-Item test-results\* baseline -Recurse -Force
      Write-Host 'Baseline screenshots saved to .\baseline'
    }
  }

  'audit' {
    Write-Host "`n== CSS files no component imports (delete candidates) =="
    Get-ChildItem src -Recurse -Filter *.css | Where-Object { $_.Name -ne 'index.css' } | ForEach-Object {
      $hit = Select-String -Path ($_.DirectoryName + '\*.jsx') -Pattern ([regex]::Escape($_.Name)) -Quiet
      if (-not $hit) { Write-Host ('  NOT IMPORTED: ' + $_.FullName.Replace($root, '')) }
    }

    Write-Host "`n== Files defining .site-footer (should be ONE) =="
    Get-SrcFiles | Select-String -Pattern 'site-footer' -List | ForEach-Object { '  ' + $_.Path.Replace($root, '') }

    Write-Host "`n== Stale 1000px gallery CSS =="
    Get-SrcFiles '*.css' | Select-String -Pattern 'height: 1000px' -List | ForEach-Object { '  ' + $_.Path.Replace($root, '') }

    Write-Host "`n== Stub components (<div>Name</div>) =="
    Get-SrcFiles '*.jsx' | Where-Object {
      (Get-Content $_.FullName -Raw) -match 'return <div>(About|Footer|Services|Testimonials)</div>'
    } | ForEach-Object { '  ' + $_.FullName.Replace($root, '') }

    Write-Host "`n== Inline <style> blocks (to convert to Tailwind) =="
    Get-SrcFiles '*.jsx' | Select-String -Pattern '<style>' -List | ForEach-Object { '  ' + $_.Path.Replace($root, '') }

    Write-Host "`n== console.log =="
    Get-SrcFiles '*.jsx','*.js' | Select-String -Pattern 'console\.log' | ForEach-Object { '  ' + $_.Path.Replace($root, '') + ':' + $_.LineNumber }

    Write-Host "`n== OurStory folder =="
    Get-ChildItem src\sections\OurStory -ErrorAction SilentlyContinue | ForEach-Object { '  ' + $_.Name }

    Write-Host "`n== Importers of 'dead' modules (a Home.jsx hit is just the unused import) =="
    foreach ($n in 'Features','FeatureCard','GalleryImage','galleryImages','Testimonials','TestimonialCard','testimonialData') {
      Write-Host "  --- $n"
      $pat = '(from|import)\s+[''"].*[/.]' + $n + '(\.jsx?)?[''"]'
      $hits = Get-SrcFiles '*.jsx','*.js' | Select-String -Pattern $pat -CaseSensitive
      if ($hits) { $hits | ForEach-Object { '    ' + $_.Path.Replace($root, '') + ':' + $_.LineNumber } }
      else { Write-Host '    (no importers)' }
    }
  }

  'delete' {
    Write-Host '== Stub files =='
    $stubs = Get-SrcFiles '*.jsx' | Where-Object {
      (Get-Content $_.FullName -Raw) -match 'return <div>(About|Footer|Services|Testimonials)</div>'
    }
    foreach ($s in $stubs) { Remove-Tracked $s.FullName }

    Write-Host '== Dead imports in Home.jsx =='
    Edit-Named 'src\pages\Home.jsx' '(?m)^import (Features|Testimonials) from [^\r\n]*\r?\n' ''
    Edit-Named 'src\pages\Home.jsx' '(?m)^[ \t]*\{/\* *<(Features|Testimonials) */> *\*/\}[ \t]*\r?\n' ''

    Write-Host '== Dead components and data =='
    Remove-Tracked @(
      'src\sections\Features', 'src\components\FeatureCard', 'src\components\GalleryImage',
      'src\sections\Testimonials', 'src\data\features.js', 'src\data\galleryImages.js'
    )

    Write-Host '== Duplicate Button =='
    Edit-Named 'src\sections\ContactPage\ContactHero\ContactHero.jsx' `
      '"\.\./ContactHero/Button/Button"' '"../../../components/Button/Button"'
    Remove-Tracked 'src\sections\ContactPage\ContactHero\Button'

    Write-Host "`nNow delete any extra Footer copies / stale gallery CSS / duplicate OurStory CSS that 'audit' showed (git rm <path>)."
  }

  'fix' {
    $css  = Get-SrcFiles '*.css'
    $code = Get-SrcFiles '*.jsx','*.js'
    $jsx  = Get-SrcFiles '*.jsx'

    Write-Host '== Remove Google Fonts @import (fonts load from index.html) =='
    Edit-Files (Get-SrcFiles) '(?m)^[ \t]*@import[ \t]+url\([^\r\n]*\r?\n' ''

    Write-Host '== /public imports become plain URL strings =='
    Edit-Files $code '(?m)^import ([A-Za-z0-9_]+) from "(/[^"]+)";' 'const $1 = "$2";'
    Edit-Files $css  '\.\./\.\./\.\./public/' '/'

    Write-Host '== Wizard bugs =='
    $hero = 'src\sections\ContactPage\ContactHero\ContactHero.jsx'
    Edit-Named $hero 'className="back-btn"' 'className="contact-back-btn"'
    Edit-Named $hero 'onClick=\{nextStep\}' 'onClick={() => nextStep()}'

    Write-Host '== Promise shadows the global =='
    Edit-Named 'src\pages\AboutPage.jsx' 'import Promise from' 'import OurPromise from'
    Edit-Named 'src\pages\AboutPage.jsx' '<Promise />' '<OurPromise />'
    Edit-Named 'src\sections\Promise\Promise.jsx' 'function Promise\(\)' 'function OurPromise()'

    Write-Host '== Unused React import =='
    Edit-Named 'src\main.jsx' '(?m)^import React from "react";\r?\n' ''

    Write-Host '== Hard-coded hex colours -> theme tokens =='
    $map = @{
      'b90235'='brand'; '920027'='brand-dark'; '1c1b1b'='ink'; '5b4041'='muted';
      'fcf9f8'='page';  'f6f3f2'='surface';    'dd2a4b'='rose'; 'eb436d'='rose-light'; 'fcd03d'='gold'
    }
    foreach ($hex in $map.Keys) {
      Edit-Files $jsx ('(?i)(text|bg|border|from|to|via|fill|stroke|ring)-\[#' + $hex + '\]') ('$1-' + $map[$hex])
    }

    Write-Host "`n== Hex values still hard-coded =="
    Get-SrcFiles '*.jsx' | Select-String -Pattern '\[#[0-9A-Fa-f]{6}\]' -AllMatches |
      ForEach-Object { $_.Matches.Value } | Group-Object | Sort-Object Count -Descending |
      ForEach-Object { '  {0,3}  {1}' -f $_.Count, $_.Name }
  }

  'layout' {
    # Only run AFTER Layout.jsx exists and AppRoutes.jsx uses it
    $layoutOk = (Test-Path 'src\components\layout\Layout.jsx') -and
                (Select-String -Path 'src\routes\AppRoutes.jsx' -Pattern 'Layout' -Quiet)
    if (-not $layoutOk) {
      throw 'Create src\components\layout\Layout.jsx and update AppRoutes.jsx first (see my earlier message). Otherwise your pages would lose their Navbar and Footer.'
    }

    $pages = @(
      'src\pages\Home.jsx', 'src\pages\AboutPage.jsx', 'src\pages\EventsPage.jsx',
      'src\pages\PackagePage.jsx', 'src\pages\ContactPage\ContactPage.jsx',
      'src\sections\ContactPage\ContactSuccess\ContactSuccess.jsx'
    )
    foreach ($p in $pages) {
      Edit-Named $p '(?m)^[ \t]*<(Navbar|Footer)\s*/>[ \t]*\r?\n' ''
      Edit-Named $p '(?m)^import (Navbar|Footer) from [^\r\n]*\r?\n' ''
    }

    # Layout already provides <main>
    Edit-Named 'src\pages\ContactPage\ContactPage.jsx' '<main className="contact-page">' '<div className="contact-page">'
    Edit-Named 'src\pages\ContactPage\ContactPage.jsx' '</main>' '</div>'

    # ScrollToTop lives in Layout only
    if (Select-String -Path 'src\components\layout\Layout.jsx' -Pattern 'ScrollToTop' -Quiet) {
      Edit-Named 'src\App.jsx' '(?m)^[^\r\n]*ScrollToTop[^\r\n]*\r?\n' ''
    }
  }

  'deps' {
    foreach ($p in 'stripe','react-icons','framer-motion') {
      $used = Get-SrcFiles '*.jsx','*.js' | Select-String -Pattern ('from [''"]' + $p) -Quiet
      if ($used) { Write-Host "  keeping $p (it is imported)" }
      else { Write-Host "  removing $p"; npm.cmd uninstall $p }
    }
    npm.cmd pkg set 'scripts.test:e2e=playwright test'
    npm.cmd pkg set 'browserslist[0]=last 2 versions' 'browserslist[1]=Safari >= 15' 'browserslist[2]=iOS >= 15' 'browserslist[3]=not dead'
  }

  'dropcss' {
    # Run ONLY after you've converted that component's classes to Tailwind.
    # Example:  .\cleanup.ps1 dropcss -Target src\sections\Footer\Footer
    if (-not $Target) { throw 'Use: -Target src\sections\Footer\Footer' }
    $name = Split-Path $Target -Leaf
    Remove-Tracked ($Target + '.css')
    Edit-Named ($Target + '.jsx') ('(?m)^import\s+[''"]\./' + [regex]::Escape($name) + '\.css[''"];?[ \t]*\r?\n') ''
  }

  'verify' {
    Write-Host '== @import (only index.css -> tailwindcss expected) =='
    Get-SrcFiles | Select-String -Pattern '@import' | ForEach-Object { '  ' + $_.Path.Replace($root, '') + ':' + $_.Line.Trim() }
    Write-Host '== Inline <style> =='
    Get-SrcFiles '*.jsx' | Select-String -Pattern '<style>' -List | ForEach-Object { '  ' + $_.Path.Replace($root, '') }
    Write-Host '== Remaining .css files =='
    Get-ChildItem src -Recurse -Filter *.css | ForEach-Object { '  ' + $_.FullName.Replace($root, '') }
    Write-Host '== /public references =='
    Get-SrcFiles '*.jsx','*.js' | Select-String -Pattern 'from "/|public/' | ForEach-Object { '  ' + $_.Path.Replace($root, '') + ':' + $_.LineNumber }
    Write-Host '== console.log =='
    Get-SrcFiles '*.jsx','*.js' | Select-String -Pattern 'console\.log' | ForEach-Object { '  ' + $_.Path.Replace($root, '') + ':' + $_.LineNumber }
    Write-Host '== lint / build / e2e =='
    npm.cmd run lint
    npm.cmd run build
    npx.cmd playwright test
  }
}