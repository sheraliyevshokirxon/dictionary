const checkbox = document.getElementById('checkbox');
const body = document.body


const darkMode = localStorage.getItem("mode")
if(darkMode){
  document.body.classList.toggle('dark');
}


checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
  if(body.classList.contains("dark")){
    localStorage.setItem("mode","dark")
  }else{
    localStorage.setItem("mode", "")
  }
})
