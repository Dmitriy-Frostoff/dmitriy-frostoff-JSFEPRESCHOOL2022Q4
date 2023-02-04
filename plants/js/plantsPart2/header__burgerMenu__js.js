"use strict";

const header__burgerMenu__func = () => {
  let header__burgerMenu = document.querySelector('.header__burger-menu');
  let header__burgerMenu_cutlet1 = document.querySelector('.header__burger-menu_cutlet1');
  let header__burgerMenu_cutlet2 = document.querySelector('.header__burger-menu_cutlet2');
  let body = document.querySelector('body');
  let nav = document.querySelector('.nav');
  let nav__list = document.querySelector('.nav__list');

  let burgerMenuOptions = new Map ([
    [header__burgerMenu_cutlet1 , 'header__burger-menu_cutlet1_disabled'],
    [header__burgerMenu_cutlet2 , 'header__burger-menu_cutlet2_disabled'],
    [body , 'body_scroll-lock'],
    [nav , 'nav_active'],
    [nav__list , 'nav__list_active']
  ])
  
  const addEventOnClick = () => {
    header__burgerMenu.addEventListener('click', () => {
      header__burgerMenu.classList.toggle('header__burger-menu_active');

      const addElementModificator = () => {
        for (let el of burgerMenuOptions.keys()) {
          el.classList.toggle(burgerMenuOptions.get(el));
          console.log(el);
          console.log(burgerMenuOptions.get(el));
        }
      }

      addElementModificator();
      
      }
    )
  }
  
  addEventOnClick();

  const burgerLinksBehavior = () => {
    // let burgerLinks = document.body.querySelectorAll('[id]');
    
    nav.addEventListener('click', (event) => {
      nav = event.target;
      if (header__burgerMenu.classList.contains('header__burger-menu_active')) {
        for (let el of burgerMenuOptions.keys()) {
          header__burgerMenu.classList.remove('header__burger-menu_active');
          el.classList.remove(burgerMenuOptions.get(el));
        }
      }
    }
    )
 }

  burgerLinksBehavior();

}

header__burgerMenu__func();
