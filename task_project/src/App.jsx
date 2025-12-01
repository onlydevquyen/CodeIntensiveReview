import styled from "styled-components";
import "./App.css";
import TaskList from "./components/TaskList";
import SearchItem from "./components/SearchItem";
import Button from "./components/Button";
import { STATUS_LIST } from "./constants";
import { useState } from "react";
import CreateTaskModal from "./components/CreateTaskModal";
import { ProjectProvider } from "./context/ProjectContext";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <ProjectProvider>
      <Container>
        <Header>
          <SearchItem />
          <Button text="New Item" onClick={() => setOpen(!open)} />
        </Header>
        <ListBox>
          <TaskList status={STATUS_LIST.TO_DO} />
          <TaskList status={STATUS_LIST.IN_PROGRESS} />
          <TaskList status={STATUS_LIST.IN_REVIEW} />
          <TaskList status={STATUS_LIST.DONE} />
        </ListBox>
        <CreateTaskModal open={open} setOpen={setOpen} />
      </Container>
    </ProjectProvider>
  );
}

export default App;

const Container = styled.div`
`;
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
