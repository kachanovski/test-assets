import { instance } from "./instance";

export const usersAPI = {
  getUsers() {
    return instance.get("cms/users/");
  },
};
