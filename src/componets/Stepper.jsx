import { useEffect, useState, useRef } from "react";


const Stepper = ({ steps, currentStep }) => {
  
  const [newStep, setnewStep] = useState([])
  
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length){
      //current step
      if (count === stepNumber){
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
        count++;
      }
      //step completed
      else if(count < stepNumber){
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  }

  useEffect(() => {
    const stepsState = steps.map((step, index) => 
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep -1, stepRef.current)
    setnewStep(current)
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return(
      <div key={index} className={index !== newStep.length -1 ? "w-full flex items-center" : "flex items-center"}>
        <div className="relative flex flex-col items-center text-green-600">
          <div 
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-8
           w-8 flex items-center justify-center py-3 font-semibold ${step.selected ? "bg-green-600 text-white  border border-green-600" : "" }`}>
            {
              step.completed ? (
                <span className="text-white font-bold text-xl">{String.fromCharCode(10003)}</span>
              ) : (
                index + 1
              )
            }
          </div>
          <div className={`absolute top-0 text-center mt-12 w-32 text-xs ${step.highlighted ? "text-gray-700" : "text-gray-400"}`}>
            {step.description}
          </div>
        </div>
        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-green-600" : "border-gray-300"}`}></div>
      </div>
    )
  });

  return(
    <div className="mx-6 px-8 py-2 flex justify-between items-center">
      {displaySteps}
    </div>
  )
};

export default Stepper