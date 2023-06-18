import { useContext, useState } from "react";
import { StepperContext } from "../contexts/StepperContext";

export default function FacturacionEntrega(){
  const { userData, setUserData} = useContext(StepperContext)
  const [ sameData, setSameData] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData( { ...userData, [name]: value });
  };
  const handleUseData = (e) => {
    setSameData(e.target.checked);
    if (e.target.checked) {
      setUserData((prevData) => ({
        ...prevData,
        direccionEntrega: prevData.direccion,
        nombreContacto: prevData.nombre,
        telefonoContacto: prevData.telefono,
      }));
    }
  };
  
  return(
    <div className="flex flex-row gap-6">
      <div className="basis-1/2 flex flex-col">
        <legend className="text-lg font-bold text-indigo-500 mb-4 p-2 text-left">
          Datos de Facturación
        </legend> 
        <div className="w-full m-2 flex-1 text-left">
          <label htmlFor="cedula" className="font-bold text-gray-500 text-xs leading-6 uppercase">
            Cédula/RUC :
          </label>
          <div>
            <input
              onChange={handleChange} 
              type="text"
              //value={userData["cedula"] || ""} 
              id="cedula"
              name="cedula" 
              pattern="[0-9]{10}"
              placeholder="Cédula o RUC"
              className="p-1 px-2 appearance-none outline-none border-b-2 w-full text-gray-800 focus:border-green-600 "
              required/>
          </div>
        </div>
        <div className="w-full m-2 flex-1 text-left">
          <label htmlFor="cedula" className="font-bold text-gray-500 text-xs leading-6 uppercase">
            Nombre Completos :
          </label>
          <div>
            <input
              onChange={handleChange} 
              type="text"
              value={userData["nombre"] || ""} 
              id="nombre"
              name="nombre" 
              placeholder="Nombres"
              className="p-1 px-2 appearance-none outline-none border-b-2 w-full text-gray-800 focus:border-green-600"
              required/>
          </div>
        </div>
        <div className="w-full m-2 flex-1 text-left">
          <label htmlFor="cedula" className="font-bold text-gray-500 text-xs leading-6 uppercase">
            Correo electrónico :
          </label>
          <div>
            <input
              onChange={handleChange} 
              type="email"
              value={userData["email"] || ""} 
              id="email"
              name="email" 
              placeholder="Corre electrónico"
              className="p-1 px-2 appearance-none outline-none border-b-2 w-full text-gray-800 focus:border-green-600"
              required/>
          </div>
        </div>
        <div className="w-full m-2 flex-1 text-left">
          <label htmlFor="cedula" className="font-bold text-gray-500 text-xs leading-6 uppercase">
            Dirección :
          </label>
          <div>
            <input
              onChange={handleChange} 
              type="text"
              value={userData["direccion"] || ""} 
              id="direccion"
              name="direccion" 
              placeholder="Direccion de domicilio"
              className="p-1 px-2 appearance-none outline-none border-b-2 w-full text-gray-800 focus:border-green-600"
              required/>
          </div>
        </div>
        <div className="w-full m-2 flex-1 text-left">
          <label htmlFor="cedula" className="font-bold text-gray-500 text-xs leading-6 uppercase">
            Teléfono :
          </label>
          <div>
            <input
              onChange={handleChange} 
              type="tel"
              value={userData["telefono"] || ""} 
              id="telefono"
              name="telefono" 
              placeholder="Número de teléfono"
              className="p-1 px-2 appearance-none outline-none border-b-2 w-full text-gray-800 focus:border-green-600"
              required/>
          </div>
        </div>
      </div>

      <div className="basis-1/2 flex flex-col">
        <legend className="text-lg font-bold text-indigo-500 mb-4 p-2 text-left">
          Datos de Entrega
        </legend> 
        <div className="my-5 text-left">
          <input
            type="checkbox"
            checked={sameData}
            onChange={handleUseData}
          />
          <label className="font-bold text-gray-500 text-sm leading-6 ">Utilizar datos de facturación</label>
        </div>
        <div className="w-full m-2 flex-1 text-left">
          <label htmlFor="cedula" className="font-bold text-gray-500 text-xs leading-6 uppercase">
            Dirección de Entrega:
          </label>
          <div>
            <input
              onChange={handleChange} 
              type="text"
              value={sameData? userData.direccion : userData.direccionEntrega || ""} 
              id="direccionEntrega"
              name="direccionEntrega" 
              placeholder="Direccion de entrega"
              className="p-1 px-2 appearance-none outline-none border-b-2 w-full text-gray-800 focus:border-green-600"
              required/>
          </div>
        </div>
        <div className="w-full m-2 flex-1 text-left">
          <label htmlFor="cedula" className="font-bold text-gray-500 text-xs leading-6 uppercase">
            Nombre Contacto :
          </label>
          <div>
            <input
              onChange={handleChange} 
              type="text"
              value={userData["nombreContacto"] || ""} 
              id="nombreContacto"
              name="nombreContacto" 
              placeholder="Nombre de contacto"
              className="p-1 px-2 appearance-none outline-none border-b-2 w-full text-gray-800 focus:border-green-600"
              required/>
          </div>
        </div>
        <div className="w-full m-2 flex-1 text-left">
          <label htmlFor="cedula" className="font-bold text-gray-500 text-xs leading-6 uppercase">
            Teléfono de contacto:
          </label>
          <div>
            <input
              onChange={handleChange} 
              type="tel"
              value={userData["telefonoContacto"] || ""} 
              id="telefonoContacto"
              name="telefonoContacto" 
              placeholder="Número de teléfono"
              className="p-1 px-2 appearance-none outline-none border-b-2 w-full text-gray-800 focus:border-green-600"
              required/>
          </div>
        </div>
      </div>
    </div>
  )
}