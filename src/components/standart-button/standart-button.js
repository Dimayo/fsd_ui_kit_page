(function rippleEffect() {

    const buttons = document.querySelectorAll('.standart-button');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            let x = e.clientX;
            let y = e.clientY;
            let buttonTop = e.target.offsetTop;
            let buttonLeft = e.target.offsetLeft;
            let xInside = x - buttonLeft;
            let yInside = y - buttonTop;

            let circle = document.createElement('span');
            circle.classList.add('standart-button__circle');
            circle.style.top = yInside + 'px';
            circle.style.left = xInside + 'px';

            this.appendChild(circle);
            setTimeout(() => {
                circle.remove();
            }, 500);
        });
    });
})();