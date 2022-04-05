import React from "react";

type ButtonProps = {
  variant: "1" | "2" | "3";
};

const Button = ({ variant }: ButtonProps) => {
  const onclick = (event: any): void => {
    variant === "1"
      ? alert("This is Button1")
      : variant === "2"
      ? alert("This is Button2")
      : alert("This is Button3");
  };

  return (
    <>
      <button onClick={onclick}>Button1</button>
    </>
  );
};
export default Button;
