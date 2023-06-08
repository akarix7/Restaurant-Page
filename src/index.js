import "./style.css";
import buildHome from "./home.js";
import buildAbout from "./about.js";

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

const container = () => {
    console.log("container");
    return document.getElementById("content");
}

const nav = () => {
    let links = ["Home", "About", "Menu", "Contact"];
    const navBar = document.createElement("nav");

    let home = document.createElement("li");
    home.textContent = "Home";
    home.addEventListener("click", e => {
        console.log("home nav clicked");
        container().appendChild(main(buildHome()));
    })

    let about = document.createElement("li");
    about.textContent = "About";
    about.addEventListener("click", e => {
        console.log("about nav clicked");
        container().appendChild(main(buildAbout()));
    })

    navBar.append(home, about);

    // let menu = document.createElement("li");
    // menu.textContent = "Menu";
    // menu.addEventListener("click", e => {
    //     buildMenu();
    // })

    // for(let i = 0; i < 3; i++){
    //     let li = document.createElement("li");
    //     li.textContent = links[i];
    //     li.addEventListener("click", e => {
    //         buildHome();
    //     })
    //     navBar.appendChild(li);
    // }
    return navBar;
}

const main = (data) => {
    console.log("entering main...");

    let mainElm = document.getElementById("main");

    if(!mainElm){
        mainElm = document.createElement("main");
        mainElm.id = "main";
    }
    //mainElm.id = "main";
    // content.appendChild(mn);
    const sec = section(data);
    mainElm.appendChild(sec);


    // data.forEach((item) => {
    //     console.log("entering data for loop");
    //     const sec = section();
    //     mn.appendChild(sec);
    //     let title = document.createElement("h2");
    //     title.textContent = item.name;
    //     let secText = document.createElement("p");
    //     secText.innerHTML = item.text;
    //     sec.append(title, secText);
    // })
    //mn.appendChild(section());

    return mainElm;
}

const section = (data) => {
    const sec = document.createElement("section");
    data.forEach((item) => {
        console.log("entering data for loop");
        let title = document.createElement("h2");
        title.textContent = item.name;

        let text = document.createElement("p");
        text.innerHTML = item.text;
        sec.append(title, text);
    })
    return sec;
}

const init = () => {
    // const content = document.getElementById("content");
    // content.appendChild(nav());
    // content.appendChild(main(buildHome()));
    container().append(nav(), main(buildHome()));
}

init();

export default main;

console.log("hello!!!");