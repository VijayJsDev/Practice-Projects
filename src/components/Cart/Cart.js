import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const showCart = useSelector((state) => state.cart.isToggle);
  const cartItems = useSelector((state) => state.products);
  return (
    <>
      {showCart && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cartItems.map((item, index) => (
              <CartItem item={item} />
            ))}
            {/* <CartItem
              item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
            /> */}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
