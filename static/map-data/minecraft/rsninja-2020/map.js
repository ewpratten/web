
const TILE_SIZE = 1024;
const TILES = [
    { "chunk_x": 0, "chunk_z": 965, "x": -14848, "z": -21504, "image": "0_965_x-14848_z-21504.png" },
    { "chunk_x": 0, "chunk_z": 966, "x": -14848, "z": -20480, "image": "0_966_x-14848_z-20480.png" },
    { "chunk_x": 5, "chunk_z": 992, "x": -9728, "z": 6144, "image": "5_992_x-9728_z6144.png" },
    { "chunk_x": 12, "chunk_z": 985, "x": -2560, "z": -1024, "image": "12_985_x-2560_z-1024.png" },
    { "chunk_x": 12, "chunk_z": 986, "x": -2560, "z": 0, "image": "12_986_x-2560_z0.png" },
    { "chunk_x": 13, "chunk_z": 982, "x": -1536, "z": -4096, "image": "13_982_x-1536_z-4096.png" },
    { "chunk_x": 13, "chunk_z": 983, "x": -1536, "z": -3072, "image": "13_983_x-1536_z-3072.png" },
    { "chunk_x": 13, "chunk_z": 984, "x": -1536, "z": -2048, "image": "13_984_x-1536_z-2048.png" },
    { "chunk_x": 13, "chunk_z": 985, "x": -1536, "z": -1024, "image": "13_985_x-1536_z-1024.png" },
    { "chunk_x": 13, "chunk_z": 986, "x": -1536, "z": 0, "image": "13_986_x-1536_z0.png" },
    { "chunk_x": 13, "chunk_z": 987, "x": -1536, "z": 1024, "image": "13_987_x-1536_z1024.png" },
    { "chunk_x": 13, "chunk_z": 988, "x": -1536, "z": 2048, "image": "13_988_x-1536_z2048.png" },
    { "chunk_x": 13, "chunk_z": 990, "x": -1536, "z": 4096, "image": "13_990_x-1536_z4096.png" },
    { "chunk_x": 14, "chunk_z": 982, "x": -512, "z": -4096, "image": "14_982_x-512_z-4096.png" },
    { "chunk_x": 14, "chunk_z": 983, "x": -512, "z": -3072, "image": "14_983_x-512_z-3072.png" },
    { "chunk_x": 14, "chunk_z": 984, "x": -512, "z": -2048, "image": "14_984_x-512_z-2048.png" },
    { "chunk_x": 14, "chunk_z": 985, "x": -512, "z": -1024, "image": "14_985_x-512_z-1024.png" },
    { "chunk_x": 14, "chunk_z": 986, "x": -512, "z": 0, "image": "14_986_x-512_z0.png" },
    { "chunk_x": 14, "chunk_z": 987, "x": -512, "z": 1024, "image": "14_987_x-512_z1024.png" },
    { "chunk_x": 14, "chunk_z": 988, "x": -512, "z": 2048, "image": "14_988_x-512_z2048.png" },
    { "chunk_x": 14, "chunk_z": 990, "x": -512, "z": 4096, "image": "14_990_x-512_z4096.png" },
    { "chunk_x": 15, "chunk_z": 985, "x": 512, "z": -1024, "image": "15_985_x512_z-1024.png" },
    { "chunk_x": 15, "chunk_z": 986, "x": 512, "z": 0, "image": "15_986_x512_z0.png" },
    { "chunk_x": 15, "chunk_z": 988, "x": 512, "z": 2048, "image": "15_988_x512_z2048.png" },
    { "chunk_x": 17, "chunk_z": 983, "x": 2560, "z": -3072, "image": "17_983_x2560_z-3072.png" },
    { "chunk_x": 23, "chunk_z": 991, "x": 8704, "z": 5120, "image": "23_991_x8704_z5120.png" },
    { "chunk_x": 24, "chunk_z": 991, "x": 9728, "z": 5120, "image": "24_991_x9728_z5120.png" },
    { "chunk_x": 24, "chunk_z": 992, "x": 9728, "z": 6144, "image": "24_992_x9728_z6144.png" },
    { "chunk_x": 24, "chunk_z": 993, "x": 9728, "z": 7168, "image": "24_993_x9728_z7168.png" },
    { "chunk_x": 25, "chunk_z": 993, "x": 10752, "z": 7168, "image": "25_993_x10752_z7168.png" },
    { "chunk_x": 28, "chunk_z": 986, "x": 13824, "z": 0, "image": "28_986_x13824_z0.png" }
]
const WAYPOINTS = {
    places: [
        { x: -200, z: 160, name: "Spawn" },
        { x: 687, z: 2547, name: "End Portal Base" },
        { x: -994, z: -1305, name: "Carter's Base" },
        { x: -327, z: 1801, name: "Percy's Base" },
        { x: -450, z: 4368, name: "Cat's Snowy Base" },
        { x: -1439, z: -59, name: "Sally's Base" },
        { x: 1662, z: 384, name: "CommonOctopus" },
        { x: -38, z: 1656, name: "Totem Farm" },
        { x: -483, z: 338, name: "Will's Base" },
        { x: 3298, z: -2820, name: "Tyson's Base" },
        { x: -1748, z: 320, name: "Sydney's Base" },
        { x: -1448, z: -830, name: "Ethan's Base" },
        { x: 162, z: -125, name: "Ian's Base" },
        { x: -278, z: -290, name: "Cat's Base" },
        { x: 97, z: -2280, name: "Trident Farm" },
        { x: -1304, z: -7, name: "Evan's Mountain Base" },
        { x: -435, z: -851, name: "Jake's Base" },
        { x: -501, z: -514, name: "James' Base" },
        { x: -1712, z: -622, name: "End Portal" },
        { x: -170, z: 1038, name: "Evan's Base" }
    ]
}

