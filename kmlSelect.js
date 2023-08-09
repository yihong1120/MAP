document.addEventListener("DOMContentLoaded", function () {//這行超重要，不然會出錯
//取得HTML的select元素
const select = document.getElementById("kmlFileSelect");
//用fetch API取得JSON檔案
fetch('Kaohsiung.json')
  .then(function(response){
    return response.json();
  })
  .then(function(obj){
    console.log(obj);
    //將JSON檔案中的資料逐一加入select元素中
    obj.forEach(function(item) {
      const option = document.createElement("option");
      option.value = item.kml;
      option.text = item.name;
      select.appendChild(option);
    });
  })
/*
  .catch(function(error){
  console.error('error');
  console.error(error);
  })*/;
});

//https://www.youtube.com/watch?v=5VCY9yCZnlc&ab_channel=dcode
