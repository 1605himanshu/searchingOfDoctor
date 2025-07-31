export default function PopularTags() {
  const tags = [
    'Dermatologist',
    'Pediatrician',
    'Gynecologist/Obstetrician',
    'Others',
  ];

  return (
    <div className="mt-7">
      <p className="text-sm text-gray-500 mb-2 font-medium">Popular searches:</p>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, i) => (
          <button
            key={i}
            className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 shadow-sm"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
