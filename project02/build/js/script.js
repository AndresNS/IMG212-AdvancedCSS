(function () {
    let toggleButton = document.getElementById("toggle-menu");
    let headerContainer = document.getElementsByClassName("header")[0];
    let headerNav = document.getElementsByClassName("header__nav")[0];
    let menu = document.getElementById("main-menu");



    window.onresize = function (event) {
        if (window.innerWidth >= 1024) {
            headerNav.classList.remove("is-open");
            resetHeaderStyles();
        }
    };

    toggleButton.addEventListener("click", function (event) {
        event.preventDefault();

        if (headerNav.classList.contains("is-open")) {
            headerNav.style.setProperty("height", 0);
        } else {
            let headerContainerHeight = headerContainer.scrollHeight;
            let navHeight = headerNav.scrollHeight;
            headerNav.style.setProperty("height", navHeight + "px");
            headerNav.style.setProperty("top", headerContainerHeight + "px");
        }

        headerNav.classList.toggle("is-open");
    });

    function resetHeaderStyles() {
        menu.removeAttribute("style");
    }

})();