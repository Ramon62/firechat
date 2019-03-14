

<!--ts-->
   * [TABLA DE CONTENIDOS](#table-of-contents)
   * [ ](#installation)
   * [1. INTRODUCCIÓN](#INTRODUCCIÓN)
      * [1.1 PROPÓSITO](#PROPÓSITO)
      * [1.2 ALCANCE](#intro2)
      * [1.3 DEFINICIONES, ACRÓNIMOS Y ABREVIACIONES](#intro3)
   * [2. DESCRICIÓN GLOBAL](#usage)
      * [2.1 PRESPECTIVA DEL PRODUCTO](#stdin)
        * [2.1.1 INTERFACES CON EL SISTEMA ](#local-files1)
        * [2.1.2 INTERFACES CON EL USUARIO ](#local-files2)
        * [2.1.3 INTERFACES CON EL HARDWARE ](#local-files3)
        * [2.1.4 INTERFACES CON EL SOFTWARE](#local-files4)
        * [2.1.5 INTERFACES DE COMUNICACIÓN](#local-files5)
        * [2.1.6 INTERFACES DE MEMORIA](#local-files6)
        * [2.1.7 OPERACIONES](#local-files7)
        * [2.1.8 REQUERIMIENTOS DE ADATACIÓN AL SITIO](#local-files8)
      * [2.2 FUNCIONES DEL PRODUCTO](#stdin2)
      * [2.3 CARACTERÍSTICAS DEL USUARIO](#stdin3)
      * [2.4 RESTRICCIONES](#stdin4)
        * [2.4.1 RESTRCCIONES GENERALES ](#local-files9)
        * [2.4.2 RESTRICCIONES DE SOFTWARE ](#local-files10)
        * [2.4.3 RESTRCCIONES DE HARDWARE ](#local-files11)
      * [2.5 DEPENDENCIAS](#stdin5)
      * [2.6 DISTRIBUICIÓN DE REQUERIMIENTOS](#stdin6)
    
<!--te-->

1.INTRODUCCIÓN
===============

Casi todas las aplicaciones móviles que se tienen que construir hoy tienen como necesidad que usuarios puedan comunicarse en grupo o en un chat persona a persona. 

La mayoría de las veces no es muy fácil configurar la estructura de la base de datos para dicha aplicación. Cuando se trata de MySQL, base de datos Oracle o PostgreSQL, no es un gran problema ya que tales bases de datos admiten la agregación de datos donde, con una sola consulta, los datos pueden consultarse desde varias tablas y combinarse. 

Si estas empezando en el mundo del desarrollo, configurar un backend por tu cuenta no es una tarea fácil, ya que necesitas el servidor para ejecutar las 24 horas del día, los 7 días de la semana.  

Ahí es donde Firebase de Google (firebase.google.com). Nos proporciona un backend móvil que incluye almacenamiento de archivos e informes de fallos.  Es una plataforma SaS (Software como Servicio) para el almacenamiento y sincronización de datos en la nube para aplicaciones en la que nos basaremos para desarrollar nuestro chat.









# Firechat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
