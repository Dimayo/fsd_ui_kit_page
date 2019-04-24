(function kitTransition() {
    const pages = document.querySelectorAll(".page"),
        kitLink = document.querySelector(".home__link"),
        nav = document.querySelector(".navigation"),
        kitPage = document.querySelector(".kit");

    kitLink.addEventListener("click", function () {
        pages[0].style.display = "none";
        kitPage.style.display = "block";
        nav.style.display = "none";
    });
})();