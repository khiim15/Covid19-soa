const getMap = (data, confirmed, recovered, death) => {

    const parseData = JSON.parse(data);
    const parseConfirmed = JSON.parse(confirmed);
    const parseRecovered = JSON.parse(recovered);
    const parseDeath = JSON.parse(death);


    var map = L.map('map').setView([51.505, -0.09], 2.5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for (const key in parseData) {
        if (parseConfirmed[key].confirmed >= 5000) {
            L.circle([parseData[key].lat, parseData[key].long], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 500000
            }).bindPopup(`${parseConfirmed[key].confirmed}/${parseRecovered[key].recovered}/${parseDeath[key].death}`)
                .addTo(map);
        } else
            if (parseConfirmed[key].confirmed < 5000 && parseConfirmed[key].confirmed >= 500) {
                L.circle([parseData[key].lat, parseData[key].long], {
                    color: 'orange',
                    fillColor: 'orange',
                    fillOpacity: 0.5,
                    radius: 300000
                }).bindPopup(`${parseConfirmed[key].confirmed}/${parseRecovered[key].recovered}/${parseDeath[key].death}`)
                    .addTo(map);
            } else
                if (parseConfirmed[key].confirmed < 500) {
                    L.circle([parseData[key].lat, parseData[key].long], {
                        color: 'green',
                        fillColor: 'green',
                        fillOpacity: 0.5,
                        radius: 100000
                    }).bindPopup(`${parseConfirmed[key].confirmed}/${parseRecovered[key].recovered}/${parseDeath[key].death}`)
                        .addTo(map);
                }



    }

}



