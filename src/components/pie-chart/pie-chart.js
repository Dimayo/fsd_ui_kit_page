(function pieChart() {

    let ring = document.querySelector('.pie-chart__bar'),
        circumference = 2 * Math.PI * ring.getAttribute('r'),
        percentage = document.querySelector('.pie-chart__percent').textContent;

    function percentageToDashOffset(n) {
        return (circumference / 100) * (100 - n);
    }

    function updateDonutValue(n) {
        ring.setAttribute('stroke-dashoffset', percentageToDashOffset(n));
    }

    return updateDonutValue(percentage);

})();