import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

import SuffixedNumber from './filters/SuffixedNumber';
import Editable from './directives/Editable';
import ExternalLink from './directives/ExternalLink';
import store from './data/store';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
  store,
  filters: {
    SuffixedNumber
  },
  directives: {
    Editable,
    ExternalLink
  }
}).$mount('#app');
