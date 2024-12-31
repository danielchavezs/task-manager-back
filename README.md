# Task Manager - Backend

## Descripción
Este repositorio contiene el backend para la aplicación **Task Manager**, una herramienta para gestionar tareas que permite crear, leer, actualizar y eliminar tareas. El backend está desarrollado con **Node.js** y **Express.js** y utiliza **MongoDB** como base de datos.

## Requisitos

- Node.js (v16 o superior)
- MongoDB Atlas o una instancia local de MongoDB
- npm (v8 o superior)

## Configuración

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/danielchavezs/task-manager-back.git
    ```

2. Accede al directorio del proyecto:

    ```bash
    cd task-manager-back
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:

    ```env
    DB_URL=<TU_ENLACE_DE_MONGODB>
    ```

   Asegúrate de reemplazar el valor de la variable con tus credenciales de conexión de MongoDB.

5. Habilitar conexión de base de datos:

- Dirigirse al archivo `db.js`.
- Comentar la línea de código que define la variable **dbStringConn** y que usa las variables de entorno *DB_USER* y *DB_PASSWORD*.
- Remueve el comentario de la línea de código inferior que define la variable **dbStringConn** y que solamente usa la variable de entorno *DB_URL*.
- Guarda el archivo para actualizar los cambios.


6. Inicializa el servidor:

    ```bash
    npm run server
    ```

7. El servidor estará corriendo en `http://localhost:3001`.

## Endpoints principales

- **GET /api/tasks**: Obtiene todas las tareas. Acepta el query 'completed' con valores booleanos para devolver tareas filtradas por completadas o pendietes.
- **POST /api/tasks**: Crea una nueva tarea.
- **GET /api/tasks/:id**: Obtiene los datos de una sola tarea por ID.
- **PUT /api/tasks/:id**: Actualiza una tarea por ID.
- **DELETE /api/tasks/:id**: Elimina una tarea por ID.

Consulta la colección en [Postman](https://www.postman.com/) o tu herramienta favorita para probar los endpoints.



## Producción

El servidor ha sido desplegado en Render. Acá se puede acceder a la [API](https://task-manager-back-294x.onrender.com).
Es importante recordar que al estar desplegada con un recurso gratuito de Render, las primeras solicitudes a los Endpoints de la API pueden demorar hasta 50s en generar una respuesta por parte del servidor.


---
