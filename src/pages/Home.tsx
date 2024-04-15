import useAuth from '../hooks/useAuth'

const Home = () => {
  const { logOut } = useAuth()

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logOut}>Logout</button>
    </div>
  )
}

export default Home
