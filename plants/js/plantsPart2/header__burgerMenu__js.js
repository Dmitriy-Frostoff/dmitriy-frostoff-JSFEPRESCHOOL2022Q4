"use strict";

/* 
.header__burger-menu
.header__burger-menu_active
.
.header__burger-menu_cutlet1
.header__burger-menu_cutlet2
.header__burger-menu_cutlet1_disabled
.header__burger-menu_cutlet2_disabled
.
.header__burger-menu_active::before
.header__burger-menu_active::after
.

body
.body_scroll-lock

.nav
.nav_active

.nav__list 
.nav__list_active 

*/


const header__burgerMenu__func = () => {
  const header__burgerMenu = document.querySelector('.header__burger-menu');
  const header__burgerMenu_cutlet1 = document.querySelector('.header__burger-menu_cutlet1');
  const header__burgerMenu_cutlet2 = document.querySelector('.header__burger-menu_cutlet2');
  const body = document.querySelector('body');
  const nav = document.querySelector('.nav');
  const nav__list = document.querySelector('.nav__list');

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
    let burgerLinks = document.body.querySelectorAll('[id]');

    for (let link of burgerLinks) {
      link.addEventListener('click', () => {
        let etrEl = burgerLinks.event.target;
        if (header__burgerMenu.classList.contains('header__burger-menu_active')) {
          for (etrEl of burgerMenuOptions.keys()) {
            etrEl.classList.remove(burgerMenuOptions.get(el));
            console.log(el);
            console.log(burgerMenuOptions.get(el));
          }
        }
      }
      )
    }
 }

  burgerLinksBehavior();

}

header__burgerMenu__func();
