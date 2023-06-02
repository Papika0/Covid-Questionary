import { createStore } from 'vuex'
import form from '@/store/modules/form/index.js';


const store = createStore({
  modules: {
    form : form,
  }
})

export { store }