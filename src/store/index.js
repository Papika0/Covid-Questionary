import { createStore } from 'vuex'
import form from '@/store/modules/form';


const store = createStore({
  modules: {
    form,
  }
})

export { store }