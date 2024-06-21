import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Navigate } from "react-router-dom"

function Dashboard() {
  const token = localStorage.getItem("token")
  const [user, setUser] = useState(null)
  const [tokenExiste, setTokenExiste] = useState(true)

  useEffect(() => {
    if (!token) {
      setTokenExiste(false)
      return
    }

    axios.get('http://localhost:3000/api/auth/me', { headers: { Authorization: token } })
      .then(res => setUser(res.data))
  }, [token])

  if (!tokenExiste) {
    return <Navigate to="/" />
  }

  return (
    <>
      <h1>Bievenido</h1>
      {!user ? <p>CARGANDO INFORMACIÓN...</p> : (<section>
        <p>Nombres: {user.nombres}</p>
        <p>Apellidos: {user.apellidos}</p>
        <p>Nombre de usuario: {user.username}</p>
      </section>)}
    </>
  )
}

export default Dashboard