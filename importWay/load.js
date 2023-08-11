import data from '../Kaohsiung.json' assert { type: 'json' };
let select;
document.addEventListener("DOMContentLoaded", function () {//這行超重要，不然appendChild會出錯
  //取得HTML的select元素
  select = document.getElementById("kmlFileSelect");
    //將JSON檔案中的資料逐一加入select元素中
    data.forEach(function(item) {
      const option = document.createElement("option");
      option.value = item.kml;
      option.text = item.name;
      option.id = item.no; // 選項的ID是事件編號
      select.appendChild(option);
    });
  });
export let json = data;
export let kmlFileSelect = select;

// https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/

//傳到map.js
window.load = {
  data:json
};