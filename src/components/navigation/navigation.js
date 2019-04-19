(function navChangeColor() {

    const links = document.querySelectorAll(".navigation__item"),
        nav = document.querySelector(".navigation"),
        logo = document.querySelector(".navigation__logo");

    links[0].addEventListener("click", function () {
        nav.style.backgroundColor = "#e75735";
        nav.style.color = "#fff";
        logo.style.fill = "#fff";
    });

    links[1].addEventListener("click", function () {
        nav.style.backgroundColor = "#e5e5e5";
        nav.style.color = "#868686";
        logo.style.fill = "#868686";
    });
})();