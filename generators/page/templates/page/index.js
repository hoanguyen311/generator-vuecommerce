import pageFactory from '@utils/page-factory';
import <%= className %> from '@components/<%= className %>';
import store from './store';

const renderPage = pageFactory(<%= className %>, store);
renderPage();
