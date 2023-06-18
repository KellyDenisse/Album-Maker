export default function StepperControl({ handleClick, steps, currentStep }){
    return(
      <div className=" flex justify-around m-6 py-2 ">
        <button 
          onClick={() => handleClick()}
          className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-full font-semibold border-2 border-slate-300 hover:bg-slate-700 hover:text-white trasition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer" }`}>
           Atrás
        </button>
        <button 
          onClick={() => handleClick("next")}
          className={`bg-green-600 text-white uppercase py-2 px-4 rounded-full font-semibold cursor-pointer border-2 border-slate-300 hover:bg-green-800 hover:text-white trasition duration-200 ease-in-out`}>
           {currentStep === steps.length - 1 ? "Finalizar" : "Continuar"}
        </button>
      </div>
    )
  };