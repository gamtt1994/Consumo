function cambiomes() {
    var anofac = document.getElementById('año').value;
    var mesfac = document.getElementById('mes').value;
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
    
    if (valor1.checked == true) {
        valor1.value = dato;
        console.log(valor1.value)
    }
    if (valor2.checked == true) {
        valor2.value = dato2;
        console.log(valor2.value)
    }
    if (valor3.checked == true) {
        valor3.value = dato3;
        console.log(valor3.value)
    }
    if (valor4.checked == true) {
        valor4.value = dato4;
        console.log(valor4.value)
    }
    if (valor5.checked == true) {
        valor5.value = dato5;
        console.log(valor5.value)
    }
    if (valor6.checked == true) {
        valor6.value = dato6;
        console.log(valor6.value)
    }
    
    if (valor7.checked == true) {
        valor7.value = dato7;
        console.log(valor7.value)
    }
    
    if (valor8.checked == true) {
        valor8.value = dato8;
        console.log(valor8.value)
    }
    
    if (valor9.checked == true) {
        valor9.value = dato9;
        console.log(valor9.value)
    }
    
    if (valor10.checked == true) {
        valor10.value = dato10;
        console.log(valor10.value)
    }

    if (valor11.checked == true) {
        valor11.value = dato11;
        console.log(valor11.value)
    }
    

    if (valor12.checked == true) {
        valor12.value = dato12;
        console.log(valor12.value)
    }
    

    if (mesfac == 1) {
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
        anofac = anofac - 1
        mesanio = mesfac2 + "/" + anofac

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
     

    }
    else if (mesfac == 2) {
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
        anofac1 = anofac
        anofac = anofac - 1
        mesanio = mesfac2 + "/" + anofac

        label1 = mesfac + "/" + anofac1;
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


        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
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

    }

    else if (mesfac == 3) {
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
        anofac1 = anofac
        anofac = anofac - 1
        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
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
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
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

    }
    else if (mesfac == 4) {
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
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
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
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;

    }
    else if (mesfac == 5) {
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
        anofac1 = anofac
        anofac = anofac - 1


        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac;
        label6 = mesfac6 + "/" + anofac;
        label7 = mesfac7 + "/" + anofac;
        label8 = mesfac8 + "/" + anofac;
        label9 = mesfac9 + "/" + anofac;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;

    }

    else if (mesfac == 6) {
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
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac1;
        label6 = mesfac6 + "/" + anofac1;
        label7 = mesfac7 + "/" + anofac;
        label8 = mesfac8 + "/" + anofac;
        label9 = mesfac9 + "/" + anofac;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac1;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;

    }

    else if (mesfac == 7) {
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
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac1;
        label6 = mesfac6 + "/" + anofac1;
        label7 = mesfac7 + "/" + anofac1;
        label8 = mesfac8 + "/" + anofac;
        label9 = mesfac9 + "/" + anofac;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac1;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac1;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;


    }

    else if (mesfac == 8) {
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
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac1;
        label6 = mesfac6 + "/" + anofac1;
        label7 = mesfac7 + "/" + anofac1;
        label8 = mesfac8 + "/" + anofac;
        label9 = mesfac9 + "/" + anofac;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac1;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac1;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac1;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;

    }
    else if (mesfac == 9) {
        mesfac = 8
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 -1
        mesfac9 = 12
        mesfac10 = mesfac9 - 1
        mesfac11 = mesfac10 - 1
        mesfac12 = mesfac11 - 1
        anofac1 = anofac
        anofac = anofac - 1


        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac1;
        label6 = mesfac6 + "/" + anofac1;
        label7 = mesfac7 + "/" + anofac1;
        label8 = mesfac8 + "/" + anofac1;
        label9 = mesfac9 + "/" + anofac;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac1;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac1;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac1;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac1;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;


    }
    else if (mesfac == 10) {
        mesfac = 9
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 -1
        mesfac9 = mesfac8 -1
        mesfac10 = 12
        mesfac11 = mesfac10 - 1
        mesfac12 = mesfac11 - 1
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac1;
        label6 = mesfac6 + "/" + anofac1;
        label7 = mesfac7 + "/" + anofac1;
        label8 = mesfac8 + "/" + anofac1;
        label9 = mesfac9 + "/" + anofac1;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac1;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac1;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac1;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac1;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac1;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;

    }
    else if (mesfac == 11) {
        mesfac = 10
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 -1
        mesfac9 = mesfac8 -1
        mesfac10 = mesfac9 -1
        mesfac11 = 12
        mesfac12 = mesfac11 - 1
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac1;
        label6 = mesfac6 + "/" + anofac1;
        label7 = mesfac7 + "/" + anofac1;
        label8 = mesfac8 + "/" + anofac1;
        label9 = mesfac9 + "/" + anofac1;
        label10 = mesfac10 + "/" + anofac1;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac1;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac1;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac1;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac1;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac1;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac1;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;
    }
    else if (mesfac == 12) {
        mesfac = 11
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 -1
        mesfac9 = mesfac8 -1
        mesfac10 = mesfac9 -1
        mesfac11 = mesfac10-1
        mesfac12 = 12
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac1;
        label6 = mesfac6 + "/" + anofac1;
        label7 = mesfac7 + "/" + anofac1;
        label8 = mesfac8 + "/" + anofac1;
        label9 = mesfac9 + "/" + anofac1;
        label10 = mesfac10 + "/" + anofac1;
        label11 = mesfac11 + "/" + anofac1;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac1;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac1;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac1;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac1;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac1;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac1;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac1;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;
    }
}




