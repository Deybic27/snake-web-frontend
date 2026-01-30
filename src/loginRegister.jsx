import { useState } from 'react'
import Login from './loginForm'
import Register from './registerForm'

function LoginRegister() {

  const [activeForm, setActiveForm] = useState('login');

  return (
    <div className="container containerLogin">
      
      {/*NOMBRE PAGINA*/}
      <h1 className="containerLoginTitle containerLoginTitle1">SNAKE</h1>
      <h1 className="containerLoginTitle containerLoginTitle2">WEB</h1>

      {/*VENTANA*/}
      <div className="bgOrange contentLogin">
        <h2>Entrando al mundo</h2>
        <div className="form">

          {/*BOTONES LOGIN Y REGISTRO*/}
          <div className="formButtons">
            <button className={`btnGreen formBtn formBtn1 ${activeForm === "login" ? "btnActive" : ""}`} onClick={() => setActiveForm("login")}>Login</button>
            <button className={`btnYellow formBtn formBtn2 ${activeForm === "register" ? "btnActive" : ""}`} onClick={() => setActiveForm("register")}>Registro</button>
          </div>
          <div className="formContainer">

            {/*FORMULARIOS LOGIN Y REGISTRO*/}
            {activeForm === "login" && <Login />}
            {activeForm === "register" && <Register />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginRegister