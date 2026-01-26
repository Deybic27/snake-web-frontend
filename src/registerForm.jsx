import { useForm } from "react-hook-form"

function Register() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const registrar = (data) => {
    console.log('registrar', data);
  }

  return (
    <form className="formContent formContentReg" onSubmit={handleSubmit(registrar)}>
        <div className="formContentInfo">
        {/*LABEL - INPUT*/}
        <div className="formContentInputs">
            <label className="formLabel" htmlFor="usuario">Usuario*</label>
            <input type="text" className="formInput" placeholder="Digite su usuario" {...register("usuario", { required: true })}/>
            {errors.usuario && <p className="mgError">Campo requerido</p>}
        </div>
        {/*LABEL - INPUT*/}
        <div className="formContentInputs">
            <label className="formLabel" htmlFor="email">Email*</label>
            <input type="email" className="formInput" placeholder="Digite su email" {...register("email", { required: true })}/>
            {errors.email && <p className="mgError">Campo requerido</p>}
        </div>
        {/*LABEL - INPUT*/}
        <div className="formContentInputs">
            <label className="formLabel" htmlFor="contrasena">Contraseña*</label>
            <input type="password" className="formInput" placeholder="Digite su contrasena" {...register("contrasena", { required: true })}/>
            {errors.contrasena && <p className="mgError">Campo requerido</p>}
        </div>
        {/*LABEL - INPUT*/}
        <div className="formContentInputs">
            <label className="formLabel" htmlFor="confirmarContraseña">Confirmar Contraseña*</label>
            <input type="password" className="formInput" placeholder="Confirme su contrasena" {...register("confirmarContraseña", { required: true })}/>
            {errors.confirmarContraseña && <p className="mgError">Campo requerido</p>}
        </div>
        </div>
        {/*BOTON ENTRAR*/}
        <div className="formContentBtn">
        <button className="btn btnGreen">Registrar</button>
        </div>
    </form>
  )
}

export default Register