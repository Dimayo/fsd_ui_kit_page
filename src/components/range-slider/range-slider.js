const volumeSlider = document.querySelector('.range-slider');
const sliders = [volumeSlider];

function Slider(slider) {
    this.slider = slider;
    slider.addEventListener('input', function () {
        this.updateSliderOutput();
    }.bind(this), false);

    this.level = function () {
        let level = this.slider.querySelector('.range-slider__input');
        return level.value;
    };

    this.levelString = function () {
        return parseInt(this.level());
    };

    this.remaining = function () {
        return 99.5 - this.level();
    };

    this.remainingString = function () {
        return parseInt(this.remaining());
    };

    this.updateSliderOutput = function () {
        let output = this.slider.querySelector('.range-slider__output');
        let thumb = this.slider.querySelector('.range-slider__thumb');
        output.value = this.levelString();
        output.style.left = this.levelString() + '%';
        thumb.style.left = this.levelString() + '%';
    };

    this.updateSlider = function (num) {
        let input = this.slider.querySelector('.range-slider__input');
        input.value = num;
    };
}

sliders.forEach(function (slider) {
    new Slider(slider);
});