import React, { createContext, useState } from "react";
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [activeUser, setActiveUser] = useState({});

  const updateActiveUser = (update) => {
    setActiveUser({ ...activeUser, ...update });
  };

  const fetchCurrentUser = async () => {
    let currentUser = await fetch("/auth/whoami");
    currentUser = await currentUser.json();

    updateActiveUser(currentUser);
    console.log(activeUser);
    return currentUser;
  };

  const values = {
    fetchCurrentUser,
    activeUser,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
