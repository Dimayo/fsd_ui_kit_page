ymaps.ready(init);

function init() {
    let myMap = new ymaps.Map("map", {
        center: [37.7974, -122.4149],
        zoom: 14.51,
        controls: [],

    }, {
        suppressMapOpenBlock: true,
    });

    let myGeoObjects = [];

    myGeoObjects = new ymaps.Placemark([37.7974, -122.4149], {
        balloonContentBody: '',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/marker.png',
        iconImageSize: [56, 56],
        iconImageOffset: [-35, -35]
    });

    let clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    myMap.behaviors.disable('scrollZoom');

}