// Set up the map
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -3,
    maxZoom: 3,
    backgroundColor: '#000000',
});

// Create two empty layers
var base_layer = L.layerGroup();
var chunked_layer = L.layerGroup();

// Add each tile to the map
TILES.forEach(tile => {
    var bounds = [[tile.z * -1, tile.x], [(tile.z + TILE_SIZE) * -1, tile.x + TILE_SIZE]];
    var image = L.imageOverlay(`/map-data/minecraft/rsninja-2020/tiles/${tile.image}`, bounds).addTo(chunked_layer);
});

// Add the old export to the base layer
var base_offset = [-4887, -2651];
var bounds = [[0 + base_offset[0], 0 + base_offset[1]], [8983 + base_offset[0], 6205 + base_offset[1]]];
var image = L.imageOverlay(`/map-data/minecraft/rsninja-2020/world.png`, bounds).addTo(base_layer);

map.fitBounds(bounds);

// Add the layers to the map
base_layer.addTo(map);
chunked_layer.addTo(map);

// Create waypoint groups
var places = L.layerGroup().addTo(map);

// Add each waypoint to the map
WAYPOINTS.places.forEach(place => {
    var marker = L.marker([place.z * -1, place.x]).addTo(places);
    marker.bindPopup(place.name);
});

// Add a control to toggle the layers (allow both to be on at the same time)
L.control.layers({}, {
    "Evan's Export": base_layer,
    "James' Export": chunked_layer,
    "Places": places
}).addTo(map);

// Add a CSS rule to pixelate the image only when zoomed in 
map.on('zoomend', function (e) {
    if (map.getZoom() >= 2) {
        if (document.querySelector('#leaflet-pixelator')) return;
        document.head.insertAdjacentHTML('beforeend', '<style id="leaflet-pixelator">.leaflet-image-layer { image-rendering: pixelated; }</style>');
    } else {
        document.querySelector('#leaflet-pixelator').remove();
    }
});