

export default function Finalizado(){
  return(
    <div className="container md:mt-10">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-green-100 rounded-full p-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="100" height="100" viewBox="0 0 24 24" stroke-width="3" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </div>
        <div className="mt-2 text-xl font-semibold text-green-500">
          ¡Gracias por tu pedido!
        </div>
        <div className="font-semibold text-gray-400">
          El pedido ha sido realizado y está siendo procesado. Recibirás tu álbum de fotos en la puerta de tu casa 
        </div>
      </div>
    </div>
  )
};