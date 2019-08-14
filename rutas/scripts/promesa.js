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
    //ruteo = "paso1"
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
