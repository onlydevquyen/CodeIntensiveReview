import React, { useState } from "react";
import UserInfoForm from "./components/UserInfoForm";

function App() {
  const [userInfo, setUserInfo] = useState({ name: "", email: ""})
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <UserInfoForm setUserInfo={setUserInfo}/>
      <p>Name: {userInfo.name}</p>
      <p>Email: {userInfo.email}</p>
    </div>
  );
}

export default App;
