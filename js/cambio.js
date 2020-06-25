function periodo() {
    var mesfac = document.getElementById('mes').value;
    var anofac = document.getElementById('año').value;
    var anoant = document.getElementById('anoant').value;
    var mesant = document.getElementById('mesant').value;
    localStorage.setItem("mesinicial", mesfac);
    localStorage.setItem("añoinicial", anofac);
    localStorage.setItem("anoanterior", anoant);
    localStorage.setItem("mesanterior", mesant);
    window.location.replace('./consumo.html');

}

function regresarconsumo(){
    window.location.replace('./consumo.html');
}

function regresarconsumorecibo(){
    window.location.replace('./consumorecibo.html');
}



function consumo() {
    var dato = document.getElementById('dato1').value;
    var dato2 = document.getElementById('dato2').value;
    var dato3 = document.getElementById('dato3').value;
    var dato4 = document.getElementById('dato4').value;
    var dato5 = document.getElementById('dato5').value;
    var dato6 = document.getElementById('dato6').value;
    var dato7 = document.getElementById('dato7').value;
    var dato8 = document.getElementById('dato8').value;
    var dato9 = document.getElementById('dato9').value;
    var dato10 = document.getElementById('dato10').value;
    var dato11 = document.getElementById('dato11').value;
    var dato12 = document.getElementById('dato12').value;


    if (valor1.checked == true) {
        valor1.value = dato;
        localStorage.setItem("valor1", valor1.value);
        console.log(valor1.value)
    }
    else{
        localStorage.setItem("valor1", 0);
    }
    if (valor2.checked == true) {
        valor2.value = dato2;
        localStorage.setItem("valor2", valor2.value);
        console.log(valor2.value)
    }

    else{
        localStorage.setItem("valor2", 0);
    }

    if (valor3.checked == true) {
        valor3.value = dato3;
        localStorage.setItem("valor3", valor3.value);
        console.log(valor3.value)
    }

    else{
        localStorage.setItem("valor3", 0);
    }

    if (valor4.checked == true) {
        valor4.value = dato4;
        localStorage.setItem("valor4", valor4.value);
        console.log(valor4.value)
    }
    else{
        localStorage.setItem("valor4", 0);
    }

    if (valor5.checked == true) {
        valor5.value = dato5;
        localStorage.setItem("valor5", valor5.value);
        console.log(valor5.value)
    }
    else{
        localStorage.setItem("valor5", 0);
    }

    if (valor6.checked == true) {
        valor6.value = dato6;
        localStorage.setItem("valor6", valor6.value);
        console.log(valor6.value)
    }
    else{
        localStorage.setItem("valor6", 0);
    }

    if (valor7.checked == true) {
        valor7.value = dato7;
        localStorage.setItem("valor7", valor7.value);
        console.log(valor7.value)
    }
    else{
        localStorage.setItem("valor7", 0);
    }

    if (valor8.checked == true) {
        valor8.value = dato8;
        localStorage.setItem("valor8", valor8.value);
        console.log(valor8.value)
    }
    else{
        localStorage.setItem("valor8", 0);
    }

    if (valor9.checked == true) {
        valor9.value = dato9;
        localStorage.setItem("valor9", valor9.value);
        console.log(valor9.value)
    }
    else{
        localStorage.setItem("valor9", 0);
    }

    if (valor10.checked == true) {
        valor10.value = dato10;
        localStorage.setItem("valor10", valor10.value);
        console.log(valor10.value)
    }
    else{
        localStorage.setItem("valor10", 0);
    }

    if (valor11.checked == true) {
        valor11.value = dato11;
        localStorage.setItem("valor11", valor11.value);
        console.log(valor11.value)
    }
    else{
        localStorage.setItem("valor11", 0);
    }


    if (valor12.checked == true) {
        valor12.value = dato12;
        localStorage.setItem("valor12", valor12.value);
        console.log(valor12.value)
    }
    else{
        localStorage.setItem("valor12", 0);
    }

    var tot = $('#total');
    tot.val(0);
    $('.form-check-input,#lecturab').each(function () {
        if ($(this).hasClass('form-check-input')) {
            tot.val(($(this).is(':checked') ? parseInt($(this).attr('value')) : 0) + parseInt(tot.val()));
        }
        else {
            tot.val(parseInt(tot.val()) + (isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val())));
        }
    });
    var totalParts = parseInt(tot.val()).toFixed(2);
    localStorage.setItem("TotalMeses", totalParts);

    window.location.replace('./consumorecibo.html');

   
    
}

function lecturahoy(){
    var lecturaa = document.getElementById('lecturaa').value;
    var lecturab = document.getElementById('lecturab').value;
    localStorage.setItem("lecturaA", lecturaa);
    localStorage.setItem("lecturaB", lecturab);
    window.location.replace('./lecturahoy.html');
}

function anteriorgrafico(){
    window.location.replace('./consumorecibo.html');
}


