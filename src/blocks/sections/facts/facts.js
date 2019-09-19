import { ready } from '../../../js/utils';
import tabs from '../../common-blocks/tabs/tabs.js';

ready(() => {

  const tabItems = document.querySelectorAll('.facts__tab'),
        contentItems = document.querySelectorAll('.facts__content'),
        tabActiveClass = 'facts__tab_active',
        contentActiveClass = 'facts__content_active';

  tabs(tabItems, contentItems, tabActiveClass, contentActiveClass);

});