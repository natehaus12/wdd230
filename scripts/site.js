// set year for the footer

const date = new Date()
document.querySelector('#currentyear').textContent = date.getFullYear();

//set last modififed in footer

document.querySelector('#lastmodified').textContent = document.lastModified;