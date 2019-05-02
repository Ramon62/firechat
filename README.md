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
| Costin Dragos Dogaru         | <cd.dogaru@alumnos.urjc.es>    | cddogaru   |

HOW TO RUN THE CONTAINER OF DOCKER
----------------------------------
Having docker installed on your computer (necessary). For install docker visit: https://www.docker.com/products/docker-desktop .

1. Execute the following command to download and run the container of the app in the port 4000 (recommended):
```docker run -p 4000:80 rubencalmar/firechat:v6```

> Note: To execute docker commands, docker must be open (running).
   

2. Open the browser and type the following: ```localhost:4000``` Y voilà!

> Note: If you are using Docker Toolbox for other versions of Windows that aren´t Pro/Enterprise, use the Docker Machine IP instead of localhost and keep open the Kitematic. For example, http://192.168.99.100:4000/. To find the IP address, use the command ```docker-machine ip```.

HOW TO RUN WITHOUT DOCKER
-------------------------
###### Prerequisites
Angular requires Node.js version 8.x or 10.x.

> To check your version, run ```node -v``` in a terminal/console window.
> To get Node.js, go to nodejs.org.

###### Step 1: Install the Angular CLI
In the root folder of the project, run the command: ```npm install -g @angular/cli```

###### Step 2: Serve de application
Angular includes a server, so that you can easily build and serve your app locally.
In the root folder of the project, run the command: ```ng serve```

> If you want to indicate the port number, use the following command: ```ng serve --port=XXXX``` where XXXX is the port number

###### Step 3: Open de browser
Navigate to `http://localhost:4200/` or the specified port. Y voilà!

ANGULAR COMMANDS WITHOUT DOCKER
-------------------------------

###### CODE SCAFFOLDING
Run `ng generate component component-name` to generate a new component. You can
also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

###### BUILD
Run `ng build` to build the project. The build artifacts will be stored in the
`dist/` directory. Use the `--prod` flag for a production build.

