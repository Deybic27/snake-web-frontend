function Login() {
  return (
    <div className="container containerLogin">
      <h1 className="containerLoginTitle containerLoginTitle1">SNAKE</h1>
      <h1 className="containerLoginTitle containerLoginTitle2">WEB</h1>
      <div className="bgOrange contentLogin">
        <h2>Entrando al mundo</h2>
        <div className="form">
          <div className="formButtons">
            <button className="btnGreen formBtn formBtn1 btnActive">Login</button>
            <button className="btnYellow formBtn formBtn2">Registro</button>
          </div>
          <div className="formContainer">
            <form className="formContent">
              <div className="formContentInfo">
                <div className="formContentLabels">
                  <label className="formLabel" htmlFor="usuario">Usuario*</label>
                  <label className="formLabel" htmlFor="contrasena">Contraseña*</label>
                </div>
                <div className="formContentInputs">
                  <input className="formInput" id="usuario" type="text" placeholder="Digite su usuario"/>
                  <input className="formInput" id="contrasena" type="text" placeholder="Digite su contraseña"/>
                </div>
              </div>
              <div className="formContentBtn">
                <button className="btn btnGreen">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login