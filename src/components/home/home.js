(function kitTransition() {
    const pages = document.querySelectorAll(".page"),
        kitLink = document.querySelector(".home__link"),
        nav = document.querySelector(".navigation"),
        kitPage = document.querySelector(".kit");

    kitLink.addEventListener("click", function () {
        pages[0].style.display = "none";
        pages[1].style.display = "none";
        pages[2].style.display = "none";
        pages[3].style.display = "none";
        kitPage.style.display = "block";
        nav.style.display = "none";
    });
})();