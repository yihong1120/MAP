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


// Load kml file 相似事件1
fetch('leaflet-kml-master/assets/Kaohsiung/1070823.kml')
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
});

// Load kml file 相似事件2
fetch('leaflet-kml-master/assets/Kaohsiung/105meiji.kml')
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
});

// Load kml file 相似事件3
fetch('leaflet-kml-master/assets/Kaohsiung/99.kml')
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
/*
$(document).ready(function () {
    $("#inser").click(function () {
        showInsertPage();
    });
    $("#update").click(function () {
        showUpdateList();
    });
    $("#delete").click(function () {
        showDeleteList();
    });
    $("#select").click(function () {
        doSelect();
    });
});
*/