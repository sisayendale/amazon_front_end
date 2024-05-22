import React from "react";

import { catagoryInfos } from "./catagoriesFullInfo";
import CategoryCard from "./CategoryCard";
import classes from "./catagory.module.css";

function Category() {
  return (
    <section className={classes.catagory_container}>
      {
        // catagoryInfos.map((infos) => {
        //   <CategoryCard data={infos} />;
        catagoryInfos.map((infos) => (
          <CategoryCard key={infos.id} data={infos} />
        ))
      }
    </section>
  );
}

export default Category;
