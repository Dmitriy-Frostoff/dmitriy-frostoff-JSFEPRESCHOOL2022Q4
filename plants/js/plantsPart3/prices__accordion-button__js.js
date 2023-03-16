"use strict";

window.onload = function () {

  pricesOptionsButtonHandler();

}

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
