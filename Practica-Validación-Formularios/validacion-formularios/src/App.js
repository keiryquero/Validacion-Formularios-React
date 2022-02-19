import react, {useState} from "react";
import {Formulario,
        Input,
        Label, 
        ContenedorTerminos,
        ContenedorBotonCentrado, 
        Boton,
        MensajeExito, 
        MensajeError,
        LeyendaError} from "./elementos/formularios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import ComponenteInput from "./../src/Componentes/input";



const App = () =>{

  const [usuario,cambiarUsuario] = useState({campo: '' , valido : null});
  const [nombre,cambiarNombre] = useState({campo:"", valido : null});
  const [password,cambiarPassword] = useState({campo:"", valido : null});
  const [password2,cambiarPassword2] = useState({campo:"", valido : null});
  const [correo,cambiarCorreo] = useState({campo:"", valido : null});
  const [telefono,cambiarTelefono] = useState({campo:"", valido : null});


  const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}


  const validarPassword2 = () => {
    if(password.campo.length > 0){
      if(password.campo !== password2.campo){
        console.log("las contraseñas no son iguales")
      }else{
        console.log("las contraseñas son iguales")
      }
    }
    
  }

  return (
    <main>
      <Formulario action = ""> 
      <ComponenteInput
        estado={usuario}
        cambiarEstado={cambiarUsuario}
        type="text"
        label="Usuario"
        placeholder="usuario"
        name="usuario"
        leyendaError="El usuario tiene que ser de 4 a 6 dígitos"
        expresionRegular={expresiones.usuario}  
      />

      <ComponenteInput
        estado={nombre}
        cambiarEstado={cambiarNombre}
        type="text"
        label="Nombre"
        placeholder="Juan123"
        name="nombre"
        leyendaError="El Nombre sólo puede contener letras y espacios"
        expresionRegular={expresiones.nombre}  
      />

      <ComponenteInput
        estado={password}
        cambiarEstado={cambiarPassword}
        type="password"
        label="Contraseña"
        name="password1"
        leyendaError="La contraseña tiene que ser de 4 a 12 dígitos"
        expresionRegular={expresiones.password}  
      />

        <ComponenteInput
        estado={password2}
        cambiarEstado={cambiarPassword2}
        type="password"
        label="Repetir Contraseña"        
        name="password2"
        leyendaError="La contraseña tiene que ser de 4 a 12 dígitos"
        expresionRegular={expresiones.password}
        funcion={validarPassword2}  
      />

        <ComponenteInput
        estado={correo}
        cambiarEstado={cambiarCorreo}
        type="email"
        label="Correo"
        placeholder="rosa@correo.com"
        name="correo"
        leyendaError="El correo sólo puede contener letras, numeros y puntos"
        expresionRegular={expresiones.correo}  
      />

        <ComponenteInput
        estado={telefono}
        cambiarEstado={cambiarTelefono}
        type="text"
        label="Teléfono"
        placeholder="31023487"
        name="telefono"
        leyendaError="El teléfono solo puede contener números"
        expresionRegular={expresiones.telefono}  
      />
        
          <ContenedorTerminos>
            <Label>
              <input type= "checkbox" name = "terminos" id= "terminos"/>
              <b>Acepto los términos y condiciones</b>
            </Label>        
          </ContenedorTerminos>
          {false && <MensajeError>
            <p>
              <FontAwesomeIcon icon= {faTriangleExclamation} />
              <b>Error:</b> Por Favor rellenar el formulario correctamente.
            </p>
          </MensajeError>}
            <ContenedorBotonCentrado>
               <Boton type= "submit"> Enviar</Boton>
                 <MensajeExito>Formulario enviado exitosamente!!</MensajeExito>
            </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );

}

export default App;
