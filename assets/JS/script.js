//Today's Date
var currentDayEl = document.getElementById("currentDay");
currentDayEl.textContent = moment().format('dddd') + ", " +  moment().format("MMMM Do");  

//Saves event to storage and saves on refresh 
function renderEvent() {
   $('#9AM .description').val(localStorage.getItem('9AM'));
   $('#10AM .description').val(localStorage.getItem('10AM'));
   $('#11AM .description').val(localStorage.getItem('11AM'));
   $('#12PM .description').val(localStorage.getItem('12PM'));
   $('#1PM .description').val(localStorage.getItem('1PM'));
   $('#2PM .description').val(localStorage.getItem('2PM'));
   $('#3PM .description').val(localStorage.getItem('3PM'));
   $('#4PM .description').val(localStorage.getItem('4PM'));
   $('#5PM .description').val(localStorage.getItem('5PM'));
};

$(".saveBtn").on('click', function () {
   var row = $(this).closest(".row")

   var description = row.find(".description").val();
   var hour = row.attr('id');

   localStorage.setItem(hour, description);
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


