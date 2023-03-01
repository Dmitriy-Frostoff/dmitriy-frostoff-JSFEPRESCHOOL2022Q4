"use strict";

window.onload = function () {

  //time
  timeAndDateFunc();
}

//=================================================================================================================
//    Adding eventlisteners start
//=================================================================================================================
const userNameToLocalStorageHandler = () => {
  const greetingUserNameElement = document.querySelector('.name');

  const setUserNameToLocalStorage = () => {
    localStorage.setItem('userName', greetingUserNameElement.value);
  }
  
  const getUserNameToLocalStorage = () => {
    if (localStorage.getItem('userName')) {
      greetingUserNameElement.value = localStorage.getItem('userName');
    }
  }

  window.addEventListener('beforeunload', setUserNameToLocalStorage);

  window.addEventListener('load', getUserNameToLocalStorage);
}

userNameToLocalStorageHandler();

//=================================================================================================================
//    Adding eventlisteners end
//=================================================================================================================

//=================================================================================================================
//    Time js functions start
//=================================================================================================================

const timeAndDateFunc = () => {
  const timeElement = document.querySelector('.time');

  const dateElement = document.querySelector('.date');
  
  const greetingTextElement = document.querySelector('.greeting');

  const date = new Date();

  const showDate = () => {
    const date = new Date();
    
    const options = { weekday: 'long', month: 'long', day: 'numeric'};

    dateElement.textContent =  date.toLocaleDateString('en-GB', options);
  }
  
  const showTime = () => {
    const date = new Date();
  
    timeElement.textContent =  date.toLocaleTimeString();

    //real time greeting function execution
    greetingFunc(greetingTextElement, getTimeOfDay, date);

    showDate();
    
    showTime.timerID = setTimeout(showTime, 1000);
  }

  //background image on time
  backgroundImageFunction(date);

  showTime();
}
//=================================================================================================================
//    Time js functions end
//=================================================================================================================

//=================================================================================================================
//    Greeting js functions start
//=================================================================================================================

const getTimeOfDay = (date) => {
  const currentHour = date.getHours();
  
  switch (true) {
    case (currentHour > 0 && currentHour < 6):
      return 'night';
    case (currentHour >= 6 && currentHour < 12):
      return `morning`;
    case (currentHour >= 12 && currentHour < 18):
      return `afternoon`;
    case (currentHour >= 18 && currentHour < 24):
      return `evening`;
  }
}

const greetingFunc = (greetingTextElement, getTimeOfDay, date) => {
  const getGreetingDependOnTime = (date) => {
    switch (true) {
      case (getTimeOfDay(date) === 'night'):
        return `Good night,`;
      case (getTimeOfDay(date) === 'morning'):
        return `Good morning,`;
      case (getTimeOfDay(date) === 'afternoon'):
        return `Good afternoon,`;
      case (getTimeOfDay(date) === 'evening'):
        return `Good evening,`;
    }
  }
  
  const setGreetingIntoElement = (greetingTextElement, getGreetingDependOnTime, date) => {
    greetingTextElement.textContent = getGreetingDependOnTime(date);
  }

  setGreetingIntoElement(greetingTextElement, getGreetingDependOnTime, date);
}



//=================================================================================================================
//    Greeting js functions end
//=================================================================================================================

//=================================================================================================================
//    Background-image js functions start
//=================================================================================================================

// get css class func start 
const getCSSclass = (desiredСlass) => {
  const cssRules = document.styleSheets[1].cssRules;

  let classToChange;
  
  for (let i in cssRules) {
    if (cssRules[i].selectorText === desiredСlass) {
      classToChange = cssRules[i];
    }
  }
  
  return classToChange;
}
// get css class func end 

const backgroundImageFunction = (date) => {
  // const bodyElement = document.querySelector('.body');
  const bodyElement = getCSSclass('.body');

  let randomNumber;
  
  const getRandomNumberFromRangeInclusive = (min, max) => {
    min = Math.ceil(min);
    
    max = Math.floor(max);
  
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  }

  const imageSlideNext = () => {
    ++randomNumber;
    if (randomNumber === 21) {
      randomNumber = 1;
    }
    setBackgroundImage(getTimeOfDay);
  }

  const imageSlidePrevious = () => {
    --randomNumber;
    if (randomNumber === 0) {
      randomNumber = 20;
    }
    setBackgroundImage(getTimeOfDay);
  }
  
  const setBackgroundImage = (getTimeOfDay) => {
    const backgroundImg = new Image();

    let backgroundImageNumber = String(randomNumber).padStart(2, 0);

    backgroundImg.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay(date)}/${backgroundImageNumber}.jpg`;

    const backgroundImgOnLoad = () => {
      bodyElement.style.backgroundImage = "url" + `(${backgroundImg.src})`;
    }

    // set img as background strictly after img would be loaded
    backgroundImg.addEventListener('load', backgroundImgOnLoad);
  }

  const imageSliderButtonHandler = () => {
    const slideNextButton = document.querySelector('.slide-next');

    const slidePreviousButton = document.querySelector('.slide-prev');

    //add event listener to the Buttons start
    slideNextButton.addEventListener('click', imageSlideNext);

    slidePreviousButton.addEventListener('click', imageSlidePrevious);
    //add event listener to the Buttons end
  }

  getRandomNumberFromRangeInclusive(1, 20);

  imageSliderButtonHandler();

  setBackgroundImage(getTimeOfDay);
}

//=================================================================================================================
//    Background-image js functions end
//=================================================================================================================