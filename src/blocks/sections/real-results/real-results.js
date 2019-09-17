import { ready } from '../../../js/utils';
import sliderInit from '../../common-blocks/slider/slider.js';

ready(() => {

  const realResultsSection = document.querySelector('.real-results');

  sliderInit(realResultsSection);

});