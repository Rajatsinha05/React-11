import React, { FC } from "react";
import { Btnprops } from "../type/buttonProps";

const Button: FC<Btnprops> = (props) => {
  return (
    <div className="mt-10">
      <p>{props.content}</p>
      <button>{props.title}</button>
    </div>
  );
};

export default Button;
