    addEventListener("change", function() {
    const select = document.getElementById("kmlFileSelect");
    fetch('Kaohsiung.json')
        .then(function(response){
        return response.json();
    })
        .then(function(obj){
        console.log(obj);
        //取得選項的 ID
        const id = select.options[select.selectedIndex].id
        console.log(id);
        let num = id-1;
        console.log("num:"+num);
        // 取得表格元素
        const table = document.querySelector(".table");
        // 取得欄元素
        const cell11 = table.rows[1].cells[1];
        const cell12 = table.rows[1].cells[2];
        const cell13 = table.rows[1].cells[3];
        const cell14 = table.rows[1].cells[4];
        // 更改欄的文字
        cell11.textContent =obj[num].name;
        cell12.textContent =obj[num].hr24;
        cell13.textContent =obj[num].AREA;
        cell14.textContent =obj[num].depth;

        //找出三個24hr最接近的事件
        let arr = [];
        for(let i=0;i<obj.length;i++){
            arr.push(Math.abs(obj[i].hr24-obj[num].hr24));//絕對值
            
        }
        console.log("arr:"+arr);
        //在arr找出與obj[num].hr24差值最小的三個
        let arr2 = [];
        let arrcase = [];
        for(let i=0;i<4;i++){
            let min = Math.min(...arr);//找出arr中最小的數字
            arr2.push(min);
            arr.splice(arr.indexOf(min),1);
        }
        console.log("arr2:"+arr2);
        //所有arr2相對應的obj[num].hr24的index
        for(let i=1;i<4;i++){
            for(let j=0;j<obj.length;j++){
                if(Math.abs(obj[j].hr24-obj[num].hr24) == arr2[i]){
                    arrcase.push(j+1);//no
                    table.rows[i+1].cells[1].textContent = obj[j].name;
                    table.rows[i+1].cells[2].textContent = obj[j].hr24;
                    table.rows[i+1].cells[3].textContent = obj[j].AREA;
                    table.rows[i+1].cells[4].textContent = obj[j].depth;
                }
            }
        }
        console.log("arrcase:"+arrcase);
    });
});
