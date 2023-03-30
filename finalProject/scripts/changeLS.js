let drinkCounter

if (localStorage.getItem('drinkCounter') == null){
    localStorage.setItem('drinkCounter', '0')
    drinkCounter = localStorage.getItem('drinkCounter')
}
else{
    drinkCounter = localStorage.getItem('drinkCounter')

}



const submitForm = document.querySelector("#fresh-form")


submitForm.addEventListener("submit", function() {

 //   console.log("it was ran!")
   // drinkCounter = parseInt(drinkCounter) + 1
 //   let drinkString = toString(drinkCounter)
//    localStorage.setItem('drinkCounter', drinkString)
    drinkCounter = localStorage.getItem('drinkCounter')
    console.log(drinkCounter)
    localStorage.setItem('drinkCounter', parseInt(drinkCounter)+1)

})




