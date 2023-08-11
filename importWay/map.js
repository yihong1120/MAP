var map = L.map('map').setView([23.6, 121.041976], 8);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //maxZoom: 8,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.control.scale().addTo(map);


/*
// Load kml file 高雄市行政區
fetch('leaflet-kml-master/assets/Kaohsiung/Kaohsiung.kml')
    .then(res => res.text())
    .then(kmltext => {
    // Create new kml overlay
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, 'text/xml');
    const track = new L.KML(kml);
    track.setStyle({color: 'gray'});//改顏色
    map.addLayer(track);

    // Adjust map to show the kml
    const bounds = track.getBounds();
    map.fitBounds(bounds);
});
*/

// Load kml file 主要事件
const select = document.getElementById("kmlFileSelect");

addEventListener("change", function() {
    //清空地圖上的KML
    map.eachLayer(function(layer) {
        if (layer instanceof L.KML) {
        map.removeLayer(layer);
        }
    });

//fetch('leaflet-kml-master/assets/Kaohsiung/1100731.kml')
    fetch('leaflet-kml-master/assets/Kaohsiung/'+select.value)
        .then(res => res.text())
        .then(kmltext => {
        // Create new kml overlay
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmltext, 'text/xml');
        const track = new L.KML(kml);
        map.addLayer(track);

        // Adjust map to show the kml
        const bounds = track.getBounds();
        map.fitBounds(bounds);
    });

//test test test test test test test test test test  test test test
    let json = window.load.data;
    // console.log("map-json:"+json);
    let compareTOP3 = [];
    let kmlFile1, kmlFile2, kmlFile3;
    function handleDataUpdate() {
        if (window.compare && window.compare.arrcase) {
            //初始化compareTOP3
            compareTOP3 = [];
            compareTOP3 = window.compare.arrcase;
            // console.log("map-top3:"+compareTOP3);
            
            kmlFile1 = json[compareTOP3[0]-1].kml;
            kmlFile2 = json[compareTOP3[1]-1].kml;
            kmlFile3 = json[compareTOP3[2]-1].kml;
            // console.log("kmlFile1:"+kmlFile1);
            // console.log("kmlFile2:"+kmlFile2);
            // console.log("kmlFile3:"+kmlFile3);

            // Load kml file 相似事件1
            fetch('leaflet-kml-master/assets/Kaohsiung/'+kmlFile1)
                .then(res => res.text())
                .then(kmltext => {
                // Create new kml overlay
                const parser = new DOMParser();
                const kml = parser.parseFromString(kmltext, 'text/xml');
                const track = new L.KML(kml);
                track.setStyle({color: 'green'});//改顏色
                //track.setStyle({opacity: 0.5});//改透明度
                map.addLayer(track);

                // Adjust map to show the kml
                const bounds = track.getBounds();
                map.fitBounds(bounds);

            // Load kml file 相似事件2
            fetch('leaflet-kml-master/assets/Kaohsiung/'+kmlFile2)
            .then(res => res.text())
            .then(kmltext => {
            // Create new kml overlay
            const parser = new DOMParser();
            const kml = parser.parseFromString(kmltext, 'text/xml');
            const track = new L.KML(kml);
            track.setStyle({color: 'blue'});//改顏色
            map.addLayer(track);

            // Adjust map to show the kml
            const bounds = track.getBounds();
            map.fitBounds(bounds);

            // Load kml file 相似事件3
            fetch('leaflet-kml-master/assets/Kaohsiung/'+kmlFile3)
            .then(res => res.text())
            .then(kmltext => {
            // Create new kml overlay
            const parser = new DOMParser();
            const kml = parser.parseFromString(kmltext, 'text/xml');
            const track = new L.KML(kml);
            track.setStyle({color: 'orange'});//改顏色
            map.addLayer(track);

            // Adjust map to show the kml
            const bounds = track.getBounds();
            map.fitBounds(bounds);
            });
});
});

        }
    }

    // 確認監聽器是否已經被綁定，避免重複綁定
    if (!window.truefalse) {
        // 監聽自定義事件，當資料更新時執行相應的處理
        document.addEventListener('dataUpdated', handleDataUpdate);

        // 最初加載時執行一次處理
        // handleDataUpdate();

        // 標記監聽器已經被綁定
        window.truefalse = true;
    }
    
//test test test test test test test test test test  test test test

// // Load kml file 相似事件1
// fetch('leaflet-kml-master/assets/Kaohsiung/1070823.kml')
//     .then(res => res.text())
//     .then(kmltext => {
//     // Create new kml overlay
//     const parser = new DOMParser();
//     const kml = parser.parseFromString(kmltext, 'text/xml');
//     const track = new L.KML(kml);
//     track.setStyle({color: 'green'});//改顏色
//     //track.setStyle({opacity: 0.5});//改透明度
//     map.addLayer(track);

//     // Adjust map to show the kml
//     const bounds = track.getBounds();
//     map.fitBounds(bounds);
// });

// // Load kml file 相似事件2
// fetch('leaflet-kml-master/assets/Kaohsiung/105meiji.kml')
//     .then(res => res.text())
//     .then(kmltext => {
//     // Create new kml overlay
//     const parser = new DOMParser();
//     const kml = parser.parseFromString(kmltext, 'text/xml');
//     const track = new L.KML(kml);
//     track.setStyle({color: 'blue'});//改顏色
//     map.addLayer(track);

//     // Adjust map to show the kml
//     const bounds = track.getBounds();
//     map.fitBounds(bounds);
// });

// // Load kml file 相似事件3
// fetch('leaflet-kml-master/assets/Kaohsiung/99.kml')
//     .then(res => res.text())
//     .then(kmltext => {
//     // Create new kml overlay
//     const parser = new DOMParser();
//     const kml = parser.parseFromString(kmltext, 'text/xml');
//     const track = new L.KML(kml);
//     track.setStyle({color: 'orange'});//改顏色
//     map.addLayer(track);

//     // Adjust map to show the kml
//     const bounds = track.getBounds();
//     map.fitBounds(bounds);
// });
});