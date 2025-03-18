import React, { FC } from "react";
import Button from "../components/Button";

const page: FC = () => {
  const showAlert = (): void => {
    alert("click");
  };
  return (
    <div>
      <h1>HOME </h1>
      <Button title="click" content="testing tsx" onClick={showAlert} />
      <Button title="testing" onClick={showAlert} />
    </div>
  );
};

export default page;
