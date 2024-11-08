document.addEventListener("DOMContentLoaded", function () {
    console.log("Le DOM est chargé !");
    const menuBurger = document.querySelector(".menu-burger");
    console.log(menuBurger);
    const sideMenu = document.querySelector(".side-menu");

    if (menuBurger && sideMenu) {
        console.log("Les éléments sont présents dans le DOM !");
        menuBurger.addEventListener("click", () => {
            sideMenu.classList.toggle("active");
        });
    }else{
        console.error("Les éléments sont introuvables dans le DOM !");
    }
});
