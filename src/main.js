import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from './App.vue';
import {store} from './store/store';
import 'slick-carousel/slick/slick.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;


new Vue({
    store: store,
    render: h => h(App)
}).$mount('#app');
