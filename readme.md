## Cifrado César
El método de encriptado César es un modo sencillo, pero ágil de cifrar información. No ofrece una máxima seguridad, pero debido a su amplia difusión es vital conocerlo y aplicarlo.

###Pseudocódigo
function cipher(str) { //creando la función de cifrado 
str = prompt("Ingrese una frase"); //pedir al usuario que ingrese una frase, mediante un prompt
while((typeof(str !== "number"))) { //Creando el bucle While, mediante el cual, solo correra mientras el string ingresado no sea                                             number.
    for( var i = 0; i < str.length; i ++) { //recorriendo el string ingresado
        str[i].toUpperCase;   // convirtiendo el string a mayúsculas
        var letterAscii = str.charCodeAt(i); //obteniendo el código ASCII
        var convert = (letterAscii - 65 + 33) % 26 + 65; // Aplicando la fórmula para obtener la nueva posición
        var newLetter = String.fromCharCode(convert); //obtener la nueva letra en el alfabeto
        var output = ""; //creando la variable de salida
        return prompt(output += newLetter); //retornando en un prompt el string cifrado
    }
  }

function descipher (abc, str) { //función para descifrar
//creando una variable abc, que contiene el alfabeto
        abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
        //creando un bucle, que condicione que el parámetro ingresado sea un string
        while((typeof(str) === "string")) {
        for ( var j = 0; j < abc.length; j++) { //recorriendo la variable abc.
             if(abc[j] === str[i]) { //comparando los elementos 
                var newPosition = (j + 33) % 26; //calculando la nueva posición de la letra
                var alpabethPosition = code.charCodeAt(code); //encontrando la posición de la letra en el alfabeto.
                var newOutput = ""; //variable del retorno, del string descifrado
                return prompt(newOutput += alpabethPosition); // retorno, del string descifrado
             }
            
           }
       }
    }
}