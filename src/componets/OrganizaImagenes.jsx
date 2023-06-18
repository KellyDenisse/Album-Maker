import ImageDrag from "./ImageDrag"
import ImageGrid from "./ImageGrid"
import { useContext } from "react";
import { StepperContext } from "../contexts/StepperContext";

export default function OrganizaImagenes(){
  const {images, setImages} = useContext(StepperContext);
  return(
    <>
      <div className="text-center text-indigo-500 font-bold p-2 md:text-lg">
       Sube y Organiza tus imágenes
      </div>
      <div className="p-5 mt-2 bg-green-50 rounded-xl ">
        <ImageDrag
        images = {images}
        setImages = {setImages}/>
        <ImageGrid
        images = {images}
        setImages = {setImages}/> 
      </div>
    </>
  )
}
