import { createApp } from 'vue';
import { reactive } from 'vue';
import router from './router';
import store from './store/index';
import App from './App.vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Ripple from 'primevue/ripple';

import CodeHighlight from './AppCodeHighlight';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import '@fullcalendar/core/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import '@fullcalendar/timegrid/main.min.css';
import './assets/layout/layout.scss';
import './assets/layout/flags/flags.css';

router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0);
    next();
});

const app = createApp(App);

app.config.globalProperties.$appState = reactive({ inputStyle: 'outlined' });
app.config.globalProperties.$primevue = reactive({ ripple: true });

app.use(router);
app.use(store);

app.directive('ripple', Ripple);
app.directive('code', CodeHighlight);

app.component('Button', Button);
app.component('Card', Card);
app.component('InputText', InputText);

app.mount('#app');
