const EventCard = ({ title, description, image }) => {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-[32px] shadow-lg">
        <img
          src={image}
          alt={title}
          className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <h3 className="mt-8 text-3xl font-serif">{title}</h3>

      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
};

export default EventCard;
