import { createAddPointTemplate } from './view/add-point.js';
import { createEditPointTemplate } from './view/edit-point.js';
import { createSiteFiltersTemplate } from './view/site-filters.js';
import { createSiteNavigationTemplate } from './view/site-navigation.js';
import { createTripInfoTemplate } from './view/trip-info.js';
import { createTripPointTemplate } from './view/trip-point.js';
import { createTripCostTemplate } from './view/trip-cost.js';
import { createTripSortTemplate } from './view/trip-sort.js';
import { createTripEeventsListTemplate } from './view/trip-events-list.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector('.trip-main');
const tripControlsNavigationElement = document.querySelector('.trip-controls__navigation');
const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

render(tripMainElement, createTripInfoTemplate(), 'beforeend');
render(tripMainElement, createTripCostTemplate(), 'beforeend');
render(tripControlsNavigationElement, createSiteNavigationTemplate(), 'beforeend');
render(tripControlsFiltersElement, createSiteFiltersTemplate(), 'beforeend');
render(tripEventsElement, createTripSortTemplate(), 'beforeend');
render(tripEventsElement, createTripEeventsListTemplate(), 'beforeend');

const tripPointElement  = tripEventsElement.querySelector('.trip-events__list');

render(tripPointElement , createEditPointTemplate(), 'beforeend');
render(tripPointElement , createAddPointTemplate(), 'beforeend');

const POINTS_COUNT = 3;

for (let i = 0; i < POINTS_COUNT; i++) {
  render(tripPointElement, createTripPointTemplate(), 'beforeend');
}
