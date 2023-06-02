import "./style.css";

const content = () => {
    return document.getElementById("content");
}
const nav = () => {
    let links = ["Home", "About", "Menu", "Contact"];
    const navBar = document.createElement("nav");
    content().appendChild(navBar);

    for(let i = 0; i < 3; i++){
        let li = document.createElement("li");
        li.textContent = links[i];
        navBar.appendChild(li);
    }
}

const main = () => {
    const mn = document.createElement("main");
    content().appendChild(mn);
    section("About", ""); //about
    return mn;
}

const section = (header, text) => {
    const sec = document.createElement("section");
    const h = document.createElement("h2");
    sec.appendChild(h);
    sec.textContent = text;
    return sec;

    //main.appendChild(sec);
}
console.log("hello!!!");
