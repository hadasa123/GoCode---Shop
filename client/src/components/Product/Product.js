import { useContext } from "react";
import MyContext from "../../MyContext";
import Button from "@mui/material/Button";
import MyCard from "../MyCard/MyCard";

import "./Product.css";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
function Product({ id, title, price, description, category, image, amount }) {
  const [cart, setCart] = useContext(MyContext);

  const getAmount = () => {
    let pro = cart.find((product) => product.id === id);
    if (pro) return pro.amount;
    return 0;
  };

  const AddingProduct = () => {
    let newCart = [];
    const pIndex = cart.findIndex((pro) => pro.id === id);
    if (pIndex > -1) {
      newCart = cart.map((pro) => {
        if (pro.id === id) {
          pro.amount++;
        }
        return pro;
      });
    } else {
      newCart = [...cart, { id, title, price, image, amount: 1 }];
    }
    setCart(newCart);
  };
  const ProductRemoval = () => {
    let newProductsList = [];
    let findIndex = cart.findIndex((pro) => pro.id === id);
    let del = false;
    if (findIndex > -1) {
      newProductsList = cart.map((product) => {
        if (product.id === id) {
          if (product.amount > 1) {
            product.amount--;
          } else {
            del = true;
          }
        }
        return product;
      });
      if (del) {
        newProductsList = cart.filter((product) => product.id !== id);
      }
    } else {
      newProductsList = [...cart];
    }
    setCart(newProductsList);
  };
  return (
    <div className="product-card ">
      <Link to={`/product/${id}`}></Link>
      <MyCard
        key={id}
        image={image}
        id={id}
        amount={amount}
        title={title}
        price={price}
        description={description}
        category={category}
      />
      <div>
        <Button
          varient="contained"
          onClick={() => {
            ProductRemoval();
          }}
        >
          -
        </Button>
        <span>{amount > 0 ? amount : getAmount()}</span>
        <Button
          varient="contained"
          onClick={() => {
            AddingProduct();
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
}
export default Product;
