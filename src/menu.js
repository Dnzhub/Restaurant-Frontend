import peasantStewImage from "./images/Peasant_Stew.png";
import honeyedChickenImage from "./images/Honeyed_Chicken.png";
import frumentyImage from "./images/frumenty.JPG";
import saltfishImage from "./images/Saltfish.jpeg"

const content = document.querySelector("#content");

function createMenuCard(image, title, ingredients) {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const cardImage = document.createElement("img");
    cardImage.src = image;
    cardImage.classList.add("card-img")
    card.appendChild(cardImage);

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;
    cardTitle.classList.add("card-title");
    card.appendChild(cardTitle);

    const cardIngredients = document.createElement("p");
    cardIngredients.textContent = ingredients;
    cardIngredients.classList.add("card-text");
    card.appendChild(cardIngredients);

    return card;
}
export default function createMenu() {


    content.classList.add("menu-tab");
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const peasantStewIngredients = "Barley-oats, cabbage, leek, onion , carrot , peas, Salt, pepper and herbs";
    const peasantStew = createMenuCard(peasantStewImage, "Peasant Stew", peasantStewIngredients);

    const honeyedChickenIngredients = "Chicken, honey, ground ginger, cinnamon, cloves, vinegar, salt";
    const honeyedChicken = createMenuCard(honeyedChickenImage, "Honeyed Chicken", honeyedChickenIngredients);

    const frumentyIngredients = "Wheat, almond milk, egg, saffron, honey, dried fruits";
    const frumenty = createMenuCard(frumentyImage, "Frumenty", frumentyIngredients);

    const saltfishIngredients = "Salted cod, mustard, honey, garlic";
    const saltfish = createMenuCard(saltfishImage, "Saltfish with Mustard Sauce,", saltfishIngredients);

    menuContainer.appendChild(peasantStew);
    menuContainer.appendChild(honeyedChicken);
    menuContainer.appendChild(frumenty);
    menuContainer.appendChild(saltfish);



    content.appendChild(menuContainer);

}



