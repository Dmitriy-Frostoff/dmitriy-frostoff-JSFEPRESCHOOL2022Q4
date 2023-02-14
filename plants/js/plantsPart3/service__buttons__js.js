"use strict";

window.onload = function () {

  serviceOptionsButtonHandler();
  
}
//=================================================================================================================
//    Service section js functions start
//=================================================================================================================

//=====================================  add Handler to the buttons =====================================

const serviceOptionsButtonHandler = () => {
  const service__optionsContainer = document.querySelector('.container.service__container');

  service__optionsContainer.addEventListener('click', (event) => {
    const service__optionsAllButtons = document.querySelectorAll('.service__button');
    
    
    let clickedElem = event.target;
    
    if ( clickedElem.closest('.service__button') ) {
      let activeButtonClassCount = service__optionsContainer.outerHTML.match(/service__button_active/g) || [];

      if ( !clickedElem.classList.contains('service__button_active')) {
        if (activeButtonClassCount.length > 1) {
          return;
        }
        // console.log(`1 do addSelectionToServiceButton`);
        addSelectionToServiceButton(clickedElem);
      }

      else if ((clickedElem.dataset.buttonId === [...service__optionsAllButtons].find(compareIdsClickedElemAllServiceButtons)?.dataset.buttonId) &&
      clickedElem.classList.contains('service__button_active')
      ) {
        // console.log(`2 do removeSelectionFromServiceButton`);
        removeSelectionFromServiceButton(clickedElem);
    }

    else {
      console.log(`nothing`);
    } 
    }
  })
  };

//=====================================  add handler to buttons end  =====================================

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

//=====================================  selection to buttons start =====================================


const addSelectionToServiceButton = (clickedElem) => {
  if (!clickedElem.classList.contains('service__button')) {
    return;
  }

  clickedElem.classList.add('service__button_active');

  linkDescriptionWithServiceButton();

}

// Yeah!!!)))) I refactored this func!))))))))))) :smile:
const linkDescriptionWithServiceButton = () => {
  const service__optionsContainer = document.querySelector('.container.service__container');

  let clickedElem = event.target;

  let activeButtonClassCount = service__optionsContainer.outerHTML.match(/service__button_active/g) || [];

  const buttonOptionSync = {
    'service__button-gardens' : ['service__garden-care-content0', 'service__garden-care-content1'],
    'service__button-planting' : ['service__planting-content0', 'service__planting-content1', 'service__planting-content2'],
    'service__button-lawn' : ['service__lawn-care-content0']
  };
  
  const serviceCardElemId = getServiceKeyEqualToElemId(clickedElem, buttonOptionSync);
  
  if (activeButtonClassCount.length === 1) {
    addClassActiveToServiceItems();

    removeActiveClassFromCurrentServiceCard(serviceCardElemId, buttonOptionSync);
  }

  else if (activeButtonClassCount.length === 2) {
    removeActiveClassFromCurrentServiceCard(serviceCardElemId, buttonOptionSync);
  }
  
  else {
    console.log(`nothing`);
  }
  
}

const getServiceKeyEqualToElemId = (clickedElem, buttonOptionSync) => {
  return Object.keys(buttonOptionSync).filter((serviceCardElemId) => {
    if (serviceCardElemId === clickedElem.dataset.buttonId) {
      return serviceCardElemId;
    }
    }
  )};


const addClassActiveToServiceItems = () => {
  let elemToWatch = document.querySelectorAll('.service__item');
  elemToWatch.forEach((card) => {
    card.classList.add('service__item_active');
  })
}

const removeActiveClassFromCurrentServiceCard = (serviceCardElemId, buttonOptionSync) => {
  buttonOptionSync[serviceCardElemId].forEach((optionElemId) => {
    let elemToWatch = document.querySelectorAll('.service__item');

    let currentCard = [...elemToWatch].filter((activeCard) => {
      if (activeCard.getAttribute('data-button__description-id').includes(optionElemId)) {
        return activeCard;
      }
    });
    currentCard.forEach(activeElem => {
      activeElem.classList.remove('service__item_active');
    })
  })
}
//=====================================  selection to buttons end =====================================

//=====================================  removing selection from buttons start =====================================

const removeSelectionFromServiceButton = (clickedElem) => {
  if (!clickedElem.classList.contains('service__button')) {
    return;
  }

  clickedElem.classList.remove('service__button_active');

  removeLinkDescriptionWithServiceButton();
  

}

// Yeah!!!)))) I refactored this func!))))))))))) :smile:
const removeLinkDescriptionWithServiceButton = () => {
  const service__optionsContainer = document.querySelector('.container.service__container');

  const currentButtonDomKey = document.querySelector('.service__button_active');
  
  let activeButtonClassCount = service__optionsContainer.outerHTML.match(/service__button_active/g) || [];

  const buttonOptionSync = {
    'service__button-gardens' : ['service__garden-care-content0', 'service__garden-care-content1'],
    'service__button-planting' : ['service__planting-content0', 'service__planting-content1', 'service__planting-content2'],
    'service__button-lawn' : ['service__lawn-care-content0']
  };
  
  const serviceCardElemId = getDomActiveButtonKeyEqualToElemId(currentButtonDomKey, buttonOptionSync);
  
  if (service__optionsContainer.outerHTML.includes('service__button_active') &&
      (activeButtonClassCount.length === 1)
  ) {
    addClassActiveToServiceItems();

    removeActiveClassFromCurrentServiceCard(serviceCardElemId, buttonOptionSync);
    // console.log(`done 1 remove from 1 card`);
  }

  else if ( !(service__optionsContainer.outerHTML.includes('service__button_active'))) {
    unblurAllCards();
    // console.log(`done 2 unblur all`);

  }

  else {
    console.log(`nothing`);
  }

}
const getDomActiveButtonKeyEqualToElemId = (currentButtonDomKey, buttonOptionSync) => {
  return Object.keys(buttonOptionSync).filter((serviceCardElemId) => {
    if (serviceCardElemId === currentButtonDomKey?.dataset.buttonId) {
      return serviceCardElemId;
    }
    }
  )};

const unblurAllCards = () => {
  let elemToWatch = document.querySelectorAll('.service__item');
  elemToWatch.forEach(activeElem => {
    activeElem.classList.remove('service__item_active');
  })
}
//=====================================  removing selection from buttons end =====================================

//=================================================================================================================
//    Service section js functions end
//=================================================================================================================
