import Vue from 'vue';
import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent';

Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: ExampleComponent
        },
    ],
    mode: "history"
})