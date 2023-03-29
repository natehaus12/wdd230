
let url = new URL(window.location);
let params  = url.searchParams;

for (const p of params) {
    console.log(p);
}


document.querySelector('#order-name').textContent = params.get("fname");
document.querySelector('#order-email').textContent = params.get("email");
document.querySelector('#order-phone').textContent = params.get("cell");

document.querySelector('#order-fruits').textContent = params.get("fruits1")

if ((params.get("fruits2")) != ""){
    document.querySelector('#order-fruits').textContent += ", " + params.get("fruits2")
}

if ((params.get("fruits3")) != ""){
    document.querySelector('#order-fruits').textContent += ", " + params.get("fruits3")
}

document.querySelector('#order-instructions').textContent = params.get("special-instructions")


const fruitUrl = "./data/fruit.json";



const displayFruits = (fruits) => {

    

    const info = document.querySelector("#fruit-info")

    let totalCalories = 0
    let totalCarbs = 0
    let totalProtein = 0
    let totalFat = 0
    let totalSugar = 0

    const fruit1name = params.get("fruits1")
    let fruit2name = null
    let fruit3name =null

    if ((params.get("fruits2")) != ""){
        fruit2name = params.get("fruits2")
    }
    if ((params.get("fruits3")) != ""){
        fruit3name = params.get("fruits3")
    }

    for (var i=0; i < fruits.length; i++) {
        if (fruits[i].name == fruit1name || fruits[i].name == fruit2name || fruits[i].name == fruit3name){
            totalCalories += fruits[i].nutritions.calories
            totalCarbs += fruits[i].nutritions.carbohydrates
            totalProtein += fruits[i].nutritions.protein
            totalFat += fruits[i].nutritions.fat
            totalSugar += fruits[i].nutritions.sugar
        }
     }

     let section = document.createElement("section");
     section.innerHTML = `<h4>Your Drink Totals: </h4>
     <h5>Calories: ${totalCalories}</h5>
     <h5>Carbohydrates (grams): ${totalCarbs}</h5>
     <h5>Protein (grams): ${totalProtein}</h5>
     <h5>Fat (grams): ${totalFat}</h5>
     <h5>Sugar (grams): ${totalSugar}</h5><hr>`

     info.appendChild(section)
     
    fruits.forEach((fruits) => {
        if (fruit1name == fruits.name){



            let section = document.createElement("section");
            section.innerHTML = `<h4>${fruits.name}</h4>
            <h5>Calories: ${fruits.nutritions.calories}</h5>
            <h5>Carbohydrates (grams): ${fruits.nutritions.carbohydrates}</h5>
            <h5>Protein (grams): ${fruits.nutritions.protein}</h5>
            <h5>Fat (grams): ${fruits.nutritions.fat}</h5>
            <h5>Sugar (grams): ${fruits.nutritions.sugar}</h5><hr>`

            info.appendChild(section)

        } 
        if (fruit2name == fruits.name){


            let section = document.createElement("section");
            section.innerHTML = `<h4>${fruits.name}</h4>
            <h5>Calories: ${fruits.nutritions.calories}</h5>
            <h5>Carbohydrates (grams): ${fruits.nutritions.carbohydrates}</h5>
            <h5>Protein (grams): ${fruits.nutritions.protein}</h5>
            <h5>Fat (grams): ${fruits.nutritions.fat}</h5>
            <h5>Sugar (grams): ${fruits.nutritions.sugar}</h5><hr>`

            info.appendChild(section)

        } 
        if (fruit3name == fruits.name){


            let section = document.createElement("section");
            section.innerHTML = `<h4>${fruits.name}</h4>
            <h5>Calories: ${fruits.nutritions.calories}</h5>
            <h5>Carbohydrates (grams): ${fruits.nutritions.carbohydrates}</h5>
            <h5>Protein (grams): ${fruits.nutritions.protein}</h5>
            <h5>Fat (grams): ${fruits.nutritions.fat}</h5>
            <h5>Sugar (grams): ${fruits.nutritions.sugar}</h5><hr>`

            info.appendChild(section)

        }

        
    
    }
    ); 
  
}; 

 

async function getFruitData() {
    const response = await fetch(fruitUrl);
    if (response.ok) {
     
      const data = await response.json();
      displayFruits(data.fruits);
    } else {
      console.error("There was an error loading the fruit data. Try again Later");
      const fruits = document.querySelector("#fruit-info");
      fruits.innerHTML = "<section><h1>There was an error loading the fruit data. Try again Later.</h1></section>";
    }
  }

getFruitData()

