import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import "./input.scss";
import cn from "classnames";

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register?: any;
  name?: string;
  placeholder?: string;
  appearance?: "default" | "error";
  type?: string;
}

export const Input = ({
  register,
  name,
  placeholder,
  appearance = "default",
  type = "text",
  ...rest
}: IProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn("input", [{ ["error"]: appearance === "error" }])}
      {...register(name)}
      {...rest}
    />
  );
};
