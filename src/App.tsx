import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, Loader } from "./components";
import {
  LoginPage,
  MainPage,
  NotFoundPage,
  ResetPasswordPage,
  VideoMonitoringPage,
  VotesPage,
  ReportsPage,
  NewsPage,
  UsersPage,
  InformationPage,
  RecoveryPasswordPage,
} from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "./redux/store";
import { IAppReducer } from "./redux/reducers";
import { authMe } from "./redux/thunks";
import { getCookie } from "./utils";
import { ROUTES } from "./constants";

export const App = () => {
  const dispatch = useDispatch();
  const { isInitialized } = useSelector<RootStateType, IAppReducer>(
    (state) => state.app
  );
  const isAuth = useSelector<RootStateType, boolean>(
    (state) => state.auth.isAuth
  );

  useEffect(() => {
    if (!isAuth) {
      const cookie = getCookie("token");
      dispatch(authMe(cookie));
    }
  }, [isAuth]);

  if (!isInitialized) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path={ROUTES.SIGN_IN} element={<LoginPage />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route
        path={ROUTES.RECOVERY_PASSWORD}
        element={<RecoveryPasswordPage />}
      />
      <Route path={""} element={<Layout />}>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.USERS} element={<UsersPage />} />
        <Route path={ROUTES.NEWS} element={<NewsPage />} />
        <Route path={ROUTES.VOTES} element={<VotesPage />} />
        <Route path={ROUTES.MONITORING} element={<VideoMonitoringPage />} />
        <Route path={ROUTES.REPORTS} element={<ReportsPage />} />
        <Route path={ROUTES.INFORMATION} element={<InformationPage />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
