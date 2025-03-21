# Proyecto Angular: Estructura y Funcionamiento de la Calculadora

Este proyecto tiene como objetivo explorar en profundidad la creación de una **calculadora** en Angular, mientras aprendemos sobre diversos conceptos importantes en el desarrollo de aplicaciones Angular. La estructura del proyecto se aborda en dos fases:

1. **Fase de Estructura de Componentes con Tailwind**  
   En esta fase, aprenderemos cómo trabajar con una estructura HTML utilizando **Tailwind CSS** en Angular, prestando especial atención a los problemas que surgen cuando intentamos crear un diseño complejo en componentes de Angular.

2. **Fase de Funcionamiento de la Calculadora**  
   En esta segunda fase, nos enfocaremos en implementar la funcionalidad de una calculadora básica, pasando por conceptos importantes como **Host Property**, **Signals** y cálculos, entre otros.

## Fase 1: Estructura con Tailwind y Angular

En esta fase nos centraremos en la **estructura de los componentes** utilizando Tailwind CSS. Aprenderemos cómo estructurar una interfaz que se ajuste a Angular, utilizando sus características para crear un diseño dinámico y eficiente.

### Temas cubiertos:

#### 1. **Tailwind**
   - Aprenderemos a integrar **Tailwind CSS** en un proyecto Angular y cómo usar sus utilidades para crear un diseño moderno y responsive.

#### 2. **Zoneless**
   - Exploraremos el concepto de "zoneless" y cómo interactúa con Angular para gestionar la ejecución de cambios y actualizaciones en la vista.

#### 3. **OnPush**
   - En esta sección, veremos cómo usar el cambio de detección **OnPush** en Angular para optimizar el rendimiento de nuestros componentes.

#### 4. **ViewEncapsulation**
   - Estudiaremos cómo funciona **ViewEncapsulation** en Angular y cómo afecta al aislamiento de los estilos dentro de un componente.

#### 5. **ng-deep (Deprecado)**
   - Aunque **ng-deep** está deprecado, aprenderemos sobre su uso anterior para profundizar en cómo se estilizan los componentes hijos en Angular.

#### 6. **Content Projection**
   - Abordaremos la **proyección de contenido** en Angular, una técnica importante para la reutilización de componentes y la creación de interfaces flexibles.

#### 7. **Input Signals**
   - Exploraremos cómo los **Input Signals** pueden ayudar a manejar los datos que se pasan a través de los componentes.

#### 8. **Standalone Components**
   - Aprenderemos sobre los **componentes autónomos** en Angular, cómo crear y usar componentes sin necesidad de un módulo.

#### 9. **Angular Schematics**
   - Estudiaremos los **Angular Schematics**, que permiten automatizar tareas y generar estructuras específicas dentro de un proyecto Angular.

#### 10. **Host Bindings**
   - En esta parte, profundizaremos en los **Host Bindings** y cómo nos permiten manipular propiedades directamente en el elemento del host de un componente.

#### Objetivo de la Fase 1:
La idea es recrear un diseño que, aunque eventualmente haremos funcional, tendrá un nivel de complejidad real para aprender cómo estructurar componentes en Angular y cómo trabajar con los diferentes conceptos de Tailwind y Angular.

---

## Fase 2: Funcionamiento de la Calculadora

Una vez que hemos comprendido los aspectos estructurales, nos centraremos en el desarrollo de la **calculadora**, abordando varios conceptos avanzados de Angular que nos permitirán gestionar estados, eventos y cálculos dentro de la aplicación.

### Temas cubiertos:

#### 1. **Host Property - Condicional**
   - Aprenderemos cómo usar propiedades de host en Angular de forma condicional para manejar cambios de estado y comportamiento de los componentes de forma eficiente.

#### 2. **Remover HostListeners y HostBindings**
   - Explora cómo remover y manejar **HostListeners** y **HostBindings** para tener un control más fino de los eventos y la interacción con el DOM.

#### 3. **Output Emitter Refs**
   - Veremos cómo utilizar **Output** y **Emitter Refs** para facilitar la comunicación entre los componentes padre e hijo mediante la emisión de eventos.

#### 4. **Signals ViewChild**
   - Estudiaremos el uso de **ViewChild** y cómo interactuar con las señales dentro de un componente hijo, permitiendo que los datos fluyan de manera reactiva.

#### 5. **Signal ViewChildren**
   - Analizaremos cómo usar **ViewChildren** junto con **Signals** para manejar múltiples elementos hijos y sincronizar el estado entre ellos.

#### 6. **Servicios con señales**
   - Descubriremos cómo utilizar **servicios** con señales para gestionar el estado y las interacciones dentro de nuestra aplicación Angular de forma reactiva.

#### 7. **Computed Signals**
   - Aprenderemos a trabajar con **señales computadas**, que nos permitirán realizar cálculos de forma reactiva en función del estado de la aplicación.

#### 8. **Realizar cálculos y operaciones**
   - Implementaremos las operaciones matemáticas básicas de la calculadora, como suma, resta, multiplicación y división, usando la lógica interna de Angular y las señales.

#### 9. **Validaciones y consideraciones**
   - Abordaremos las validaciones necesarias para asegurar que las entradas sean correctas y cómo manejar posibles errores en las operaciones, como la división por cero.

#### Objetivo de la Fase 2:
El objetivo en esta fase es tener la calculadora funcionando parcialmente, con algunos inconvenientes que servirán para mejorar el **testing** en una sección posterior. Estos problemas permitirán afinar los detalles y asegurarse de que la lógica de la aplicación esté bien implementada.

---

## Instalación

Para comenzar a trabajar con este proyecto:

1. Clona el repositorio:

   ```bash
   git clone <url_del_repositorio>
