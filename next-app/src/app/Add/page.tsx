"use client";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";

const Add: FC = () => {
  interface Product {
    title: string;
    price: number;
    img: string;
    category: string;
  }

  const [Product, setProduct] = useState<Product>({
    title: "",
    price: 0,
    img: "",
    category: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    setProduct({ ...Product, [name]: value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(Product);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={Product.title}
          onChange={handleChange}
          className="bg-white color-black"
        />
        <input
          type="number"
          name="price"
          value={Product.price}
          onChange={handleChange}
        />
        <input
          type="url"
          name="img"
          value={Product.img}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={Product.category}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Add;
