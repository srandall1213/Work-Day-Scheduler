//Today's Date
var currentDayEl = document.getElementById("currentDay");
currentDayEl.textContent = moment().format('dddd') + ", " +  moment().format("MMM Do");   

//Save Event
var saveBtn = document.getElementById("save");

function renderEvent() {
   var myEvent = localStorage.getItem("My Event:");
   var descriptionEl = document.getElementById("description");
   descriptionEl.textContent = myEvent;
}

saveBtn.addEventListener("click", function(event) {
   event.preventDefault();
   var descriptionEl = document.getElementById("description").value;
   localStorage.setItem("My Event:", descriptionEl);
   
});
renderEvent();

