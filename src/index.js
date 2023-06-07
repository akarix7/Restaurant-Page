import "./style.css";
import buildHome from "./home.js";

const detail = [
    {
        name: "About",
        text: "Welcome to Happy Tails Cafe, where cozy meets cute. Our cafe is a haven for all animal lovers, complete with delicious treats, fresh coffee, and furry friends aplenty. Come visit us and enjoy a purrrfectly delightful experience unlike any other."
    },
    {
        name: "Hours",
        text:     `<ul>
        <li>Sunday: 8am - 6pm</li>
        <li>Monday: 6am - 8pm</li>
        <li>Tuesday: 6am - 8pm</li>
        <li>Wednesday: 6am - 8pm</li>
        <li>Thursday: 6am - 8pm</li>
        <li>Friday: 6am - 10pm</li>
        <li>Saturday: 6am - 10pm</li>
     </ul>`
    },
    {
        name: "Location",
        text: "Happy Tails Cafe Nooks Neighborhood Café<br>123 Bell Tree Lane<br>New Horizons, AC 12345"
    }
];

const nav = () => {
    let links = ["Home", "About", "Menu", "Contact"];
    const navBar = document.createElement("nav");

    for(let i = 0; i < 3; i++){
        let li = document.createElement("li");
        li.textContent = links[i];
        li.addEventListener("click", e => {
            buildHome();
        })
        navBar.appendChild(li);
    }
    return navBar;
}

const main = () => {
    const mn = document.createElement("main");
    mn.id = "main";
    // content.appendChild(mn);

    detail.forEach((item) => {
        const sec = section();
        mn.appendChild(sec);
        let title = document.createElement("h2");
        title.textContent = item.name;
        let secText = document.createElement("p");
        secText.innerHTML = item.text;
        sec.append(title, secText);
    })
    //mn.appendChild(section());

    return mn;
}

const section = () => {
    return document.createElement("section");
}

const init = () => {
    const content = document.getElementById("content");
    content.appendChild(nav());
    content.appendChild(main());
}

init();

export default init;
console.log("hello!!!");
