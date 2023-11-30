import KaohsiungJson from '../Kaohsiung.json' assert { type: 'json' };
import TaipeiJson from '../Taipei.json' assert { type: 'json' };
let data = TaipeiJson;
let select;

document.addEventListener("DOMContentLoaded", function () {//這行超重要，不然appendChild會出錯
  //製作第一層下拉式選單(Choose Region)(暫時只在HTML做)
  addEventListener("change", function (event) {
    const selectregion = document.getElementById("Region");
    //取得第一層 Region 的 value
    const selectedOption = selectregion.options[selectregion.selectedIndex];
    const selectedOptionValue = selectedOption.value;
    // console.log("selectedOptionValue: "+selectedOptionValue);
    switch (selectedOptionValue) {
      case "630006500":
        data = TaipeiJson;
        // console.log("data是台北");
        break;
      case "64000":
        data = KaohsiungJson;
        // console.log("data是高雄");
        break;
      default:
        data = null;
        break;
    };

    if (event.target === selectregion) {//如果選擇的是第一層下拉式選單

      // console.log("data: "+data);
      if (data) { //如果data有值
        // 取得HTML的select元素
        select = document.getElementById("kmlFileSelect");
        select.innerHTML = "<option selected>Choose Case</option>";
        //將JSON檔案中的資料逐一加入select元素中
        data.forEach(function (item) {
          const option = document.createElement("option");
          option.value = item.kml;
          option.text = item.name;
          option.id = item.no; // 選項的ID是事件編號
          select.appendChild(option);
        });
      } else {
        //清空select元素的內容 只留下預設值
        select.innerHTML = "<option selected>Choose Case</option>";
      }

    }

    //傳到 map.js compare.js chart.js 
    window.load = {
      data: data
    };

  });
});
// export let json = TaipeiJson; //(要解決data問題 關鍵在這裡)
export let kmlFileSelect = select;

// https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/

