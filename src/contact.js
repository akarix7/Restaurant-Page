import main from "./index.js";

const data = [
    {
        name: "Email",
        text: "contact@happytailscafe.com"
    },
    {
        name: "Phone",
        text: "555-194-2301"
    },
    {
        name: "Address",
        text: "Happy Tails Café<br>123 Bell Tree Lane<br>New Horizons, AC 12345"
    }
]

const buildContact = () => {
    if(document.getElementById("main")){
        const mainElem = document.getElementById("main");
        mainElem.remove();
    }
    const contactPage = main(data);
    contactPage.className = "contact-page";

    return contactPage;
}

export default buildContact;