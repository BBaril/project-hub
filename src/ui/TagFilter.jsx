// Bethany Baril  04/12/25


export default function TagFilter({ tags, selectedTag, onTagSelect }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-0.5 mt-1.5">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={`px-3 py-1 text-sm rounded-full  transition-all duration-200 shadow p-4 hover:shadow-xl
            ${
              selectedTag === tag
                ? 'bg-bbTeal text-bbOffBlack dark:text-black'
                : 'bg-bbOrange dark:bg-gray-800 text-bbOffBlack dark:text-bbOffWhite bg-opacity-10 hover:bg-bbTeal hover:text-bbOffBlack dark:hover:bg-bbTealDark dark:hover:text-bbOffBlack'
            }`}
        >
          {tag}
        </button>
      ))}

      {selectedTag && (
        <button
          onClick={() => onTagSelect(null)}
          className="px-3 py-1 text-sm rounded-full bg-bbPink text-bbOffBlack hover:bg-bbOrange dark:bg-bbPink dark:text-bbOffBlack dark:hover:bg-bbOrange hover:shadow-xl shadow-md"
        >
          Clear Tag
        </button>
      )}
    </div>
  );
}
