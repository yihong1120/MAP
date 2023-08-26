

const myChart = new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
        labels: ['1', '3', '6', '12', '24'],
        datasets: [
            {
            label: '99凡那比颱風',
            data: [124, 321, 561, 824.5, 934.5],
            borderWidth: 1,
            backgroundColor: 'rgba(255, 0, 0, 0.8)',//紅色
            },
            {
            label: '105梅姬颱風',
            data: [83, 163, 256.5, 443, 639.5],
            borderWidth: 1,
            backgroundColor: 'rgba(0,100,0,0.8)'//深綠色
            },
            {
            label: '98莫拉克颱風',
            data: [0, 0, 0, 0, 633.5],
            borderWidth: 1,
            backgroundColor: 'rgba(0, 0, 255, 0.8)'//藍色
            },
            {
            label: '1070823豪雨',
            data: [107, 229, 292, 412, 559],
            borderWidth: 1,
            backgroundColor: 'rgb(255,140,0,0.8)'//橘色
            }
        ]
        },
    options: {
        maintainAspectRatio: false,
        title:{
            display: true,
            text: '累積雨量',
            fontSize: "20"
        },
        scales: {
            //坐標軸標題
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: '時間(小時)'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: '雨量(mm)'
                }
            }],
            //坐標軸刻度
            /*
            x: [{
                ticks: {
                    autoSkip: false,//不自動跳過刻度
                    maxRotation: 45,//文字傾斜
                    minRotation: 45//文字傾斜
                }
            }],
            */
            y: {
                beginAtZero: true, //從0開始
            }
        }
        
    }
});