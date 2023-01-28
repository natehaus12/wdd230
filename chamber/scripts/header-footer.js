const fulldate = new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(new Date());
document.querySelector('#header-date').textContent = fulldate;


const date = new Date()

//set last modififed in footer

document.querySelector('#lastmodified').textContent = document.lastModified;