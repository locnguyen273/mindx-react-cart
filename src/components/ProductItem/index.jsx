/* eslint-disable react/prop-types */
import "./style.css"
const ProductItem = (props) => {
  const { id, title, price, image } = props.product;

  const handleViewDetail = (productId) => {
    console.log(productId);
  }

  return <div className="product-item">
    <img src={image} alt="img" />
    <h2>{title}</h2>
    <p>{price}</p>
    <button onClick={handleViewDetail(id)}>Xem chi tiết</button>
  </div>;
};

export default ProductItem;
