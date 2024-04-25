/* Postman (Permite Probar APIs sin necesidad de una interfaz grafica) */

$("document").ready( function(){
    /* Probando la Conección */
    console.log("Hola Mundo");

    let numero1 = 0;
    let numero2 = 0;
    let resultado = 0;

    $("#btnSumar").click(function(){

        $("#error1").text("")
        $("#error2").text("")
        $("#resultado").text("")

        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("Debe agregar el 1er Numero");
            $("#error1").css("color","red");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error2").text("Debe agregar el 2do Numero");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) + parseInt(numero2);

        $("#resultado").text(resultado);
        $("#resultado").css("fontSize","2rem")
        limpiar();

    });

    $("#btnRestar").click(function(){

        $("#error1").text("")
        $("#error2").text("")
        $("#resultado").text("")

        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("Debe agregar el 1er Numero");
            $("#error1").css("color","red");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error2").text("Debe agregar el 2do Numero");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) - parseInt(numero2);

        $("#resultado").text(resultado);
        $("#resultado").css("fontSize","2rem")
        limpiar();

    });

    $("#btnMultiplicar").click(function(){

        $("#error1").text("")
        $("#error2").text("")
        $("#resultado").text("")

        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("Debe agregar el 1er Numero");
            $("#error1").css("color","red");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error2").text("Debe agregar el 2do Numero");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) * parseInt(numero2);

        $("#resultado").text(resultado);
        $("#resultado").css("fontSize","2rem")
        limpiar();

    });

    $("#btnDividir").click(function(){

        $("#error1").text("")
        $("#error2").text("")
        $("#resultado").text("")

        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("Debe agregar el 1er Numero");
            $("#error1").css("color","red");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error2").text("Debe agregar el 2do Numero");
            $("#error2").css("color","red");
            return;
        }

        if(numero2 === "0"){
            $("#error2").text("No se puede dividir entre 0");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) / parseInt(numero2);

        $("#resultado").text(resultado);
        $("#resultado").css("fontSize","2rem")
        limpiar();

    });

    $("#btnLimpiar").click(limpiar());

    function limpiar(){
        $("#numero1").val("");
        $("#numero2").val("");
        $("#error1").text("");
        $("#error2").text("");
    }

});