###### RUNNING UNIT TESTS
Run `ng test` to execute the unit tests via
[Karma](https://karma-runner.github.io).

###### RUNNING END-TO-END TESTS
Run `ng e2e` to execute the end-to-end tests via
[Protractor](http://www.protractortest.org/).

###### FURTHER HELP
To get more help on the Angular CLI use `ng help` or go check out the [Angular
CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

This project was generated with [Angular
CLI](https://github.com/angular/angular-cli) version 6.0.8.

TABLA DE CONTENIDOS
===================

-   [1. INTRODUCCIÓN](#INTRODUCCION)

    -   [1.1 PROPÓSITO](#PROPOSITO)

    -   [1.2 ÁMBITO DEL SISTEMA](#AMBITO)

    -   [1.3 DEFINICIONES, ACRÓNIMOS Y ABREVIACIONES](#DEFINICIONES)

    -   [1.4 VISIÓN GENERAL DEL DOCUMENTO](#VISION)


-   [2. DESCRICIÓN GENERAL](#DESGENERAL)

    -   [2.1 PRESPECTIVA DEL PRODUCTO](#PRESPECTIVA)

    -   [2.2 FUNCIONES DEL PRODUCTO](#FUNCIONES)

    -   [2.3 RESTRICCIONES](#RESTRICCIONES)

    -   [2.4 SUPOSICIONES Y DEPENDENCIAS](#SUPOSICIONES)

    -   [2.5 REQUERIMIENTOS FUTUROS](#REQFUTUROS)


-   [3. Diseño](#REQESPECIFICOS)

    -   [3.1 REQUISITOS FUNCIONALES](#REQFUNCIONALES)

    -   [3.2 REQUISITOS NO FUNCIONALES](#REQNOFUNCIONALES)

    -   [3.3 OTROS REQUISITOS](#OTROS)

    -   [3.4 DIAGRAMAS DE CASOS DE USO](#CASOSDEUSO)

    -   [3.5 DIAGRAMAS DE SECUENCIA](#DIAGRAMASECUENCIA)
    
        -   [3.5.1 Diagrama de secuencia del envío de mensajes](#DIAGRAMASECUENCIAENVIOMENSAJES)
    
        -   [3.5.2 Diagrama de secuencia del cambio de tamaño del texto](#DIAGRAMASECUENCIACAMBIOTAMAÑO)

    -   [3.6 DIAGRAMAS DE SECUENCIA DE LA APLICACIÓN](#DIAGRAMASECAPP)

    -   [3.7 DIAGRAMAS DE DESPLIEGUE](#DIAGRAMADESPLIEGUE)

    -   [3.8 DIAGRAMAS DE CLASES](#DIAGRAMACLASES)


-   [4. PROTOTIPO](#PROTOTIPO)




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
    usar para optimizar los procesos en tiempo y recursos de una organización.

1.3 DEFINICIONES, ACRÓNIMOS Y ABREVIACIONES<a name="DEFINICIONES"></a>
-------------------------------------------

NoSQL – Bases de datos no relacional.

BD – Bases de datos.

UML – Lenguaje de modelado unificado.


1.4 VISIÓN GENERAL DEL DOCUMENTO<a name="VISION"></a>
--------------------------------

El documento está dividido en 4 secciones:

-   La sección 1 se enfoca en la introducción, objetivos y descripción del
    proyecto.

-   La sección 2 está orientada a la descripción general del Sistema, donde la
    información está orientada al potencial usuario.

-   La sección 3 trata sobre el diseño, incluyendo los requisitos específicos (donde empleamos
    terminología técnica destinada a desarrolladores y programadores) y los principales diagramas UML de la aplicación (diagramas de secuencia y de casos de uso).

-   La sección 4 contiene los prototipos de la aplicación.


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


2.2 FUNCIONES DEL PRODUCTO<a name="FUNCIONES"></a>
--------------------------

-   Inicio de sesión con cuenta de Google.

-   Inicio de sesión con cuenta de Twitter.

-   Comunicación entre pares.

-   Diferenciación de usuarios por colores.

-   Scroll de conversación.

-   Escritura en texto plano.

-   Cierre de sesión.

2.3 RESTRICCIONES<a name="RESTRICCIONES"></a>
-----------------

Se debe hacer uso de protocolos de intercambio de datos vía internet de manera
segura (https).

Respecto a la seguridad, consideramos el uso de sesiones para limitar el acceso
al sistema a usuarios no autorizados.

Por otro lado, la implementación de un temporizador de sesión para aumentar la
seguridad del mismo.


2.4 SUPOSICIONES Y DEPENDENCIAS<a name="SUPOSICIONES"></a>
-------------------------------

Lo único necesario y requerido para un correcto funcionamiento del sistema es la
instalación de un navegador moderno y actualizado.

> NOTA : Para una correcta ejecución se recomienda no usar Safari o Internet Explorer ya que la visualización de los contenedores de la aplicación puede resultar alterada.

2.5 REQUERIMIENTOS FUTUROS<a name="REQFUTUROS"></a>
--------------------------

En versiones futuras se debe implementar la siguiente serie de puntos:

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

------------

3.1 REQUISITOS FUNCIONALES<a name="REQFUNCIONALES"></a>
--------------------------
| Código   | Titulo                      | Descripción| Prioridad  | Modificable  |
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
| RF-FC-14 | Usuarios conectados | Los usuarios podrán poder ver quien está conectado en el chat.|  Media | No

3.2 REQUISITOS NO FUNCIONALES<a name="REQNOFUNCIONALES"></a>
-----------------------------
| Código   | Titulo                      | Descripción| Prioridad  | Modificable  |
|--------- |-----------------------------|------------|------------|--------------|
| RN-FC-01 | Eficiencia | El sistema debe de ser capaz de procesar 2 transacciones|  Alta | Si          
| RN-FC-02 | Eficiencia | Toda trasaccion debe de responder en menos de 5 segundos|  Alta | No   
| RN-FC-03 | Eficiencia | El sistema debe de ser capaz de operar con 3 usuarios máximo|  Alta | No     
| RN-FC-04 | Eficiencia | Se permitirá la comunicación entre 2 usuarios|  Alta | No    
| RN-FC-05 | Seguridad | Los permisos de acceso al sistema deben de ser cambiados solamente por el administrador|  Alta | No    
| RN-FC-06 | Seguridad | El sistema debe de desarrollarse aplicando patrones de diseño |  Alta | No
| RN-FC-07 | Seguridad | El sistema proveerá mecanismos para que el usuario acceda al sistema después de la primera vez automáticamente sin necesidad de logarse de nuevo. |  Media | No
| RN-FC-08 | Usabilidad | El tiempo de aprendizaje debe de ser inferior a 2 hora|  Media | No
| RN-FC-09 | Usabilidad | La tasa de errores de los usuarios tiene que ser menor al 1%|  Media | Si
| RN-FC-10 | Usabilidad | La aplicación debe de poseer un diseño responsive|  Media | Si
| RN-FC-11 | Dependibilidad | El sistema debe estar disponible el 99.99% del tiempo|  Alta | No
| RN-FC-12 | Dependibilidad | La interfaz web debe ser implementada para navegadores web con HTML5 y JavaScript|  Media | Si
| RN-FC-13 | Usabilidad | El sistema mostrará el historial de mensajes del chat.|  Media | No
| RN-FC-14 | Accesibilidad | El usuario podrá cambiar el color de los mensajes.|  Media | Si
| RN-FC-15 | Accesibilidad | Se permitirá cambiar el tamaño del texto sin perder funcionalidad ni contenido.|  Media | No



3.3 OTROS REQUISITOS<a name="OTROSREQ"></a>
--------------------
- La metodología de desarrollo de software a usar debe de ser la metodología SCRUM
siguiendo el Behaviour Driven Development (BDD) apoyada en Cucumber, con el famoso Given, When, Then

- Flujos de trabajo basados en Sprint de 2 o 3 semanas

- La aplicación debe de soportar el alfabeto latino (Español, Francés, Portugués, Italiano)

3.4 DIAGRAMAS DE CASOS DE USO<a name="CASOSDEUSO"></a>
-----------------
| Código   | Autor                     | Descripción |
|--------- |-----------------------------|------------|
| Iniciar Sesión | Cliente | El cliente se conecta a través de Google o Twitter |   
| Validar Usuario | Sistema | El sistema registra al usuario en el chat |
| Enviar Mensaje | Cliente | El cliente escribe y envía un mensaje |  
| Consultar Historial | Cliente | El cliente revisa el historial de los mensajes |
| Realizar Ajustes | Cliente | El cliente puede modificar ajustes a su necesidad y gusto |
| Concluir Sesión | Cliente | El cliente cierra la sesión |

#### ***Caso de uso: Iniciar Sesión*** ####
![Caso de uso Iniciar Sesion](https://github.com/Ramon62/firechat/blob/master/documentos/CasoDeUso_IniciarSesion.png)

Descripción: El usuario inicia sesión, la cual posteriormente el sistema valida

Pasos a seguir:
  * Flujo Principal:
    1. El usuario se conecta a firechat
    2. Selecciona conectarse vía Twitter/Google
    3. El sistema lo valida
    4. Fin

 * Flujo Secundario:
    1. Error al conectarse
    2. Se reinicia el proceso para volver a intentarlo

#### ***Caso de uso: Validar Usuario*** ####
![Caso de uso Validar Usuario](https://github.com/Ramon62/firechat/blob/master/documentos/CasoDeUso_ValidarUsuario.png)

Descripción: El sistema registra al usuario en el chat

Pasos a seguir:
  * Flujo Principal:
    1. El sistema reconoce al usuario conectado
    2. Lo conecta al servidor
    3. Fin

  * Flujo Secundario:
    1. El sistema no reconoce al usuario

#### ***Caso de uso: Enviar Mensaje*** ####
![Caso de uso Enviar Mensaje](https://github.com/Ramon62/firechat/blob/master/documentos/CasoDeUso_EnviarMensaje.png)

Descripción: El usuario escribe y envía un mensaje

Pasos a seguir:
  * Flujo Principal:
    1. El usuario escribe un mensaje
    2. Lo envía
    3. Fin

  * Flujo Secundario:
    1. Error, el mensaje no llega

#### ***Caso de uso: Consultar Historial*** ####
![Caso de uso Consultar Historial](https://github.com/Ramon62/firechat/blob/master/documentos/CasoDeUso_ConsultarHistorial.png)

Descripción: El usuario consulta el historial

Pasos a seguir:
  * Flujo Principal:
    1. El usuario observa el historial
    2. Lo consulta
    3. Fin

  * Flujo Secundario:
    1. Error al cargar el historial

#### ***Caso de uso: Realizar Ajustes*** ####
![Caso de uso Realizar Ajustes](https://github.com/Ramon62/firechat/blob/master/documentos/CasoDeUso_RealizarAjustes.png)

Descripción: El usuario puede  realizar cambios en la interfaz

Pasos a seguir:
  * Flujo Principal:
    1. El usuario cambia color
    2. El usuario aumenta y disminuye los contenedores de tamaño
    3. El usuario aumenta y disminuye el tamaño de la letra
    4. Fin

  * Flujo Secundario:
    1. Error al cargar

#### ***Caso de uso: Concluir Sesión*** ####
![Caso de uso Concluir Sesion](https://github.com/Ramon62/firechat/blob/master/documentos/CasoDeUso_ConcluirSesión.png)

Descripción: El usuario finaliza la sesión

Pasos a seguir:
  * Flujo Principal:
    1. El usuario aprieta el botón de Salir
    2. Se concluye la sesión
    3. Fin


3.5 DIAGRAMAS DE SECUENCIA<a name="DIAGRAMASECUENCIA"></a>
--------------------


Los diagramas de secuencia sirven para ver cómo interactúan entre si los diferentes módulos del sistema, a partir de las acciones de los usuarios.

A continuación se muestran los distintos diagramas de secuencia, con una breve explicación de cada uno de ellos:

3.5.1 Diagrama de secuencia del envío de mensajes<a name="DIAGRAMASECUENCIAENVIOMENSAJES"></a>
----------------------------

![Diagrama de secuencia del envío de mensajes](https://github.com/Ramon62/firechat/blob/master/documentos/envioMensaje-DSecuencia.png)

3.5.2 Diagrama de secuencia del cambio de tamaño del texto<a name="DIAGRAMASECUENCIACAMBIOTAMAÑO"></a>
----------------------------

![Diagrama de secuencia del cambio de tamaño del texto](https://github.com/Ramon62/firechat/blob/master/documentos/cambioTamañoTexto-%20DiagramaSecuencia.png)

3.6 DIAGRAMAS DE SECUENCIA DE LA APLICACIÓN <a name="DIAGRAMASECAPP"></a>
--------------------

![diagramaSecuencia](https://user-images.githubusercontent.com/32453276/54840295-f5a85580-4ccc-11e9-98a7-5d05af00b39f.jpeg)

3.7 DIAGRAMAS DE DESPLIEGUE <a name="DIAGRAMADESPLIEGUE"></a>
--------------------

![diagramaDespliegue](https://user-images.githubusercontent.com/32453276/54842974-9bf75980-4cd3-11e9-9acb-726a5928600a.jpeg)

3.8 DIAGRAMAS DE CLASES <a name="DIAGRAMACLASES"></a>
--------------------
![Diagrama de la App](https://github.com/Ramon62/firechat/blob/master/documentos/DiagramaApp.png)


4 PROTOTIPO<a name="PROTOTIPO"></a>
------------------

------------------
Prototipado de la aplicación en dispositivo de escritorio
--------------------------------------
<div>
<img src="https://github.com/Ramon62/firechat/blob/master/documentos/Firechat%20Macbook.png">
</div>


Prototipado de la aplicación en dispositivo móvil
--------------------------------------

<div style="text-align:center">
<img src="https://github.com/Ramon62/firechat/blob/master/documentos/Firechat-%20Mockup.png">
</div>





> Mockup credits : Macbook pro: `http://www.freepik.com">Designed by zlatko_plamenov / Freepik` . iPhone x: `http://www.pixeden.com`

