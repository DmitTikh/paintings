import sliders from './modules/sliders';
import modals from './modules/modals';

window.addEventListener('DOMContentLoaded', ()=> {
    'use strict';
    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
});