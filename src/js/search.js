import request from "./request"
import { meiningSpik } from "./updateU"
import errorUI from "./error"

const input = document.getElementById("input")
const form = document.querySelector(".form")



form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const query = input.value;
    input.value = ''
    const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    
    request(API).then((data) =>{
        meiningSpik(data)
        console.log(data);
    }).catch((err) =>{
        errorUI(err)
    })
    
})
