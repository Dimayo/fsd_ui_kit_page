(function searchError() {

    let searchButton = document.querySelector('.search__button'),
        searchError = document.querySelector('.search__error');


    searchButton.addEventListener('click', function (event) {
        event.preventDefault();
        searchError.style.opacity = '1';
    });
})();