import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState([
    { flagId: 1, name: "Low", color: "#00FF00" },
    { flagId: 2, name: "Medium", color: "#FFA500" },
    { flagId: 3, name: "High", color: "#FF0000" },
  ]);
  const [taskStatus, setTaskStatus] = useState([
    { statusId: 1, name: "To Do" },
    { statusId: 2, name: "In Progress" },
    { statusId: 3, name: "In Review" },
    { statusId: 4, name: "Done" },
  ]);
  const [search, setSearch] = useState("");
  const getTasks = async () => {
    try {
      const res = await axios.get(
        "https://mindx-mockup-server.vercel.app/api/resources/tasks?apiKey=69206f04c549072033e5e004"
      );
      setTasks(res.data.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getUsers = async () => {
    try {
      const res = await axios.get(
        "https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=69206f04c549072033e5e004"
      );
      setUsers(res.data.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTasks();
    getUsers();
  }, []);
  return (
    <ProjectContext.Provider
      value={{
        tasks,
        setTasks,
        users,
        setUsers,
        flag,
        taskStatus,
        search,
        setSearch,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
