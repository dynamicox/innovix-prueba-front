# innovix-prueba-react

Este proyecto es una aplicación simple a modo de prueba de React construida con Next.js, utilizando Material UI para la interfaz de usuario y React Query para la obtención de datos.

## Descripción

Esta aplicación fue desarrollada como parte de la Prueba Técnica para Desarrollador Fullstack. El objetivo principal es consumir una API y mostrar imágenes en el frontend usando React JS.

## Requisitos Cumplidos

- **Carga de Imágenes Pagina por Pagina**: Cada 12 imágenes, se muestra un botón "More Images" o "Más Imágenes" para cargar 12 imágenes nuevas, gestionando eficientemente la gran cantidad de imágenes que retorna el API.
- **Eliminación de Imágenes**: Permite a los usuarios borrar imágenes individuales del listado.
- **Diseño Responsive**: La interfaz se adapta a diferentes tamaños de pantalla, asegurando una buena experiencia de usuario en dispositivos móviles y de escritorio.
- **Diseño Atómico**: El diseño fue realizado tratando de mostrar diseño atómico, algunas cosas pueden ser mejoradas como agregar un modal de confirmación para borrar la imagen, un sistema de notificaciones toast y un sistema de carga individual para cada imagen ya sea con un skeleton o un spinner, pero por el bien del tiempo y la simplicidad decidi dejarlo hasta el scope actual.
- **Uso de Material-UI**: Se ha utilizado Material-UI para la construcción de la interfaz, demostrando experiencia en su uso.

## Table of Contents

- [Instalación](#instalación)
- [Uso](#uso)
- [Scripts](#scripts)
- [Dependencias](#dependencias)
- [Contribución](#contribución)

## Instalación

1.  Clona el repositorio:

    ```bash
    git clone
    ```

2.  Navega al directorio del proyecto:

    ```bash
    cd innovix-prueba-react
    ```

3.  Instala las dependencias:

    ```bash
    npm install
    ```

## Uso

1.  Ejecuta el servidor de desarrollo:

    ```bash
    npm run dev
    ```

    Esto iniciará el servidor de desarrollo de Next.js, y podrás acceder a la aplicación en tu navegador en `http://localhost:3000`.

2.  Para construir la versión de producción de la aplicación:

    ```bash
    npm run build
    ```

3.  Para iniciar el servidor de producción:

    ```bash
    npm run start
    ```

4.  Para ejecutar el linting:

    ```bash
    npm run lint
    ```

## Scripts

- `dev`: Inicia el servidor de desarrollo de Next.js.
- `build`: Construye la versión de producción de la aplicación.
- `start`: Inicia el servidor de producción de Next.js.

## Dependencias

- `@emotion/cache`: Para gestionar la caché de Emotion CSS.
- `@emotion/react`: Para usar Emotion CSS en React.
- `@emotion/styled`: Para componentes estilizados con Emotion.
- `@mui/icons-material`: Iconos de Material UI.
- `@mui/material`: Componentes de Material UI.
- `@mui/material-nextjs`: Integración de Material UI con Next.js.
- `@tanstack/react-query`: Para la obtención y caché de datos.
- `next`: Framework Next.js.
- `react`: Librería React.
- `react-dom`: Librería React DOM.
- `typescript`: Soporte para Typescript.
- `@types/node`: Tipos de Typescript para Node.
- `@types/react`: Tipos de Typescript para React.
- `@types/react-dom`: Tipos de Typescript para React DOM.
