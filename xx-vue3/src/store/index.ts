import { IHomestate } from '@/Typing/home'
import { createStore } from 'vuex'
import { home } from './module/home'

export interface IGlobalstate {
  home: IHomestate
}
const store = createStore<IGlobalstate>({
  modules: {
    home: home
  }
})



export default store
