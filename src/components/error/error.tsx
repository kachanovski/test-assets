import React from "react";
import "./error.scss";
interface IProps {
  error: string | string[];
}

export const Error = ({ error }: IProps) => {
  return <div className={"errors"}>{error}</div>;
};
