(function pieChart() {
    const ring = document.querySelectorAll('.pie-chart__bar');
    const percentage = document.querySelectorAll('.pie-chart__percent');

    const percentageToDashOffset = (circumference, n) => circumference / 100 * (100 - n);
    const updateDonutValue = (donut, circumference, n) => donut.setAttribute('stroke-dashoffset', percentageToDashOffset(circumference, n));

    for (let i = 0; i < ring.length; i++) {
        let circumference = 2 * Math.PI * ring[i].getAttribute('r');
        updateDonutValue(ring[i], circumference, percentage[i].textContent);
    }
})();

