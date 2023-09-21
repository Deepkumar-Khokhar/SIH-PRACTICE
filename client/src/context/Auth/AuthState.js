import AuthContext from "./AuthContext";
import { useState } from "react";

const AuthState = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const getBuses = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/getBuses`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const contextData = {
    getBuses: getBuses,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthState;
