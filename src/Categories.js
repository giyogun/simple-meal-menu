import React from "react";
import data from "./data";

const Categories = (props) => {
  const categories = ["all"];
  data.forEach((item) => {
    categories.push(item.category);
  });
  const newCategories = [...new Set(categories)];
  for (let index = 0; index < newCategories.length; index++) {
    const a = newCategories[index];
    newCategories[index] = { id: index + 1, category: a };
  }

  return (
    <ul className="btn-container">
      {newCategories.map((item) => (
        <button
          key={item.id}
          className="filter-btn"
          onClick={() => props.onCategory(item.category)}
        >
          {item.category}
        </button>
      ))}
    </ul>
  );
};

export default Categories;
