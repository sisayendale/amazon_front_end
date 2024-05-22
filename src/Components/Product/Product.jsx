import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
//import Loader from "../Loader/Loader";
//import Rating from "@mui/material/Rating";

function Product() {
  const [products, setproducts] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
           console.log(res);
        setproducts(res.data);
        isLoading(false);
      })
      .catch((err) => {
        console.log(err)
         isLoading(false)
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products.map((singleProduct) => {
            return (
              <ProductCard
                renderAdd={true}
                product={singleProduct}
                key={singleProduct.id}
              />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product;

