import Vue from 'vue';
import VueResource from 'vue-resource';
import { systems } from '../configs';

// install vue-resource
Vue.use( VueResource );

// NOTE: Resource Config
Vue.http.options.emulateJSON = !!systems.emulate;
