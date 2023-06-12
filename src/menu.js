import main from "./index.js";

const data = [
    {
        name: "Happy Home Omelette",
        text: "A fluffy three-egg omelette filled with diced ham, bell peppers, and cheese, served with toast and a side of fresh fruit.",
        category: "Main Entrees"
    },
    {
        name: "Leafy Greens Salad",
        text: "A refreshing and crunchy salad made with mixed greens, carrots, cucumbers, and cherry tomatoes, topped with a sweet vinaigrette dressing and croutons shaped like leaves.",
        category: "Main Entrees"
    },
    {
        name: "Kawaii Curry Rice",
        text: "A comforting bowl of Japanese-style curry with tender chicken or veggies and fluffy rice, shaped like a cute animal.",
        category: "Main Entrees"
    },
    {
        name: "Rainbow Honey Tea",
        text: "A soothing ginger honey tea with a rainbow of fruit flavors, served with a honey-dipped honeycomb-shaped stirrer.",
        category: "Drinks"
    },
    {
        name: "Peachy Keen Iced Tea",
        text: "A refreshing iced tea infused with peach flavor and served with peach-shaped ice cubes.",
        category: "Drinks"
    },
    {
        name: "Starry Night Hot Cocoa",
        text: "A rich and creamy hot chocolate with a dash of cinnamon and a topping of homemade marshmallows shaped like stars.",
        category: "Drinks"
    },
    {
        name: "Pink Petal Tea",
        text: "A delicate and floral Japanese tea made with cherry blossoms, served in a dainty teapot and cups.",
        category: "Drinks"
    },
    {
        name: "Cinnamon Swirl Latte",
        text: "A cozy latte made with a sweet maple syrup and frothy milk, topped with a heart-shaped latte art.",
        category: "Drinks"
    },
    {
        name: "Black Pearl Delight: ",
        text: "A traditional milk tea made with black tea, creamy milk, and sweetened with a touch of sugar, then topped off with chewy tapioca pearls.",
        category: "Drinks"
    },
    {
        name: "Berry Matcha Marble: ",
        text: "This refreshing milk tea is made with a blend of sweet strawberry, earthy matcha green tea, and creamy milk, paired with chewy tapioca pearls for a fun and unique texture combination.",
        category: "Drinks"
    },
    {
        name: "Fossilized Cookies",
        text: "Delicious sugar cookies shaped like fossilized animal tracks, perfect for dunking in your tea or cocoa",
        category: "Desserts"
    },
    {
        name: "Berry Bustle Muffins",
        text: "Fresh-baked muffins bursting with blueberries, raspberries, and strawberries, and topped with a sprinkle of powdered sugar.",
        category: "Desserts"
    },
    {
        name: "DIY Animal Cookie Plate",
        text: "A fun and interactive snack for all ages, featuring a plate of animal-shaped cookies and various icings and toppings for you to decorate and make your own.",
        category: "Desserts"
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