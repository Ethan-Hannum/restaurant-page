import "./styles.css";
import { homePage } from "./homePage.js";
import { menuPage } from "./menuPage.js";
import { aboutPage } from "./aboutPage.js";

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

const building = (() => {
    let stringPage = "homePage";

    const destroyPage = () => {
        if (stringPage === "homePage") {
            homePage.destroy();
        } else if (stringPage === "menuPage") {
            menuPage.destroy();
        } else if (stringPage === "aboutPage") {
            aboutPage.destroy();
        }
    }

    const swapHome = () => {
        destroyPage();
        stringPage = "homePage";
        console.log(stringPage);
        homePage.build();
    }

    const swapMenu = () => {
        destroyPage();
        stringPage = "menuPage";
        console.log(stringPage);
        menuPage.build();
    }

    const swapAbout = () => {
        destroyPage();
        stringPage = "aboutPage";
        console.log(stringPage);
        aboutPage.build();
    }

    return { swapHome, swapMenu, swapAbout };
})();

homePage.build();

home.addEventListener("click", building.swapHome);
menu.addEventListener("click", building.swapMenu);
about.addEventListener("click", building.swapAbout);

console.log("Webpack is working!");