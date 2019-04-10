window.initMap = function () {

    let myLatLng = {
        lat: 37.7974,
        lng: -122.4149
    };

    let markerPos = {
        lat: 37.7955,
        lng: -122.41425
    }

    let map = new google.maps.Map(document.querySelector('.location__map'), {
        center: myLatLng,
        scrollwheel: 1,
        disableDefaultUI: 1,
        zoom: 14.51
    });

    let marker = new google.maps.Marker({
        position: markerPos,
        map: map,
        title: 'Custom marker',
        icon: 'images/marker.png'
    });

};