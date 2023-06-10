import main from "./index.js";

const data = [
    {
        name: "Happy Home Omelette",
        text: "A fluffy three-egg omelette filled with diced ham, bell peppers, and cheese, served with toast and a side of fresh fruit."
    },
    {
        name: "Leafy Greens Salad",
        text: "A refreshing and crunchy salad made with mixed greens, carrots, cucumbers, and cherry tomatoes, topped with a sweet vinaigrette dressing and croutons shaped like leaves."
    },
    {
        name: "Kawaii Curry Rice",
        text: "A comforting bowl of Japanese-style curry with tender chicken or veggies and fluffy rice, shaped like a cute animal."
    }
]

const buildMenu = () => {
    if(document.getElementById("main")){
        console.log("main exists...deleting...")
        const mainElem = document.getElementById("main");
        mainElem.remove();
    }
    return main(data);
}

export default buildMenu;