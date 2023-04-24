console.log("Sesion js01");

console.log("Tipo de dato String: ", "Hola");

console.log("Tipo de dato Number: ", 12, -45, 35.69, 45/0, -56/0, 56*"s");
console.log("valor maximo: ", Number.MAX_VALUE);
console.log("valor seguro: ", Number.MAX_SAFE_INTEGER);
//BigInt
//Representan valores numericos de los que el tipo number no puede representar o no son seguros

console.log("Max safe integer +: ", Number.MAX_SAFE_INTEGER + 1);
console.log("Max safe integer +: ", Number.MAX_SAFE_INTEGER + 2);
let myBigInt = 9007199254740991n; //se agrega n al final
console.log("valor de dato BigInt: ", myBigInt);
console.log("Max safe integer + n", myBigInt + 1n)
console.log("Max safe integer + n", myBigInt + 2n)


console.log("Tipo de dato Boolean : ", true);
console.log("Tipo de dato Boolean : ", false);


let myVar;
console.log("Tipo de dato Undefined : ", myVar);


let varNull;
console.log("tipo de dato varNull: ", typeof(varNull) );
varNull = "saludos"
console.log("tipo de dato varNull: ", typeof(varNull) );
varNull = null;
console.log("tipo de dato varNull: ", typeof(varNull) ); // este sale como object por un error en JS



// tipo object

const misDatos = {
    //clave:valor,
    nombre: "Alex",
    apellido: "Gomez",
    edad: 26,
    isBelicoso: false,
    musicaPorGenero:{
        rock: "Help!",
        kpop: "Lalisa",
    },
    nombreCompleto: function fullname(){
        return `${this.nombre} ${ this.apellido}`;
    }
}
console.log("Datos completos: ", misDatos);
console.log("Nombre: ", misDatos.nombre);
console.log("Musica de fin de semana: ", misDatos.musicaPorGenero.kpop);
console.log("Nombre completo: ", misDatos.nombreCompleto());













