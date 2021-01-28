import { createContext } from "react";

const UserContext = createContext({
  isLogged: false,
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export default UserContext;
