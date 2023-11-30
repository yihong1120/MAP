// import { json } from './load.js';
import { compareTOP3 } from './compare.js';
const selectcase = document.getElementById("kmlFileSelect");
//初始化chart
const myChart = new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
        labels: ['1', '3', '6', '12', '24'],
        datasets: [
            {
                label: '',
                data: [],
                borderWidth: 1,
                backgroundColor: 'rgba(255, 0, 0, 0.8)',//紅色
            },
            {
                label: '',
                data: [],
                borderWidth: 1,
                backgroundColor: 'rgb(255,140,0,0.8)'//橘色
            },
            {
                label: '',
                data: [],
                borderWidth: 1,
                backgroundColor: 'rgba(0, 0, 255, 0.8)'//藍色
            },
            {
                label: '',
                data: [],
                borderWidth: 1,
                backgroundColor: 'rgba(0,100,0,0.8)'//深綠色
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        title: {
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
                },
                ticks: {
                    suggestedMax: 1000
                }
            }]
        }
    }
});
let selectcaseARR = [];
addEventListener("change", function (event) {
    let json = window.load.data;
    const targetId = event.target.id;
    if (targetId === "Region" || targetId === "kmlFileSelect") {
        const id = selectcase.options[select.selectedIndex].id//取得選項的 ID

        //初始化chart開始
        for (let i = 0; i < 4; i++) {
            myChart.data.datasets[i].label = "";
            selectcaseARR = [];
            myChart.data.datasets[i].data = [];
        }
        myChart.update();
        //初始化chart結束

        if (event.target === selectcase) {
            myChart.data.datasets[0].label = json[id - 1].name;//main事件的名稱

            selectcaseARR.push(json[id - 1].hr1);
            selectcaseARR.push(json[id - 1].hr3);
            selectcaseARR.push(json[id - 1].hr6);
            selectcaseARR.push(json[id - 1].hr12);
            selectcaseARR.push(json[id - 1].hr24);
            myChart.data.datasets[0].data = selectcaseARR;//main事件的雨量
            myChart.update();

            //接收compare.js的資料
            let compareTOP3 = [];
            compareTOP3 = window.compare.arrcase;

            for (let i = 0; i < 3; i++) {
                myChart.data.datasets[i + 1].label = json[compareTOP3[i] - 1].name;//相似事件的名稱
                myChart.data.datasets[i + 1].data = [json[compareTOP3[i] - 1].hr1, json[compareTOP3[i] - 1].hr3, json[compareTOP3[i] - 1].hr6, json[compareTOP3[i] - 1].hr12, json[compareTOP3[i] - 1].hr24];//相似事件的雨量
            }
            myChart.update();
        }
    }
});