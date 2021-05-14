let geoPointStore = []

const renderPoint = (context, items) => {
    geoPointStore = []

    for (let item of items) {
        const mapPoint = item.MAP.split(',').map(item => item.trim())
        let myPlacemark = new ymaps.Placemark(
            mapPoint,
            {
                balloonContent: `
                ${item.ADDRES}<br>
                ${item.TEXT}
                `,
                balloonContentHeader: `${item.NAME}`
            },
            {
                iconLayout: 'default#imageWithContent',
                iconImageHref: '../img/bool.png',
                iconImageSize: [196, 77],
                iconImageOffset: [-17, -17],
                iconContentOffset: [15, 15],
            }
        )
        myPlacemark.id = item.ID
        geoPointStore.push(myPlacemark)
    }

    if (geoPointStore.length > 1) {
        let clusterer = new ymaps.Clusterer({
            clusterDisableClickZoom: false,
            clusterHideIconOnBalloonOpen: false,
            geoObjectHideIconOnBalloonOpen: false,
            preset: 'islands#invertedVioletClusterIcons'
        })
        clusterer.add(geoPointStore)
        context.geoObjects.add(clusterer)
        context.setBounds(clusterer.getBounds(), { checkZoomRange: true })
    } else if (geoPointStore.length == 1) {
        context.geoObjects.add(geoPointStore[0])
        const pointArr = items[0].MAP.split(',').map(item => item.trim())
        context.panTo([pointArr, pointArr])
    }
}

$(function() {
    if ($('#shop-location-map').length) {
        $.getScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(() => {
            ymaps.ready(() => {
                const context = new ymaps.Map('shop-location-map', { center: [51.730846, 36.193015], zoom: 17, controls: [] })

                $.ajax({
                    url: '/ajax/getLocation.php',
                    method: 'GET',
                    success: (response) => renderPoint(context, JSON.parse(response).items || [])
                })

                $('.info-location-link__item').on('click', function() {
                    const pointArr = $(this).data('point').split(',').map(item => item.trim())
                    const pointId = $(this).data('element-id')
                    console.log(pointId)

                    context.setCenter(pointArr, 17).then(() => {
                        geoPointStore.forEach(item => {
                            if (item.id == pointId) item.balloon.open()
                        })
                    })

                    const mapBox = $('#shop-location-map').offset().top - 50
                    $('html, body').animate({ scrollTop: mapBox }, 400)

                    return false
                })
            })
        })
    }
})
