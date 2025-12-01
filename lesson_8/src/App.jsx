import './App.css'
import Bio from './components/Bio.jsx'
import UserProfile from './components/UserProfile'
import { UserProvider } from './context/UserContext.jsx'

function App() {

  return (
    <UserProvider>
        <UserProfile/>
        <Bio/>
    </UserProvider>
  )
}

export default App
