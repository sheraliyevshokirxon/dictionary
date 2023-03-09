const f1 = document.querySelector('.f1')
const f2 = document.querySelector('.f2')
const f3 = document.querySelector('.f3')
const dropdownTitle = document.querySelector('.dropdown--title')

f1.addEventListener('click', () => {
    document.body.style.fontFamily = 'sans-serif'
    dropdownTitle.textContent = 'Sans-Serif'
    console.log("helo");
})
f2.addEventListener('click', () => {
    document.body.style.fontFamily = 'serif'
    dropdownTitle.textContent = 'Serif'
})
f3.addEventListener('click', () => {
    document.body.style.fontFamily = 'monospace'
    dropdownTitle.textContent = 'Mono'
})