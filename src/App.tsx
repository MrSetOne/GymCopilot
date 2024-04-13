import './App.scss'
import { AuthProvider } from './context/UserContext/AuthState'
import Login from './pages/Login'

function App() {
  return (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </>
  )
}

export default App
