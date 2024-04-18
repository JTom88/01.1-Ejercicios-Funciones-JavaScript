// Your code goes here
const rapid = (str) => {
    let resultado=""
    let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    for (let i=0; i<str.length; i++){
        let caracterActual = str[i];

        if (!vocales.includes(caracterActual)){
            resultado += caracterActual;
        }
    }
    resultado = resultado.toUpperCase();
    return resultado;
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
