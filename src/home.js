import main from "./index.js";

const data = [
    {
        name: "About",
        text: "Welcome to Happy Tails Cafe, where cozy meets cute. Our cafe is a haven for all animal lovers, complete with delicious treats, fresh coffee, and furry friends aplenty. Come visit us and enjoy a purrrfectly delightful experience unlike any other."
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
        text: "Happy Tails Cafe Nooks Neighborhood Café<br>123 Bell Tree Lane<br>New Horizons, AC 12345"
    }
];

const buildHome = () => {
    if(document.getElementById("main")){
        console.log("main exists...deleting...")
        const mainElem = document.getElementById("main");
        mainElem.remove();
    }
    else{
        //need to fix, bc buildHome gets called twice, once deletes the main then enters again, may need to fix main()
        console.log("else home");
        return data;
    }
    // const main = document.getElementById("main");
    // main.textContent = "hello";
    //main(detail);
    return main(data);
}

export default buildHome;