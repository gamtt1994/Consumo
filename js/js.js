
function enviar1() {
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
    var lecturahoy = document.getElementById('lecturahoy').value;
    var lecturaa = document.getElementById('lecturaa').value;
    var lecturabb = document.getElementById('lecturab').value;



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
    var totalParts = parseInt(tot.val()).toFixed(2).split('.');



    var total = document.getElementById('total').value;

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [label1, label2, label3, label4, label5, label6, label7, label8, label9, label10, label11, label12],
            datasets: [{
                label: ' ',
                data: [dato, dato2, dato3, dato4, dato5, dato6, dato7, dato8, dato9, dato10, dato11, dato12],
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
    console.log(totalParts);
    console.log(total);

    var valormaximo = Math.max(lecturahoy, lecturaa, total)

    var rango = valormaximo/10

    Chart.defaults.global.defaultFontSize = 12;

    var ctx1 = document.getElementById('myChart2');
    var myChart2 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [fecha, 'Lectura A', 'Consumo'],
            datasets: [{
                label: ' ',
                data: [lecturahoy, lecturaa, total],
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
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: valormaximo,
                        stepSize: rango
                    },
                }]
            }
        }
    });

    
   

    var densityCanvas = document.getElementById("densityChart");

  

    var densityData = {
        label: 'Consumo',
        data: [lecturahoy, lecturaa, total],
        backgroundColor: [
            'rgba(0, 99, 132, 0.6)',
            'rgba(30, 99, 132, 0.6)',
            'rgba(60, 99, 132, 0.6)'
        ],
        borderColor: [
            'rgba(0, 99, 132, 1)',
            'rgba(30, 99, 132, 1)',
            'rgba(60, 99, 132, 1)'
        ],
        borderWidth: 2,
        hoverBorderWidth: 0
    };

    var chartOptions = {
        scales: {
            yAxes: [{
                barPercentage: 1,
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "black",
                    zeroLineWidth: 2
                },
                ticks: {
                    min: 0,
                    max: valormaximo,
                    stepSize: rango
                },
                scaleLabel: {
                    display: true,
                }
            }]
        },
        elements: {
            rectangle: {
                borderSkipped: 'left',
            }
        }
    };

    var barChart = new Chart(densityCanvas, {
        type: 'horizontalBar',
        data: {
            labels: [fecha, 'Lectura A', 'Consumo'],
            datasets: [densityData],
        },
        options: chartOptions
    });



}
