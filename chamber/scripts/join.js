let currentDate= new Date;
let time = currentDate.getHours() + ":" + currentDate.getMinutes();

let dateAndTime = currentDate + " " + time;

var html = document.querySelector("#hiddenTime");
html.value = dateAndTime;