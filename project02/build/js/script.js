(function () {
    let toggleButton = document.getElementById("toggle-menu");
    let headerContainer = document.getElementsByClassName("header")[0];
    let headerNav = document.getElementsByClassName("header__nav")[0];
    let menu = document.getElementById("main-menu");
    // let headerNavHeight = headerNav.scrollHeight;

    // window.onresize = function(event) {
    //     let headerNavHeight = headerNav.scrollHeight;
    //     if(window.innerWidth>=1024){
    //         if(headerNav.classList.contains("is-open")){
    //             headerNav.style.setProperty("height", "auto");
    //             headerNav.classList.remove("is-open");
    //         }
    //     }else{
    //         headerNav.classList.remove("is-open");
    //         headerNav.style.setProperty("height", 0);
    //         // headerContainerHeight.style.setProperty("height", 0);
    //         // let headerContainerHeight = headerContainer.scrollHeight;
    //         // headerNav.style.setProperty("top", headerContainerHeight + "px");
    //     }
    // };

    //functions for responsive menu
    toggleButton.addEventListener("click", function (event) {
        toggleMenu(headerContainer, headerNav);
        console.log("click");
    });


    function toggleMenu(headerContainer, navMenu) {
        event.preventDefault();

        if (navMenu.classList.contains("is-open")) {
            navMenu.style.setProperty("height", 0);
        }else {
            let headerContainerHeight = headerContainer.scrollHeight;
            let navHeight = navMenu.scrollHeight;
            navMenu.style.setProperty("height", navHeight + "px");
            navMenu.style.setProperty("top", headerContainerHeight + "px");
        }

        navMenu.classList.toggle("is-open");
    }

})();