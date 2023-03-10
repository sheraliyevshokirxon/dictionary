import request from "./request"
import { meiningSpik } from "./updateU"
import errorUI from "./error"
import { emptyUI } from "./eror"

const input = document.getElementById("input")
const form = document.querySelector(".form")
const empty = document.querySelector(".empty")
const box = document.querySelector(".box")
const warning = document.querySelector(".strat-container")


form.addEventListener("submit", (e) =>{
    e.preventDefault()
        const query = input.value;
        if(query == ''){
            const time = setTimeout(() =>{
                warning.style.border="2px solid #ff5252"
                empty.style.display=' block'
                
                
            })
            setInterval(() =>{
                clearTimeout(time)
                
                box.innerHTML = ''
                warning.style.border="none"
                empty.style.display='none'

                
            },3000)
        }
            input.value = ''
            const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
            

            // if (meiningSpik(data)){
            //     request(API)
            //     meiningSpik(data);
            // }else{
            //     errorUI(err)
            // }
            request(API).then((data) =>{
                meiningSpik(data);
                console.log(data);
            }).catch((err) =>{
                errorUI(err)
                console.log(err);
            })
        
        
    
})
