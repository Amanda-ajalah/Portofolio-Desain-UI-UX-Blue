const InformationSummary = ({ item }) => {
  return (
    <div className="p-4 text-center">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
        {item.description}
      </h3>
      <p className="text-xs sm:text-sm text-gray-700 mt-1">{item.title}</p>
    </div>
  );
};

export default InformationSummary;
