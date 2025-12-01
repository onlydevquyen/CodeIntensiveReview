import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

const UserProfile = () => {
  const { user, updateBio } = useContext(UserContext);

  const handleUpdateBio = () => {
    let bioUpdated = prompt("Enter bio to update: ", user.bio)
    updateBio(bioUpdated)
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Thông tin người dùng</h2>
      <div style={{ textAlign: "left"}}>
        <p><strong>Họ tên:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Tuổi:</strong> {user.age}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>
        <button onClick={handleUpdateBio}>Update</button>
    </div>
  );
}

export default UserProfile