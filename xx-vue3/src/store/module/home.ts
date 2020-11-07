import { CATEGORY, IHomestate } from '@/Typing/home'
import { Module } from "vuex"
import { IGlobalstate } from '..'
import * as Types from '../action_types'




//首页里面应该存哪些数据
const state: IHomestate = {
    currentCategory: CATEGORY.ALL,
    slider: [],
    lessons: {
        hasMore: true,    //是否还有更多内容
        loading: false,   //当前是否正在加载
        offset: 0,    //默认第几条
        limit: 5,
        list: []
    }
}



export const home: Module<IHomestate, IGlobalstate> = {
    namespaced: true,
    state,
    mutations: {
        [Types.SET_CURRENTCATEGORY](state, payload: CATEGORY) {
            state.currentCategory = payload
        }
    }

}