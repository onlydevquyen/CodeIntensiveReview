import React, { useState } from "react";
import UserInfo from "./pages/UserInfo";
import TodoList from "./pages/TodoList";

// Mở terminal - cd vào thư mục ci_easy - Chạy: npm i styled-components
import styled from "styled-components";

function App() {
  const [switchLesson, setSwitchLesson] = useState("user_info");
  return (
    <Container>
      <ContentBox>
        <ControlHeader>
          <button onClick={() => setSwitchLesson("user_info")}>
            User Info
          </button>
          <button onClick={() => setSwitchLesson("todo")}>To Do List</button>
        </ControlHeader>

        {switchLesson === "user_info" ? (
          <UserInfo />
        ) : switchLesson === "todo" ? (
          <TodoList />
        ) : (
          <></>
        )}
      </ContentBox>
    </Container>
  );
}

export default App;

const ControlHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-bottom: 1px solid white;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentBox = styled.div`
  width: 50%;
  height: 80vh;
  display: flex;
  padding-top: 6rem;
  flex-direction: column;
  gap: 16px;
`;
