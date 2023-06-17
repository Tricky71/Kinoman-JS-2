'use strict';

const MAIN_FILM_COUNT = 5,
      EXTRA_FILM_COUNT = 2,
      EXTRA_LIST_COUNT = 2;

import { createUserProfile } from "./modules/user-profile";
import { createMainMenu } from "./modules/main-menu";
import { createMainFilters } from "./modules/main-filters";
import { createMainFilmsList } from "./modules/main-films-list";
import { createMainFilmCard } from "./modules/film-card";
import { createShowMoreButton } from "./modules/show-more-btn";
import { createExtraFilmsList } from "./modules/extra-films-list";
import { createMainStatistics } from "./modules/main-statistics";
import { createFilmDetailsPopup } from "./modules/details-popup";

const render = (target, template, place) => {
  target.insertAdjacentHTML(place, template);
}

const mainBody = document.querySelector('body'),
      mainHeader = document.querySelector('.header'),
      mainElement = document.querySelector('.main'),
      mainFooter = document.querySelector('.footer');

render(mainHeader, createUserProfile(), "beforeend");
render(mainElement, createMainMenu(), "beforeend");
render(mainElement, createMainFilters(), "beforeend");
render(mainElement, createMainFilmsList(), "beforeend");

const mainFilms = mainElement.querySelector('.films'),
      mainFilmsList = mainFilms.querySelector('.films-list'),
      mainFilmsListContainer = mainFilmsList.querySelector('.films-list__container');

for (let i = 0; i < MAIN_FILM_COUNT; i++) {
  render(mainFilmsListContainer, createMainFilmCard(), 'beforeend');
};

render(mainFilmsList, createShowMoreButton(), 'beforeend');

for (let i = 0; i < EXTRA_LIST_COUNT; i++) {
  render(mainFilms, createExtraFilmsList(), 'beforeend');
}

const extraFilmsLists = mainFilms.querySelectorAll('.films-list--extra');

extraFilmsLists[0].querySelector('h2').textContent = 'Top rated';
extraFilmsLists[1].querySelector('h2').textContent = 'Most commented';

extraFilmsLists.forEach(el => {
  for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
    render(extraFilmsLists[i].querySelector('.films-list__container'), createMainFilmCard(), 'beforeend');
  };
});

render(mainFooter, createMainStatistics(), 'beforeend');
// render(mainBody, createFilmDetailsPopup(), 'beforeend');



// render(mainFilms, createExtraMostCommentedFilmsList(), 'beforeend');




