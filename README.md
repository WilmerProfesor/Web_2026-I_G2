# Web_2026-I_G2


INDSTALACIÓON DE BOOTSTRAP

 1. Ir al sitio oficial del framework. https://getbootstrap.com/

 2.  descargar el archivo del framework: https://getbootstrap.com/docs/5.3/getting-started/download

 3. descomprimir el zip descargado

 4. Crear las carpetas "css" y  "js" en el proyecto

 5. copiar los archivos bootstrap.css y bootstrap.bundle.js, del zip descomprimido, en las carpetas correspondientes del proyecto

 6. enlazar el css y el js al html

 7. en el sitio oficial ir la sección "docs" y copiar el código de los componentes que desea emplear (reutilización de código) 


# REACT

1. ingresar al sitio oficial de vite: https://vite.dev/
2. copiar el código para crear una app: npm create vite@latest
3. en VSC abrir un terminal Command prompt y pegar el código anterior
4. Indicar que si desea crear una aplicación (y)
5. coloque un nombre a su App (Primera letra en mayúscula)
6. Seleccione el mismo nombre de package
7. seleccione REACT como framework 
8. seleccion la variante "JavaScript"
9. seleccione yes y Una vez todo se instale, haga click en el link del sitio
    Si no selecciona yes, debe
    a. Ingfresar a la carpeta de su proyecto
    b. ingresar "npm install" o "npm i"
    c. ejecutar la App: "npm run dev"

## Personalización 

1. Ingresar al html y modificar el title y el lenguaje (es)
2. Ingresar a la carpeta src
3. en main.jsx eliminar la línea 3--> import './index.css'
4. eliminar el archivo index.css
5. ir a App.jsx y eliminar todo lo que hay en el return, dejando sólo <> </>
    dentro de estas etiquetas va su html

## Crear un componente
1. ingresar o crear dentor de src la carpeta "Components" (primera letra en mayúscula)
2. para cada componente crear una subcarpeta con su nombre (Primera en Mayúscula)
3. dentro de cada carpeta crear con el mismo nombre un archivo jsx y uno css si se requiere.
4. para crear el componente en el jsx usar el snippet "rafce"
    Nota: debe instalar en VSC previamente la extensión:
    "ES7+ React/Redux/React-Native snippets"
5. para usar el componente lo debo importar y luego invocarlo así: <NombreComponente >

## Instalar MUI

1. Ingrear al sitio oficial de material UI: https://mui.com/material-ui/
2. copiammos el código de instalación: 
    npm install @mui/material @emotion/react @emotion/styled
3. Lo ejecutamos en el terminal de VSC, el servidor debe estar abajo (Ctrl+C)
4. en la pag. de MUI ingresamos a la sección de componentes "Get Started"
5. selecciona el que desee y copia el código (Recuerde que se encuentr en fuentes JS)
6. Abra o cree la carpeta Components, y dentro una subcarpeta para el componente (Primer letra en matúscula)
7. pegar el código traído de MUI, (se sugiere convertir la función a una función flecha) y recuerde cambiar el nombre de la Función, el export default, coloquelo al final del código
8. para usar el componente lo debo importar y luego invocarlo así: <NombreComponente >

