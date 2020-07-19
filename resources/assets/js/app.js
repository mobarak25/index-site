window.Vue = require('vue');

//==vue-router
import router from './routes';



import App from './components/App';
import Modal from './components/Modal';


require('./bootstrap');
const app = new Vue({
    el: '#app',
    components: {
        App,
        Modal
    },
    router,
});
