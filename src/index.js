import "./styles.css";
import createHomePage from "./home.js";
import createMenuPage from "./menu.js";

const buttonHome = document.querySelector("#btn-home");
const buttonMenu = document.querySelector("#btn-menu");
const buttonContact = document.querySelector("#btn-contact");

const content = document.querySelector("#content");
function clearContent() {
    content.className = ''; // Force-set (or '' if you don't want to keep it)

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

buttonHome.addEventListener("click", () => {
    clearContent();
    createHomePage();

});

buttonMenu.addEventListener("click", () => {
    clearContent();
    createMenuPage();
})

clearContent();
createHomePage();



