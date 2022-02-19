import React from 'react';

const Categories = (props) => {
  return <div className="btn-container">
    <button className="filter-btn"  onClick={() => props.onCategory(1)}>All</button>
    <button className="filter-btn" onClick={() => props.onCategory(2)}>Breakfast</button>
    <button className="filter-btn"  onClick={() => props.onCategory(3)}>Lunch</button>
    <button className="filter-btn"  onClick={() => props.onCategory(4)}>Shakes</button>
  </div>
};

export default Categories;
