const Filters = ({ categories, filterMenu }) => {
  return (
    <div className="categories-comp">
      {categories.map((category) => {
        return (
          <button
            onClick={() => filterMenu(category)}
            type="button"
            key={category}
            className="category-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Filters;
