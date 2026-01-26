import { useForm } from "react-hook-form"

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const entrar = (data) => {
    console.log('entrar', data);
  }

  return (
    <form className="formContent" onSubmit={handleSubmit(entrar)}>
      <div className="formContentInfo">
        {/*LABEL - INPUT*/}
        <div className="formContentInputs">
          <label className="formLabel" htmlFor="usuario">Usuario*</label>
          <input type="text" className="formInput" placeholder="Digite su usuario" {...register("usuario", { required: true })}/>
          {errors.usuario && <p className="mgError">Campo requerido</p>}
        </div>
        {/*LABEL - INPUT*/}
        <div className="formContentInputs">
          <label className="formLabel" htmlFor="contrasena">Contraseña*</label>
          <input type="text" className="formInput" placeholder="Digite su contraseña" {...register("contrasena", { required: true })}/>
          {errors.contrasena && <p className="mgError">Campo requerido</p>}
        </div>
      </div>
      {/*BOTON ENTRAR*/}
      <div className="formContentBtn">
        <button type="submit" className="btn btnGreen">Entrar</button>
      </div>
    </form>
  )
}

export default Login