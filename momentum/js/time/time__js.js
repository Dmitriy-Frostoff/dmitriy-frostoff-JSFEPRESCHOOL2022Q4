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
  
  const greetingTextElement = document.querySelector('.greeting');

  const greetingNameElement = document.querySelector('.name');

  const getGreetingDependOnTime = (date) => {
    let currentHour = date.getHours();

    switch (true) {
      case (currentHour > 0 && currentHour < 6):
        return `Good night,`;
      case (currentHour > 6 && currentHour < 12):
        return `Good morning,`;
      case (currentHour > 12 && currentHour < 18):
        return `Good afternoon,`;
      case (currentHour > 18 && currentHour < 24):
        return `Good evening,`;
    }
  }

  const setGreetingIntoElement = (greetingTextElement, getGreetingDependOnTime, date) => {
    greetingTextElement.textContent = getGreetingDependOnTime(date);
  }
  
  const showDate = () => {
    const date = new Date();

    const options = { weekday: 'long', month: 'long', day: 'numeric'};

    dateElement.textContent =  date.toLocaleDateString('en-GB', options);
  }
  
  const showTime = () => {
    const date = new Date();
  
    timeElement.textContent =  date.toLocaleTimeString();
  
    showDate();

    setGreetingIntoElement(greetingTextElement, getGreetingDependOnTime, date);

    showTime.timerID = setTimeout(showTime, 1000);
  }

  showTime();
}
//=================================================================================================================
//    Time js functions end
//=================================================================================================================