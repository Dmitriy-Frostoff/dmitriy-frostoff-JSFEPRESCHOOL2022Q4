"use strict";

window.onload = function () {

  //service section buttons
  serviceOptionsButtonHandler();

  //prices section buttons
  pricesOptionsButtonHandler();
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



//=================================================================================================================
//    Prices section js functions start
//=================================================================================================================

//=====================================  add handler to buttons start  =====================================

const pricesOptionsButtonHandler = () => {
  const prices__optionsContainer = document.querySelector('.prices__options-container');

  prices__optionsContainer.addEventListener('click', (event) => {
    const prices__AllButtonsOfAccordion = document.querySelectorAll('.prices__accordion-button');

    let clickedElem = event.target;

    if ( clickedElem.closest('.prices__accordion-button') ) {

      if ( !clickedElem.classList.contains('prices__accordion-button_active') &&
        !prices__optionsContainer.outerHTML.includes('prices__accordion-button_active')
      ) {
        // console.log(`1 do addSelectionToPricesButton`);
        addSelectionToPricesButton(clickedElem);
      }

      else if ((clickedElem.dataset.buttonId === [...prices__AllButtonsOfAccordion].find(compareIdsClickedElemAllAccordionButtons)?.dataset.buttonId) &&
        clickedElem.classList.contains('prices__accordion-button_active')
        ) {
          // console.log(`2 do removeSelectionFromPricesButton`);
          removeSelectionFromPricesButton();
      }

      
      else if ( !(clickedElem.dataset.buttonId === [...prices__AllButtonsOfAccordion].find(getActiveButton)?.dataset.buttonId) && 
        prices__optionsContainer.outerHTML.includes( 'prices__accordion-button_active')) {
          // console.log(`3 do removeSelection addSelection`);
          removeSelectionFromPricesButton();
          addSelectionToPricesButton(clickedElem);
      }

      else {
        console.log(`nothing`);
      }
    }
  })
  };
//=====================================  add handler to buttons end  =====================================

const compareIdsClickedElemAllAccordionButtons = (elem) => {
  let clickedElem = event.target;
  if (elem.dataset.buttonId === clickedElem.dataset.buttonId) {
    return elem.dataset.buttonId;
  }
}

const getActiveButton = (item) => {
  if (item.getAttribute('class').includes('prices__accordion-button_active')) {
    return item;
  }
}

//=====================================  remove selections from buttons start  =====================================

const removeSelectionFromPricesButton = () => {
  const prices__AllButtonsOfAccordion = document.querySelectorAll('.prices__accordion-button');
  const prices__AllVectorsOfAccordionButtons = document.querySelectorAll('.prices__accordion-button_vector');
  const prices__allDescriptionContainerOfAccordion = document.querySelectorAll('.prices__accordion-description-container');
  
  prices__AllButtonsOfAccordion.forEach((button) => {
    button.classList.remove('prices__accordion-button_active');
  })
  
  prices__AllVectorsOfAccordionButtons.forEach((button) => {
    button.classList.remove('prices__accordion-button_vector-active');
  })

  prices__allDescriptionContainerOfAccordion.forEach((item) => {
    item.classList.add('elem_hidden');
  })
}
//=====================================  remove selections from buttons end  =====================================

//=====================================  add selections to buttons start  =====================================

const addSelectionToPricesButton = (clickedElem) => {
  if (!clickedElem.classList.contains('prices__accordion-button')) {
    return;
  }

  clickedElem.classList.add('prices__accordion-button_active');

  linkDescriptionWithPricesButton();

  linkArrowsWithPricesButton();

}
//=====================================  add linking descriptions with buttons start  =====================================

// Yeah!!!)))) I refactored this func!))))))))))) :smile:
const linkDescriptionWithPricesButton = () => {
  let clickedElem = event.target;
  
  if (!clickedElem.classList.contains('prices__accordion-button')) {
    return;
  }

  const buttonDescriptionSync = {
    'prices__accordion-button1' : 'button-description1',
    'prices__accordion-button2' : 'button-description2',
    'prices__accordion-button3' : 'button-description3'
  };

  clickedElem.classList.add('prices__accordion-button_active');

  const pricesCardElemId = getPricesKeyEqualToElemId(clickedElem, buttonDescriptionSync);

  removeClassHiddenFromPricesItems(pricesCardElemId, buttonDescriptionSync);
  
}

const getPricesKeyEqualToElemId = (clickedElem, buttonDescriptionSync) => {
  return Object.keys(buttonDescriptionSync).filter((pricesCardElemId) => {
    if (pricesCardElemId === clickedElem.dataset.buttonId) {
      return pricesCardElemId;
    }
    }
  )};

const removeClassHiddenFromPricesItems = (pricesCardElemId, buttonDescriptionSync) => {
    let pricesElemToWatch = document.querySelectorAll('.prices__accordion-description-container');

    pricesElemToWatch.forEach((item) => {
      if (item.getAttribute('data-button__description-id').includes(buttonDescriptionSync[pricesCardElemId])) {
        item.classList.remove('elem_hidden');
      }
    });
    }
//=====================================  add linking descriptions with buttons end  =====================================

//=====================================  add linking arrows with buttons start  =====================================
    
  // Yeah!!!)))) I refactored this func!))))))))))) :smile:
  const linkArrowsWithPricesButton = () => {
    let clickedElem = event.target;
    
    if (!clickedElem.classList.contains('prices__accordion-button')) {
      return;
    }
  
    const buttonArrowsSync = {
      'prices__accordion-button1' : 'button-vector1',
      'prices__accordion-button2' : 'button-vector2',
      'prices__accordion-button3' : 'button-vector3'
    };
  
    const pricesCardVectorElemId = getPricesKeyVectorEqualToElemId(clickedElem, buttonArrowsSync);
  
    addClassActiveToPricesVectors(pricesCardVectorElemId, buttonArrowsSync);
    
  }
  
  const getPricesKeyVectorEqualToElemId = (clickedElem, buttonArrowsSync) => {
    return Object.keys(buttonArrowsSync).filter((pricesCardVectorElemId) => {
      if (pricesCardVectorElemId === clickedElem.dataset.buttonId) {
        return pricesCardVectorElemId;
      }
      }
    )};
  
  const addClassActiveToPricesVectors = (pricesCardVectorElemId, buttonArrowsSync) => {
      let pricesElemToWatch = document.querySelectorAll('.prices__accordion-button_vector');
  
      pricesElemToWatch.forEach((item) => {
        if (item.getAttribute('data-button__vector-id').includes(buttonArrowsSync[pricesCardVectorElemId])) {
          item.classList.add('prices__accordion-button_vector-active');
        }
      });
      }
//=====================================  add linking arrows with buttons end  =====================================

//=================================================================================================================
//    Prices section js functions end
//=================================================================================================================
