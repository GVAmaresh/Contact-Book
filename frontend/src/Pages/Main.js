import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/apiCalling";
import NavBar from "./NavBar";
import SideNav from "./SideNav";
import Contact from "./Contact";
import Imf from "./Imf";
export const UserContext = createContext();

function Main() {
  const [imfId, setImfId] = useState("");
  const data = useSelector((state) => state.api.data);
  const status = useSelector((state) => state.api.status);
  const error = useSelector((state) => state.api.error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "loading") {
      return <div>Loading...</div>;
    }
    if (status === "succeeded") {
      console.log(data);
    }
    if (status === "failed") {
      return <div>Error: {error}</div>;
    }
  }, []);

  return (
    <div>
      <NavBar />
      <div className="main">
        <UserContext.Provider value={{ imfId, setImfId }}>
          <SideNav />
          <Contact />
          <Imf />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default Main;
