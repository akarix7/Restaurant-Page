import "./style.css";
import buildHome from "./home.js";
import buildAbout from "./about.js";
import buildMenu from "./menu.js";
import buildContact from "./contact.js";

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
    const links = new Map();
    links.set(0, ["Home", buildHome]);
    links.set(1, ["About", buildAbout]);
    links.set(2, ["Menu", buildMenu]);
    links.set(3, ["Contact", buildContact]);

    const navBar = document.createElement("nav");

    links.forEach((link)=> {
        const li = document.createElement("li");
        li.textContent = link[0];
        li.addEventListener("click", e=> {
            //link[1]();
            appendContent(link[1]());
        })
        navBar.appendChild(li);
    })

    // const home = document.createElement("li");
    // home.textContent = "Home";
    // home.addEventListener("click", e => {
    //     console.log("home nav clicked");
    //     appendContent(buildHome());
    // })


    //navBar.append(home, about);
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
    let currentCategory;

    data.forEach((item) => {
        if(item.category && item.category !== currentCategory){
            currentCategory = item.category;
            const title = document.createElement("h2");
            title.className = "course";
            title.textContent = currentCategory;
            mainElm.appendChild(title);
        }

        const sec = section(item);
        mainElm.appendChild(sec);
    })

    return mainElm;
}

const section = (item) => {
    const sec = document.createElement("section");

    console.log("entering data for loop");
    let title = document.createElement("h3");
    title.textContent = item.name;

    let text = document.createElement("p");
    text.innerHTML = item.text;
    sec.append(title, text);

    return sec;
}

const init = () => {
    appendContent(nav(), main(buildHome()));
}

init();

export default main;

console.log("hello!!!");