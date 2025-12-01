import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    bio: 'A software developer with a passion for React.',
  });

  // Hàm cập nhật bio
  const updateBio = (newBio) => {
    setUser(prevUser => ({
      ...prevUser,
      bio: newBio
    }));
  };
  
  return (
    <UserContext.Provider value={{ user, updateBio }}>
      {children}
    </UserContext.Provider>
  )
}
