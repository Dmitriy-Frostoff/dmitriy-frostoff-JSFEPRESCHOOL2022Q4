"use strict";

window.onload = function () {

  //time
  timeAndDateFunc();

}

//=================================================================================================================
//    Time js functions start
//=================================================================================================================

const timeAndDateFunc = () => {
  const timeElement = document.querySelector('.time');

  const dateElement = document.querySelector('.date');

  const showDate = () => {
    const date = new Date();

    const options = { weekday: 'long', month: 'long', day: 'numeric', timeZoneName: 'short'};

    dateElement.textContent =  date.toLocaleDateString('ru-RU', options);
  }
  
  const showTime = () => {
    const date = new Date();
  
    timeElement.textContent =  date.toLocaleTimeString();
  
    showDate();

    setTimeout(showTime, 1000);
  }

  showTime();
}
//=================================================================================================================
//    Time js functions end
//=================================================================================================================