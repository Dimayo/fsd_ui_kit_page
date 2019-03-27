function pieChart() {

    let ring = document.querySelectorAll('.pie-chart__bar'),
        percentage = document.querySelectorAll('.pie-chart__percent');

    for (let i = 0; i < ring.length; i++) {
        let circumference = 2 * Math.PI * ring[i].getAttribute('r');
        let percentageToDashOffset = (n) => {
            return (circumference / 100) * (100 - n);
        };

        let updateDonutValue = (n) => {
            ring[i].setAttribute('stroke-dashoffset', percentageToDashOffset(n));
        };
        return updateDonutValue(percentage[i].textContent);
    }
}

pieChart();