//funciones callback

//funcion flecha
let nuevaFuncion=()=>{
    console.log("hola soy una funcion flecha");
}
nuevaFuncion();
// nuevaFuncion();
// imprimeConFuncion('imprimo')

// function imprimeConFuncion (dato) {
    
//     if (dato === 'imprimi'){
//         let funcioninterna = () => {
//             console.log('El dato ingresado es correcto y se imprime')
//         }
//         funcioninterna();
//         return dato
//     }else {
//         console.log('El dato ingresado no es correcto')
//     }
//     return dato
// }

//Callback

function llamada () {
    console.log('HOLA MUNDO!')
}

function llamadora (call) {
    console.log(typeof call)
    if (typeof call === "function"){
        console.log('Dentro de esta funcion llamamos a la callback')
        call()
    }else {
        console.error('No es una funcion!')
    }
    
}
//Aqui llamamos a la funcion
llamadora(llamada);

// let miArray = [10,20,30,40]



// miArray.forEach(data => {
//     if (data === 20) {
//         console.log('el valor encontrado es igual a 20')
//     }else {
//         console.log('no se encontro el valor requerido')
//     }
// })

// let resultado = miArray.filter()

// let callSegunda = () =>{
//     console.log('Esto se imprime segundo');
// }


// console.log('Esto se imprime primero');
// setTimeout(callSegunda, 2000)
// console.log('Esto se imprime tercero');