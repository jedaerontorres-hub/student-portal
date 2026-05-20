// components/SearchBar.jsx

export default function SearchBar({
  search,
  setSearch,
}) {

  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <button>
        Add Student
      </button>

    </div>
  );
}