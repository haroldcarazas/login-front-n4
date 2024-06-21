import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    const data = {
      nombres: e.target[0].value,
      apellidos: e.target[1].value,
      username: e.target[2].value,
      password: e.target[3].value,
    }

    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', data)
      alert(res.data.message)
      navigate('/')
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
    }
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <label>Nombres:</label>
        <input type="text" name="nombres" />
        <br />
        <label>Apellidos:</label>
        <input type="text" name="apellidos" />
        <br />
        <label>Nombre de usuario:</label>
        <input type="text" name="username" />
        <br />
        <label>Contraseña:</label>
        <input type="password" name="password" />
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </>
  )
}

export default Register