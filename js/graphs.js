$(function () { 
    $('#graph1').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
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

// build second chart
   $('#combination-floor').highcharts({
        title: {
            text: 'Summary'
        },
        xAxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        },
        labels: {
            items: [{
                html: 'Compost',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Jane',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'John',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Joe',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'Jane',
                y: 13,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'John',
                y: 23,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Joe',
                y: 19,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });




 $('#weekly').highcharts({
            title: {
                text: 'Weekly Waste Composting',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: UrbanComposting.com',
                x: -20
            },
            xAxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                title: {
                    text: 'Composting Weight Total (lbs.)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Apt 1A - single',
                data: [3.0, 2.3, 2.1, 1.8, 2.5, 3.2, 4.2]
            }, {
                name: 'Apt 1B - single',
                data: [2.8, 3.1, 1.6, 2.5, 2.0, 1.9, 3.6]
            }, {
                name: 'Apt 1C - couple',
                data: [5.6, 6.4, 5.0, 7.2, 6.1, 4.5, 7.5]
            }, {
                name: 'Apt 1d - couple',
                data: [5.1, 6.5, 4.0, 6.3, 6.4, 5.2, 6.3]
            },{
                name: 'Apt 1E - family (4)',
                data: [10.0, 10.5, 12.0, 9.0, 11.0, 8.9, 12.5]
            }]
        });


     $('#buildings').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Buildings Comparison Per Year'
            },
            subtitle: {
                text: 'Source: UrbanComposting'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Points'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>',
            },
            series: [{
                name: 'Points',
                data: [
                    ['Building 1', 6440],
                    ['Building 2', 5900],
                    ['Building 3', 6945],
                    ['Building 4', 6200],
                    ['Building 5', 3200],
                    ['Building 6', 4980],
                    ['Building 7', 6015],
                    ['Building 8', 6015],
                    ['Building 9', 5995],
                    ['Building 10', 6500],
                    
                ],
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    x: 4,
                    y: 10,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif',
                        textShadow: '0 0 3px black'
                    }
                }
            }]
        });

       $('#individual').highcharts({
            title: {
                text: 'Weekly Waste Composting',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: UrbanComposting.com',
                x: -20
            },
            xAxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                title: {
                    text: 'Composting Weight Total (lbs.)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Apt 1A - single',
                data: [3.0, 2.3, 2.1, 1.8, 2.5, 3.2, 4.2]
            }]
        });



});
