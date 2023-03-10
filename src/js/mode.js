const checkbox = document.getElementById('checkbox');
const body = document.body
const shadov = document.querySelector(".dropdown-content")
const inputSearch = document.querySelector(".inputSearch")


const darkMode = localStorage.getItem("mode")
if(darkMode){
  document.body.classList.toggle('dark');
  shadov.style = `box-shadow: 0px 5px 30px #A445ED;` 
  inputSearch.style = `box-shadow: 0px 5px 30px #A445ED;` 
}


checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
  if(body.classList.contains("dark")){
    localStorage.setItem("mode","dark")
    shadov.style = `box-shadow: 0px 5px 30px #A445ED;` 
    inputSearch.style = `box-shadow: 0px 5px 30px #A445ED;` 
  }else{
    localStorage.setItem("mode", "")
    shadov.style = `box-shadow: 0px;`
    inputSearch.style = `box-shadow: 0px;` 
  }
})
