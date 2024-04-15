import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { productActions } from "../store/productReducer";

const ProductItem = (props) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { id, title, price, description, quantity, totalPrice } = props.product;

  const productHandler = (e) => {
    e.preventDefault();
    dispatch(productActions.addProducts({ id, title, price, description, quantity, totalPrice}));
    console.log(products);
  };
  console.log(products);
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <form onClick={productHandler}>
            <button type="submit">Add to Cart</button>
          </form>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
