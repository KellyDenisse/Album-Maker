import { useContext } from "react"
import { StepperContext } from "../contexts/StepperContext"

export default function DetallePedido(){
  const { userData, images } = useContext(StepperContext)
  const displayImages = images.length > 0 ? 
  (
    <div className="w-auto h-auto inline-grid grid-cols-4 gap-1 border-2  bg-green-50 rounded-xl p-3 mb-4">      
      {
        images.map((image, index) => (
          <div 
            className="relative p-0 rounded cursor-move" 
            key={index}>
              <img 
                className="w-20 h-auto rounded"
                src={image.url} 
                alt={image.name}/>
          </div>
        ))
      }
    </div>
  ) : ""

  return(
    <>
      <div className="text-xl font-semibold text-indigo-500 mb-4">
        Resumen del Pedido
      </div>
      <div>
        {displayImages}
      </div>
      <div className="flex flex-row gap-2  mx -2 md: mx-4 lg:mx-8">

        <div className="basis-1/2 flex flex-col">
          <div className="font-semibold text-green-500">
            Datos de Facturación
          </div>
          <div className="text-left text-gray-600 my-2 text-sm">
            <span className="font-bold text-gray-400">Cédula: </span>{userData.cedula}
          </div>
          <div className="text-left text-gray-600 my-2 text-sm">
            <span className="font-bold text-gray-400">Nombres Completos: </span>{userData.nombre}
          </div>
          <div className="text-left text-gray-600 my-2 text-sm">
            <span className="font-bold text-gray-400">Dirección: </span>{userData.direccion}
          </div>
          <div className="text-left text-gray-600 my-2 text-sm">
            <span className="font-bold text-gray-400">Teléfono: </span>{userData.telefono}
          </div>
          { userData.email && 
            <div className="text-left text-gray-600 my-2 text-sm">
              <span className="font-bold text-gray-400">Correo electrónico: </span>{userData.email}
            </div>
          }
        </div>

        <div className="basis-1/2 flex flex-col">
          <div className="font-semibold text-green-500">
            Datos de Entrega
          </div>
          <div className="text-left text-gray-600 my-2 text-sm">
            <span className="font-bold text-gray-400">Nombre de Contacto: </span>{userData.nombreContacto}
          </div>
          <div className="text-left text-gray-600 my-2 text-sm">
            <span className="font-bold text-gray-400">Dirección de Entrega: </span>{userData.direccionEntrega}
          </div>
          <div className="text-left text-gray-600 my-2 text-sm">
            <span className="font-bold text-gray-400">Teléfono de Contacto: </span>{userData.telefonoContacto}
          </div>
        </div>
      </div>       
    </>
  )
}