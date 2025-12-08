import Profile from "./screens/Profile";
import "./App.css";
import LoginPage from "./screens/Login";
import { Navigate, Route, Routes } from "react-router";
import ListPost from "./components/Post";
import UserProfile from "./components/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="app min-h-screen bg-[#F0F4F5]">
      <Routes>
        <Route path="/" element={<Navigate to="/my-profile" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="my-profile" element={<ProtectedRoute />}>
          <Route path="" element={<Profile />}>
            <Route index element={<ListPost />} />
            <Route path="post" element={<ListPost />} />
            <Route path="information" element={<UserProfile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
