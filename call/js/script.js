let hour = 00;
let min = 00;
let sec = 00;
sec = `0${sec}`;
min = `0${min}`;
hour = `0${hour}`;
let calltime = document.querySelector(".call__time");

const time = function () {
  if (sec < 59) {
    sec++;
    if (sec < 10) {
      sec = `0${sec}`;
    }
  } else {
    sec = 0;
    min = `0${sec}`;
    if (min < 59) {
      min++;
      if (min < 10) {
        min = `0${min}`;
      }
    } else {
      min = 0;
      min = `0${min}`;
      hour++;
      if (hour < 10) {
        hour = `0${hour}`;
      }
    }
  }
  calltime.innerText = "";
  calltime.innerText = `${hour}:${min}:${sec}`;
};

setInterval(time, 1000);