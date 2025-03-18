"use client";
import React, { FC, useEffect, useState } from "react";
import { Products } from "../type/products";
import axios from "axios";
import Card from "../components/Card";

const page: FC = () => {
  const [data, setData] = useState<Products[]>([]);

  const getProducts = async (): Promise<void> => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <Card {...product} />
        </div>
      ))}
    </div>
  );
};

export default page;
