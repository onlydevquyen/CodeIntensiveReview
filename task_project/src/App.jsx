import styled from "styled-components";
import "./App.css";
import TaskList from "./components/TaskList";
import SearchItem from "./components/SearchItem";
import Button from "./components/Button";
import { STATUS_LIST } from "./constants";

function App() {
  return (
    <Container>
      <Header>
        <SearchItem/>
        <Button text="New Item"/>
      </Header>
      <ListBox>
        <TaskList status={STATUS_LIST.TO_DO}/>
        <TaskList status={STATUS_LIST.IN_PROGRESS}/>
        <TaskList status={STATUS_LIST.IN_REVIEW}/>
        <TaskList status={STATUS_LIST.DONE}/>
      </ListBox>
    </Container>
  );
}

export default App;

const Container = styled.div`
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
`

const ListBox = styled.div`
  display: flex;
  gap: 18px;
`;
