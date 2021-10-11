
import Product from "../Product/Product";
import "./Products.css";
function Products({myProducts})
{
  
    return(
        <section className="products">
          { myProducts.map((pro) =>
          <Product 
          key={pro.id} 
          id={pro.id} 
          title={pro.title} 
          price={pro.price} 
          description={pro.description}
         category={pro.category} 
         image={pro.image} 
         rating={pro.rating}/>
           ) }
      {/* <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product /> */}
    </section>
    );

}
export default Products;
