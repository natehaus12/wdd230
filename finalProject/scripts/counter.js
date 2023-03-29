localStorage.setItem('drinkCounter', '0')

let drinkCounter = parseInt(localStorage.getItem('drinkCounter'))
let drinkSpan = document.querySelector("#number-of-drinks")
drinkSpan.textContent = drinkCounter

let submitButton = document.querySelector('#fresh-form')

submitButton.addEventListener('submit', function() {

    console.log("it was ran!")
    drinkCounter += 1
    drinkSpan.textContent = drinkCounter
    localStorage.setItem('drinkCounter', toString(drinkCounter))

})




