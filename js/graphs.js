$(function () { 
    $('#graph1').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Personal Composting'
        },
        xAxis: {
        },
        yAxis: {
            title: {
                text: 'Compost Stats'
            }
        },
        series: [{
            name: 'You',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }, {
            name: 'Your Projected',
            data: [1, 2, 3, 4, 5, 6]
        }]
    });
});
