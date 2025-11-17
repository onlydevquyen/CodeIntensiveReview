import styled from "styled-components";
import "./App.css";
import TaskList from "./components/TaskList";
import SearchItem from "./components/SearchItem";
import Button from "./components/Button";
import { STATUS_LIST } from "./constants";
import { useState } from "react";
import CreateTaskModal from "./components/CreateTaskModal";
import { tasks } from "./data/data";
function App() {
  const [tasksData, setTasksData] = useState(tasks);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <Container>
      <Header>
        <SearchItem setSearch={setSearch} />
        <Button text="New Item" onClick={() => setOpen(!open)} />
      </Header>
      <ListBox>
        <TaskList
          status={STATUS_LIST.TO_DO}
          search={search}
          tasks={tasksData}
        />
        <TaskList
          status={STATUS_LIST.IN_PROGRESS}
          search={search}
          tasks={tasksData}
        />
        <TaskList
          status={STATUS_LIST.IN_REVIEW}
          search={search}
          tasks={tasksData}
        />
        <TaskList status={STATUS_LIST.DONE} search={search} tasks={tasksData} />
      </ListBox>

      <CreateTaskModal open={open} setOpen={setOpen} setTasksData={setTasksData}/>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
`;

const ListBox = styled.div`
  display: flex;
  gap: 18px;
`;
