import { kmlFileSelect } from './load.js';

let arrcase = [];
// 宣告全域物件
window.compare = window.compare || {};
const selectcase = document.getElementById("kmlFileSelect");//取得HTML的select元素
addEventListener("change", function (event) {
    let json = window.load.data;
    const targetId = event.target.id;
    if (targetId === "Region" || targetId === "kmlFileSelect") {
        const id = selectcase.options[select.selectedIndex].id//取得選項的 ID
        //let num = id-1; // 選項的 ID-1是為了後續迴圈的索引值
        // 取得表格元素
        const table = document.querySelector(".table");
        //初始化表格    
        for (let i = 1; i < 5; i++) {
            table.rows[i].cells[1].textContent = "";
            table.rows[i].cells[2].textContent = "";
            table.rows[i].cells[3].textContent = "";
            table.rows[i].cells[4].textContent = "";
        }
        // 取得並更改欄元素
        if (event.target === selectcase) {
            table.rows[1].cells[1].textContent = json[id - 1].name; // main事件的名稱
            table.rows[1].cells[2].textContent = json[id - 1].hr24; // main事件的24hr(mm)
            table.rows[1].cells[3].textContent = json[id - 1].AREA; // main事件的AREA
            table.rows[1].cells[4].textContent = json[id - 1].depth; // main事件的depth

            //找出三個24hr最接近的事件
            // step1: 將json中所有事件的hr24與main事件的hr24相減，並取絕對值
            let arr24hr = [];
            for (let i = 0; i < json.length; i++) {
                arr24hr.push(Math.abs(json[i].hr24 - json[id - 1].hr24));//絕對值            
            }
            // console.log("arr24hr:"+arr24hr);

            // step2: 在arr24hr找出與json[id-1].hr24差值最小的三個
            let arrtop3 = [];
            for (let i = 0; i < 4; i++) {
                let min = Math.min(...arr24hr);//找出arr24hr中最小的數字
                arrtop3.push(min);//將最小的數字放入arrtop3
                arr24hr.splice(arr24hr.indexOf(min), 1);//將arr中最小的數字刪除
            }
            // console.log("arrtop3:"+arrtop3);

            // step3: 找出arrtop3相對應的json[id-1].hr24的index
            arrcase = []; // 初始化arrcase
            for (let i = 1; i < 4; i++) {
                for (let j = 0; j < json.length; j++) {
                    if (Math.abs(json[j].hr24 - json[id - 1].hr24) == arrtop3[i]) {
                        arrcase.push(j + 1);//no
                        table.rows[i + 1].cells[1].textContent = json[j].name;
                        table.rows[i + 1].cells[2].textContent = json[j].hr24;
                        table.rows[i + 1].cells[3].textContent = json[j].AREA;
                        table.rows[i + 1].cells[4].textContent = json[j].depth;
                    }
                }
            }
            //初始化window.compare.arrcase
            window.compare.arrcase = [];
            // 將資料添加到全域物件中
            window.compare.arrcase = arrcase;
            // console.log("compare-windowCompare:"+window.compare.arrcase);
            // console.log("arrcase:"+arrcase);
            var event = new Event('dataUpdated'); // 建立事件
            document.dispatchEvent(event); // 觸發事件
        }
    }
});
export let compareTOP3 = arrcase;
// 不行寫在事件外面，因為事件是異步的，會先執行完事件外面的程式碼，再執行事件內的程式碼
// window.compare = {
//     arrcase:compareTOP3
// };
