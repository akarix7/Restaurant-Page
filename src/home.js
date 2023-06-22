import main from "./index.js";
import {other} from "./img/images";

const data = [
    {
        name: "About",
        text: "Welcome to Happy Tails Café, where cozy meets cute. Our cafe is a haven for all animal lovers, complete with delicious treats, fresh coffee, and furry friends aplenty. Come visit us and enjoy a purrrfectly delightful experience unlike any other."
    },
    {
        name: "Hours",
        text:
            `<ul>
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
        text: "Happy Tails Café<br>123 Bell Tree Lane<br>New Horizons, AC 12345"
    }
];

const buildHome = () => {
    if(document.getElementById("main")){
        const mainElem = document.getElementById("main");
        mainElem.remove();
    }
    else{
        return data;
    }

    const homePage = main(data);
    homePage.className = "home-page";

    const homeImg = document.createElement("img");
    homeImg.src = `${other.home01}`;
    homeImg.alt = "Cafe";
    homePage.prepend(homeImg);

    return homePage;
}

export default buildHome;