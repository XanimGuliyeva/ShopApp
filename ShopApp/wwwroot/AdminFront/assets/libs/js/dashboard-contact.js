
$(function() {
    "use strict";
    
    // ============================================================== 
    // Revenue Cards
    // ============================================================== 
     new Chartist.Bar('.ct-chart', {
        labels: ['Organic Search', 'Direct Traffic', 'Offline Source', 'Social Media', 'Referrals', 'Others'],
        series: [
            [10, 20, 30, 66, 50, 60]
        ]
    }, {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 110
        }
    });



    var data = {
        labels: ['2/27/2019', '2/25/2019', '2/24/2019', '2/23/2019', '2/22/2019', '2/19/2019', '2/14/2019', '2/16/2019', '2/18/2019'],
        series: [
            [10, 8, 16, 24, 30, 18, 26, 22, 42]
        ]
    };

    var options = {
        seriesBarDistance: 10
    };

    var responsiveOptions = [
        ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function(value) {
                    return value[0];
                }
            }
        }]
    ];

    new Chartist.Bar('.ct-chart-vertical', data, options, responsiveOptions);









});