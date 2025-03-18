import React, { FC } from "react";
import { Products } from "../type/products";

const Card: FC<Products> = ({ title, price, category, id, image }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Card;
