import { useState, useRef } from "react";

function ImageDrag({ images, setImages }){
  const[isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null);

  function selectFiles(){
    fileInputRef.current.click();
  }

  function onFileSelect(e){
    const files = e.target.files;
    if(files.length === 0 )return;
    for( let i=0; i < files.length; i++){
      if(files[i].type.split('/')[0] !== 'image') continue;//es una imagen?
      if(!images.some((e)=> e.name === files[i].name)){ //ya esta en la lista?
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function onDragOver(e){
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  };
  
  function onDragLeave(e){
    e.preventDefault();
    setIsDragging(false);
  };

  function onDrop(e){
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!images.some((image) => image.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  return (
    <div className="h-20 border-dashed border-4 border-teal-500 rounded-xl  text-cyan-600  md:text-lg flex justify-center items-center select-none"
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}>
      {isDragging ? (
        <span className="transition text-violet-700- ml-1.5 cursor-pointer hover:text-indigo-700/75 duration-300">Suelta imagenes aquí</span>         
      ):(
        <>
          Arrástra y suelta imágenes o {"  "}
          <span className="transition text-indigo-700 ml-1.5 cursor-pointer hover:text-indigo-700/75 duration-300" role="button" onClick={selectFiles}> Importar </span>
        </>
      )}
      <input
        name="file"
        className="hidden"
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        onChange={onFileSelect}
      />
    </div>
  );
};


export default ImageDrag;
