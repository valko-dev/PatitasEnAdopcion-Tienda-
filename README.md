# PatitasEnAdopcion-Tienda-
Implementacion de tienda de productos en página para adopciones de mascotas.
# Desafío del Curso Intensivo de Frontend Developer en ALURA LATAM

Este proyecto es parte del **Curso Intensivo de Frontend Developer** de ALURA LATAM, en el cual se aplican conceptos fundamentales y avanzados de JavaScript, así como la manipulación del DOM y el consumo de APIs.

## Descripción

En este desafío, aprendimos a aplicar conceptos fundamentales como la manipulación del DOM, la comprensión de cómo funciona la web con el protocolo HTTP, y el uso de los métodos **GET**, **POST** y **DELETE**.

Durante el proyecto, abordamos los siguientes temas:
- **Manipulación del DOM**: Modificar elementos de la página web de manera dinámica.
- **Protocolo HTTP**: Entender cómo interactúa la web con el servidor utilizando métodos como GET, POST y DELETE.
- **Promesas y Programación Asíncrona**: Manejo de operaciones asíncronas, uso de promesas y callbacks para gestionar datos de manera eficiente.
- **Consumo de API's**: Realización de solicitudes a servidores (usando **json-server**) para obtener y enviar datos.

### Estructura del Proyecto

La estructura básica del proyecto es una **tienda de productos**, cuya funcionalidad principal es **agregar y eliminar productos** en la pagina web. Los productos se gestionan de manera dinámica mediante interacciones con el DOM y utilizando un servidor simulado con **json-server** para almacenar los datos de los productos.

- Los productos pueden ser **agregados** a la tienda a través de una interfaz simple.
- Los productos pueden ser **eliminados** de la tienda utilizando solicitudes **DELETE**.
- La aplicación consume datos de productos a través de solicitudes **GET** y permite modificar la información a través de **POST** y **DELETE**.

## Tecnologías usadas

- **HTML**: Estructura básica del proyecto.
- **CSS**: Estilización del proyecto, con enfoque en diseño responsivo.
- **JavaScript**: Programación para la manipulación del DOM, manejo de eventos, consumo de APIs y lógica del proyecto.
- **json-server**: Simulación de un servidor para realizar solicitudes **GET**, **POST** y **DELETE**.

## Requisitos

1. Tener instalado [Node.js](https://nodejs.org/) y [json-server](https://github.com/typicode/json-server).
2. Clonar este repositorio en tu máquina local.
3. Ejecutar el servidor con los siguientes comandos:
   ```bash
   npm install
   npx json-server --watch db.json --port 3000




