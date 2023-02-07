"use strict";

window.onload = function () {

  serviceOptionsButtonHandler();

}

const serviceOptionsButtonHandler = () => {
  const service__optionsContainer = document.querySelector('.container.service__container');

  //test area start
  // console.log(service__optionsContainer);
  // return;
  //test area end

  service__optionsContainer.addEventListener('click', (event) => {
    const service__optionsAllButtons = document.querySelectorAll('.service__button');

    let clickedElem = event.target;

    if ( clickedElem.closest('.service__button') ) {

      if ( !clickedElem.classList.contains('service__button_active') &&
        !service__optionsContainer.outerHTML.includes('service__button_active')
      ) {
        // console.log(`1 do addSelectionToServiceButton`);
        addSelectionToServiceButton(clickedElem);
      }

      else if ((clickedElem.dataset.buttonId === [...service__optionsAllButtons].find(compareIdsClickedElemAllServiceButtons)?.dataset.buttonId) &&
        clickedElem.classList.contains('service__button_active')
        ) {
          // console.log(`2 do removeSelectionFromServiceButton`);
          removeSelectionFromServiceButton();
      }

      
      else if ( !(clickedElem.dataset.buttonId === [...service__optionsAllButtons].find(getActiveServiceButton)?.dataset.buttonId) && 
        service__optionsContainer.outerHTML.includes('service__button_active')) {
          // console.log(`3 do removeSelection addSelection`);
          removeSelectionFromServiceButton();
          addSelectionToServiceButton(clickedElem);
      }

      else {
        console.log(`nothing`);
      }
    }
  })
  };

const compareIdsClickedElemAllServiceButtons = (elem) => {
  let clickedElem = event.target;
  if (elem.dataset.buttonId === clickedElem.dataset.buttonId) {
    return elem.dataset.buttonId;
  }
}

const getActiveServiceButton = (item) => {
  if (item.getAttribute('class').includes('service__button_active')) {
    return item;
  }
}

const removeSelectionFromServiceButton = () => {
  const service__optionsAllButtons = document.querySelectorAll('.service__button');
  const service__optionsAllCards = document.querySelectorAll('.service__item')
  
  service__optionsAllButtons.forEach((button) => {
    button.classList.remove('service__button_active');
  })
  
  service__optionsAllCards.forEach((button) => {
    button.classList.remove('service__item_active');
  })
}


const addSelectionToServiceButton = (clickedElem) => {
  const service__optionsAllButtons = document.querySelectorAll('.service__button');

  const buttonOptionSync = {
    'service__button-gardens' : ['service__garden-care-content0', 'service__garden-care-content1'],
    'service__button-planting' : ['service__planting-content0', 'service__planting-content1', 'service__planting-content2'],
    'service__button-lawn' : ['service__lawn-care-content0']
  };

  if (clickedElem.classList != 'service__button') {
    return;
  }

  clickedElem.classList.add('service__button_active');

  linkDescriptionWithServiceButton(clickedElem, buttonOptionSync);
}

//I created this code for 4 ours!!! But it hard to read, so it need to be refactored((((((((( ::crying::

const linkDescriptionWithServiceButton = (clickedElem, buttonOptionSync) => {
  Object.keys(buttonOptionSync).forEach((elem) => {
    if (elem === clickedElem.dataset.buttonId) {
      let elemWatch = document.querySelectorAll('.service__item');
      elemWatch.forEach((card) => {
        card.classList.add('service__item_active');

        buttonOptionSync[elem].forEach((optionElemId) => {
          let currentCard = [...elemWatch].find((activeCard) => {
            if (activeCard.getAttribute('data-button__description-id').includes(optionElemId)) {
              return activeCard;
            }
          });
          currentCard.classList.remove('service__item_active');
        })
      })
    }
  })
}

