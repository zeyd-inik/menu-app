import Product from './Product';

const Products = ({ data }) => {
  return (
    <section className="products-comp">
      {data.map((menuItem) => {
        return <Product key={menuItem.id} {...menuItem} />;
      })}
    </section>
  );
};
export default Products;
