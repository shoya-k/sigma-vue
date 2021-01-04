
import App from '../App';

import { createApp } from 'vue'
import { createStore } from 'vuex'

const app = createApp(App);

import auth from './Auth/index'

const store = createStore({
  modules: {
    auth,
  }
})
app.use(store);

export default store;

