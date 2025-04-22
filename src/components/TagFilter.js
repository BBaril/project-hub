// Bethany Baril  04/12/25


export default function TagFilter({ tags, selectedTag, onTagSelect }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-4 mt-1">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={`px-3 py-1 text-sm rounded-full transition-all duration-200
            ${
              selectedTag === tag
                ? 'bg-bbCyan text-black font-semibold shadow'
                : 'bg-gray-200 dark:bg-gray-800 text-bbMidnightIndigo dark:text-bbOffWhite hover:bg-bbCyan hover:text-bbCharcoal dark:hover:bg-bbCyanDarker dark:hover:text-bbMidnightIndigo'
            }`}
        >
          {tag}
        </button>
      ))}

      {selectedTag && (
        <button
          onClick={() => onTagSelect(null)}
          className="px-3 py-1 text-sm rounded-full bg-bbPurple text-bbMidnightIndigo hover:bg-bbCitrine dark:bg-bbPurple dark:text-bbMidnightIndigo dark:hover:bg-bbCitrine"
        >
          Clear Tag
        </button>
      )}
    </div>
  );
}
