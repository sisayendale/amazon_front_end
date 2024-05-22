import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endpoints";

import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";


function ProductDetail() {
   const [product, setProduct] = useState({});
   const[isLoading,setIsLoading]=useState(false)
  const { productId } = useParams()
 

  console.log(productId);
  useEffect(() => {
     setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res.data)
        setProduct(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, []);
console.log(product)
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}

      <div></div>
    </Layout>
  );
}

export default ProductDetail

