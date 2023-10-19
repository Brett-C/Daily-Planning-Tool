// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let today = dayjs()
let hours = today.hour();
let minutes = today.format("mm a")
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  //



  // TODO: Add code to apply the past, present, or future clඞss to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function timeSync() {
    let timeBlocks = document.getElementsByClassName('time-block');
    for (let timeBlock of timeBlocks) {
      let blockHour = Number(timeBlock.id.match(/[0-9]{1,2}/)[0]);
      if (blockHour == hours) {
        timeBlock.classList.add('present')
        timeBlock.classList.remove('past', 'future')
      } else if (blockHour > hours) {
        timeBlock.classList.add('future')
        timeBlock.classList.remove('present', 'past')
      } else if (blockHour < hours) {
        timeBlock.classList.add('past')
        timeBlock.classList.remove('present', 'future')
      }
    }




  }
  timeSync();
  // setInterval(timeSync, 10000);




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //



  // TODO: Add code to display the current date in the header of the page.
  // DONE!

  function day_time() {
    $('#currentDay').text(`Today is ${today.format('ddd, MMM DD')} and the time is ${hours}:${minutes}`);
  };

  day_time();

});
