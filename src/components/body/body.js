(function changePage() {

    const links = document.querySelectorAll(".navigation__item"),
        pages = document.querySelectorAll(".page"),
        info = document.querySelector(".navigation__items");
        

    function hidePages(a) {
        for (let i = a; i < pages.length; i++) {
            pages[i].classList.remove("show");
            pages[i].classList.add("hide");
        }
    }

    hidePages(1);

    function showPages(b) {
        if (pages[b].classList.contains("hide")) {
            pages[b].classList.remove("hide");
            pages[b].classList.add("show");
        }
    }

    info.addEventListener("click", function (event) {
        let target = event.target;
        if (target && target.classList.contains("navigation__item")) {
            for (let i = 0; i < links.length; i++) {
                if (target == links[i]) {
                    hidePages(0);
                    showPages(i);
                    break;
                }
            }
        }
    });
})();