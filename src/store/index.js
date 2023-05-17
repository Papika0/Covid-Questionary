import { createStore } from 'vuex'
import form from './modules/form';


const store = createStore({
  modules: {
    form,
  }
})

export { store }