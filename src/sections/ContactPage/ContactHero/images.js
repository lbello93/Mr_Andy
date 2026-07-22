// Step 1
import step1 from "/steps/Step1.png";

/* ---------- Step 2 ---------- */
import corporate2 from "/steps/corporate-step2.png";
import wedding2 from "/steps/wedding-step2.png";
import birthday2 from "/steps/birthday-step2.png";
import baby2 from "/steps/baby-step2.png";
import graduation2 from "/steps/graduation-step2.png";

/* ---------- Step 3 & Step 4 (Common Images) ---------- */
import corporate34 from "/steps/corporate-step34.png";
import wedding34 from "/steps/wedding-step34.png";
import birthday34 from "/steps/birthday-step34.png";
import baby34 from "/steps/baby-step34.png";
import graduation34 from "/steps/graduation-step34.png";

/* ---------- Step 5 ---------- */
import corporate5 from "/steps/corporate-step5.png";
import wedding5 from "/steps/wedding-step5.png";
import birthday5 from "/steps/birthday-step5.png";
import baby5 from "/steps/baby-step5.png";
import graduation5 from "/steps/graduation-step5.png";

const step2Images = {
  "Corporate Event": corporate2,
  Wedding: wedding2,
  Birthday: birthday2,
  "Baby Shower": baby2,
  Graduation: graduation2,
};

const step34Images = {
  "Corporate Event": corporate34,
  Wedding: wedding34,
  Birthday: birthday34,
  "Baby Shower": baby34,
  Graduation: graduation34,
};

const step5Images = {
  "Corporate Event": corporate5,
  Wedding: wedding5,
  Birthday: birthday5,
  "Baby Shower": baby5,
  Graduation: graduation5,
};

export const stepImages = {
  1: step1,
  2: step2Images,
  3: step34Images,
  4: step34Images, // Same object reused
  5: step5Images,
};
