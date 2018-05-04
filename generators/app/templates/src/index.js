import 'vue-awesome/icons/chevron-up';
import 'vue-awesome/icons/sync';
import './index.scss';
import Vue from 'vue';
import App from '@components/App';
import store from './store';

new Vue({
    store,
    el: '#container',
    render: (h) => h(App)
});
