window.Vue = require('vue');

//==vue-router
import router from './routes';



import App from './components/App';
import Header from './components/Header';


require('./bootstrap');
const app = new Vue({
    el: '#app',
    components:{
        App,
        Header
    },
    router,
});
