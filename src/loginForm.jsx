import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [
    apiError,
    setApiError
   ] = useState("");

  const validar = async (data) => {
    
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    var url = 'http://127.0.0.1:8000/api/login';

    const raw = JSON.stringify({
      "username": data.username,
      "password": data.password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      credentials: 'include'
    }

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {
      if(result.message == 'User not found.'){
        setApiError("Usuario no registrado");
        return;
      }
      if(result.message == 'Invalid credentials'){
        setApiError("Contraseña incorrecta");
        return;
      }
      if(result.message == 'User logged in successfully'){
        navigate("/welcome");
      }
    })
    .catch(error => {
      console.log('ERROR', error);
      setApiError("Error de conexión con el servidor");
    });


  }

  return (
    <form className="formContent"
      onSubmit={
        handleSubmit(validar)
      }
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }}
    >
      <div className="formContentInfo">
        {/*LABEL - INPUT*/}
        <div className="formContentInputs">
          <label className="formLabel" htmlFor="username">Usuario*</label>
          <input type="text" className="formInput" id="username" placeholder="Digite su usuario"
            {...register("username", {
              required: {
                value: true,
                message: "Campo requerido"
              },
              pattern: {
                value: /^[A-Za-z0-9._]+$/,
                message: "El formato no es correcto"
              }
            })}
            onChange={() => {
              setApiError("");
            }}
          />
          {errors.username && <span className="mgError">{errors.username.message}</span>}
        </div>
        {/*LABEL - INPUT*/}
        <div className="formContentInputs">
          <label className="formLabel" htmlFor="password">Contraseña*</label>
          <input type="password" className="formInput" id="password" placeholder="Digite su contraseña"
            {...register("password", {
              required: {
                value: true,
                message: "Campo requerido"
              } ,
              minLength: {
                value: 8,
                message: "Mínimo 8 caracteres"
              } ,
              maxLength: {
                value: 100,
                message: "Máximo 100 caracteres" 
              }
            })}
            onChange={() => {
              setApiError("");
            }}
          />
          {errors.password && <span className="mgError">{errors.password.message}</span>}
        </div>
        {apiError && <span className="mgError">{apiError}</span>}   
      </div>
      {/*BOTON ENTRAR*/}
      <div className="formContentBtn">
        <button type="submit" className="btn btnGreen">Entrar</button>
      </div>
    </form>
  )
}

export default Login