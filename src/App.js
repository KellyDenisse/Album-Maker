import './App.css';
import { useState, useReducer } from 'react';
import stepReducer from './reducers/stepReducer';
import { StepperContext } from './contexts/StepperContext';
import AlbunMakerLogo from './imagenes/AlbumMaker4.png'
import Stepper from './componets/Stepper';
import StepperControl from './componets/StepperControl';
import OrganizaImagenes from './componets/OrganizaImagenes';
import FacturacionEntrega from './componets/FacturacionEntrega';
import DetallePedido from './componets/DetallePedido';
import Finalizado from './componets/Finalizado';

export default function App() {
  const [currentStep, dispatchCurrentStep] = useReducer(stepReducer, 1);
  const [images, setImages] = useState([])
  const [userData, setUserData] = useState({});
  const steps = [
    "Organiza imágenes",
    "Facturacion y entrega",
    "Resumen pedido",
    "Finalizado"
  ]
  const displayStep = (step) => {
    switch(step){
       case 1:
        return <OrganizaImagenes/>
      case 2:
        return <FacturacionEntrega/>
      case 3:
        return <DetallePedido/>
      case 4:
        return <Finalizado/>
      default:

    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;

    //Validacion de informacion completa
    if (direction === 'next' && images.length === 0 && newStep === 1) {
      alert('Por favor, sube al menos una imagen antes de continuar.');
      return;
    } else if (direction === 'next' && Object.keys(userData).length < 8 && newStep === 2) {
      alert('Por favor, llena todos los campos antes de continuar.');
      return;
    } 

    direction === 'next' ? newStep++ : newStep--;

    // Validación de steps estén dentro de los límites
    newStep > 0 && newStep <= steps.length && dispatchCurrentStep({ type: 'SET_CURRENT_STEP', payload: newStep });
  };  

  return (
    <div className='App'>
    {/* Logo */}
      <div className='w-full flex items-center justify-center'>
        <img
        className='h-20 mb-2'
        src={AlbunMakerLogo}
        alt='logo de Album Maker'/>
      </div>

    {/* Contenedor */}
      <div className='mt-2 p-0 bg-white md:h-full lg:h-4/5 md:w-full lg:w-2/3 rounded-lg shadow-sm shadow-slate-300 overflow-y-scroll overflow-x-hidden'>
        {/* Stepper */}
        <div className='sticky top-0 z-10 bg-white'>
          <Stepper
            steps = {steps}
            currentStep = {currentStep}/>
        </div>

        {/* Display formulario */}
        <div className='my-5 p-5 px-8 '>
          <StepperContext.Provider value={{
            userData,
            setUserData,
            images,
            setImages
          }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>

        {/* Stepper Control */}
        {currentStep !== steps.length &&
          <div className='sticky bottom-0 z-10 bg-white'> 
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}/>
          </div>
        }
      </div>
    </div>    
  )
}