function cambioaño() {
    var anofac = document.getElementById('año').value;
    var mesfac = document.getElementById('mes').value;
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
    
    if (valor1.checked == true) {
        valor1.value = dato;
        console.log(valor1.value)
    }
    if (valor2.checked == true) {
        valor2.value = dato2;
        console.log(valor2.value)
    }
    if (valor3.checked == true) {
        valor3.value = dato3;
        console.log(valor3.value)
    }
    if (valor4.checked == true) {
        valor4.value = dato4;
        console.log(valor4.value)
    }
    if (valor5.checked == true) {
        valor5.value = dato5;
        console.log(valor5.value)
    }
    if (valor6.checked == true) {
        valor6.value = dato6;
        console.log(valor6.value)
    }
    
    if (valor7.checked == true) {
        valor7.value = dato7;
        console.log(valor7.value)
    }
    
    if (valor8.checked == true) {
        valor8.value = dato8;
        console.log(valor8.value)
    }
    
    if (valor9.checked == true) {
        valor9.value = dato9;
        console.log(valor9.value)
    }
    
    if (valor10.checked == true) {
        valor10.value = dato10;
        console.log(valor10.value)
    }

    if (valor11.checked == true) {
        valor11.value = dato11;
        console.log(valor11.value)
    }
    

    if (valor12.checked == true) {
        valor12.value = dato12;
        console.log(valor12.value)
    }
    

    if (mesfac == 1) {
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
        anofac = anofac - 1
        mesanio = mesfac2 + "/" + anofac

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
     

    }
    else if (mesfac == 2) {
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
        anofac1 = anofac
        anofac = anofac - 1
        mesanio = mesfac2 + "/" + anofac

        label1 = mesfac + "/" + anofac1;
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


        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
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

    }

    else if (mesfac == 3) {
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
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
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
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
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

    }
    else if (mesfac == 4) {
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
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
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
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;

    }
    else if (mesfac == 5) {
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
        anofac1 = anofac
        anofac = anofac - 1


        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac;
        label6 = mesfac6 + "/" + anofac;
        label7 = mesfac7 + "/" + anofac;
        label8 = mesfac8 + "/" + anofac;
        label9 = mesfac9 + "/" + anofac;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;

    }

    else if (mesfac == 6) {
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
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac1;
        label6 = mesfac6 + "/" + anofac1;
        label7 = mesfac7 + "/" + anofac;
        label8 = mesfac8 + "/" + anofac;
        label9 = mesfac9 + "/" + anofac;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac1;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;

    }

    else if (mesfac == 7) {
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
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac1;
        label6 = mesfac6 + "/" + anofac1;
        label7 = mesfac7 + "/" + anofac1;
        label8 = mesfac8 + "/" + anofac;
        label9 = mesfac9 + "/" + anofac;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac1;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac1;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;


    }

    else if (mesfac == 8) {
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
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac1;
        label6 = mesfac6 + "/" + anofac1;
        label7 = mesfac7 + "/" + anofac1;
        label8 = mesfac8 + "/" + anofac;
        label9 = mesfac9 + "/" + anofac;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac1;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac1;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac1;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;

    }
    else if (mesfac == 9) {
        mesfac = 8
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 -1
        mesfac9 = 12
        mesfac10 = mesfac9 - 1
        mesfac11 = mesfac10 - 1
        mesfac12 = mesfac11 - 1
        anofac1 = anofac
        anofac = anofac - 1


        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac1;
        label6 = mesfac6 + "/" + anofac1;
        label7 = mesfac7 + "/" + anofac1;
        label8 = mesfac8 + "/" + anofac1;
        label9 = mesfac9 + "/" + anofac;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac1;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac1;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac1;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac1;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;


    }
    else if (mesfac == 10) {
        mesfac = 9
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 -1
        mesfac9 = mesfac8 -1
        mesfac10 = 12
        mesfac11 = mesfac10 - 1
        mesfac12 = mesfac11 - 1
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac1;
        label6 = mesfac6 + "/" + anofac1;
        label7 = mesfac7 + "/" + anofac1;
        label8 = mesfac8 + "/" + anofac1;
        label9 = mesfac9 + "/" + anofac1;
        label10 = mesfac10 + "/" + anofac;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac1;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac1;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac1;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac1;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac1;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;

    }
    else if (mesfac == 11) {
        mesfac = 10
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 -1
        mesfac9 = mesfac8 -1
        mesfac10 = mesfac9 -1
        mesfac11 = 12
        mesfac12 = mesfac11 - 1
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac1;
        label6 = mesfac6 + "/" + anofac1;
        label7 = mesfac7 + "/" + anofac1;
        label8 = mesfac8 + "/" + anofac1;
        label9 = mesfac9 + "/" + anofac1;
        label10 = mesfac10 + "/" + anofac1;
        label11 = mesfac11 + "/" + anofac;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac1;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac1;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac1;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac1;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac1;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac1;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;
    }
    else if (mesfac == 12) {
        mesfac = 11
        mesfac2 = mesfac - 1
        mesfac3 = mesfac2 - 1
        mesfac4 = mesfac3 - 1
        mesfac5 = mesfac4 - 1
        mesfac6 = mesfac5 - 1
        mesfac7 = mesfac6 - 1
        mesfac8 = mesfac7 -1
        mesfac9 = mesfac8 -1
        mesfac10 = mesfac9 -1
        mesfac11 = mesfac10-1
        mesfac12 = 12
        anofac1 = anofac
        anofac = anofac - 1

        label1 = mesfac + "/" + anofac1;
        label2 = mesfac2 + "/" + anofac1;
        label3 = mesfac3 + "/" + anofac1;
        label4 = mesfac4 + "/" + anofac1;
        label5 = mesfac5 + "/" + anofac1;
        label6 = mesfac6 + "/" + anofac1;
        label7 = mesfac7 + "/" + anofac1;
        label8 = mesfac8 + "/" + anofac1;
        label9 = mesfac9 + "/" + anofac1;
        label10 = mesfac10 + "/" + anofac1;
        label11 = mesfac11 + "/" + anofac1;
        label12 = mesfac12 + "/" + anofac;
        
        mesanio = mesfac2 + "/" + anofac
        document.getElementById("mes1").innerHTML = "El mes y año: " + mesfac + "/" + anofac1;
        document.getElementById("mes2").innerHTML = "El mes y año: " + mesfac2 + "/" + anofac1;
        document.getElementById("mes3").innerHTML = "El mes y año: " + mesfac3 + "/" + anofac1;
        document.getElementById("mes4").innerHTML = "El mes y año: " + mesfac4 + "/" + anofac1;
        document.getElementById("mes5").innerHTML = "El mes y año: " + mesfac5 + "/" + anofac1;
        document.getElementById("mes6").innerHTML = "El mes y año: " + mesfac6 + "/" + anofac1;
        document.getElementById("mes7").innerHTML = "El mes y año: " + mesfac7 + "/" + anofac1;
        document.getElementById("mes8").innerHTML = "El mes y año: " + mesfac8 + "/" + anofac1;
        document.getElementById("mes9").innerHTML = "El mes y año: " + mesfac9 + "/" + anofac1;
        document.getElementById("mes10").innerHTML = "El mes y año: " + mesfac10 + "/" + anofac1;
        document.getElementById("mes11").innerHTML = "El mes y año: " + mesfac11 + "/" + anofac1;
        document.getElementById("mes12").innerHTML = "El mes y año: " + mesfac12 + "/" + anofac;
    }
}