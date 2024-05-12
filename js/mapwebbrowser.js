let map = L.map('mapwebbrowser').setView([0, 0],0);

let markerEurope = L.marker([54.337927, 14.512583]).addTo(map);
let markerAsia = L.marker([26.047178, 95.853982]).addTo(map);
let markerNorthAmerica= L.marker([41.203453, -95.820345]).addTo(map);
let markerSouthAmerica = L.marker([-12.110242, -62.457823]).addTo(map);
let markerOceania= L.marker([-27.941518, 140.965993]).addTo(map);
let markerAfrica= L.marker([8.233104, 15.732321]).addTo(map);
let markerAntartica= L.marker([-75.366518, 24.072366]).addTo(map);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    continuousWorld: true,  
    minZoom: 1,
    maxZoom: 2,
    attribution: '&copy; <a href="./index.html">Sekwoeritie homepage ;)</a>'
}).addTo(map);


markerEurope.bindPopup("<b>Europa: Opera</b>",{closeOnClick: false, autoClose: false});
markerAsia.bindPopup("<b>Azië: UC Browser</b>",{closeOnClick: false, autoClose: false});
markerNorthAmerica.bindPopup("<b>Noord-Amerika: Opera</b>",{closeOnClick: false, autoClose: false});
markerSouthAmerica.bindPopup("<b>Zuid-Amerika: Firefox</b>",{closeOnClick: false, autoClose: false});
markerOceania.bindPopup("<b>Oceanië: Opera</b>",{closeOnClick: false, autoClose: false});
markerAfrica.bindPopup("<b>Afrika: Firefox</b>",{closeOnClick: false, autoClose: false});
markerAntartica.bindPopup("<b>Antartica: Firefox</b>",{closeOnClick: false, autoClose: false});

