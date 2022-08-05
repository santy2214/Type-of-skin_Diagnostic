//validación de datos

var nombre = null;
var apellido = null;
var email = null;

var genero = new Array();

var hombre = document.getElementById("hombre");
var mujer = document.getElementById("mujer");
var otro = document.getElementById("otro");

/*MUJER IMAGES*/
var mujer1 = document.getElementById("mujer1");
var mujer2 = document.getElementById("mujer2");
var mujer3 = document.getElementById("mujer3");
var mujer4 = document.getElementById("mujer4");
var mujer5 = document.getElementById("mujer5");
var mujer6 = document.getElementById("mujer6");
var mujer7 = document.getElementById("mujer7");
var mujer8 = document.getElementById("mujer8");
var mujer9 = document.getElementById("mujer9");
var mujer10 = document.getElementById("mujer10");
var mujer11 = document.getElementById("mujer11");
var mujer12 = document.getElementById("mujer12");
var mujer13 = document.getElementById("mujer13");
var mujer14 = document.getElementById("mujer14");
var mujer15 = document.getElementById("mujer15");
var mujer16 = document.getElementById("mujer16");




/*HOMBRE IMAGES*/
var hombre1 = document.getElementById("hombre1");
var hombre2 = document.getElementById("hombre2");
var hombre3 = document.getElementById("hombre3");
var hombre4 = document.getElementById("hombre4");
var hombre5 = document.getElementById("hombre5");
var hombre6 = document.getElementById("hombre6");
var hombre7 = document.getElementById("hombre7");
var hombre8 = document.getElementById("hombre8");
var hombre9 = document.getElementById("hombre9");
var hombre10 = document.getElementById("hombre10");
var hombre11 = document.getElementById("hombre11");
var hombre12 = document.getElementById("hombre12");
var hombre13 = document.getElementById("hombre13");
var hombre14 = document.getElementById("hombre14");
var hombre15 = document.getElementById("hombre15");
var hombre16 = document.getElementById("hombre16");



/*OTRO IMAGES*/
var otro1 = document.getElementById("otro1");
var otro2 = document.getElementById("otro2");
var otro3 = document.getElementById("otro3");
var otro4 = document.getElementById("otro4");
var otro5 = document.getElementById("otro5");
var otro6 = document.getElementById("otro6");
var otro7 = document.getElementById("otro7");
var otro8 = document.getElementById("otro8");
var otro9 = document.getElementById("otro9");
var otro10 = document.getElementById("otro10");
var otro11 = document.getElementById("otro11");
var otro12 = document.getElementById("otro12");
var otro13 = document.getElementById("otro13");
var otro14 = document.getElementById("otro14");
var otro15 = document.getElementById("otro15");
var otro16 = document.getElementById("otro16");


/*RESPUESTAS*/
var Rmujer1 = document.getElementById("Rmujer1");
var Rhombre1 = document.getElementById("Rhombre1");
var Rotro1 = document.getElementById("Rotro1");

var Rmujer2 = document.getElementById("Rmujer2");
var Rhombre2 = document.getElementById("Rhombre2");
var Rotro2 = document.getElementById("Rotro2");

var Rmujer3 = document.getElementById("Rmujer3");
var Rhombre3 = document.getElementById("Rhombre3");
var Rotro3 = document.getElementById("Rotro3");

var Rmujer4 = document.getElementById("Rmujer4");
var Rhombre4 = document.getElementById("Rhombre4");
var Rotro4 = document.getElementById("Rotro4");


var alerta = document.getElementsByClassName("Nombre");
var alerta3 = document.getElementsByClassName("Apellido");
var alerta2 = document.getElementsByClassName("mail");
var form1 = document.getElementsByClassName("formDatos");

var part1 = document.getElementsByClassName("part1");
var part2 = document.getElementsByClassName("part2");
var part3 = document.getElementsByClassName("part3");
var part4 = document.getElementsByClassName("part4");

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

var form = document.getElementsByClassName("formDatos");

var tipo1 = document.getElementsByClassName("tipo1");

var tipo2 = document.getElementsByClassName("tipo2");

var tipo3 = document.getElementsByClassName("tipo3");

var tipo4 = document.getElementsByClassName("tipo4");



var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");

var a1 = document.getElementById("a1");
var b1 = document.getElementById("b1");
var c1 = document.getElementById("c1");
var d1 = document.getElementById("d1");

var a2 = document.getElementById("a2");
var b2 = document.getElementById("b2");
var c2 = document.getElementById("c2");
var d2 = document.getElementById("d2");

