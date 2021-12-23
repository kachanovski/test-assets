import React from "react";
import "./navBarItem.scss";
import { NavLink } from "react-router-dom";

interface IProps {
  path: string;
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export const NavBarItem = ({ path, title, icon, onClick }: IProps) => {
  return (
    <NavLink
      onClick={onClick}
      className={(props) =>
        `navbar-link ${props.isActive ? "navbar-active" : ""}`
      }
      to={path}
    >
      <div className={"navbar-link-icon-container"}>{icon}</div>
      <div className={"navbar-link-title"}>{title}</div>
    </NavLink>
  );
};
