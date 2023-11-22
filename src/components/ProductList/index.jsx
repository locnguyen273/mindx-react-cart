import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import "./style.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  },[]);

  return (
    <div className="product-list">
      {products.length > 0 && products.map((item) => {
        return <ProductItem key={item.id} product={item} />
      })}
    </div>
  )
}

export default ProductList