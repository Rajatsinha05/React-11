import React from "react";

const Dummy: React.FC = () => {
  let [count, setCount] = React.useState<any>();
  const sum = (): any => {
    let result: number = 10 + 20;
    return result;
  };
  return <div>{count}</div>;
};

export default Dummy;
