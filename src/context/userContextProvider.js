import React, { useEffect, useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  // Retrieve stored data from localStorage, or set initial value to an empty string
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("userData");
    return storedData ? JSON.parse(storedData) : "";
  });

  // Update localStorage whenever data changes
  useEffect(() => {
    if (data) {
      localStorage.setItem("userData", JSON.stringify(data));
    }
  }, [data]); // Only runs when `data` is updated

  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
