import React, { useEffect } from "react";
import { Users } from "./users";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/thunks";

export const UsersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return <Users />;
};
