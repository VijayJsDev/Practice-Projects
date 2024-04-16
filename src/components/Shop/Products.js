import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Product 1",
    price: 8,
    description: "Description about first product",
    quantity: 1,
    totalPrice: 8,
  },
  {
    id: "p2",
    title: "Product 2",
    price: 10,
    description: "Description about second product",
    quantity: 1,
    totalPrice: 10,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product, index) => {
          return (
            <ProductItem
              product={product}
              key={product.id}
              // id={product.id}
              // title={product.title}
              // price={product.price}
              // description={product.description}
            />
          );
        })}
        {/* <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        /> */}
      </ul>
    </section>
  );
};

export default Products;
