

import { Rating } from "@mui/material";
import React, { useContext } from "react";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import{Type} from '../../Utility/action.type'


const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  const { image, title, id, rating, price, description } = product;
  console.log(product)


 const [state, dispatch]=useContext(DataContext)
console.log(state);
 const addToCart=()=>{
  dispatch({
    type: Type.ADD_TO_BASKET,
    item: {
      image,
      title,
      id,
      rating,
      price,
      description
    },
  });
 }


  // Check if rating is defined before accessing its properties
  const ratingValue = rating ? rating.rate : 0;
  const ratingCount = rating ? rating.count : 0;

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product__flexed : ""
      }`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* Display rating only if it's defined */}
          {rating && (
            <>
              <Rating value={ratingValue} precision={0.1} />
              <small>{ratingCount}</small>
            </>
          )}
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

