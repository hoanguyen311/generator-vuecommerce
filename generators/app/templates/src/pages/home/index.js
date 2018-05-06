import pageFactory from '@utils/page-factory';
import Home from '@components/Home';
import store from './store';

const renderPage = pageFactory(Home, store);
renderPage();
