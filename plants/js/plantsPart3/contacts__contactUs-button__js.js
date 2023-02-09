"use strict";

window.onload = function () {

  contactsOptionsButtonHandler();

}

//=================================================================================================================
//    Contacts section js functions start
//=================================================================================================================
//=====================================  add handler to buttons start  =====================================

const contactsOptionsButtonHandler = () => {
  const contacts__functionalWrapper = document.querySelector('.contacts__functional-wrapper');

  contacts__functionalWrapper.addEventListener('click', (event) => {
    const contacts__AllCityButtons = document.querySelectorAll('.contacts__city-button');

    let clickedElem = event.target;

    if ( clickedElem.closest('.contacts__city-button')) {

      if ( !clickedElem.classList.contains('contacts__city-button_active') &&
        !contacts__functionalWrapper.outerHTML.includes('contacts__city-button_active')
      ) {
        // console.log(`1 do addSelectionToCityButton`);
        addSelectionToCityButton(clickedElem);
        
      }

      else if ((clickedElem.dataset.buttonId === [...contacts__AllCityButtons].find(compareIdsClickedElemAllCityButtons)?.dataset.buttonId) &&
        clickedElem.classList.contains('contacts__city-button_active')
        ) {
          // console.log(`2 do removeSelectionFromCityButton`);
          removeSelectionFromCityButton();
      }

      else {
        console.log(`nothing`);
      }
    }
    if ( clickedElem.closest('.contacts__city-item')) {
      removeAllAdresses();

      linkCityItemWithButtonText(clickedElem);

      linkDescriptionWithCityButton(clickedElem);

      removeSelectionFromCityButton();
    }
    
  })
  };
//=====================================  add handler to buttons end  =====================================

const compareIdsClickedElemAllCityButtons = (elem) => {
  let clickedElem = event.target;
  if (elem.dataset.buttonId === clickedElem.dataset.buttonId) {
    return elem.dataset.buttonId;
  }
}

//=====================================  remove selections from buttons start  =====================================

const removeSelectionFromCityButton = () => {
  const contacts__AllCityButtons = document.querySelectorAll('.contacts__city-button');
  const contacts__AllVectorsOfCityButtons = document.querySelectorAll('.contacts__city-button_vector');
  const contacts__allAdressContainersOfCity = document.querySelectorAll('.contacts__adress-container');
  const contacts__allCityLists = document.querySelectorAll('.contacts__city-list');
  
  contacts__AllCityButtons.forEach((button) => {
    button.classList.remove('contacts__city-button_active');
  })
  
  contacts__AllVectorsOfCityButtons.forEach((button) => {
    button.classList.remove('contacts__city-button_vector-active');
  })

  contacts__allCityLists.forEach(item => {
    item.classList.add('elem_hidden');
  })

}
//=====================================  remove selections from buttons end  =====================================

//=====================================  remove all adresses start  =====================================

const removeAllAdresses = () => {
  const contacts__AllAdresses = document.querySelectorAll('.contacts__adress-container');
  
  contacts__AllAdresses.forEach(item => {
    item.classList.add('elem_hidden');
  })

}
//=====================================  remove all adresses end  =====================================

//=====================================  add selections to buttons start  =====================================

const addSelectionToCityButton = (clickedElem) => {
  if (!clickedElem.classList.contains('contacts__city-button')) {
    return;
  }

  clickedElem.classList.add('contacts__city-button_active');

  linkArrowsWithCityButton();

  showCityList();
}

//=====================================  add selections to buttons end  =====================================

//=====================================  show city list under button start  =====================================

const showCityList = () => {
  let clickedElem = event.target;
  let cityList = document.querySelector('.contacts__city-list');

  if (!clickedElem.classList.contains('contacts__city-button')) {
    return;
  }

  cityList.classList.remove('elem_hidden');
}
//=====================================  show city list under button end  =====================================

//=====================================  add linking city with adress start  =====================================

