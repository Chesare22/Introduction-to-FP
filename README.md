# Introducción a la programación funcional

## ¿Qué es la programación funcional?

En resumidas cuentas: es programar con las restricciones adecuadas. Tus funciones no podrán causar efectos secundarios. Solo son cosas que reciben un valor y devuelven otro.

Ahora, ¿por qué esto es deseable? Porque así puedes combinar tus bloques de cualquier forma y es seguro que tu programa se va a comportar como esperas. No existen variables que son modificadas por varios bloques de código. Las funciones tampoco pueden modificar sus parámetros. Le puedes mandar un arreglo a 20 funciones distintas y es seguro que tendrás el mismo arreglo en todos los pasos.

Una frase que me gusta mucho es "La programación orientada a objetos reduce la complejidad encapsulando las partes móviles. La programación funcional, la reduce eliminando las partes móviles."

Hay muchos problemas que en la programación funcional simplemente no existen.

## Beneficios de la programación funcional

1. Es simple.
1. Es predecible.
1. Es fácil hacer cambios.
1. Es fácil hacer pruebas unitarias.
1. Se reducen las excepciones (no siempre).
1. Es declarativo.

No voy a ahondar en cada uno de estos puntos. Solo diré que _declarativo_ significa que los programas describen el resultado en lugar de describir el flujo de control. Vamos a ver un ejemplo:

**_Mostrar ejemplo 1_**

Este bloque de código es imperativo. Paso por paso se modifica un arreglo para obtener el resultado deseado.

**_Mostrar ejemplo 2_**

En cambio, en un estilo declarativo se describe el resultado deseado. En la línea 4 estoy diciendo "Quiero el resultado de sumar uno a cada elemento de este arreglo".

Volviendo a la versión imperativa, hay que prestarle atención a 2 cosas a la vez para entender la lógica principal. Tenemos la parte que se encarga de iterar el arreglo, y también tenemos la parte que usa el arreglo. Estas 2 partes tienen muy alto acoplamiento.

En la programación funcional cada función tiene un solo propósito. El _map_ maneja la iteración y el _addOne_ dicta qué hacer con cada elemento del arreglo. Estas pequeñas cosas que aligeran la carga mental a la larga hacen más fácil leer el código y te cansas menos.

## Aplicación parcial

> :construction: Este apartado está incompleto.

Supongamos que a lo largo de mi programa necesito sumarle otros valores al arreglo. Además de uno, le voy a sumar dos y tres.

# Apéndice A: Efectos secundarios

> :construction: Este apartado está incompleto.

En la vida real, es imposible evitar los efectos secundarios. Imprimir algo en consola es un efecto secundario. El manejo de formularios tiene efectos secundarios. Redireccionar al usuario es un efecto secundario. Cambiar un elemento de tu página es un efecto secundario.

## Apéndice B: Programación inspirada en las matemáticas

Quizá habrás escuchado que la programación funcional usa muchas matemáticas. Eso puede ser intimidante al inicio, pero la verdad es que los principios matemáticos usados suelen ser simples.

Volvamos al ejemplo que usamos para definir la programación declarativa. Si cambiamos el nombre de las variables podemos ver que nuestro programa parece la descripción del dominio y rango de una función.

El resto de conceptos matemáticos en programación funcional son igual de simples.
