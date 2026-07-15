const GalleryImage = ({ image, height }) => {
  return (
    <div className={`relative group overflow-hidden rounded-3xl ${height}`}>
      <img
        src={image}
        className="h-full w-full object-cover duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />
    </div>
  );
};

export default GalleryImage;
