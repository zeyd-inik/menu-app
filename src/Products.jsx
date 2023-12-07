import Product from './Product';

const Products = ({ menuItems }) => {
  return (
    <section className="products-comp">
      {menuItems.map((menuItem) => {
        return <Product key={menuItem.id} {...menuItem} />;
      })}
    </section>
  );
};
export default Products;
