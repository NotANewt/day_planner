// global variables

// functions

//function to fire check time function every 30sec
function callCheckTime()

//check the current hour and change color accordingly
function checkTimeChangeColor()
//if row is current hour, change background to red
//if row is after current hour, change background to green

// save tasks to local storage
function saveTask() {
  console.log($(this).parent());

  const time = $(this).parent().attr("id");
  const task = $(this).siblings("textarea").val();

  localStorage.setItem(time, task);
}

// retrieve tasks from local storage
$("#hour9 .js-task").val(localStorage.getItem("hour9"));
$("#hour10 .js-task").val(localStorage.getItem("hour10"));
$("#hour11 .js-task").val(localStorage.getItem("hour11"));
$("#hour12 .js-task").val(localStorage.getItem("hour12"));
$("#hour13 .js-task").val(localStorage.getItem("hour13"));
$("#hour14 .js-task").val(localStorage.getItem("hour14"));
$("#hour15 .js-task").val(localStorage.getItem("hour15"));
$("#hour16 .js-task").val(localStorage.getItem("hour16"));
$("#hour17 .js-task").val(localStorage.getItem("hour17"));

// event listeners

// show current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

// user clicks save button
$(".js-saveBtn").on("click", saveTask);