// Yeah!!!)))) I refactored this func!))))))))))) :smile:
const linkCityItemWithButtonText = () => {
  let clickedElem = event.target;
  
  if (!clickedElem.classList.contains('contacts__city-item')) {
    return;
  }

  replaceButtonTextWithChosenCity(clickedElem);
  
}

const replaceButtonTextWithChosenCity = (clickedElem) => {
  const contacts__cityButtons = document.querySelectorAll('.contacts__city-button');

  const cityButtonActive = [...contacts__cityButtons].find(item => item.classList.contains('contacts__city-button_active'));

  cityButtonActive.textContent = clickedElem.textContent;
}

const linkDescriptionWithCityButton = () => {
  let clickedElem = event.target;
  
  if (!clickedElem.classList.contains('contacts__city-item')) {
    return;
  }

  const buttonCitySync = {
    'contacts__city-item1' : 'contacts__city-button1',
    'contacts__city-item2' : 'contacts__city-button1',
    'contacts__city-item3' : 'contacts__city-button1',
    'contacts__city-item4' : 'contacts__city-button1'
  };

  const buttonAdressSync = {
    'contacts__city-item1' : 'contacts__adress-container1',
    'contacts__city-item2' : 'contacts__adress-container2',
    'contacts__city-item3' : 'contacts__adress-container3',
    'contacts__city-item4' : 'contacts__adress-container4'
  };

  const contacts = getCityKeyEqualToElemId(clickedElem, buttonCitySync);
  
  const contactsCityElemId = getCityKeyEqualToElemId(clickedElem, buttonAdressSync);
  
  removeClassHiddenFromCityItems(contactsCityElemId, buttonAdressSync);
  
}

const getCityKeyEqualToElemId = (clickedElem, buttonAdressSync) => {
  return Object.keys(buttonAdressSync).filter((contactsCityElemId) => {
    if (contactsCityElemId === clickedElem.dataset.cityId) {
      return contactsCityElemId;
    }
    }
  )};

const removeClassHiddenFromCityItems = (contactsCityElemId, buttonAdressSync) => {
    let contactsElemToWatch = document.querySelectorAll('.contacts__adress-container');

    contactsElemToWatch.forEach((item) => {
      if (item.getAttribute('data-button__description-id').includes(buttonAdressSync[contactsCityElemId])) {
        item.classList.remove('elem_hidden');
      }
    });
    }
//=====================================  add linking city with adress end  =====================================

//=====================================  add linking arrows with buttons start  =====================================
    
  // Yeah!!!)))) I refactored this func!))))))))))) :smile:
  const linkArrowsWithCityButton = () => {
    let clickedElem = event.target;
    
    if (!clickedElem.classList.contains('contacts__city-button')) {
      return;
    }
  
    const buttonCityArrowsSync = {
      'contacts__city-button1' : 'button-city-vector1'
    };
  
    const buttonCityArrowsSyncKey = getCityButtonKeyEqualClickedElemButtonId(clickedElem, buttonCityArrowsSync);
  
    addClassActiveToCityVectors(buttonCityArrowsSyncKey, buttonCityArrowsSync);
    
  }
  
  const getCityButtonKeyEqualClickedElemButtonId = (clickedElem, buttonCityArrowsSync) => {
    return Object.keys(buttonCityArrowsSync).filter((buttonCityArrowsSyncKey) => {
      if (buttonCityArrowsSyncKey === clickedElem.dataset.buttonId) {
        return buttonCityArrowsSyncKey;
      }
      }
    )};
  
  const addClassActiveToCityVectors = (buttonCityArrowsSyncKey, buttonCityArrowsSync) => {
      let contactsElemToWatch = document.querySelectorAll('.contacts__city-button_vector');
      contactsElemToWatch.forEach((item) => {
        if (item.getAttribute('data-button__vector-id').includes(buttonCityArrowsSync[buttonCityArrowsSyncKey])) {
          item.classList.add('contacts__city-button_vector-active');
        }
      });
      }
//=====================================  add linking arrows with buttons end  =====================================

//=================================================================================================================
//    Contacts section js functions end
//=================================================================================================================