var a3 = document.getElementById("a3");
var b3 = document.getElementById("b3");
var c3 = document.getElementById("c3");
var d3 = document.getElementById("d3");


var datosSendingB = new Array();


function iniciar(event) {
    form1[0].style.display = "none";
    part1[0].style.display = "block";

    if (hombre.checked == true) {
        genero.push(hombre.value)

        hombre1.style.display = "block";
        hombre2.style.display = "block";
        hombre3.style.display = "block";
        hombre4.style.display = "block";


    } else if (mujer.checked == true) {
        genero.push(mujer.value)
        mujer1.style.display = "block";
        mujer2.style.display = "block";
        mujer3.style.display = "block";
        mujer4.style.display = "block";

    } else {
        genero.push(otro.value)
        otro1.style.display = "block";
        otro2.style.display = "block";
        otro3.style.display = "block";
        otro4.style.display = "block";

    }

}

function seguir() {
    part1[0].style.display = "none";
    part2[0].style.display = "block";
    if (genero[0] == 'mujer') {

        mujer5.style.display = "block";
        mujer6.style.display = "block";
        mujer7.style.display = "block";
        mujer8.style.display = "block";
    } else if (genero[0] == 'hombre') {

        hombre5.style.display = "block";
        hombre6.style.display = "block";
        hombre7.style.display = "block";
        hombre8.style.display = "block";
    } else {

        otro5.style.display = "block";
        otro6.style.display = "block";
        otro7.style.display = "block";
        otro8.style.display = "block";
    }

}

function seguir2() {
    part2[0].style.display = "none";
    part3[0].style.display = "block";

    if (genero[0] == 'mujer') {
        mujer9.style.display = "block";
        mujer10.style.display = "block";
        mujer11.style.display = "block";
        mujer12.style.display = "block";
    } else if (genero[0] == 'hombre') {
        hombre9.style.display = "block";
        hombre10.style.display = "block";
        hombre11.style.display = "block";
        hombre12.style.display = "block";

    } else {
        otro9.style.display = "block";
        otro10.style.display = "block";
        otro11.style.display = "block";
        otro12.style.display = "block";

    }

}

function seguir3() {
    part3[0].style.display = "none";
    part4[0].style.display = "block";

    if (genero[0] == 'mujer') {
        mujer13.style.display = "block";
        mujer14.style.display = "block";
        mujer15.style.display = "block";
        mujer16.style.display = "block";

    } else if (genero[0] == 'hombre') {
        hombre13.style.display = "block";
        hombre14.style.display = "block";
        hombre15.style.display = "block";
        hombre16.style.display = "block";

    } else {
        otro13.style.display = "block";
        otro14.style.display = "block";
        otro15.style.display = "block";
        otro16.style.display = "block";

    }

}

function envioDatos(event) {
    nombre = document.getElementById("Nombre").value;
    apellido = document.getElementById("Apellido").value;
    email = document.getElementById("mail").value;

    const form = document.querySelector('#formDatos');
    datos = [nombre, apellido, email];
    console.log(datos);

    if (nombre.length == undefined) {
        event.preventDefault();
        alerta[0].style.borderBottom = "3px solid red";

    } else if (apellido.lenght == undefined) {
        event.preventDefault();
        alerta3[0].style.borderBottom = "3px solid red";

    } else if (email.length == undefined) {
        event.preventDefault();
        alerta2[0].style.borderBottom = "3px solid red";
    } else {
        form1[0].style.display = "none";

        document.getElementById("nombreShow1").innerHTML = datos[0];
        datosSendingB.push(datos);
        console.log(datosSendingB, "esta es el vector de SendinBlue");

    }
    console.log("datos enviados");


}


