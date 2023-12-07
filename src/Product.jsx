const Product = ({ title, price, img, desc }) => {
  return (
    <article className="product-comp">
      <img src={img} alt={title} />
      <div className="product-info">
        <div className="product-title">
          <h4>{title}</h4>
          <span>$ {price}</span>
        </div>
        <p>{desc}</p>
      </div>
    </article>
  );
};
export default Product;
