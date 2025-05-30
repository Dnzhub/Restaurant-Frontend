import logoImage from "./images/logo.png";

const content = document.querySelector("#content");

export default function createHomePage() {


    content.classList.add("home-tab");
    const logo = document.createElement("img");
    logo.src = logoImage;
    logo.classList.add("logo");

    const title = document.createElement("h1");
    title.textContent = "Gold Shire"
    title.style.fontSize = "3rem";
    title.style.color = "#f1ddb0"

    const text1 = document.createElement("p");
    text1.textContent = "Warm hearths, frothy mugs, and whispered tales where every night sings with merriment and mystery";
    text1.style.fontSize = "1.9rem";
    text1.style.color = "#f1ddb0"

    const text2 = document.createElement("p");
    text2.textContent = "Enter, rest thy boots, and let the mead flow!"
    text2.style.fontSize = "1.6rem"
    text2.style.color = "#f1ddb0"

    content.appendChild(title);
    content.appendChild(logo);
    content.appendChild(text1);
    content.appendChild(text2);
}