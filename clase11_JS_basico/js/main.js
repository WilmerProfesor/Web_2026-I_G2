// let x=1, y="1", z="uno", m=[23, false, "texto", [2,true,4]], n=true, o=false;


// console.log(x + " es de tipo "+ typeof(x));
// console.log(y + " es de tipo "+ typeof(y));
// console.log(z + " es de tipo "+ typeof(z));
// console.log(m + " es de tipo "+ typeof(m));
// console.log(x === y);
// if(n && !o){
//     console.log("Iguales");    
// }else{
//     console.log("Diferentes");        
// }

// let cadena1= "HOla 'mundo' infinito";
// console.log(cadena1);
// let cadena2= 'HOla "mundo" infinito';
// console.log(cadena2);
// let subCadena="mundo";
// let valor_numerico=25;
// let cadena3= `HOla ${subCadena} infinito, con ${valor_numerico} años como edad`;
// console.log(cadena3);

// const array =[2,3,5,6,"hkhkj",true,5];
// const persona = { edad: 18, nombre: "juan", sexo: true };
// console.log(array[4]);

// for (const atributo in persona) {  
//     console.log(`${persona[atributo]}`);        
// }
// console.log(persona.nombre);


// let name= prompt("Ingrese su nombre")
// alert("hi "+name);

// const array2 =[2,3,5,6,"hkhkj",true,5];
// const array3 =[1,2,3];
// const array4 =[4,5,6,7,8,9];

// array2.push("h")
// array2.unshift("h2")
// console.log(array2);
// console.log(array3.join("-"));
// console.log(array3.concat(array4));
// console.log(array4.slice(3));
// console.log(array4.indexOf(17));
// console.log(array4.includes(7));
// console.log(array4.reverse());

// FUNCION DECLARADA
function suma(a,b){return a+b}
console.log(suma(3,5));

// FUNCION Anonima
const variable= function (a,b) {return a+b}
console.log(variable(3,5));

// FUNCION Flecha ->  Arrow functions
let arrow1=  (a,b) => {return a+b}
console.log(arrow1(3,5));

let arrow2=  (a,b) => a+b;
console.log(arrow1(3,5));

let arrow4=  a => a+a; // a => { return a+a }
console.log(arrow4(3));

let arrow5=  a => {
    let cuadrado= a*a;
    return cuadrado+cuadrado;
} 
console.log(arrow5(3));

let arrow6=  (a,b) => {
    let cuadradoA= a*a;
    let cuadradoB= b*b;
    return cuadradoA+cuadradoB;
} 
console.log(arrow6(3,2));

let arrow7=  () => {
    return 4+5;
} 
console.log(arrow7());

let arrow8=  () => {
    4+5;
    console.log("HAce algo");    
} 
arrow8();


const iterador=(array, funcion)=>{
    for (const elemento of array) {
        console.log(funcion(elemento));
    }
}

iterador([1,2,3],console.log);
let algo= (n)=>n*2
console.log(typeof(algo));

iterador([1,2,3],(n)=>n*2);