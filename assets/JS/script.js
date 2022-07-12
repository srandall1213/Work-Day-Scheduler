var descriptionEl = document.querySelector("#description");


//Today's Date
var currentDayEl = document.getElementById("currentDay");
currentDayEl.textContent = moment().format('dddd') + ", " +  moment().format("MMMM Do");  

//Saves event to storage and saves on refresh (WORKS AT 9AM SLOT ONLY)
var saveBtn = document.querySelector("#save");

function renderEvent() {
   var myEvent = localStorage.getItem("My Event:");
   descriptionEl.textContent = myEvent;
}

saveBtn.addEventListener("click", function(event) {
   event.preventDefault();
   localStorage.setItem("My Event:", descriptionEl.value);
   
});
renderEvent();





// Change descriptionEl color based on the time of day - not working yet
// function colorChanger() {
//    setInterval(function () {
//        var hourEl = document.querySelector("#hour");
//        var currentTime = moment().format("hh:mm a");
//        if (currentTime > hourEl) {
//          descriptionEl.classList.add("future");
//        } else if (currentTime < hourEl) {
//          descriptionEl.classList.add("past");
//        } else {
//          descriptionEl.classList.add("present");
//        }
//        console.log(currentTime);
       
// }, 1000);
// }
// colorChanger();


