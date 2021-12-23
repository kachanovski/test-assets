import React from "react";
import "./layout.scss";
import { Navbar } from "./navbar/navbar";
import { Loader } from "../loader/loader";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import { IAppReducer } from "../../redux/reducers";

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  const { isFetching } = useSelector<RootStateType, IAppReducer>(
    (state) => state.app
  );

  if (isFetching) {
    return <Loader />;
  }

  return (
    <div className={"layout"}>
      <div className={"layout-container"}>
        <Navbar />
        <div className={"layout-content"}>{children}</div>
      </div>
    </div>
  );
};
