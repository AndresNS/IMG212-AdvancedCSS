(function () {
    let toggleButton = document.getElementById("toggle-menu");
    let headerContainer = document.getElementsByClassName("header")[0];
    let headerNav = document.getElementsByClassName("header__nav")[0];
    let headerNavHeight = headerNav.scrollHeight;
    

    //functions for responsive menu
    toggleButton.addEventListener("click", function (event) {
        event.preventDefault();
        
        if(!headerNav.classList.contains("is-open")){
            let headerContainerHeight = headerContainer.scrollHeight;
        headerNav.style.setProperty("top", headerContainerHeight + "px");
        }

        let menu = document.getElementById("main-menu");
        menu.classList.toggle("is-open");

        if(headerNav.classList.contains("is-open")){
            headerNav.style.setProperty("height", headerNavHeight + 3 + "px");
        }else {
            headerNav.style.setProperty("height", 0);
        }
    });
})();