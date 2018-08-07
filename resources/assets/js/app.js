require('./bootstrap');

window.Vue = require('vue');




import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);



Vue.component('contact-component', require('./components/ContactComponent.vue'));

const app = new Vue({
    el: '#app',
    methods: {
    	logout() {
    		document.getElementById('logout-form').submit();
    	}
    }
});
