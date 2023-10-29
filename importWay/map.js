var map = L.map('map').setView([23.6, 121.041976], 7); //經緯度, zoom
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
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

var baseMaps = {
    "OpenStreetMap": osm,
};
//初始化layerControl
var layerControl = L.control.layers(baseMaps).addTo(map);
var kmlLayers0;
var kmlLayers1;
var kmlLayers2;
var kmlLayers3;
addEventListener("change", function(event) {
    
    const targetId = event.target.id;
    if (targetId === "Region" || targetId === "kmlFileSelect") {
        //清空地圖上的KML
        map.eachLayer(function(layer) {
            if (layer instanceof L.KML) { //判斷是否為KML圖層
                map.removeLayer(layer);
            }
        });
        
        //重置layerControl
        if (layerControl) {
            map.removeControl(layerControl);
            layerControl = L.control.layers(baseMaps).addTo(map);
        }
        let json = window.load.data;
        // console.log("map-json:"+json);

        //kmlFile0Name = select的選項名稱
        var kmlFile0Name = select.options[select.selectedIndex].text;

        if (event.target === select) {
            //fetch('leaflet-kml-master/assets/Kaohsiung/1100731.kml')
            fetch('leaflet-kml-master/assets/Kaohsiung/'+select.value)
                .then(res => res.text())
                .then(kmltext => {
                    // Create new kml overlay
                    const parser = new DOMParser();
                    const kml = parser.parseFromString(kmltext, 'text/xml');
                    const track = new L.KML(kml);
                    map.addLayer(track);

                    // 將新的 KML 圖層加到 kmlLayers 中
                    kmlLayers0 = track;
                    // console.log("map-kmlLayers0:"+kmlLayers0);
                    layerControl.addOverlay(kmlLayers0, 'KML Layer Red: '+kmlFile0Name);

                    // Adjust map to show the kml
                    const bounds = track.getBounds();
                    map.fitBounds(bounds);
                });

            
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
                    var kmlFile1Name = json[compareTOP3[0]-1].name;
                    var kmlFile2Name = json[compareTOP3[1]-1].name;
                    var kmlFile3Name = json[compareTOP3[2]-1].name;
                    // Load kml file 相似事件1
                    fetch('leaflet-kml-master/assets/Kaohsiung/'+kmlFile1)
                        .then(res => res.text())
                        .then(kmltext => {
                            // Create new kml overlay
                            const parser = new DOMParser();
                            const kml = parser.parseFromString(kmltext, 'text/xml');
                            const track = new L.KML(kml);
                            track.setStyle({color: 'orange'});//改顏色
                            //track.setStyle({opacity: 0.5});//改透明度
                            map.addLayer(track);

                            // 將新的 KML 圖層加到 kmlLayers 中
                            kmlLayers1 = track;
                            // console.log("map-kmlLayers1:"+kmlLayers1);
                            layerControl.addOverlay(kmlLayers1, 'KML Layer Orange: '+kmlFile1Name);
                            
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

                            // 將新的 KML 圖層加到 kmlLayers 中
                            kmlLayers2 = track;
                            // console.log("map-kmlLayers2:"+kmlLayers2);
                            layerControl.addOverlay(kmlLayers2, 'KML Layer Blue: '+kmlFile2Name);

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
                                track.setStyle({color: 'green'});//改顏色
                                map.addLayer(track);

                                // 將新的 KML 圖層加到 kmlLayers 中
                                kmlLayers3 = track;
                                // console.log("map-kmlLayers3:"+kmlLayers3);
                                layerControl.addOverlay(kmlLayers3, 'KML Layer Green: '+kmlFile3Name);

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
            
    
        }
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