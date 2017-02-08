import Vue from 'vue';
import App from './App.vue';
import router from './mixins/vue-router.js';
import store from './configs';
import './mixins/vue-resource.js'

new Vue({
  router,
  store,
  computed: {
      auth(){
          return this.$route.query['auth'];
      }
  },
  created (){
      store.commit( 'auth' , this.auth );
  },
  render: h => h(App)
}).$mount( '#app' );
