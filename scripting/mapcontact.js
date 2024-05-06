let map = L.map('mapcontact').setView([51.236567, 4.392827], 14);
let marker = L.marker([51.236567, 4.392827]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="./index.html">Sekwoeritie homepage ;)</a>'
}).addTo(map);


marker.bindPopup("<b>Sekwoeritie</b>").openPopup();
