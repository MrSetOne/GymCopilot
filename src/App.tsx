import './App.scss'
import { AuthProvider } from './context/UserContext/AuthState'
import Router from './routes/Router'

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App
