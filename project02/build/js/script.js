(function () {
    let toggleButton = document.getElementById("toggle-menu");
    let headerNav = document.getElementsByClassName("header__nav")[0];
    let height = headerNav.scrollHeight;
    toggleButton.addEventListener("click", function (event) {
        event.preventDefault();
        let menu = document.getElementById("main-menu");
        menu.classList.toggle("is-open");
        if(headerNav.classList.contains("is-open")){
            headerNav.style.setProperty("height", height + "px");
        }else {
            headerNav.style.setProperty("height", 0);
        }
    });
})();