import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

function Register() {

  const navigate = useNavigate();

  const patterns = {
    username: /^[A-Za-z0-9._]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._#\-])[A-Za-z\d@$!%*?&._#\-]{8,100}$/,
    confirmpassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._#\-])[A-Za-z\d@$!%*?&._#\-]{8,100}$/
  }

  const messages = {
    username: {
      req: "Campo requerido",
      invalid: "Debe incluir mínimo una letra o número"
    },
    email: {
      req: "Campo requerido",
      invalid: "Datos inválidos"
    },
    password: {
      req: "Campo requerido",
      invalid: "Debe incluir mínimo 8 dígitos, una mayúscula, una minúscula, un número y un carácter especial"

    },
    confirmpassword: {
      req: "Campo requerido"
    }
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const [
    apiError,
    setApiError
  ] = useState("");

  const password = watch("password");

  const registrar = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    var url = 'http://127.0.0.1:8000/api/register';

    const raw = JSON.stringify({
      "username": data.username,
      "email": data.email,
      "password": data.password,
      "password_confirmation": data.confirmpassword,
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
      if(result.errors?.username == 'User already exist.'){
        setApiError("El usuario ya se encuentra registrado");
        return;
      }
      if(result.message == 'The password field confirmation does not match.'){
        setApiError("Las contraseñas no coinciden");
        return;
      }
      if(result.errors?.email == 'Email already exist.'){
        setApiError("El correo ya se encuentra registrado");
        return;
      }
      if(result.message == 'User registered successfully'){
        navigate("/welcome");
      }
    })
    .catch(error => {
      console.log('ERROR', error);
      setApiError("Error de conexión con el servidor");
    });
  }

  return (
    <form className="formContent formContentReg"
      onSubmit={
        handleSubmit(registrar)
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
                  message: messages.username.req
                },
                pattern: {
                  value: patterns.username,
                  message: messages.username.invalid
                }
              })}
            />
            {errors.username && <p className="mgError">{errors.username.message}</p>}
        </div>
        {/*LABEL - INPUT*/}
        <div className="formContentInputs">
          <label className="formLabel" htmlFor="email">Email*</label>
          <input type="email" className="formInput" id="email" placeholder="Digite su email"
            {...register("email", {
              required: {
                value: true,
                message: messages.email.req
              },
              pattern: {
                value: patterns.email,
                message: messages.email.invalid
              }
            })}
          />
          {errors.email && <p className="mgError">{errors.email.message}</p>}
        </div>
        {/*LABEL - INPUT*/}
        <div className="formContentInputs">
          <label className="formLabel" htmlFor="password">Contraseña*</label>
          <input type="password" className="formInput" id="password" placeholder="Digite su contrasena"
            {...register("password", {
              required: {
                value: true,
                message: messages.password.req
              },
              pattern: {
                value: patterns.password,
                message: messages.password.invalid
              }
            })}
          />
          {errors.password && <p className="mgError">{errors.password.message}</p>}
        </div>
        {/*LABEL - INPUT*/}
        <div className="formContentInputs">
          <label className="formLabel" htmlFor="confirmpassword">Confirmar Contraseña*</label>
          <input type="password" className="formInput" id="confirmpassword" placeholder="Confirme su contrasena"
            {...register("confirmpassword", {
              required: {
                value: true,
                message: messages.confirmpassword.req
              },
              validate: value =>
                value === password || "Las contraseñas no coinciden"
            })}
          />
          {errors.confirmpassword && <p className="mgError">{errors.confirmpassword.message}</p>}
        </div>
        {apiError && <span className="mgError">{apiError}</span>} 
      </div>
      {/*BOTON ENTRAR*/}
      <div className="formContentBtn">
        <button type="submit" className="btn btnGreen">Registrar</button>
      </div>
    </form>
  )
}

export default Register