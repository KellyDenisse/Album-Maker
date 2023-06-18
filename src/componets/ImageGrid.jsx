import { useRef } from "react";

function ImageGrid({ images, setImages }){
  let dragItem = useRef();
  let dragOverItem = useRef();
  
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(dragItem.current)
    console.log(e)
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(dragOverItem.current)
    console.log(e)
  };

  const drop = (e) => {
    const newList = [...images];
    const imageMove = newList[dragItem.current];
    newList.splice(dragItem.current, 1);
    newList.splice(dragOverItem.current, 0, imageMove);
    setImages(newList);
    dragItem.current = null;
    dragOverItem.current = null;
  };
  function deleteImage(index){
    setImages((prevImages) => 
      prevImages.filter((_, i) => i !== index)
    );
  }
  
  return (
    <>
      {
        images.length > 0 ? 
        (
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 border-dashed border-4 border-teal-500 rounded-xl  p-2 mt-2">      
            {
              images.map((image, index) => (
                <div 
                  className="relative p-0 rounded cursor-move" 
                  key={index}
                  onDragStart={(e) => dragStart(e, index)}
                  onDragEnter={(e) => dragEnter(e, index)}
                  onDragEnd={drop}
                  draggable>
                    <span 
                      className="absolute top-0 right-1 text-teal-500 rounded-xl cursor-pointer" 
                      onClick={() => deleteImage(index)}>
                        &times;
                    </span>
                    <img 
                      className="w-full h-auto rounded"
                      src={image.url} 
                      alt={image.name}/>
                </div>
              ))
            }
          </div>
        )
        :
        (
          <div className="h-32 flex justify-center items-center border-dashed border-4 border-teal-500 rounded-xl p-2 mt-4 text-cyan-600 md:text-lg ">
            <span className="transition text-violet-700- ml-1.5 cursor-pointer hover:text-indigo-700/75 duration-300">Organiza imagenes aquí</span> 
          </div>
        )
      }
    </>
  );
};

export default ImageGrid;
