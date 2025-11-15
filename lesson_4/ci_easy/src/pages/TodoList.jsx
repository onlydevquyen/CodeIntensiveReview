import React, { useState } from "react";
import CreateTask from "../components/CreateTask";
import ListTask from "../components/ListTask";

const TodoList = () => {
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     name: "Task 1"
  //   },
  //   {
  //     id: 2,
  //     name: "Task 2"
  //   },
  //   {
  //     id: 3,
  //     name: "Task 3"
  //   }
  // ])

  // Đọc giá trị tasks được lưu trữ trong localstorage
  const dataFromLocalstorage = JSON.parse(localStorage.getItem("tasks"));
  // Khai báo giá trị mặc định của tasks từ localstorage nếu không có thì mặc định là mảng rỗng
  const [tasks, setTasks] = useState(dataFromLocalstorage || []);

  return (
    <div>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <ListTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TodoList;
