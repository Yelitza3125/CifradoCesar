function cipher(str) {
str = prompt("Ingrese una frase");
while((typeof(str !== "number"))) {
    for( var i = 0; i < str.length; i ++) {
        str[i].toUpperCase;
        var letterAscii = str.charCodeAt(i);
        var convert = (letterAscii - 65 + 33) % 26 + 65;
        var newLetter = String.fromCharCode(convert);
        var output = "";
        return prompt(output += newLetter); 
    }
  }

function descipher (abc, str) {
        abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        while((typeof(str) === "string")) {
        for ( var j = 0; j < abc.length; j++) {
             if(abc[j] === str[i]) {
                var newPosition = (j + 33) % 26;
                var alpabethPosition = code.charCodeAt(code);
                var newOutput = "";
                return prompt(newOutput += alpabethPosition);
             }
            
           }
       }
    }
}
