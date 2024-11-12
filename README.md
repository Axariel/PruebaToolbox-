# PruebaToolbox-

Cypress Project
Este proyecto utiliza Cypress para realizar pruebas automatizadas de una aplicación web. A continuación, se detallan los pasos necesarios para clonar y ejecutar el proyecto en tu máquina local.

Requisitos previos
Node.js (versión 12 o superior) debe estar instalado. Puedes verificar si tienes Node.js instalado ejecutando el siguiente comando en tu terminal:

bash
Copiar código
node -v
Si no está instalado, puedes descargarlo desde Node.js.

npm viene con Node.js, así que también debería estar disponible. Verifica con:

bash
Copiar código
npm -v
Pasos para configurar el proyecto
1. Clona el repositorio
Clona el repositorio en tu máquina local usando el siguiente comando:

bash
Copiar código
git clone <URL_DEL_REPOSITORIO>
Reemplaza <URL_DEL_REPOSITORIO> con la URL de tu repositorio.

2. Ingresa al directorio del proyecto
Navega a la carpeta del proyecto:

bash
Copiar código
cd nombre-del-proyecto
Asegúrate de reemplazar nombre-del-proyecto con el nombre real del directorio creado al clonar el repositorio.

3. Instala las dependencias
Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

bash
Copiar código
npm install
4. Ejecuta Cypress
Existen dos maneras de ejecutar las pruebas de Cypress:

Modo Interactivo (Cypress Test Runner)
Este modo abre una interfaz gráfica de usuario en la que puedes ver y seleccionar las pruebas que quieres ejecutar:

bash
Copiar código
npx cypress open
En la ventana que se abre, selecciona el navegador y la prueba que deseas ejecutar.

Modo Headless (Sin interfaz gráfica)
Este modo ejecuta las pruebas en modo headless, útil para integraciones en CI/CD:

bash
Copiar código
npx cypress run
Este comando ejecutará todas las pruebas de Cypress y mostrará los resultados en la terminal.

Estructura del proyecto
cypress/integration: Carpeta donde se almacenan los archivos de prueba.
cypress/fixtures: Carpeta para datos de prueba.
cypress/support: Carpeta para comandos personalizados y configuración adicional.
