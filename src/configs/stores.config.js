import Vue from 'vue';
import Vuex from 'vuex';
import * as states from '../mixins/vuex-state.js';
import * as mutations from '../mixins/vuex-mutations.js';

// NOTE: install vuex
Vue.use( Vuex );

// NOTE: redirect state | export data doesn`t ready
let state = {};
for( let key in states ){
    state[key] = states[key];
};

// NOTE: ready local data to state
for (let item in state) {
    if( localStorage.getItem(item) != null ){
        try{
            state[item] = JSON.parse( localStorage.getItem( item ) );
        }catch(e){
            console.log(e);
        };
    };
};

// NOTE: export store
export const stores = new Vuex.Store({
    state ,
    mutations ,
});
