import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
    const data = {
      username: e.target[0].value,
      password: e.target[1].value,
    }

    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', data)
      alert(res.data.message)
      localStorage.setItem("token", res.data.token)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Nombre de usuario:</label>
        <input type="text" name="username" />
        <br />
        <label>Password:</label>
        <input type="text" name="password" />
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </>
  )
}

export default Login