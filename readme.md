## Cifrado César
El método de encriptado César es un modo sencillo, pero ágil de cifrar información. No ofrece una máxima seguridad, pero debido a su amplia difusión es vital conocerlo y aplicarlo.

###Pseudocódigo De la función de Cifrado
Inicio:
Escribir una frase

Condicional:
Si lo ingresado es un campo vacío o un conjunto de números, pide el ingreso de una nueva frase.

Proceso:
Creación de la variable out


Recorriendo la frase ingresada con for, letra por letra


Se aplica la función charCodeAt, para obtener el número de la letra en ASCII


Se aplica la fórmula (x-65 + 33) % 26 + 65, para obtener el nuevo código ASCII de la letra.


Se aplica la función String.fromCharCode, para que con ese numero número obtenido, tengamos la letra cifrada
