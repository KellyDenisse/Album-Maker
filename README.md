# Album-Maker
Aplicación de React que permite cargar fotos y hacer el pedido de un álbum en línea. Contiene un formulario multipasos donde el cliente podrá arrastrar imágenes al punto de carga, organizar su orden y completar infomación sobre facturación y entrega.

## Descripción del Solución
La aplicación permite subir fotos, cantidad a tu elección, y ordenarlas arrastrando y soltando las imágenes. El proceso de compra comprende los siguientes pasos:

    1. Organización de imágenes:
![Alt Text](./src/imagenes/Screenshot%20from%202023-06-18%2019-10-59.png)

        En la interfaz principal de la aplicación, se encontrará dos secciones o áreas vacías, la primera es un punto de carga y en la segunda se podrá organizar o  eliminar las imágenes subidas.
        Para comenzar, se debe seleccionar las fotos que se desea cargar en el álbum arrastrándolas desde tu ordenador y soltándolas en la matriz.
        Luego, se pude arrastrar y soltar las imágenes en la posición deseada dentro de la matriz. Este será el orden en el que aparecerán en el álbum.
        En alguna sección de la interfaz se mostrará el botón “Continuar” que permitirá avanzar al siguiente paso del proceso de compra, al menos debes subir una imagen para avanzar.
        
    2. Datos de facturación y dirección de entrega:
![Alt Text](./src/imagenes/Screenshot%20from%202023-06-18%2019-11-50.png)

        Una vez organizadas las imágenes, se continuará con este formulario que tiene datos de facturación y envío en dos secciones. Se tiene una opción (checkbox) para utilizar los mismos datos para dirección entrega y datos de facturación.
        Al final del formulario estará el botón “Continuar” que me llevará al último paso, debes llenar todos los campos para avanzar.

    3. Resumen del pedido:
![Alt Text](./src/imagenes/Screenshot%20from%202023-06-18%2019-12-03.png)
        Esta pantalla muestra una vista previa del álbum y la información de facturación y envío ingresada.
        Al presionar en el botón “Finalizar” se muestra el mensaje “Gracias por tu pedido”.

Siempre será posible regresar al paso anterior para editar el pedido antes de finalizar.

![Alt Text](./src/imagenes/Screenshot%20from%202023-06-18%2019-12-11.png)

