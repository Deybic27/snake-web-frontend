function Login() {
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
            <button className="btnGreen formBtn formBtn1 btnActive">Login</button>
            <button className="btnYellow formBtn formBtn2">Registro</button>
          </div>
          <div className="formContainer">


            {/*FORMULARIO LOGIN*/}
            <form className="formContent hidden">
              <div className="formContentInfo">
                {/*LABEL - INPUT*/}
                <div className="formContentInputs">
                  <label className="formLabel" htmlFor="usuario">Usuario*</label>
                  <input className="formInput" id="usuario" type="text" placeholder="Digite su usuario"/>
                </div>
                {/*LABEL - INPUT*/}
                <div className="formContentInputs">
                  <label className="formLabel" htmlFor="contrasena">Contraseña*</label>
                  <input className="formInput" id="contrasena" type="text" placeholder="Digite su contraseña"/>
                </div>
              </div>
              {/*BOTON ENTRAR*/}
              <div className="formContentBtn">
                <button className="btn btnGreen">Entrar</button>
              </div>
            </form>


            {/*FORMULARIO REGISTRO*/}
            <form className="formContent formContentReg">
              <div className="formContentInfo">
                {/*LABEL - INPUT*/}
                <div className="formContentInputs">
                  <label className="formLabel" htmlFor="usuario">Usuario*</label>
                  <input className="formInput" id="usuario" type="text" placeholder="Digite su usuario"/>
                </div>
                {/*LABEL - INPUT*/}
                <div className="formContentInputs">
                  <label className="formLabel" htmlFor="email">Email*</label>
                  <input className="formInput" id="email" type="text" placeholder="Digite su email"/>
                </div>
                {/*LABEL - INPUT*/}
                <div className="formContentInputs">
                  <label className="formLabel" htmlFor="contrasena">Contraseña*</label>
                  <input className="formInput" id="contrasena" type="password" placeholder="Digite su contrasena"/>
                </div>
                {/*LABEL - INPUT*/}
                <div className="formContentInputs">
                  <label className="formLabel" htmlFor="confirmarContraseña">Confirmar Contraseña*</label>
                  <input className="formInput" id="confirmarContraseña" type="password" placeholder="Confirme su contrasena"/>
                </div>
              </div>
              {/*BOTON ENTRAR*/}
              <div className="formContentBtn">
                <button className="btn btnGreen">Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login