function getCheckboxValue(ResultadosSeleccionados) {
    ResultadosSeleccionados = new Array(4);

    if (a.checked == true) {
        ResultadosSeleccionados[0] = (a.value);

    } else if (b.checked == true) {
        ResultadosSeleccionados[0] = (b.value);
    } else if (c.checked == true) {
        ResultadosSeleccionados[0] = (c.value);
    } else if (d.checked == true) {
        ResultadosSeleccionados[0] = (d.value);
    }

    if (a1.checked == true) {
        ResultadosSeleccionados[1] = (a1.value);
    } else if (b1.checked == true) {
        ResultadosSeleccionados[1] = (b1.value);
    } else if (c1.checked == true) {
        ResultadosSeleccionados[1] = (c1.value);
    } else if (d1.checked == true) {
        ResultadosSeleccionados[1] = (d1.value);
    }

    if (a2.checked == true) {
        ResultadosSeleccionados[2] = (a2.value);
    } else if (b2.checked == true) {
        ResultadosSeleccionados[2] = (b2.value);
    } else if (c2.checked == true) {
        ResultadosSeleccionados[2] = (c2.value);
    } else if (d2.checked == true) {
        ResultadosSeleccionados[2] = (d2.value);
    }

    if (a3.checked == true) {
        ResultadosSeleccionados[3] = (a3.value);
    } else if (b3.checked == true) {
        ResultadosSeleccionados[3] = (b3.value);
    } else if (c3.checked == true) {
        ResultadosSeleccionados[3] = (c3.value);
    } else if (d3.checked == true) {
        ResultadosSeleccionados[3] = (d3.value);
    }



    console.log(ResultadosSeleccionados, "Opciones Seleccionadas");

    function encontrarElementoMasFrecuente(ResultadosSeleccionados) {
        if (!Array.isArray(ResultadosSeleccionados)) {
            throw TypeError("El argumento debe ser un arreglo.");
        }

        let conteo = {};

        for (const e of ResultadosSeleccionados) {
            if (conteo[e]) {
                conteo[e] += 1;
            } else {
                conteo[e] = 1;
            }
        }

        let mayorConteo = 0;
        let dato = null;
        let llaves = Object.keys(conteo);

        for (let i = 0; i < llaves.length; ++i) {
            if (conteo[llaves[i]] > mayorConteo) {
                dato = llaves[i];
                mayorConteo = conteo[llaves[i]];
            }
        }

        return dato;
    }



    try {


        console.log(encontrarElementoMasFrecuente(ResultadosSeleccionados));
        if (encontrarElementoMasFrecuente(ResultadosSeleccionados) == "a") {

            tipo1[0].style.display = "block";
            part4[0].style.display = "none";
            if (genero[0] == 'mujer') {
                Rmujer1.style.display = "block";
            } else if (genero[0] == 'hombre') {
                Rhombre1.style.display = "block";
            } else {
                Rotro1.style.display = "block";
            }

            document.getElementById("nombreFinal").innerHTML = datos[0];
            datosSendingB.push(encontrarElementoMasFrecuente(ResultadosSeleccionados));
            form[0].style.display = "none";
        } else if (encontrarElementoMasFrecuente(ResultadosSeleccionados) == "b") {

            tipo2[0].style.display = "block";
            part4[0].style.display = "none";
            if (genero[0] == 'mujer') {
                Rmujer2.style.display = "block";
            } else if (genero[0] == 'hombre') {
                Rhombre2.style.display = "block";
            } else {
                Rotro2.style.display = "block";
            }


            document.getElementById("nombreFinal1").innerHTML = datos[0];
            datosSendingB.push(encontrarElementoMasFrecuente(ResultadosSeleccionados));
            form[0].style.display = "none";
        } else if (encontrarElementoMasFrecuente(ResultadosSeleccionados) == "c") {

            tipo3[0].style.display = "block";
            part4[0].style.display = "none";

            if (genero[0] == 'mujer') {
                Rmujer3.style.display = "block";
            } else if (genero[0] == 'hombre') {
                Rhombre3.style.display = "block";
            } else {
                Rotro3.style.display = "block";
            }


            document.getElementById("nombreFinal2").innerHTML = datos[0];
            datosSendingB.push(encontrarElementoMasFrecuente(ResultadosSeleccionados));
            form[0].style.display = "none";
        } else if (encontrarElementoMasFrecuente(ResultadosSeleccionados) == "d") {

            tipo4[0].style.display = "block";
            part4[0].style.display = "none";

            if (genero[0] == 'mujer') {
                Rmujer4.style.display = "block";
            } else if (genero[0] == 'hombre') {
                Rhombre4.style.display = "block";
            } else {
                Rotro4.style.display = "block";
            }


            document.getElementById("nombreFinal3").innerHTML = datos[0];
            datosSendingB.push(encontrarElementoMasFrecuente(ResultadosSeleccionados));
            form[0].style.display = "none";
        }


        datosSendingBlue();


    } catch (e) {
        console.log(`Error: ${e.message}`);
    }

}


function datosSendingBlue() {
    //datosSendingB.push(envioDatos);
    console.log(datosSendingB);
}
/*
myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
    form[0].style.display = "none";
  })
*/