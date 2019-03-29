const sheet = document.createElement('style'),
    $rangeInput = $('.step-slider__input'),
    prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

const getTrackStyle = function (el) {
    let curVal = el.value,
        val = (curVal - 1) * 25,
        style = '';

    for (let i = 0; i < prefs.length; i++) {
        style += '.step-slider__input::-' + prefs[i] + '{background: linear-gradient(to right, #4eb7a8 0%, #4eb7a8 ' + val + '%, #e5e5e5 ' + val + '%, #e5e5e5 100%)}';
    }

    return style;
};

$rangeInput.on('input', function () {
    sheet.textContent = getTrackStyle(this);
});