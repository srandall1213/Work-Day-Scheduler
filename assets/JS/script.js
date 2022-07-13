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



// Change descriptionEl color based on the time of day
function colorChanger() {
   setInterval(function () {
      var now = moment().format("H");
      console.log(now);

      var descriptionEl = $(".description");

      for (i = 0; i < descriptionEl.length; i++) {
         var stringID = descriptionEl[i].id;
         var descripID = document.getElementById(descriptionEl[i].id);

         $(descriptionEl[i].id).removeClass(".past .present .future");

         if (stringID < now) {
            $(descripID).addClass("past");
         } else if (stringID > now) {
            $(descripID).addClass("future");
         } else {
            $(descripID).addClass("present");
         }
      }      
   }, 1000);
}
colorChanger();


