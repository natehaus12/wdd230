//json stuff
const url = "./data/fruit.json";

const displayFruits = (fruits) => {
  const fruitList1 = document.querySelector(".fruit-list1"); 
  const fruitList2 = document.querySelector(".fruit-list2"); 
  const fruitList3 = document.querySelector(".fruit-list3"); 

  fruits.forEach((fruits) => {
    let option = document.createElement("option");
    option.text = fruits.name;
    option.value = fruits.name;

    fruitList1.add(option);

    let option2 = document.createElement("option");
    option2.text = fruits.name;
    option2.value = fruits.name;

    fruitList2.add(option2);

    let option3 = document.createElement("option");
    option3.text = fruits.name;
    option3.value = fruits.name;

    fruitList3.add(option3);
  }); 
  
}; 

async function getFruitData() {
  const response = await fetch(url);
  if (response.ok) {
   
    const data = await response.json();
    displayFruits(data.fruits);
  } else {
    console.error("There was an error loading the fruit data. Try again Later");
    const fruits = document.querySelector("fruit-list");
    fruits.innerHTML = "<section><h1>There was an error loading the fruit data. Try again Later.</h1></section>";
  }
}

getFruitData();
