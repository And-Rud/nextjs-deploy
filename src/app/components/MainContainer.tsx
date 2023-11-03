import React from "react";
import A from "./A";

const MainContainer = ({ children }: { children: any }) => {
  return (
    <>
      <div className="navbar">
        <A href={`/`} text="Головна" />
        <A href={`/users`} text="Користувачі" />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