function cambiomes() {
    var dato = document.getElementById('dato1').value;
    var dato2 = document.getElementById('dato2').value;
    var dato3 = document.getElementById('dato3').value;
    var dato4 = document.getElementById('dato4').value;
    var dato5 = document.getElementById('dato5').value;
    var dato6 = document.getElementById('dato6').value;
    var dato7 = document.getElementById('dato7').value;
    var dato8 = document.getElementById('dato8').value;
    var dato9 = document.getElementById('dato9').value;
    var dato10 = document.getElementById('dato10').value;
    var dato11 = document.getElementById('dato11').value;
    var dato12 = document.getElementById('dato12').value;

    var valor = document.getElementById('valor1')
    console.log("local mes inicial: " + localStorage.mesinicial)
    console.log("local año inicial: " + localStorage.añoinicial)

    console.log("local mes anterior: " + localStorage.mesanterior)
    console.log("local año anterior: " + localStorage.anoanterior)


    if (localStorage.mesinicial == 1) {
        mesfac = 1
        mesfac2 = 12
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 - 1
        mesfac9 = mesfac8 - 1
        mesfac10 = mesfac9 - 1
        mesfac11 = mesfac10 - 1
        mesfac12 = mesfac11 - 1
        anofac = localStorage.añoinicial
        anofac2 = anofac - 1
        mesanio = mesfac2 + "/" + anofac

        label1 = mesfac + "/" + anofac;
        label2 = mesfac2 + "/" + anofac2;
        label3 = mesfac3 + "/" + anofac2;
        label4 = mesfac4 + "/" + anofac2;
        label5 = mesfac5 + "/" + anofac2;
        label6 = mesfac6 + "/" + anofac2;
        label7 = mesfac7 + "/" + anofac2;
        label8 = mesfac8 + "/" + anofac2;
        label9 = mesfac9 + "/" + anofac2;
        label10 = mesfac10 + "/" + anofac2;
        label11 = mesfac11 + "/" + anofac2;
        label12 = mesfac12 + "/" + anofac2;

        document.getElementById("mes1").innerHTML = "El mes y año: " + label1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + label2;
        document.getElementById("mes3").innerHTML = "El mes y año: " + label3;
        document.getElementById("mes4").innerHTML = "El mes y año: " + label4;
        document.getElementById("mes5").innerHTML = "El mes y año: " + label5;
        document.getElementById("mes6").innerHTML = "El mes y año: " + label6;
        document.getElementById("mes7").innerHTML = "El mes y año: " + label7;
        document.getElementById("mes8").innerHTML = "El mes y año: " + label8;
        document.getElementById("mes9").innerHTML = "El mes y año: " + label9;
        document.getElementById("mes10").innerHTML = "El mes y año: " + label10;
        document.getElementById("mes11").innerHTML = "El mes y año: " + label11;
        document.getElementById("mes12").innerHTML = "El mes y año: " + label12;

        
        localStorage.setItem("fec1", label1);
        localStorage.setItem("fec2", label2);
        localStorage.setItem("fec3", label3);
        localStorage.setItem("fec4", label4);
        localStorage.setItem("fec5", label5);    
        localStorage.setItem("fec6", label6);  
        localStorage.setItem("fec7", label7); 
        localStorage.setItem("fec8", label8);  
        localStorage.setItem("fec9", label9);
        localStorage.setItem("fec10", label10);
        localStorage.setItem("fec11", label11);
        localStorage.setItem("fec12", label12);



        if (localStorage.mesanterior == 12) {
            //diciembre
            document.getElementById("mescomparacion").innerHTML = "Enero/" + anofac;
            document.getElementById('mes2').disabled = true;
            document.getElementById('dato2').disabled = true;

            document.getElementById('mes3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('mes4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('mes5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('mes6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('mes7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('mes8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('mes9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('mes10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('mes11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('mes12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 11) {
            //Noviembre
            document.getElementById("mescomparacion").innerHTML = " Enero/" + anofac + "- Diciembre/" + anofac2;

            document.getElementById('mes3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('mes4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('mes5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('mes6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('mes7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('mes8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('mes9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('mes10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('mes11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('mes12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 10) {
            //Octubre
            document.getElementById("mescomparacion").innerHTML = "Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2;

            document.getElementById('mes4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('mes5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('mes6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('mes7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('mes8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('mes9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('mes10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('mes11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('mes12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 9) {
            //Setiembre
            document.getElementById("mescomparacion").innerHTML = "Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2;

            document.getElementById('mes5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('mes6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('mes7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('mes8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('mes9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('mes10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('mes11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('mes12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 8) {
            document.getElementById("mescomparacion").innerHTML = "Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2;

            document.getElementById('mes6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('mes7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('mes8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('mes9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('mes10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('mes11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('mes12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 7) {
            document.getElementById("mescomparacion").innerHTML = "Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2;

            document.getElementById('mes7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('mes8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('mes9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('mes10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('mes11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('mes12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 6) {
            document.getElementById("mescomparacion").innerHTML = "Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2;

            document.getElementById('mes8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('mes9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('mes10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('mes11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('mes12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 5) {
            document.getElementById("mescomparacion").innerHTML = "Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2;

            document.getElementById('mes9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('mes10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('mes11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('mes12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 4) {
            document.getElementById("mescomparacion").innerHTML = "Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2 + " - Mayo/" + anofac2;

            document.getElementById('mes10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('mes11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('mes12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 3) {
            document.getElementById("mescomparacion").innerHTML = "Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2 + " - Mayo/" + anofac2 + " - Abril/" + anofac2;

            document.getElementById('mes11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('mes12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 2) {
            document.getElementById("mescomparacion").innerHTML = "Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2 + " - Mayo/" + anofac2 + " - Abril/" + anofac2 + " - Marzo/" + anofac2;

            document.getElementById('mes12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 1) {
            document.getElementById("mescomparacion").innerHTML = "Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2 + " - Mayo/" + anofac2 + " - Abril/" + anofac2 + " - Marzo/" + anofac2 + " - Febrero/" + anofac2;
        }







    }
    else if (localStorage.mesinicial == 2) {
        mesfac = 2
        mesfac2 = mesfac - 1
        mesfac3 = 12
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 - 1
        mesfac9 = mesfac8 - 1
        mesfac10 = mesfac9 - 1
        mesfac11 = mesfac10 - 1
        mesfac12 = mesfac11 - 1
        anofac = localStorage.añoinicial
        anofac2 = anofac - 1
        mesanio = mesfac2 + "/" + anofac

        label1 = mesfac + "/" + anofac;
        label2 = mesfac2 + "/" + anofac;
        label3 = mesfac3 + "/" + anofac2;
        label4 = mesfac4 + "/" + anofac2;
        label5 = mesfac5 + "/" + anofac2;
        label6 = mesfac6 + "/" + anofac2;
        label7 = mesfac7 + "/" + anofac2;
        label8 = mesfac8 + "/" + anofac2;
        label9 = mesfac9 + "/" + anofac2;
        label10 = mesfac10 + "/" + anofac2;
        label11 = mesfac11 + "/" + anofac2;
        label12 = mesfac12 + "/" + anofac2;


        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac2;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac2;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac2;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac2;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac2;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac2;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac2;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac2;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac2;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac2;

        localStorage.setItem("fec1", label1);
        localStorage.setItem("fec2", label2);
        localStorage.setItem("fec3", label3);
        localStorage.setItem("fec4", label4);
        localStorage.setItem("fec5", label5);    
        localStorage.setItem("fec6", label6);  
        localStorage.setItem("fec7", label7); 
        localStorage.setItem("fec8", label8);  
        localStorage.setItem("fec9", label9);
        localStorage.setItem("fec10", label10);
        localStorage.setItem("fec11", label11);
        localStorage.setItem("fec12", label12);


        if (localStorage.mesanterior == 12) {
            //diciembre
            document.getElementById("mescomparacion").innerHTML = "Febrero/" + anofac + "- Enero/" + anofac;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 11) {
            //Noviembre
            document.getElementById("mescomparacion").innerHTML = "Febrero/" + anofac + "- Enero/" + anofac + " - Diciembre/" + anofac2;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 10) {
            //Octubre
            document.getElementById("mescomparacion").innerHTML = "Febrero/" + anofac + "- Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 9) {
            //Setiembre
            document.getElementById("mescomparacion").innerHTML = "Febrero/" + anofac + "- Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 8) {
            document.getElementById("mescomparacion").innerHTML = "Febrero/" + anofac + "- Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 7) {
            document.getElementById("mescomparacion").innerHTML = "Febrero/" + anofac + "- Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 6) {
            document.getElementById("mescomparacion").innerHTML = "Febrero/" + anofac + "- Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 5) {
            document.getElementById("mescomparacion").innerHTML = "Febrero/" + anofac + "- Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato110').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 4) {
            document.getElementById("mescomparacion").innerHTML = "Febrero/" + anofac + "- Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2 + " - Mayo/" + anofac2;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 3) {
            document.getElementById("mescomparacion").innerHTML = "Febrero/" + anofac + "- Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2 + " - Mayo/" + anofac2 + " - Abril/" + anofac2;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }

        else if (localStorage.mesanterior == 2) {
            document.getElementById("mescomparacion").innerHTML = "Febrero/" + anofac + "- Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2 + " - Mayo/" + anofac2 + " - Abril/" + anofac2 + " - Marzo/" + anofac2;
        }
        else if (localStorage.mesanterior == 1) {
            document.getElementById("mescomparacion").innerHTML = "Febrero/" + anofac;

            document.getElementById('valor2').disabled = true;
            document.getElementById('dato2').disabled = true;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }



    }

    else if (localStorage.mesinicial == 3) {
        mesfac = 3
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = 12
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 - 1
        mesfac9 = mesfac8 - 1
        mesfac10 = mesfac9 - 1
        mesfac11 = mesfac10 - 1
        mesfac12 = mesfac11 - 1
        anofac = localStorage.añoinicial
        anofac2 = anofac - 1
        label1 = mesfac + "/" + anofac;
        label2 = mesfac2 + "/" + anofac;
        label3 = mesfac3 + "/" + anofac;
        label4 = mesfac4 + "/" + anofac2;
        label5 = mesfac5 + "/" + anofac2;
        label6 = mesfac6 + "/" + anofac2;
        label7 = mesfac7 + "/" + anofac2;
        label8 = mesfac8 + "/" + anofac2;
        label9 = mesfac9 + "/" + anofac2;
        label10 = mesfac10 + "/" + anofac2;
        label11 = mesfac11 + "/" + anofac2;
        label12 = mesfac12 + "/" + anofac2;

        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac2;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac2;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac2;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac2;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac2;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac2;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac2;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac2;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac2;

        localStorage.setItem("fec1", label1);
        localStorage.setItem("fec2", label2);
        localStorage.setItem("fec3", label3);
        localStorage.setItem("fec4", label4);
        localStorage.setItem("fec5", label5);    
        localStorage.setItem("fec6", label6);  
        localStorage.setItem("fec7", label7); 
        localStorage.setItem("fec8", label8);  
        localStorage.setItem("fec9", label9);
        localStorage.setItem("fec10", label10);
        localStorage.setItem("fec11", label11);
        localStorage.setItem("fec12", label12);

        if (localStorage.mesanterior == 12) {
            document.getElementById("mescomparacion").innerHTML = "Marzo/" + anofac + " - Febrero/" + anofac + "- Enero/" + anofac;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 11) {
            document.getElementById("mescomparacion").innerHTML = "Marzo/" + anofac + " - Febrero/" + anofac + "- Enero/" + anofac + " - Diciembre/" + anofac2;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 10) {
            document.getElementById("mescomparacion").innerHTML = "Marzo/" + anofac + " - Febrero/" + anofac + "- Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 9) {
            document.getElementById("mescomparacion").innerHTML = "Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 8) {
            document.getElementById("mescomparacion").innerHTML = "Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 7) {
            document.getElementById("mescomparacion").innerHTML = "Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 6) {
            document.getElementById("mescomparacion").innerHTML = "Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 5) {
            document.getElementById("mescomparacion").innerHTML = "Marzo/" + anofac + " - Febrero/" + anofac + "- Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 4) {
            document.getElementById("mescomparacion").innerHTML = "Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2 + " - Mayo/" + anofac2;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 3) {
            document.getElementById("mescomparacion").innerHTML = "Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2 + " - Mayo/" + anofac2 + " - Abril/" + anofac2;

        }

        else if (localStorage.mesanterior == 2) {
            document.getElementById("mescomparacion").innerHTML = "Marzo/" + anofac;

            document.getElementById('valor2').disabled = true;
            document.getElementById('dato2').disabled = true;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 1) {
            document.getElementById("mescomparacion").innerHTML = "Marzo/" + anofac + " - Febrero/" + anofac;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }



    }
    else if (localStorage.mesinicial == 4) {
        mesfac = 4
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = 12
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 - 1
        mesfac9 = mesfac8 - 1
        mesfac10 = mesfac9 - 1
        mesfac11 = mesfac10 - 1
        mesfac12 = mesfac11 - 1
        anofac = localStorage.añoinicial
        anofac2 = anofac - 1

        label1 = mesfac + "/" + anofac;
        label2 = mesfac2 + "/" + anofac;
        label3 = mesfac3 + "/" + anofac;
        label4 = mesfac4 + "/" + anofac;
        label5 = mesfac5 + "/" + anofac2;
        label6 = mesfac6 + "/" + anofac2;
        label7 = mesfac7 + "/" + anofac2;
        label8 = mesfac8 + "/" + anofac2;
        label9 = mesfac9 + "/" + anofac2;
        label10 = mesfac10 + "/" + anofac2;
        label11 = mesfac11 + "/" + anofac2;
        label12 = mesfac12 + "/" + anofac2;

        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac2;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac2;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac2;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac2;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac2;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac2;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac2;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac2;

        localStorage.setItem("fec1", label1);
        localStorage.setItem("fec2", label2);
        localStorage.setItem("fec3", label3);
        localStorage.setItem("fec4", label4);
        localStorage.setItem("fec5", label5);    
        localStorage.setItem("fec6", label6);  
        localStorage.setItem("fec7", label7); 
        localStorage.setItem("fec8", label8);  
        localStorage.setItem("fec9", label9);
        localStorage.setItem("fec10", label10);
        localStorage.setItem("fec11", label11);
        localStorage.setItem("fec12", label12);

        if (localStorage.mesanterior == 12) {

            document.getElementById("mescomparacion").innerHTML = "Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 11) {

            document.getElementById("mescomparacion").innerHTML = "Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 10) {

            document.getElementById("mescomparacion").innerHTML = "Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 9) {

            document.getElementById("mescomparacion").innerHTML = "Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 8) {
            document.getElementById("mescomparacion").innerHTML = "Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 7) {
            document.getElementById("mescomparacion").innerHTML = "Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 6) {
            document.getElementById("mescomparacion").innerHTML = "Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 5) {
            document.getElementById("mescomparacion").innerHTML = "Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 4) {
            document.getElementById("mescomparacion").innerHTML = "Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2 + " - Mayo/" + anofac2;

        }
        else if (localStorage.mesanterior == 3) {
            document.getElementById("mescomparacion").innerHTML = "Abril/" + anofac;


            document.getElementById('valor2').disabled = true;
            document.getElementById('dato2').disabled = true;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }

        else if (localStorage.mesanterior == 2) {
            document.getElementById("mescomparacion").innerHTML = "Abril/" + anofac + " - Marzo/" + anofac;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 1) {
            document.getElementById("mescomparacion").innerHTML = "Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }


    }
    else if (localStorage.mesinicial == 5) {
        mesfac = 5
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = 12
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 - 1
        mesfac9 = mesfac8 - 1
        mesfac10 = mesfac9 - 1
        mesfac11 = mesfac10 - 1
        mesfac12 = mesfac11 - 1
        anofac = localStorage.añoinicial
        anofac2 = anofac - 1


        label1 = mesfac + "/" + anofac;
        label2 = mesfac2 + "/" + anofac;
        label3 = mesfac3 + "/" + anofac;
        label4 = mesfac4 + "/" + anofac;
        label5 = mesfac5 + "/" + anofac;
        label6 = mesfac6 + "/" + anofac2;
        label7 = mesfac7 + "/" + anofac2;
        label8 = mesfac8 + "/" + anofac2;
        label9 = mesfac9 + "/" + anofac2;
        label10 = mesfac10 + "/" + anofac2;
        label11 = mesfac11 + "/" + anofac2;
        label12 = mesfac12 + "/" + anofac2;

        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac2;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac2;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac2;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac2;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac2;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac2;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac2;


        localStorage.setItem("fec1", label1);
        localStorage.setItem("fec2", label2);
        localStorage.setItem("fec3", label3);
        localStorage.setItem("fec4", label4);
        localStorage.setItem("fec5", label5);    
        localStorage.setItem("fec6", label6);  
        localStorage.setItem("fec7", label7); 
        localStorage.setItem("fec8", label8);  
        localStorage.setItem("fec9", label9);
        localStorage.setItem("fec10", label10);
        localStorage.setItem("fec11", label11);
        localStorage.setItem("fec12", label12);

        if (localStorage.mesanterior == 12) {

            document.getElementById("mescomparacion").innerHTML = "Mayo/" + anofac + "- Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 11) {

            document.getElementById("mescomparacion").innerHTML = "Mayo/" + anofac + "- Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 10) {

            document.getElementById("mescomparacion").innerHTML = "Mayo/" + anofac + "- Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 9) {

            document.getElementById("mescomparacion").innerHTML = "Mayo/" + anofac + "- Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 8) {
            document.getElementById("mescomparacion").innerHTML = "Mayo/" + anofac + "- Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2;

            
            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 7) {
            document.getElementById("mescomparacion").innerHTML = "Mayo/" + anofac + "- Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 +" - Agosto/" + anofac2;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 6) {
            document.getElementById("mescomparacion").innerHTML = "Mayo/" + anofac + "- Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 +" - Agosto/" + anofac2 + " - Julio/" + anofac2;


            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 5) {
            document.getElementById("mescomparacion").innerHTML = "Mayo/" + anofac + "- Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 +" - Agosto/" + anofac2 + " - Julio/" + anofac2 + " - Junio/" + anofac2;

        }
        else if (localStorage.mesanterior == 4) {
            document.getElementById("mescomparacion").innerHTML = "Mayo/" + anofac;

            
            document.getElementById('valor2').disabled = true;
            document.getElementById('dato2').disabled = true;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 3) {
            document.getElementById("mescomparacion").innerHTML = "Mayo/" + anofac + "- Abril/" + anofac;


            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }

        else if (localStorage.mesanterior == 2) {
            document.getElementById("mescomparacion").innerHTML = "Mayo/" + anofac + "- Abril/" + anofac + " - Marzo/" + anofac;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 1) {
            document.getElementById("mescomparacion").innerHTML = "Mayo/" + anofac + "- Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }


    }

    else if (localStorage.mesinicial == 6) {
        mesfac = 6
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = 12
        mesfac8 = mesfac7 - 1
        mesfac9 = mesfac8 - 1
        mesfac10 = mesfac9 - 1
        mesfac11 = mesfac10 - 1
        mesfac12 = mesfac11 - 1
        anofac = localStorage.añoinicial
        anofac2 = anofac - 1

        label1 = mesfac + "/" + anofac;
        label2 = mesfac2 + "/" + anofac;
        label3 = mesfac3 + "/" + anofac;
        label4 = mesfac4 + "/" + anofac;
        label5 = mesfac5 + "/" + anofac;
        label6 = mesfac6 + "/" + anofac;
        label7 = mesfac7 + "/" + anofac2;
        label8 = mesfac8 + "/" + anofac2;
        label9 = mesfac9 + "/" + anofac2;
        label10 = mesfac10 + "/" + anofac2;
        label11 = mesfac11 + "/" + anofac2;
        label12 = mesfac12 + "/" + anofac2;

        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac2;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac2;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac2;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac2;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac2;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac2;

        localStorage.setItem("fec1", label1);
        localStorage.setItem("fec2", label2);
        localStorage.setItem("fec3", label3);
        localStorage.setItem("fec4", label4);
        localStorage.setItem("fec5", label5);    
        localStorage.setItem("fec6", label6);  
        localStorage.setItem("fec7", label7); 
        localStorage.setItem("fec8", label8);  
        localStorage.setItem("fec9", label9);
        localStorage.setItem("fec10", label10);
        localStorage.setItem("fec11", label11);
        localStorage.setItem("fec12", label12);

        if (localStorage.mesanterior == 12) {

            document.getElementById("mescomparacion").innerHTML = "Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac;


            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 11) {

            document.getElementById("mescomparacion").innerHTML = "Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 10) {

            document.getElementById("mescomparacion").innerHTML = "Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 9) {

            document.getElementById("mescomparacion").innerHTML = "Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 8) {
            document.getElementById("mescomparacion").innerHTML = "Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 7) {
            document.getElementById("mescomparacion").innerHTML = "Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2;


            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 6) {
            document.getElementById("mescomparacion").innerHTML = "Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2 + " - Julio/" + anofac2;

        }
        else if (localStorage.mesanterior == 5) {
            document.getElementById("mescomparacion").innerHTML = "Junio/" + anofac;

            document.getElementById('valor2').disabled = true;
            document.getElementById('dato2').disabled = true;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 4) {
            document.getElementById("mescomparacion").innerHTML = "Junio/" + anofac + " - Mayo/" + anofac;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 3) {
            document.getElementById("mescomparacion").innerHTML = "Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }

        else if (localStorage.mesanterior == 2) {
            document.getElementById("mescomparacion").innerHTML = "Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 1) {
            document.getElementById("mescomparacion").innerHTML = "Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }

    }

    else if (localStorage.mesinicial == 7) {
        mesfac = 7
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = 12
        mesfac9 = mesfac8 - 1
        mesfac10 = mesfac9 - 1
        mesfac11 = mesfac10 - 1
        mesfac12 = mesfac11 - 1
        anofac = localStorage.añoinicial
        anofac2 = anofac - 1

        label1 = mesfac + "/" + anofac;
        label2 = mesfac2 + "/" + anofac;
        label3 = mesfac3 + "/" + anofac;
        label4 = mesfac4 + "/" + anofac;
        label5 = mesfac5 + "/" + anofac;
        label6 = mesfac6 + "/" + anofac;
        label7 = mesfac7 + "/" + anofac;
        label8 = mesfac8 + "/" + anofac2;
        label9 = mesfac9 + "/" + anofac2;
        label10 = mesfac10 + "/" + anofac2;
        label11 = mesfac11 + "/" + anofac2;
        label12 = mesfac12 + "/" + anofac2;

        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac2;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac2;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac2;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac2;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac2;

        localStorage.setItem("fec1", label1);
        localStorage.setItem("fec2", label2);
        localStorage.setItem("fec3", label3);
        localStorage.setItem("fec4", label4);
        localStorage.setItem("fec5", label5);    
        localStorage.setItem("fec6", label6);  
        localStorage.setItem("fec7", label7); 
        localStorage.setItem("fec8", label8);  
        localStorage.setItem("fec9", label9);
        localStorage.setItem("fec10", label10);
        localStorage.setItem("fec11", label11);
        localStorage.setItem("fec12", label12);

        if (localStorage.mesanterior == 12) {

            document.getElementById("mescomparacion").innerHTML = "Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac;


            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 11) {

            document.getElementById("mescomparacion").innerHTML = "Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 10) {

            document.getElementById("mescomparacion").innerHTML = "Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 9) {

            document.getElementById("mescomparacion").innerHTML = "Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2;

             document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 8) {
            document.getElementById("mescomparacion").innerHTML = "Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2;
            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 7) {
            document.getElementById("mescomparacion").innerHTML = "Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2 + " - Agosto/" + anofac2;

        }
        else if (localStorage.mesanterior == 6) {
            document.getElementById("mescomparacion").innerHTML = "Julio/" + anofac;

            document.getElementById('valor2').disabled = true;
            document.getElementById('dato2').disabled = true;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 5) {
            document.getElementById("mescomparacion").innerHTML = "Julio/" + anofac + " - Junio/" + anofac;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 4) {
            document.getElementById("mescomparacion").innerHTML = "Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 3) {
            document.getElementById("mescomparacion").innerHTML = "Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }

        else if (localStorage.mesanterior == 2) {
            document.getElementById("mescomparacion").innerHTML = "Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac;


            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 1) {
            document.getElementById("mescomparacion").innerHTML = "Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }


    }

    else if (localStorage.mesinicial == 8) {
        mesfac = 8
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 - 1
        mesfac9 = 12
        mesfac10 = mesfac9 - 1
        mesfac11 = mesfac10 - 1
        mesfac12 = mesfac11 - 1
        anofac = localStorage.añoinicial
        anofac2 = anofac - 1

        label1 = mesfac + "/" + anofac;
        label2 = mesfac2 + "/" + anofac;
        label3 = mesfac3 + "/" + anofac;
        label4 = mesfac4 + "/" + anofac;
        label5 = mesfac5 + "/" + anofac;
        label6 = mesfac6 + "/" + anofac;
        label7 = mesfac7 + "/" + anofac;
        label8 = mesfac8 + "/" + anofac;
        label9 = mesfac9 + "/" + anofac2;
        label10 = mesfac10 + "/" + anofac2;
        label11 = mesfac11 + "/" + anofac2;
        label12 = mesfac12 + "/" + anofac2;

        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac2;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac2;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac2;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac2;

        localStorage.setItem("fec1", label1);
        localStorage.setItem("fec2", label2);
        localStorage.setItem("fec3", label3);
        localStorage.setItem("fec4", label4);
        localStorage.setItem("fec5", label5);    
        localStorage.setItem("fec6", label6);  
        localStorage.setItem("fec7", label7); 
        localStorage.setItem("fec8", label8);  
        localStorage.setItem("fec9", label9);
        localStorage.setItem("fec10", label10);
        localStorage.setItem("fec11", label11);
        localStorage.setItem("fec12", label12);

        if (localStorage.mesanterior == 12) {

            document.getElementById("mescomparacion").innerHTML = "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac;


            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 11) {

            document.getElementById("mescomparacion").innerHTML = "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2;


            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 10) {

            document.getElementById("mescomparacion").innerHTML = "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 9) {

            document.getElementById("mescomparacion").innerHTML = "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 8) {
            document.getElementById("mescomparacion").innerHTML = "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2 + " - Setiembre/" + anofac2;


        }
        else if (localStorage.mesanterior == 7) {
            document.getElementById("mescomparacion").innerHTML = "Agosto/" + anofac;

            document.getElementById('valor2').disabled = true;
            document.getElementById('dato2').disabled = true;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
            

        }
        else if (localStorage.mesanterior == 6) {
            document.getElementById("mescomparacion").innerHTML = "Agosto/" + anofac + " - Julio/" + anofac;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 5) {
            document.getElementById("mescomparacion").innerHTML = "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac;


            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 4) {
            document.getElementById("mescomparacion").innerHTML = "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 3) {
            document.getElementById("mescomparacion").innerHTML = "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }

        else if (localStorage.mesanterior == 2) {
            document.getElementById("mescomparacion").innerHTML = "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac;


            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 1) {
            document.getElementById("mescomparacion").innerHTML = "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }

    }
    else if (localStorage.mesinicial == 9) {
        mesfac = 9
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 - 1
        mesfac9 = mesfac8 - 1
        mesfac10 = 12
        mesfac11 = mesfac10 - 1
        mesfac12 = mesfac11 - 1
        anofac = localStorage.añoinicial
        anofac2 = anofac - 1


        label1 = mesfac + "/" + anofac;
        label2 = mesfac2 + "/" + anofac;
        label3 = mesfac3 + "/" + anofac;
        label4 = mesfac4 + "/" + anofac;
        label5 = mesfac5 + "/" + anofac;
        label6 = mesfac6 + "/" + anofac;
        label7 = mesfac7 + "/" + anofac;
        label8 = mesfac8 + "/" + anofac;
        label9 = mesfac9 + "/" + anofac;
        label10 = mesfac10 + "/" + anofac2;
        label11 = mesfac11 + "/" + anofac2;
        label12 = mesfac12 + "/" + anofac2;

        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac2;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac2;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac2;


        localStorage.setItem("fec1", label1);
        localStorage.setItem("fec2", label2);
        localStorage.setItem("fec3", label3);
        localStorage.setItem("fec4", label4);
        localStorage.setItem("fec5", label5);    
        localStorage.setItem("fec6", label6);  
        localStorage.setItem("fec7", label7); 
        localStorage.setItem("fec8", label8);  
        localStorage.setItem("fec9", label9);
        localStorage.setItem("fec10", label10);
        localStorage.setItem("fec11", label11);
        localStorage.setItem("fec12", label12);

        if (localStorage.mesanterior == 12) {

            document.getElementById("mescomparacion").innerHTML = "Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac+ " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac;



            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 11) {

            document.getElementById("mescomparacion").innerHTML = "Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac+ " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2;


            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 10) {

            document.getElementById("mescomparacion").innerHTML = "Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac+ " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2;

            

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 9) {

            document.getElementById("mescomparacion").innerHTML =  "Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac+ " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2 + " - Octubre/" + anofac2;
  

        }
        else if (localStorage.mesanterior == 8) {
            document.getElementById("mescomparacion").innerHTML = "Setiembre/" + anofac;
            document.getElementById('valor2').disabled = true;
            document.getElementById('dato2').disabled = true;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 7) {
            document.getElementById("mescomparacion").innerHTML = "Setiembre/" + anofac + " - Agosto/" + anofac;


            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
            

        }
        else if (localStorage.mesanterior == 6) {
            document.getElementById("mescomparacion").innerHTML = "Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac;


            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 5) {
            document.getElementById("mescomparacion").innerHTML = "Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 4) {
            document.getElementById("mescomparacion").innerHTML = "Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac+ " - Mayo/" + anofac;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 3) {
            document.getElementById("mescomparacion").innerHTML = "Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac+ " - Mayo/" + anofac + " - Abril/" + anofac;


            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }

        else if (localStorage.mesanterior == 2) {
            document.getElementById("mescomparacion").innerHTML = "Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac+ " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac;


            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 1) {
            document.getElementById("mescomparacion").innerHTML = "Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac+ " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac;


            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }

    }
    else if (localStorage.mesinicial == 10) {
        mesfac = 10
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 - 1
        mesfac9 = mesfac8 - 1
        mesfac10 = mesfac9 - 1
        mesfac11 = 12
        mesfac12 = mesfac11 - 1
        anofac = localStorage.añoinicial
        anofac2 = anofac - 1

        label1 = mesfac + "/" + anofac;
        label2 = mesfac2 + "/" + anofac;
        label3 = mesfac3 + "/" + anofac;
        label4 = mesfac4 + "/" + anofac;
        label5 = mesfac5 + "/" + anofac;
        label6 = mesfac6 + "/" + anofac;
        label7 = mesfac7 + "/" + anofac;
        label8 = mesfac8 + "/" + anofac;
        label9 = mesfac9 + "/" + anofac;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac2;
        label12 = mesfac12 + "/" + anofac2;

        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac2;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac2;

        localStorage.setItem("fec1", label1);
        localStorage.setItem("fec2", label2);
        localStorage.setItem("fec3", label3);
        localStorage.setItem("fec4", label4);
        localStorage.setItem("fec5", label5);    
        localStorage.setItem("fec6", label6);  
        localStorage.setItem("fec7", label7); 
        localStorage.setItem("fec8", label8);  
        localStorage.setItem("fec9", label9);
        localStorage.setItem("fec10", label10);
        localStorage.setItem("fec11", label11);
        localStorage.setItem("fec12", label12);

        if (localStorage.mesanterior == 12) {

            document.getElementById("mescomparacion").innerHTML = "Octubre/" + anofac + "Septiembre/" + anofac + "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 11) {

            document.getElementById("mescomparacion").innerHTML = "Octubre/" + anofac + "Septiembre/" + anofac + "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2;


            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 10) {

            document.getElementById("mescomparacion").innerHTML = "Octubre/" + anofac + "Septiembre/" + anofac + "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 + " - Noviembre/" + anofac2;


        }
        else if (localStorage.mesanterior == 9) {

            document.getElementById("mescomparacion").innerHTML = "Octubre/" + anofac;


            document.getElementById('valor2').disabled = true;
            document.getElementById('dato2').disabled = true;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
            

        }
        else if (localStorage.mesanterior == 8) {
            document.getElementById("mescomparacion").innerHTML = "Octubre/" + anofac + "Setiembre/" + anofac;


            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
            


        }
        else if (localStorage.mesanterior == 7) {
            document.getElementById("mescomparacion").innerHTML = "Octubre/" + anofac + "Septiembre/" + anofac + "Agosto/" + anofac;
            

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
            
            

        }
        else if (localStorage.mesanterior == 6) {
            document.getElementById("mescomparacion").innerHTML = "Octubre/" + anofac + "Septiembre/" + anofac + "Agosto/" + anofac + " - Julio/" + anofac;


            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
            

        }
        else if (localStorage.mesanterior == 5) {
            document.getElementById("mescomparacion").innerHTML = "Octubre/" + anofac + "Septiembre/" + anofac + "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac;



            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 4) {
            document.getElementById("mescomparacion").innerHTML = "Octubre/" + anofac + "Septiembre/" + anofac + "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac;


            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 3) {
            document.getElementById("mescomparacion").innerHTML = "Octubre/" + anofac + "Septiembre/" + anofac + "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac;


            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }

        else if (localStorage.mesanterior == 2) {
            document.getElementById("mescomparacion").innerHTML = "Octubre/" + anofac + "Septiembre/" + anofac + "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;



        }
        else if (localStorage.mesanterior == 1) {
            document.getElementById("mescomparacion").innerHTML = "Octubre/" + anofac + "Septiembre/" + anofac + "Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }

    }
    else if (localStorage.mesinicial == 11) {
        mesfac = 11
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 - 1
        mesfac9 = mesfac8 - 1
        mesfac10 = mesfac9 - 1
        mesfac11 = mesfac10 - 1
        mesfac12 = 12
        anofac = localStorage.añoinicial
        anofac2 = anofac - 1

        label1 = mesfac + "/" + anofac;
        label2 = mesfac2 + "/" + anofac;
        label3 = mesfac3 + "/" + anofac;
        label4 = mesfac4 + "/" + anofac;
        label5 = mesfac5 + "/" + anofac;
        label6 = mesfac6 + "/" + anofac;
        label7 = mesfac7 + "/" + anofac;
        label8 = mesfac8 + "/" + anofac;
        label9 = mesfac9 + "/" + anofac;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac2;

        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac2;

        localStorage.setItem("fec1", label1);
        localStorage.setItem("fec2", label2);
        localStorage.setItem("fec3", label3);
        localStorage.setItem("fec4", label4);
        localStorage.setItem("fec5", label5);    
        localStorage.setItem("fec6", label6);  
        localStorage.setItem("fec7", label7); 
        localStorage.setItem("fec8", label8);  
        localStorage.setItem("fec9", label9);
        localStorage.setItem("fec10", label10);
        localStorage.setItem("fec11", label11);
        localStorage.setItem("fec12", label12);


        if (localStorage.mesanterior == 12) {

            document.getElementById("mescomparacion").innerHTML = "Noviembre/" + anofac + " - Octubre/" + anofac + " - Septiembre/" + anofac  + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac;
  

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 11) {

            document.getElementById("mescomparacion").innerHTML = "Noviembre/" + anofac + " - Octubre/" + anofac + " - Septiembre/" + anofac  + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac + " - Diciembre/" + anofac2 ;

    
        }
        else if (localStorage.mesanterior == 10) {

            document.getElementById("mescomparacion").innerHTML = "Noviembre/" + anofac;

            document.getElementById('valor2').disabled = true;
            document.getElementById('dato2').disabled = true;

            document.getElementById('valor2').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 9) {

            document.getElementById("mescomparacion").innerHTML = "Noviembre/" + anofac + " - Octubre/" + anofac;


            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 8) {
            document.getElementById("mescomparacion").innerHTML = "Noviembre/" + anofac + " - Octubre/" + anofac + " - Septiembre/" + anofac;


            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 7) {
            document.getElementById("mescomparacion").innerHTML = "Noviembre/" + anofac + " - Octubre/" + anofac + " - Septiembre/" + anofac  + " - Agosto/" + anofac;


            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
            

        }
        else if (localStorage.mesanterior == 6) {
            document.getElementById("mescomparacion").innerHTML = "Noviembre/" + anofac + " - Octubre/" + anofac + " - Septiembre/" + anofac  + " - Agosto/" + anofac + " - Julio/" + anofac;


            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 5) {
            document.getElementById("mescomparacion").innerHTML = "Noviembre/" + anofac + " - Octubre/" + anofac + " - Septiembre/" + anofac  + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 4) {
            document.getElementById("mescomparacion").innerHTML = "Noviembre/" + anofac + " - Octubre/" + anofac + " - Septiembre/" + anofac  + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 3) {
            document.getElementById("mescomparacion").innerHTML = "Noviembre/" + anofac + " - Octubre/" + anofac + " - Septiembre/" + anofac  + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }

        else if (localStorage.mesanterior == 2) {
            document.getElementById("mescomparacion").innerHTML = "Noviembre/" + anofac + " - Octubre/" + anofac + " - Septiembre/" + anofac  + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 1) {
            document.getElementById("mescomparacion").innerHTML = "Noviembre/" + anofac + " - Octubre/" + anofac + " - Septiembre/" + anofac  + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
    }
    else if (localStorage.mesinicial == 12) {
        mesfac = 12
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 - 1
        mesfac9 = mesfac8 - 1
        mesfac10 = mesfac9 - 1
        mesfac11 = mesfac10 - 1
        mesfac12 = mesfac11 - 1
        anofac = localStorage.añoinicial
        anofac2 = anofac -1

        label1 = mesfac + "/" + anofac;
        label2 = mesfac2 + "/" + anofac;
        label3 = mesfac3 + "/" + anofac;
        label4 = mesfac4 + "/" + anofac;
        label5 = mesfac5 + "/" + anofac;
        label6 = mesfac6 + "/" + anofac;
        label7 = mesfac7 + "/" + anofac;
        label8 = mesfac8 + "/" + anofac;
        label9 = mesfac9 + "/" + anofac;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;

        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;

        localStorage.setItem("fec1", label1);
        localStorage.setItem("fec2", label2);
        localStorage.setItem("fec3", label3);
        localStorage.setItem("fec4", label4);
        localStorage.setItem("fec5", label5);    
        localStorage.setItem("fec6", label6);  
        localStorage.setItem("fec7", label7); 
        localStorage.setItem("fec8", label8);  
        localStorage.setItem("fec9", label9);
        localStorage.setItem("fec10", label10);
        localStorage.setItem("fec11", label11);
        localStorage.setItem("fec12", label12);


        if (localStorage.mesanterior == 12) {

            document.getElementById("mescomparacion").innerHTML = "Diciembre/" + anofac + " - Noviembre/" + anofac + " - Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac + " - Enero/" + anofac;
                      

        }
        else if (localStorage.mesanterior == 11) {

            document.getElementById("mescomparacion").innerHTML = "Diciembre/" + anofac;

            document.getElementById('valor2').disabled = true;
            document.getElementById('dato2').disabled = true;

            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 10) {

            document.getElementById("mescomparacion").innerHTML =  "Diciembre/" + anofac  + " - Noviembre/" + anofac;


            document.getElementById('valor3').disabled = true;
            document.getElementById('dato3').disabled = true;

            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 9) {

            document.getElementById("mescomparacion").innerHTML = "Diciembre/" + anofac + " - Noviembre/" + anofac + " - Setiembre/" + anofac 


            document.getElementById('valor4').disabled = true;
            document.getElementById('dato4').disabled = true;

            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 8) {
            document.getElementById("mescomparacion").innerHTML = "Diciembre/" + anofac + " - Noviembre/" + anofac + " - Setiembre/" + anofac + " - Octubre/" + anofac;


            document.getElementById('valor5').disabled = true;
            document.getElementById('dato5').disabled = true;

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 7) {
            document.getElementById("mescomparacion").innerHTML = "Diciembre/" + anofac + " - Noviembre/" + anofac + " - Setiembre/" + anofac + " - Octubre/" + anofac; + " - Agosto/" + anofac;
        

            document.getElementById('valor6').disabled = true;
            document.getElementById('dato6').disabled = true;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 6) {
            document.getElementById("mescomparacion").innerHTML = "Diciembre/" + anofac + " - Noviembre/" + anofac + " - Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac;

            document.getElementById('valor7').disabled = true;
            document.getElementById('dato7').disabled = true;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;

        }
        else if (localStorage.mesanterior == 5) {
            document.getElementById("mescomparacion").innerHTML = "Diciembre/" + anofac + " - Noviembre/" + anofac + " - Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac;

            document.getElementById('valor8').disabled = true;
            document.getElementById('dato8').disabled = true;

            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;


        }
        else if (localStorage.mesanterior == 4) {
            document.getElementById("mescomparacion").innerHTML = "Diciembre/" + anofac + " - Noviembre/" + anofac + " - Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac;


            document.getElementById('valor9').disabled = true;
            document.getElementById('dato9').disabled = true;

            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 3) {
            document.getElementById("mescomparacion").innerHTML = "Diciembre/" + anofac + " - Noviembre/" + anofac + " - Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac;


            document.getElementById('valor10').disabled = true;
            document.getElementById('dato10').disabled = true;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }

        else if (localStorage.mesanterior == 2) {
            document.getElementById("mescomparacion").innerHTML = "Diciembre/" + anofac + " - Noviembre/" + anofac + " - Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac;

            document.getElementById('valor11').disabled = true;
            document.getElementById('dato11').disabled = true;

            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }
        else if (localStorage.mesanterior == 1) {
            document.getElementById("mescomparacion").innerHTML = "Diciembre/" + anofac + " - Noviembre/" + anofac + " - Setiembre/" + anofac + " - Agosto/" + anofac + " - Julio/" + anofac + " - Junio/" + anofac + " - Mayo/" + anofac + " - Abril/" + anofac + " - Marzo/" + anofac + " - Febrero/" + anofac;                   
            
            document.getElementById('valor12').disabled = true;
            document.getElementById('dato12').disabled = true;
        }

    }
    else {

    }




}


function grafico(){
    var lecturahoy = document.getElementById('lecturahoy').value;
    localStorage.setItem("lecturaHoy", lecturahoy);
    window.location.replace('./grafico.html');
}


function mostrarGrafico(){

    var TotalMeses = parseInt(localStorage.getItem("TotalMeses"));
    var lecturaB = parseInt(localStorage.getItem("lecturaB"));
    var lecturaA = parseInt(localStorage.getItem("lecturaA"));
    var lecturaHoy = parseInt(localStorage.getItem("lecturaHoy"));

 


    var totalmesxb = lecturaB + TotalMeses;
    console.log("valor total puro: " + totalmesxb)


    document.getElementById('consumototal').value = totalmesxb;
    document.getElementById('llecturaa').value = lecturaA;
    document.getElementById('llecturab').value = lecturaB;
    document.getElementById('llecturahoy').value = lecturaHoy;

    
    var maximoconsumo = Math.max(lecturaHoy, lecturaA , totalmesxb) +150;
    var minimoconsumo = Math.min(lecturaHoy, lecturaA , totalmesxb) - 150;

    var rango = (maximoconsumo - minimoconsumo)/5


    if ( lecturaA != totalmesxb) {
        mensaje= document.getElementById("mensaje")
        mensaje.innerHTML = "Su calculo de consumo no es conforme";
        mensaje.style.color = "red";
    }
    else {
        mensaje= document.getElementById("mensaje")
        mensaje.innerHTML = "Su calculo de consumo es conforme";
        mensaje.style.color = "blue";

    }

    
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [localStorage.fec1 , localStorage.fec2, localStorage.fec3, localStorage.fec4, localStorage.fec5, localStorage.fec6, localStorage.fec7, localStorage.fec8,
                localStorage.fec9, localStorage.fec10, localStorage.fec11, localStorage.fec12],
            datasets: [{
                label: ' ',
                data: [localStorage.valor1, localStorage.valor2, localStorage.valor3, localStorage.valor4, localStorage.valor5, localStorage.valor6, localStorage.valor7,
                    localStorage.valor8, localStorage.valor9, localStorage.valor10, localStorage.valor11, localStorage.valor12],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var f = new Date();
    let fecha = (f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
    console.log(fecha);

   

    Chart.defaults.global.defaultFontSize = 12;

    var chartPluginLineaHorizontal = {
        afterDraw: function(chartobj) {
          if (chartobj.options.lineaHorizontal) {
            var ctx = chartobj.chart.ctx;
            var valorY = chartobj.scales["y-axis-0"].getPixelForValue(chartobj.options.lineaHorizontal);
            ctx.beginPath();
            ctx.moveTo(0, valorY);
            ctx.lineTo(chartobj.chart.width, valorY);
            ctx.strokeStyle = "red";
            ctx.stroke();
          }
        }
      }
      Chart.pluginService.register(chartPluginLineaHorizontal);



      var ctx1 = document.getElementById('myChart2');
      var myChart2 = new Chart(ctx1, {
          type: 'bar',
          data: {
              labels: [fecha, 'Lectura A', 'Consumo'],
              datasets: [{
                  label: ' ',
                  data: [localStorage.lecturaHoy, localStorage.lecturaA, totalmesxb],
                  backgroundColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 159, 64, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 206, 86, 1)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 159, 64, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 206, 86, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: 
          {
              lineaHorizontal: totalmesxb,
              scales: {
                  yAxes: [{
                      ticks: {
                          min: minimoconsumo,
                          max: maximoconsumo,
                          stepSize: rango
                      },
                  }]
              }
          }
      });


}

function nuevadata(){
    
    localStorage.removeItem('mesinicial');
    localStorage.removeItem('añoinicial');
    localStorage.removeItem('mesanterior');
    localStorage.removeItem('anoanterior');
    localStorage.removeItem('fec1');
    localStorage.removeItem('valor1');
    localStorage.removeItem('fec2');
    localStorage.removeItem('valor2');
    localStorage.removeItem('fec3');
    localStorage.removeItem('valor3');
    localStorage.removeItem('fec4');
    localStorage.removeItem('valor4');
    localStorage.removeItem('fec5');
    localStorage.removeItem('valor5');
    localStorage.removeItem('fec6');
    localStorage.removeItem('valor6');
    localStorage.removeItem('fec7');
    localStorage.removeItem('valor7');
    localStorage.removeItem('fec8');
    localStorage.removeItem('valor8');
    localStorage.removeItem('fec9');
    localStorage.removeItem('valor9');
    localStorage.removeItem('fec10');
    localStorage.removeItem('valor10');
    localStorage.removeItem('fec11');
    localStorage.removeItem('valor11');
    localStorage.removeItem('fec12');
    localStorage.removeItem('valor12');
    localStorage.removeItem('TotalMeses');  
    localStorage.removeItem('lecturaA');
    localStorage.removeItem('lecturaB');
    localStorage.removeItem('lecturaHoy');
    localStorage.removeItem('lecturaA');

    window.location.replace('./index.html');

}


function traermeses(){

    var MesInicial1 = parseInt(localStorage.getItem("mesinicial"));
    var AnoInicial = (localStorage.getItem("añoinicial"));
    var anoanterior = (localStorage.getItem("anoanterior"));
    var MesAnterior1 = parseInt(localStorage.getItem("mesanterior"));
    console.log(MesInicial1);
    switch(MesInicial1){
        case 1: document.getElementById('lcarultimo').innerHTML = "Recibo a completar es del mes: Enero" + "/" + AnoInicial;
        break;
        case 2: document.getElementById('lcarultimo').innerHTML = "Recibo a completar es del mes: Febrero" + "/" + AnoInicial;
        break;
        case 3: document.getElementById('lcarultimo').innerHTML = "Recibo a completar es del mes: Marzo" + "/" + AnoInicial;
        break;
        case 4: document.getElementById('lcarultimo').innerHTML = "Recibo a completar es del mes: Abril" + "/" + AnoInicial;
        break;
        case 5: document.getElementById('lcarultimo').innerHTML = "Recibo a completar es del mes: Mayo" + "/" + AnoInicial;
        break;
        case 6: document.getElementById('lcarultimo').innerHTML = "Recibo a completar es del mes: Junio" + "/" + AnoInicial;
        break;
        case 7: document.getElementById('lcarultimo').innerHTML = "Recibo a completar es del mes: Julio" + "/" + AnoInicial;
        break;
        case 8: document.getElementById('lcarultimo').innerHTML = "Recibo a completar es del mes: Agostro" + "/" + AnoInicial;
        break;
        case 9: document.getElementById('lcarultimo').innerHTML = "Recibo a completar es del mes: Septiembre" + "/" + AnoInicial;
        break;
        case 10: document.getElementById('lcarultimo').innerHTML = "Recibo a completar es del mes: Octubre" + "/" + AnoInicial;
        break;
        case 11: document.getElementById('lcarultimo').innerHTML = "Recibo a completar es del mes: Noviembre" + "/" + AnoInicial;
        break;
        case 12: document.getElementById('lcarultimo').innerHTML = "Recibo a completar es del mes: Diciembre" + "/" + AnoInicial;
        default: document.getElementById('lcarultimo').innerHTML = "Valor no ingresado correctamente";

    }

    switch(MesAnterior1){
        case 1: document.getElementById('lcarcomparar').innerHTML = "Recibo a completar es del mes: Enero" + "/" + AnoInicial;
        break;
        case 2: document.getElementById('lcarcomparar').innerHTML = "Recibo a completar es del mes: Febrero" + "/" + AnoInicial;
        break;
        case 3: document.getElementById('lcarcomparar').innerHTML = "Recibo a completar es del mes: Marzo" + "/" + AnoInicial;
        break;
        case 4: document.getElementById('lcarcomparar').innerHTML = "Recibo a completar es del mes: Abril" + "/" + AnoInicial;
        break;
        case 5: document.getElementById('lcarcomparar').innerHTML = "Recibo a completar es del mes: Mayo" + "/" + AnoInicial;
        break;
        case 6: document.getElementById('lcarcomparar').innerHTML = "Recibo a completar es del mes: Junio" + "/" + AnoInicial;
        break;
        case 7: document.getElementById('lcarcomparar').innerHTML = "Recibo a completar es del mes: Julio" + "/" + AnoInicial;
        break;
        case 8: document.getElementById('lcarcomparar').innerHTML = "Recibo a completar es del mes: Agostro" + "/" + AnoInicial;
        break;
        case 9: document.getElementById('lcarcomparar').innerHTML = "Recibo a completar es del mes: Septiembre" + "/" + AnoInicial;
        break;
        case 10: document.getElementById('lcarcomparar').innerHTML = "Recibo a completar es del mes: Octubre" + "/" + AnoInicial;
        break;
        case 11: document.getElementById('lcarcomparar').innerHTML = "Recibo a completar es del mes: Noviembre" + "/" + AnoInicial;
        break;
        case 12: document.getElementById('lcarcomparar').innerHTML = "Recibo a completar es del mes: Diciembre" + "/" + AnoInicial;
        default: document.getElementById('lcarcomparar').innerHTML = "Valor no ingresado correctamente";

    }

   
}