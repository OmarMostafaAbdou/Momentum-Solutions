import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByCategory, sortBy } from "../../utils/slices/FilterSlice";

function Filter() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const sortOptions = ["Low to High", "High to Low"];
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );

      const data = await response.json();
      setCategories(data);
    };

    fetchCategory();
  }, []);

  const handleCategoryChange = (e) => {
    dispatch(filterByCategory(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(sortBy(e.target.value));
  };

  return (
    <div className="filter-container p-3">
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="categorySelect" className="form-label">
            Category
          </label>
          <select
            id="categorySelect"
            className="form-select"
            onChange={handleCategoryChange}
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="sortSelect" className="form-label">
            Sort By
          </label>
          <select
            id="sortSelect"
            className="form-select"
            onChange={handleSortChange}
          >
            {sortOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
