

var messagedate = new Date();
if(messagedate.getDay() == 1 || messagedate.getDay() == 2){
    document.querySelector("#meet-greet").classList.add('active')
}

const businessDataUrl = "./data/business.json";

function displayBusiness(businessList){
    const spotlightSelect = document.querySelector(".spotlightSelect"); 
    businessList = businessList.filter(x => x.membershipLevel == 'Gold' || x.membershipLevel == 'Silver');
    spotlights = [];
    for (let i=0; i<3; i++){
        var elt = Math.floor(Math.random() * businessList.length)
        spotlights.push(businessList.splice(elt,1));
    }
    console.log(businessList)

    businessList.forEach((businessList) => {
        let spotlight = document.createElement("section");
        spotlight.innerHTML = `
        <h2>${businessList.name}</h2>
        <img src="${businessList.imageUrl}" alt="${businessList.name} loading="lazy">
        <h3>"${businessList.phrase}"</h3>
        <h4>${businessList.websiteUrl}</h4>
        <h4>${businessList.phoneNumber}</h4><hr>
        `;
        spotlightSelect.appendChild(spotlight);
      }); 
};

async function getBusinessData() {
    const response = await fetch(businessDataUrl);
    if (response.ok) {
      const data = await response.json();
      displayBusiness(data.businesses);
    } else {
      console.error("There was an error loading the businesses. Try again Later");
      const spotlightSelect = document.querySelector(".spotlightSelect"); 
      spotlightSelect.innerHTML = "<section><h1>There was an error loading the businesses. Try again Later.</h1></section>";
    }
  }
  
  getBusinessData();

