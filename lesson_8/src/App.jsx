import './App.css'
import UserProfile from './components/UserProfile'
import { UserProvider } from './context/UserContext.jsx'

function App() {

  return (
    <UserProvider>
        <UserProfile/>
    </UserProvider>
  )
}

export default App
