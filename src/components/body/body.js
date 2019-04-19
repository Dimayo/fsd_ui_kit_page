(function changePage() {

    const home = document.querySelector(".home"),
        about = document.querySelector(".about"),
        portfolio = document.querySelector(".portfolio"),
        links = document.querySelectorAll(".navigation__item"),
        buttons = document.querySelectorAll(".standart-button");

    links[0].addEventListener("click", function (event) {
        event.preventDefault();
        home.style.display = "block";
        about.style.display = "none";
        portfolio.style.display = "none";
    });

    links[1].addEventListener("click", function (event) {
        event.preventDefault();
        home.style.display = "none";
        about.style.display = "block";
        portfolio.style.display = "none";
    });

    links[2].addEventListener("click", function (event) {
        event.preventDefault();
        home.style.display = "none";
        about.style.display = "none";
        portfolio.style.display = "block";
    });
})();

