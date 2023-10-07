# PruebaTecnicaBrava
Descripción del Proyecto: 
Prueba tecnica empresa Brava en react native, express node.js
aplicacion de tienda que permite selecionar productos en un carrito de compra y ver el valor total de la compra

El backend esta hecho desde express.js y node.js
el archivo tienda.sql contiene la base de datos de la tienda con las tablas producto, usuario y cotizacion utilizadas en el proyecto para graficar 
el proyecto fue ejecutado con npm start en la carpeta principal y desde la carpeta del servidor se levanta este con node serve.js

en la carpeta src se encuentran los componentes y las rutas,
en las rutas estan las 3 pantallas de la aplicacion mientras que en componentes estan los archivos js utilizados como apoyo de las rutas y sus funcionalidades
en el archivo App.js se encuentra routeada la app con la libreria react-navigation/native, react-navigation/stack' y react-native-screens
es importante que si se usa un emulador de android este se ejecute desde las opciones del npm start brinda para android para evitar un error con la libreria existente al correr la app desde android studio
en la carpeta server se encuentra todo lo relacionado a node.js incluida la carpeta con los modelos, la configuracion y el servidor 



Preguntas Técnicas:

1. ¿Qué medidas tomaría para asegurar la seguridad y la validación de datos en su aplicación?

Validar y verificar los datos de entrada proporcionados para evitar ataques
Autentificacion solida para evitar que usuarios no deseados entren
usar seguridad en capaz para proteger la informacion
darle mantenimiento y actualizacion al software
usar siempre HTTPS para mantener conexiones seguras
almacenar las contraseñas de manera segura
crear roles para diferenciar usuarios

3. Explique la diferencia entre una base de datos relacional y una base de datos NoSQL. ¿Cuándo usaría uno u otro?

Base de datos relacional:se usa para apliaciones complejas y para almacenar datos estructurados y esquemas fijos, ideal para relaciones claras entre datos. 

Base de datos NoSQL: datos flexibles, semiestructurados, se usa en la amyoria de aplicaciones y sitios modernos

Las bases de datos relacionales se usan cuando se requiere una estructura de datos sólida y relaciones complejas,
las bases de datos NoSQL permiten escalabilidad y, velocidad 

3. ¿Qué patrones de diseño conoce, mencione y explique brevemente los que conoce?


Patrón Observador: Dependencia uno a muchos entre objetos si un objeto es cambiado se le notifica a todos los dependientes
Patrón MVC (Modelo-Vista-Controlador): La aplicación en tres componentes principales: la lógica de la aplicación, la presentación y la interacción del usuario.

4. ¿Cuáles son los métodos usados en la interfaz RESTful y explique cada uno?

GET:Recupera informacion del servidor o la trae
POST: Crea nuevos recursos en el servidor o envia a este datos

PUT: para reemplazar o cambiar un archivo ya existente en el servidor

DELETE: se elimina un archivo o informacion en el servidor
