let map = L.map('mapmfa').setView([50.84615118611831, 4.367881211767687], 14);
let marker = L.marker([50.84615118611831, 4.367881211767687]).addTo(map);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg', {
    maxZoom: 30,
    attribution: '&copy; <a href="./index.html">Sekwoeritie homepage ;)</a>'
}).addTo(map);


marker.bindPopup("<b>CCB België</b>").openPopup();
