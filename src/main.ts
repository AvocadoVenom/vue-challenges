import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

import SuffixedNumber from './filters/SuffixedNumber';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
  filters: {
    SuffixedNumber
  }
}).$mount('#app');
