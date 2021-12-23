import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "./button.scss";
import cn from "classnames";
import { CircleLoading } from "../circleLoading/circleLoading";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  appearance?: "default" | "primary";
  type?: "submit" | "reset" | "button" | undefined;
  loading?: boolean;
}

export const Button = ({
  label,
  type = "submit",
  appearance = "default",
  loading = false,
  ...rest
}: IProps) => {
  return (
    <button
      className={cn("button", { ["primary"]: appearance === "primary" })}
      type={type}
      {...rest}
    >
      {loading ? <CircleLoading /> : label}
    </button>
  );
};
