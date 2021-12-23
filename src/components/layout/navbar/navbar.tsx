import React from "react";
import "./navbar.scss";
import { ROUTES } from "../../../constants";
import { NavBarItem } from "./navBarItem/navBarItem";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/thunks";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import { ReactComponent as UsersIcon } from "../../../assets/icons/users.svg";
import { ReactComponent as VotesIcon } from "../../../assets/icons/votes.svg";
import { ReactComponent as VideoIcon } from "../../../assets/icons/video-monitoring.svg";
import { ReactComponent as ReportsIcon } from "../../../assets/icons/reports.svg";
import { ReactComponent as InformationIcon } from "../../../assets/icons/information.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/icons/logout.svg";

const navBarLinks = [
  {
    path: ROUTES.USERS,
    title: "Пользователи",
    icon: <UsersIcon className={"navbar-icon"} />,
  },
  {
    path: ROUTES.VOTES,
    title: "Опросы",
    icon: <VotesIcon className={"navbar-icon"} />,
  },
  {
    path: ROUTES.NEWS,
    title: "Новости",
    icon: <UsersIcon className={"navbar-icon"} />,
  },
  {
    path: ROUTES.INFORMATION,
    title: "Информация",
    icon: <InformationIcon className={"navbar-icon"} />,
  },
  {
    path: ROUTES.MONITORING,
    title: "Видеонаблюдение",
    icon: <VideoIcon className={"navbar-icon-video"} />,
  },
  {
    path: ROUTES.REPORTS,
    title: "Отчеты прораба",
    icon: <ReportsIcon className={"navbar-icon"} />,
  },
];

export const Navbar = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logOut());
  };

  return (
    <div className={"navbar"}>
      <div className={"navbar-container"}>
        <div className={"navbar-content"}>
          <Logo className={"navbar-logo"} />
          {navBarLinks.map((i) => (
            <NavBarItem
              key={i.path}
              path={i.path}
              icon={i.icon}
              title={i.title}
            />
          ))}
        </div>
        <NavBarItem
          icon={<LogoutIcon className={"navbar-icon"} />}
          onClick={logoutHandler}
          path={ROUTES.SIGN_IN}
          title={"Выйти"}
        />
      </div>
    </div>
  );
};
