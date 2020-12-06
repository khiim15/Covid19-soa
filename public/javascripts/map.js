const getMap = (data) => {

const parseData = JSON.parse(data);

var map = L.map('map').setView([51.505, -0.09], 1.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

    for(const key in parseData){
        L.marker([parseData[key].lat, parseData[key].long]).addTo(map);
    }



for (const key in parseData){
    if(parseData[key].value == null){
        L.circle([parseData[key].lat, parseData[key].long], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 200000
        }).addTo(map);

    }
    else if(parseData[key].value < 5000 && parseData[key].value <=400 ){
        L.circle([parseData[key].lat, parseData[key].long], {
            color: 'yellow',
            fillColor: '',
            fillOpacity: 0.5,
            radius: 200000
        }).addTo(map);

    }
    else if(parseData[key].value < 399 ){
        L.circle([parseData[key].lat, parseData[key].long], {
            color: 'green',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 200000
        }).addTo(map);

    }
}
}

