// functions

//check the current hour and change color accordingly
function checkTimeChangeColor() {
  //get current hour from moment
  let currentHour = moment().hour();
  //loop through all rows and check data-hour
  $(".time-block").each(function () {
    //if row is before current hour, change background to grey
    if ($(this).data("hour") < currentHour) {
      $(".js-task", this).addClass("past");
    }
    //if row is current hour, change background to red
    else if ($(this).data("hour") == currentHour) {
      $(".js-task", this).addClass("present");
    }
    //if row is after current hour, change background to green
    else {
      $(".js-task", this).addClass("future");
    }
  });
}

//call function when site loads
checkTimeChangeColor();

//setInterval so checkTimeChangecolor is called every 30sec
setInterval(checkTimeChangeColor, 30000);

// save tasks to local storage
function saveTask() {
  //set variable for time and task
  const time = $(this).parent().attr("id");
  const task = $(this).siblings("textarea").val();
  //send time and task to local storage
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
$(".saveBtn").on("click", saveTask);
