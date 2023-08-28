import data from '../Kaohsiung.json' assert { type: 'json' };
let select;
document.addEventListener("DOMContentLoaded", function () {//這行超重要，不然appendChild會出錯
  //製作第一層下拉式選單(Choose Region)(暫時只在HTML做)
  addEventListener("change", function(event) {
    const selectregion = document.getElementById("Region");
    //取得第一層 Region 的 value
    const selectedOption = selectregion.options[selectregion.selectedIndex];
    const selectedOptionValue = selectedOption.value;
    console.log("selectedOptionValue: "+selectedOptionValue);
    if (event.target === selectregion) {//如果選擇的是第一層下拉式選單
      
      if (selectedOptionValue === '64000'){ //(暫時只用高雄測試使用)
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
      }else{
        //清空select元素的內容 只留下預設值
        select.innerHTML = "<option selected>Choose Case</option>";
      }

    }
  });
});
export let json = data;
export let kmlFileSelect = select;

// https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/

//傳到map.js
window.load = {
  data:json
};