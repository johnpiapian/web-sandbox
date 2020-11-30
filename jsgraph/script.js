var dateset = [...Array(32).keys()];
    dateset.shift();

var dataColor = [
    ['rgba(255, 150, 132, 0)', 'rgba(255, 100, 100, 1)'],
    ['rgba(255, 250, 132, 0)', 'rgba(100, 100, 255, 1)']
];

var data = [
    [24.5, 24.3, 20.5, 23.5, 20.0],
    [23.5, 21.3, 21.5, 22.5, 19.0]
];

var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateset,
        datasets: [{
            label: 'Person 1',
            data: data[0],
            backgroundColor: [
                dataColor[0][0]
            ],
            borderColor: [
                dataColor[0][1]
            ],
            borderWidth: 1
        },
        {
            label: 'Person 2',
            data: data[1],
            backgroundColor: [
                dataColor[1][0]
            ],
            borderColor: [
                dataColor[1][1]
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});