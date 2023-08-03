const bar =  document.querySelector(`.menu`)
const dropdown = document.querySelector(`#list`)
const back = document.querySelector(`.back`)
console.log(bar);
bar.addEventListener(`click`, function() {
    dropdown.classList.toggle(`active`)
    console.log(`salom`);
})
back.addEventListener(`click`, function() {
    dropdown.classList.toggle(`active`)
})