// import React,{ useEffect, useState} from "react";
//import React, { useEffect, useState } from "react";
import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endpoints";
import ProductCard from "../../Components/Product/ProductCard";
import classes from "./Result.module.css";
import Product from "../../Components/Product/Product";
import Loader from "../../Components/Loader/Loader";
//import classes from './Result.module.css'
//import classes from '../../Components/Product/Product.module.css'

function Result() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { CatagoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${CatagoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
        //console.log(res.data)
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  // console.log(CatagoryName)
  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {CatagoryName}</p>
        <hr />
        {/* {isLoading ? (
          <Loader />
        ) : ( */}
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              renderDesc={false}
              renderAdd={true}
            />
          ))}
        </div>
        {/* )} */}
      </section>
    </Layout>
  );
}

export default Result;
