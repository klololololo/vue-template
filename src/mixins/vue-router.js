// import modules
import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes , systems } from '../configs/index.js';
// install vue-router
Vue.use( VueRouter );
// set configs
let opts = {
	routes,
};
if( systems.routeMode ) opts.mode = 'history';
//export router
export default new VueRouter(opts);
