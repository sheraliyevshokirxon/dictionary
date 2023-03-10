import { meiningSpik } from "./updateU";

function errorUI(error) {
    const box = document.querySelector(".box")
    box.innerHTML =""
    console.log(error[0]);
    const container = document.querySelector('.box')
    const { title, message, resolution } = error
    box.innerHTML = `
    <div class="error">
    <p class="sad">😕</p>
    <h2 class="error__title">${"ERROOR"}</h2>
    <p class="error__desc">${"no word with this meaning was found"}</p>
    </div>
    `;
}

export default errorUI;