import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../store/cartReducer";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.isToggle);
  const quantity = useSelector((state) => state.cart.length)
  console.log(showCart);

  const toggleCart = (e) => {
    dispatch(cartActions.showToggle())
  };
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
      {/* <span className={classes.badge}>1</span> */}
    </button>
  );
};

export default CartButton;
