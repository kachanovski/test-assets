import React from "react";
import "./hTitle.scss";

interface IProps {
  variant: "h1" | "h2" | "h3";
  title: string;
}

export const Htitle = ({ variant, title }: IProps) => {
  switch (variant) {
    case "h1":
      return <h1>{title}</h1>;
    case "h2":
      return <h2>{title}</h2>;
    case "h3":
      return <h3>{title}</h3>;
  }
};
