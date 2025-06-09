const content = document.querySelector("#content");

const contactInfo = [
    { iconClass: "fas fa-envelope", text: "Goldshire@tavern.com", color: "#c5c365" },
    { iconClass: "fas fa-solid fa-signs-post", text: "+9112234242", color: "#d9a200" },
    { iconClass: "fas fa-location-dot", text: "By water Lane, Near the Ivy-Clad Bridge, The Eastfarthing, The Shire, Middle-earth", color: "#38cf38" },
    { iconClass: "fas fa-triangle-exclamation", text: "Delivery Instructions (for ravens or post-hobbits): Leave by the round green door—beware the sleeping foxhound!", color: "#ff4a00" }
]

export default function createContactPage() {
    content.classList.add("contact-tab");
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    content.appendChild(contactContainer);
    const title = document.createElement("h2");
    title.textContent = "Contact";
    contactContainer.appendChild(title);


    contactInfo.forEach((info) => {
        const newInfo = document.createElement("div");
        newInfo.classList.add("contact-info");


        const icon = document.createElement("i");
        icon.className = `${info.iconClass}`;
        icon.style.color = info.color;
        const text = document.createElement("p");
        text.textContent = `${info.text}`;
        text.style.color = info.color


        newInfo.appendChild(icon);
        newInfo.appendChild(text);
        contactContainer.appendChild(newInfo);
    })

}