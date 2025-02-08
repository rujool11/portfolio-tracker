import { createContext, useState } from "react";

export const Context = createContext({
  isAuthorized: false,
  user: {},
  setIsAuthorized: () => {},
  setUser: () => {},
});

export const AppWrapper = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ isAuthorized, setIsAuthorized, user, setUser }}>
      {children}
    </Context.Provider>
  );
};
