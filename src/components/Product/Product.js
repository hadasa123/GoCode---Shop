import "./Product.css";

function Product({image, id,title, price, description, category}) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src= {image} /> 
      </div>
      <div className="product-info">
        {id}<br/>
        {title}<br/>
        {price}<br/>

        {description}<br/>
        {category}<br/>
      </div>
    </div>

  );
  }
  export default Product;