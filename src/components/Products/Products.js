
import Product from "../Product/Product";
import "./Products.css";
function Products({ProductsView})
{
  
    return(
        <section className="products">
          { ProductsView.map((pro) =>(
          <Product 
          key={pro.id}
          image={pro.image} 
          id={pro.id} 
          title={pro.title} 
          price={pro.price} 
          description={pro.description}
         category={pro.category} 
         />
           )) }
    </section>
    );

}
export default Products;
