import "./Header.css";
import React from 'react';

function Header({ myCategories, filterProducts }) {
  return (
    <nav class="product-filter">
    <h1>Products</h1>

    <div class="sort">
      <div class="collection-sort">
        <label>Filter by:</label>

        <select onChange={(e) => {filterProducts(e.target.value);}}>
            
            {myCategories.map((category) => (
            <option value="/">{category}</option>
            ))}
          {/* <option value="/">men's clothing</option>
          <option value="/">jewelery</option>
          <option value="/">electronics</option>
          <option value="/">women's clothing</option> */}
        </select>
      </div>

      <div class="collection-sort">
        <label>Sort by:</label>
        <select>
          <option value="/">Featured</option>
          <option value="/">Best Selling</option>
          <option value="/">Alphabetically, A-Z</option>
          <option value="/">Alphabetically, Z-A</option>
          <option value="/">Price, low to high</option>
          <option value="/">Price, high to low</option>
          <option value="/">Date, new to old</option>
          <option value="/">Date, old to new</option>
        </select>
      </div>
    </div>
  </nav>
  );
}
export default Header;