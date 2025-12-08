import { useEffect, useState } from "react";

export function useAuth() {
  const [users, setUsers] = useState({ email: "" });

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("user")))
    console.log(JSON.parse(localStorage.getItem("user"))); 
  }, [])

  const login = (email) => {
    localStorage.setItem("user", JSON.stringify({email: email}) );
  };

  const logout = () => {
    localStorage.removeItem("user")
  }

  return { users, login, logout};
}
