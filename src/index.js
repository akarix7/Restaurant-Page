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

const appendContent = (...els) => {
    console.log("appendContent");
    const content = document.getElementById("content");
    els.forEach((el) => {
        console.log("elements--appendContent: " + el);
        content.appendChild(el);
    })
    return content;
}

const nav = () => {
    //let links = ["Home", "About", "Menu", "Contact"];
    const links = new Map();
    links.set(0, ["Home", buildHome]);
    links.set(1, ["About", buildAbout]);
    // links.set(2, ["Menu", buildMenu]);
    // links.set(3, ["Contact", buildContact]);

    const navBar = document.createElement("nav");

    links.forEach((link)=> {
        const li = document.createElement("li");
        li.textContent = link[0];
        li.addEventListener("click", e=> {
            link[1]();
            appendContent(link[1]());
            //need to add appendContent.appendChild here.
        })
        navBar.appendChild(li);
    })

    // const home = document.createElement("li");
    // home.textContent = "Home";
    // home.addEventListener("click", e => {
    //     console.log("home nav clicked");
    //     appendContent(buildHome());
    // })
    //
    // const about = document.createElement("li");
    // about.textContent = "About";
    // about.addEventListener("click", e => {
    //     console.log("about nav clicked");
    //     appendContent(buildAbout());
    //     //content.appendChild(main(buildAbout()));
    // })

    //navBar.append(home, about);

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
    // content.appendChild(mn);
    data.forEach((item) => {
        const sec = section(item);
        mainElm.appendChild(sec);
    })

    return mainElm;
}

const section = (item) => {
    const sec = document.createElement("section");

    console.log("entering data for loop");
    let title = document.createElement("h2");
    title.textContent = item.name;

    let text = document.createElement("p");
    text.innerHTML = item.text;
    sec.append(title, text);

    return sec;
}

const init = () => {
    // content.appendChild(nav());
    // content.appendChild(main(buildHome()));
    //appendContent().append(nav(), main(buildHome()));
    appendContent(nav(), main(buildHome()));
}

init();

export default main;

console.log("hello!!!");