$(function () {

  $('.saveBtn').click((e) => {
    const containerEl = e.currentTarget.parentNode;
    const descriptionEl = containerEl.querySelector('.description');
    localStorage.setItem(containerEl.id, descriptionEl.value)
  });

  function timeSync() {
    const today = dayjs()
    const hours = 10;
    const minutes = today.format("mm")
    const seconds = today.format("ss a")
    $('#currentDay').text(`Today is ${today.format('ddd, MMM DD')} and the time is ${hours}:${minutes}:${seconds}`);
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
  setInterval(timeSync, 1000);

  for (let i = 9; i <=17; i++) {
    const identifier = `hour-${i}`;
    const savedValue = localStorage.getItem(identifier);
    document.querySelector(`#${identifier} .description`).value = savedValue;
  }
});