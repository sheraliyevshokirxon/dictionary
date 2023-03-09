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
    <h2 class="error__title">${error.title}</h2>
    <p class="error__desc">${error.message + error.resolution}</p>
    </div>
    `;
}

export default errorUI;