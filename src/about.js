import main from "./index.js";
import {other} from "./img/images.js";

const data = [
    {
        name: "Welcome to Happy Tails Cafe",
        text: `Welcome to our Animal Crossing themed café! <br>
We are a team of passionate and dedicated individuals who love bringing joy and smiles to our customers. 
Our café is designed to transport you to the whimsical world of Animal Crossing, where you can enjoy a cup of coffee or a tasty snack surrounded by all your favorite characters.<br><br>
Our menu is carefully crafted to reflect the unique personality of each character, from the sweet and cuddly to the mischievous and quirky. 
We strive to use only the highest quality ingredients in our drinks and snacks, so you can taste the difference with every sip and bite.<br><br>
At our café, we believe in fostering a sense of community and friendship. 
That's why we offer a variety of events and activities throughout the year, such as game nights and cosplay events. 
It's the perfect opportunity to connect with other Animal Crossing fans and make lasting memories.<br><br>
Thank you for considering our café for your next outing or event. We hope to see you soon and share our love of Animal Crossing with you!`
    }
]

const buildAbout = () => {
    if(document.getElementById("main")){
        const mainElem = document.getElementById("main");
        mainElem.remove();
    }
    const aboutPage = main(data);
    aboutPage.className = "about-page";

    const aboutImg = document.createElement("img");
    aboutImg.src = `${other.about01}`;
    aboutImg.alt = "Cafe";
    aboutPage.prepend(aboutImg);

    return aboutPage;
}

export default buildAbout;