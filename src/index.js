import "./styles.css";
import { homePage } from "./homePage.js";

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

const building = (() => {
    let stringPage = "homePage";

    const swapMenu = () => {
        if (stringPage === "homePage") {
            homePage.destroy();
        }
        stringPage = "menuPage";
        console.log(stringPage);
    }

    return { swapMenu };
})();

menu.addEventListener("click", building.swapMenu);

console.log("Webpack is working!");