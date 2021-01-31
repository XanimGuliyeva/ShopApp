
$(function() {
    "use strict";
    
    // ============================================================== 
    // Revenue Cards
    // ============================================================== 
     Morris.Bar({
                element: 'morris_bar',
                data: [
                    { x: 'Jan', y: 12 },
                    { x: 'Feb', y: 15 },
                    { x: 'March', y: 18 },
                    { x: 'April', y: 22 },
                    { x: 'May', y: 28 },
                    { x: 'June', y: 20 },
                    { x: 'July', y: 17 },
                    { x: 'August', y: 14 },
                    { x: 'Sep', y: 10 }
                ],
                xkey: 'x',
                ykeys: ['y'],
                labels: ['Y'],
                   barColors: ['#5969ff'],
                     resize: true,
                        gridTextSize: '14px'

            });



    new Chartist.Line('.ct-chart-area', {
                    labels: ['Jan 2018' , 'Feb 2018' , 'March 2018' , 'April 2018' , 'May 2018' , 'June 2018' , 'July 2018' , 'Aug 2018' ],
                    series: [
                        [5000, 20000, 40000, 25000, 58000, 62000 ,  28000 , 16000]
                    ]
                },


                {
                    low: 0,
                    showArea: true,
                    axisY: {
    offset: 80,
    labelInterpolationFnc: function(value) {
      return ' $' + value 
    },
    scaleMinSpace: 15
  }
                    
                });





var ctx = document.getElementById("chartjs_bar").getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
                        datasets: [{
                            label: 'Income',
                            data: [2500, 2000, 2000, 2700, 2900, 2300, 2800],
                           backgroundColor: "rgba(89, 105, 255,1)",
                                    borderColor: "rgba(89, 105, 255,0.1)",
                            borderWidth: 2
                        }, {
                            label: 'Expenses',
                            data: [1900, 2400, 2200, 2500, 2100, 3000, 2500 ],
                           backgroundColor: "rgba(106, 255, 255,1)",
                                    borderColor: "rgba(106, 255, 255,1)",
                            borderWidth: 2
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{


                            }]
                        },
                             legend: {
                        display: true,
                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily: 'Circular Std Book',
                            fontSize: 14,
                        }
                    },

                    scales: {
                        xAxes: [{
                            ticks: {
                                fontSize: 14,
                                fontFamily: 'Circular Std Book',
                                fontColor: '#71748d',
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                fontSize: 14,
                                fontFamily: 'Circular Std Book',
                                fontColor: '#71748d',
                                 // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return '$' + value;
                    }
                            }
                        }]
                    }
                }

                    
                });



});