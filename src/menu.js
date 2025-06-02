import peasantStewImage from "./images/Peasant_Stew.png";
import honeyedChickenImage from "./images/Honeyed_Chicken.png";
import frumentyImage from "./images/frumenty.JPG";
import saltfishImage from "./images/Saltfish.jpeg"

const recipes = [
    { title: "Peasant Stew", image: peasantStewImage, ingredients: "Barley-oats, cabbage, leek, onion, carrot, peas, salt, pepper and herbs" },
    { title: "Honeyed Chicken", image: honeyedChickenImage, ingredients: "Chicken, honey, ground ginger, cinnamon, cloves, vinegar, salt" },
    { title: "Frumenty", image: frumentyImage, ingredients: "Wheat, almond milk, egg, saffron, honey, dried fruits" },
    { title: "Saltfish", image: saltfishImage, ingredients: "Salted cod, mustard, honey, garlic" }
]

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


    recipes.forEach((recipe) => {
        const newRecipe = createMenuCard(recipe.image, recipe.title, recipe.ingredients);
        menuContainer.appendChild(newRecipe);
    })

    content.appendChild(menuContainer);

}



