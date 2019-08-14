/*
06:00am se despierta 
 Error( No suena el despertador) 
07:00am se alista y sale a coger Transmilenio 
 Error(paro en el portal y no puede coger transporte) 
08:15 am entra a estudiar 
 Error(llega tarde y no puede entrar a clases) 
12:00 sale del estudio y almuerza 
 Error(no puede almorzar porque le sale un pelo en la sopa) 
01:00pm va a trabajar en Bellatrix 
 Error(Se olvida del carnet y no lo dejan ingresar) 
08:00pm sale del trabajo a relajarse con sus compañeros de trabajo 
 Error(Lo roban) 
11:00pm vuelve a casa  
 Error(Ha perdido las llaves de su casa y le toca dormir en el parque) 
01:00am se acuesta para ver Netflix. 
Error(Olvido pagar la mensualidad de Netflix… se desbarata la cama y no tiene donde dormir

*/
const http = require("http")
fs = require('fs')
path = require('path')

var paso1 
var paso2
var paso3
var paso4
var paso5 
var paso6
var paso7 
var paso8



http.createServer((request,response) => {  

    if (ruteo == "paso1") 
    {
        fs.readFile('../paso1.html', (error, dato) => {
            let htmlTexto = dato.toString()
            let validacionInterpolacion = htmlTexto.match(/[^\{\}]+(?=\})/g)
            texto1="este es el paso1"
          
            for (let i = validacionInterpolacion.length - 1; i >= 0; i--) {
                console.log(i)
                console.log(validacionInterpolacion[i])
                let valor = eval(validacionInterpolacion[i])
                console.log(valor)
                htmlTexto = htmlTexto.replace("{" + validacionInterpolacion[i] + "}", valor)
            }
            response.writeHead(200, { 'Content-type': 'text/html' })
            response.end(htmlTexto)
        })
    }
     else if(ruteo=='paso2')
     {
        fs.readFile('../paso2.html', (error, dato) => {
            let htmlTexto = dato.toString()
            let validacionInterpolacion = htmlTexto.match(/[^\{\}]+(?=\})/g)
            texto2 = "este es el paso2"
            
            for (let i = validacionInterpolacion.length - 1; i >= 0; i--) {
                console.log(i)
                console.log(validacionInterpolacion[i])
                let valor = eval(validacionInterpolacion[i])
                console.log(valor)
                htmlTexto = htmlTexto.replace("{" + validacionInterpolacion[i] + "}", valor)
            }
            response.writeHead(200, { 'Content-type': 'text/html' })
            response.end(htmlTexto)
        })
     }

     else if(ruteo=='paso3')
     {
        fs.readFile('../paso3.html', (error, dato) => {
            let htmlTexto = dato.toString()
            let validacionInterpolacion = htmlTexto.match(/[^\{\}]+(?=\})/g)
            texto4 = "este es el paso 3"
            for (let i = validacionInterpolacion.length - 1; i >= 0; i--) {
                console.log(i)
                console.log(validacionInterpolacion[i])
                let valor = eval(validacionInterpolacion[i])
                console.log(valor)
                htmlTexto = htmlTexto.replace("{" + validacionInterpolacion[i] + "}", valor)
            }
            response.writeHead(200, { 'Content-type': 'text/html' })
            response.end(htmlTexto)
        })
     }


     else if(ruteo=='paso4')
     {
        fs.readFile('../paso4.html', (error, dato) => {
            let htmlTexto = dato.toString()
            let validacionInterpolacion = htmlTexto.match(/[^\{\}]+(?=\})/g)
             texto3 = "este es el paso 4"
            for (let i = validacionInterpolacion.length - 1; i >= 0; i--) {
                console.log(i)
                console.log(validacionInterpolacion[i])
                let valor = eval(validacionInterpolacion[i])
                console.log(valor)
                htmlTexto = htmlTexto.replace("{" + validacionInterpolacion[i] + "}", valor)
            }
            response.writeHead(200, { 'Content-type': 'text/html' })
            response.end(htmlTexto)
        })
     }


     else if(ruteo=='paso5')
     {
        fs.readFile('../paso5.html', (error, dato) => {
            let htmlTexto = dato.toString()
            let validacionInterpolacion = htmlTexto.match(/[^\{\}]+(?=\})/g)
           
           texto5 = "este es el paso 5"
            for (let i = validacionInterpolacion.length - 1; i >= 0; i--) {
                console.log(i)
                console.log(validacionInterpolacion[i])
                let valor = eval(validacionInterpolacion[i])
                console.log(valor)
                htmlTexto = htmlTexto.replace("{" + validacionInterpolacion[i] + "}", valor)
            }
            response.writeHead(200, { 'Content-type': 'text/html' })
            response.end(htmlTexto)
        })
     }

}).listen(8080)

function despertador(resolver, estadoreloj) {
    if (estadoreloj == "encendido") {
        return resolver()
    } else {
        return rechazar()

    }

}

function transmilenio() {

    y = "no hay paro"
    return y

}

function llegar() {

    a = "llegotarde"
    return a

}

function tomarsopa() {

    b = "hayunpelo"
    return b

}

new Promise((resolver, rechazar) => {
    console.log('Inicial');
    ruteo = "paso1"
    despertador(resolver, "encendido");
})
    .then((apodresolver) => {
        console.log('ud  esta despierto y listo para salir por que el reloj esta encendido');

        var x = transmilenio()
        console.log(x)
        if (x == "hay paro") {
            console.log("juemadre hay paro")
            rechazar()
        }

    }).then((apodresolver2) => {

        console.log('bien ahora puede abordar trasmilenio por que no hay paro');

        var tiempo = llegar()
        if (tiempo == "llegotemprano") {
            console.log("no puede entrar a clase por que llegue tarde")
            rechazar()
        }
    }).then((apodresolver2) => {

        console.log('ahora puede entrar a estudiar');
        comida = tomarsopa()

        if (comida == "nohayunpelo") {
            console.log("mk gas hay un pelo en la sopa")
            rechazar()
        }


    }).then((apodresolver2) => {

        console.log(' almuerza');
    }).then((apodresolver2) => {

        console.log(' va a trabajar a beletrix');
    }).then((apodresolver2) => {

        console.log(' sale a relajarse con sus companeros de trabajo');
    }).then((apodresolver2) => {

        console.log(' vuelve a casa');
    }).then((apodresolver2) => {

        console.log('se acuesta para ver netflix');
    })
    .catch(() => {
        console.log("entro al catch");
    })
