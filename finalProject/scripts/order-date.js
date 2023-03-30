const fulldate = new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(new Date());
document.querySelector('#order-date').textContent = fulldate;