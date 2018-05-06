import 'vue-awesome/icons/chevron-up';
import 'vue-awesome/icons/sync';
import './index.scss';
import Vue from 'vue';

export default (Page, store) => {
  new Vue({
    store,
    el: '#container',
    render: (h) => h(Page)
  });
};
