FIRECHAT - METODOLOGÍA DE LA PROGRAMACIÓN
=========================================

APP NAME
------------------
FIRECHAT - https://firechat-f7b1b.firebaseapp.com/

GROUP MEMBERS
------------------

| Name and Surname             | Mail                           | Github     |
|------------------------------|--------------------------------|------------|
| Restituto Esono Bayeme Mbang | <re.beyeme@alumnos.urjc.es>    | re-beyeme  |
| Ramon Serrano Rodriguez      | <r.serranoro@alumnos.urjc.esr> | Ramon62    |
| María Victoria Marcos Gómez  | <mv.marcos@alumnos.urjc.es>    | VictoriaMG |
| Ernesto Baltasar Nve Obono   | <eb.nve@alumnos.urjc.es>       | nveobono   |
| Rubén Calvo Martínez         | <r.calvoma@alumnos.urjc.es>    | Casanova2  |
|                              |                                | cddogaru   |

This project was generated with [Angular
CLI](https://github.com/angular/angular-cli) version 6.0.8.

DEVELOPMENT SERVER
------------------

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app
will automatically reload if you change any of the source files.

CODE SCAFFOLDING
----------------

Run `ng generate component component-name` to generate a new component. You can
also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

BUILD
-----

Run `ng build` to build the project. The build artifacts will be stored in the
`dist/` directory. Use the `--prod` flag for a production build.

RUNNING UNIT TESTS
------------------

Run `ng test` to execute the unit tests via
[Karma](https://karma-runner.github.io).

RUNNING END-TO-END TESTS
------------------------

Run `ng e2e` to execute the end-to-end tests via
[Protractor](http://www.protractortest.org/).

FURTHER HERLP
------------

To get more help on the Angular CLI use `ng help` or go check out the [Angular
CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

TABLA DE CONTENIDOS
===================

-   [1. INTRODUCCIÓN](#INTRODUCCION)

    -   [1.1 PROPÓSITO](#PROPOSITO)

    -   [1.2 ÁMBITO DEL SISTEMA](#AMBITO)

    -   [1.3 DEFINICIONES, ACRÓNIMOS Y ABREVIACIONES](#DEFINICIONES)

    -   [1.4 REFERENCIAS](#REFERENCIAS)

    -   [1.5 VISIÓN GENERAL DEL DOCUMENTO](#VISION)

-   [2. DESCRICIÓN GENERAL](#DESGENERAL)

    -   [2.1 PRESPECTIVA DEL PRODUCTO](#PRESPECTIVA)

    -   [2.2 FUNCIONES DEL PRODUCTO](#FUNCIONES)

    -   [2.3 CARACTERÍSTICAS DE LOS USUARIO](#CARACTERISTICAS)

    -   [2.4 RESTRICCIONES](#RESTRICCIONES)

    -   [2.5 SUPOSICIONES Y DEPENDENCIAS](#SUPOSICIONES)

    -   [2.6 REQUERIMIENTOS FUTUROS](#REQFUTUROS)

-   [3. REQUISITOS ESPECÍFICOS](#REQESPECIFICOS)

    -   [3.1 INTERFAZ](#INTERFAZ)

    -   [3.2 REQUISITOS FUNCIONALES](#REQFUNCIONALES)

    -   [3.3 REQUISITOS NO FUNCIONALES](#REQNOFUNCIONALES)

    -   [3.4 OTROS REQUISITOS](#OTROS)

-   [4. APENDICE](#APENDICE)

-   [5. PROTOTIPO](#PROTOTIPO)

1 INTRODUCCIÓN<a name="INTRODUCCION"></a>
===============

En el presente documento se explicarán y analizarán los requisitos del proyecto
“Firechat”, desarrollado para la clase de la asignatura de Metodología de la
Programación.

1.1 PROPÓSITO<a name="PROPOSITO"></a>
-------------

El propósito de este documento es presentar una descripción detallada de la
implementación de un chat a tiempo real. Este chat está creado con una base de
datos NoSQL, como es firebase, de la compañía de Google, con la cual podemos
almacenar datos a tiempo real sin una estructura determinada ni relacionada.

Casi todas las aplicaciones móviles que se tienen que construir hoy en día, tienen como necesidad que los usuarios puedan comunicarse en grupo o en un chat, persona a persona.
La mayoría de las veces no es muy fácil configurar la estructura de la base de datos para dicha aplicación. Cuando se trata de MySQL, base de datos de Oracle o PostgreSQL, no es un gran problema, ya que tales bases de datos admiten la agregación de datos donde, con una sola consulta, los datos pueden consultarse desde varias tablas y combinarse.
Si estas empezando en el mundo del desarrollo, configurar un backend por tu cuenta no es una tarea fácil, ya que necesitas el servidor para ejecutar las 24 horas del día, los 7 días de la semana.

Ahí es donde Firebase de Google (firebase.google.com), nos proporciona un backend móvil que incluye almacenamiento de archivos e informes de fallos. Es una plataforma SaS (Software como Servicio) para el almacenamiento y sincronización de datos en la nube, para aplicaciones en la que nos basaremos en desarrollar nuestro chat.

1.2 ÁMBITO DEL SISTEMA<a name="AMBITO"></a>
----------------------

-   Nombre del Sistema: Firechat.

-   El Sistema facilita las comunicaciones entre usuarios.

-   Este Sistema puede aplicarse a cualquier tipo de entidad, empresa u
    organización, con la finalidad de facilitar a los miembros de la misma una
    comunicación directa y privada, así como un incremento en la productividad
    de la propia empresa.

-   El objetivo puede ser cualquiera que se desee, pero principalmente se suele
    usar para optimizer los procesos en tiempo y recursos de una organización.

1.3 DEFINICIONES, ACRÓNIMOS Y ABREVIACIONES<a name="DEFINICIONES"></a>
-------------------------------------------

NoSQL – Bases de datos no relacional.

BD – Bases de datos.

UML – Lenguaje de modelado unificado.

1.4 REFERENCIAS<a name="REFERENCIAS"></a>
---------------

POR HACER

1.5 VISIÓN GENERAL DEL DOCUMENTO<a name="VISION"></a>
--------------------------------

El document está dividido en 4 secciones:

-   La sección 1 se enfoca en la introducción, objetivos y descripción del
    document.

-   La sección 2 está orientada a la descripción general del Sistema, donde la
    información está orientada al potencial usuario.

-   La sección 3 trata sobre los requisites del específicos, donde empleamos
    terminología técnica destinada a desarrolladores y programadores.

-   La sección 4 son los apéndices.

2 DESCRIPCIÓN GENERAL<a name="DESGENERAL"></a>
======================

Existen factores generales que afectan al software y sus requerimientos. En esta
sección se identifican estos factores como el context al desarrollo del Sistema.
Algunos de estos factores son los costs, el tiempo de las fases de desarrollo y
la disponibilidad del cliente.

2.1 PRESPECTIVA DEL PRODUCTO<a name="PRESPECTIVA"></a>
----------------------------

El software final permite la comunicación entre usuarios de cualquier tipo de
organización, pudiendo compartir texto plano. Estos usuarios pueden iniciar
sesión con cuentas de Google o Twitter, facilitando así el inicio de sesión sin
tener que registrarse previamente.

Hacer diagram de bloques y ponerlo en el apéndice.

2.2 FUNCIONES DEL PRODUCTO<a name="FUNCIONES"></a>
--------------------------

-   Inicio de sesión con cuenta de Google.

-   Inicio de sesión con cuenta de Twitter.

-   Comunicación entre pares.

-   Diferenciación de usuarios por colores.

-   Scroll de conversación.

-   Escritura en texto plano.

-   Cierre de sesión.

2.3 CARACTERÍSTICAS DE LOS USUARIOS<a name="CARACTERISTICAS"></a>
-----------------------------------

Por hacer

2.4 RESTRICCIONES<a name="RESTRICCIONES"></a>
-----------------

Se debe hacer uso de protocolos de intercambio de datos vía internet de manera
segura (https).

Respecto a la seguridad, consideramos el uso de sesiones para limitar el acceso
al sistema a usuarios no autorizados.

Por otro lado, la implementación de un temporizador de sesión para aumentar la
seguridad del mismo.

Añadir más

2.5 SUPOSICIONES Y DEPENDENCIAS<a name="SUPOSICIONES"></a>
-------------------------------

Lo único necesario y requerido para un correcto funcionamiento del sistema es la
instalación de un navegador moderno y actualizado.

2.6 REQUERIMIENTOS FUTUROS<a name="REQFUTUROS"></a>
--------------------------

En versions futuras se debe implementar la siguiente serie de puntos:

-   Historial de conversaciones.

-   Inicio de sesión con más cuentas de otras corporaciones.

-   Intercambio de multimedia por el chat.

-   Creación de grupos de conversaciones.

-   Administración de contactos.

3 REQUISITOS ESPECÍFICOS<a name="REQESPECIFICOS"></a>
=============================
#### ***Código de requisito*** ####
Para identificar de forma univoca un requisito cada requisito tendrá un nombre antes del propio nombre del requisito.
El código comenzará por las letras:

 -RF: requisito funcional

 -RN: requisito no funcional

  continuado por las letras FC que hacen referencia a la aplicación ***firechat***, y un número para indicar el orden del requisito, todo ello reparado por guiones para aumentar su legibilidad.

3.1 INTERFAZ<a name="INTERFAZ"></a>
------------

3.2 REQUISITOS FUNCIONALES<a name="REQFUNCIONALES"></a>
--------------------------
| Codigo   | Titulo                      | Descripcion| Prioridad  | Modificable  |
|--------- |-----------------------------|------------|------------|--------------|
| RF-FC-01 | Controlar acceso al sistema | Se protegerá el acceso al sistema haciendo que los usuarios se tengan que registrar o logar previamente|  Alta | No          
| RF-FC-02 | Acceso con cuenta de Google | Se permitirá el acceso al sistema utilizando una cuenta de Google|  Alta | No   
| RF-FC-03 | Acceso con cuenta de Twitter | Se permitirá el acceso al sistema utilizando una cuenta de Twitter|  Alta | No     
| RF-FC-04 | Comunicación entre pares | Se permitirá la comunicación entre 2 usuarios|  Alta | No    
| RF-FC-05 | Comunicación en grupos | Se permitirá la comunicación entre varios usuarios|  Media | No    
| RF-FC-06 | Recordar usuarios | El sistema proveerá mecanismos para que el usuario quede guardado en el sistema |  Alta | No
| RF-FC-07 | Acceso automático | El sistema proveerá mecanismos para que el usuario acceda al sistema después de la primera vez automáticamente sin necesidad de logarse de nuevo. |  Media | No
| RF-FC-08 | Conversación | Los usuarios podrán interactuar con otros usuarios escribiendo sobre el recuadro de enviar mensaje y pulsando intro.|  Alta | No
| RF-FC-09 | Visualización de mensajes propios | Los usuarios podrán visualizar sus mensajes en el chat.|  Alta | No
| RF-FC-10 | Distinción por color mensajes propios | Los usuarios podrán distinguir sus mensajes en el chat con el color azul.|  Media | Si
| RF-FC-11 | Visualización de mensajes de otros usuarios | Los usuarios podrán visualizar los mensajes de otros usuarios en el chat.|  Alta | No
| RF-FC-12 | Distinción por color mensajes propios | Los usuarios podrán distinguir los mensajes de otros usuarios en el chat con el color verde.|  Media | Si
| RF-FC-13 | Cerrar sesión | Los usuarios podrán cerrar la sesión del chat pulsando sobre el boton salir.|  Alta | No

3.3 REQUISITOS NO FUNCIONALES<a name="REQNOFUNCIONALES"></a>
-----------------------------
| Codigo   | Titulo                      | Descripcion| Prioridad  | Modificable  |
|--------- |-----------------------------|------------|------------|--------------|
| RN-FC-01 | Eficiencia | El sistema debe de ser capaz de procesar 2 transacciones|  Alta | Si          
| RN-FC-02 | Eficiencia | Toda trasaccion debe de responder en menos de 5 segundos|  Alta | No   
| RN-FC-03 | Eficiencia | El sistema debe de ser capaz de operar con 3 usuarios máximo|  Alta | No     
| RN-FC-04 | Eficiencia | Se permitirá la comunicación entre 2 usuarios|  Alta | No    
| RN-FC-05 | Seguridad | Los permsos de acceso al sistema deben de ser cambiados solamente por el administrador|  Alta | No    
| RN-FC-06 | Seguridad | El sistema debe de desarrollarse aplicando patrones de diseño |  Alta | No
| RN-FC-07 | Seguridad | El sistema proveerá mecanismos para que el usuario acceda al sistema después de la primera vez automáticamente sin necesidad de logarse de nuevo. |  Media | No
| RN-FC-08 | Usabilidad | El tiempo de aprendizaje debe de ser inferiror a 2 hora|  Media | No
| RN-FC-09 | Usabilidad | La tasa de errores de los usuarios tiene que ser meor al 1%|  Media | Si
| RN-FC-10 | Usabilidad | La aplicacion debe de poseer un diseño responsive|  Media | Si
| RN-FC-11 | Dependibilidad | El sistema debe estar disponible el 99.99% del tiempo|  Alta | No
| RN-FC-12 | Dependibilidad | La interfaz web debe ser implementada para navegadores web con HTML5 y JavaScript|  Media | Si

3.4 OTROS REQUISITOS<a name="OTROSREQ"></a>
--------------------
- La metodología de desarrollo de software a usar debe de ser la metodología SCRUM
siguiendo el Behaviour Driven Development (BDD) apoyada en Cucumber, con el famoso Given, When, Then

- Flujos de trabajo basados en Sprint de 2 o 3 semanas

- La aplicación debe de soportar el alfabeto latino (Español, Francés, Portugues, Italiano)

4 APÉNDICE<a name="APENDICE"></a>
------------------
Diagrama de Secuencia de la Aplicación
--------------------------------------

![diagramaSecuencia](https://user-images.githubusercontent.com/32453276/54840295-f5a85580-4ccc-11e9-98a7-5d05af00b39f.jpeg)

Diagrama de Despliegue de la Aplicación
---------------------------------------

![diagramaDespliegue](https://user-images.githubusercontent.com/32453276/54842974-9bf75980-4cd3-11e9-9acb-726a5928600a.jpeg)

Diagrama de Clases de la Aplicación
------------------------------------
![Diagrama de la App](https://github.com/Ramon62/firechat/blob/master/documentos/DiagramaApp.png)
![DiagramaClase](https://user-images.githubusercontent.com/32453276/54842110-46ba4880-4cd1-11e9-9006-aefe0c935fae.png)

5 PROTOTIPO<a name="PROTOTIPO"></a>
------------------
Prototipado de la aplicación en dispositivo movil
--------------------------------------


<div style="text-align:center">
<img src="https://user-images.githubusercontent.com/10214269/55182391-d9edf500-518d-11e9-9f33-f6d8cc0d1053.png" width="120">
<img src="https://user-images.githubusercontent.com/10214269/55182390-d9edf500-518d-11e9-88e6-9059b57bb5ad.png" width="150">
<img src="https://user-images.githubusercontent.com/10214269/55182394-da868b80-518d-11e9-9ce2-887e8d8ed5d8.png" width="120">
</div>

------------------
Prototipado de la aplicación en dispositivo de escritorio
--------------------------------------
<div>
<img src="https://user-images.githubusercontent.com/10214269/55184354-318e5f80-5192-11e9-9d8e-ad23155b5622.jpg" width="500">
<img src="https://user-images.githubusercontent.com/10214269/55184353-30f5c900-5192-11e9-873f-70f9651b3bc6.jpg" width="500">
</div>



