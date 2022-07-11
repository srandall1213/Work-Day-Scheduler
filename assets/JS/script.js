var currentDayEl = document.querySelector("#currentDay");

//Today's Date
currentDayEl.textContent = moment().format('dddd') + ", " +  moment().format("MMM Do");   


