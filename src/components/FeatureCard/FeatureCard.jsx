const FeatureCard = ({ Icon, title, description, bg, color }) => {
  return (
    <div className="rounded-[32px] bg-white p-10 shadow-md hover:shadow-xl transition duration-300">
      <div
        className={`h-16 w-16 rounded-2xl ${bg} flex items-center justify-center`}
      >
        <Icon className={`w-8 h-8 ${color}`} />
      </div>

      <h3 className="mt-8 text-3xl font-serif">{title}</h3>

      <p className="mt-5 text-gray-600 leading-7">{description}</p>
    </div>
  );
};

export default FeatureCard;
