import Vue from 'vue'
import Vuex from 'vuex'
import http from '../utils/http'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        articleMdList: {},
        articleMdDetails: {},
        articleMdAdd: {},
        articleMdUpdate: {},
        articleMdDel: {},
        articleEnum: {},
    },
    getters: {
        articleMdListData: (state) => {
            return state.articleMdList
        },
        articleMdDetailsData: (state) => {
            return state.articleMdDetails
        },
        articleMdAddData: (state) => {
            return state.articleMdAdd
        },
        articleMdUpdateData: (state) => {
            return state.articleMdUpdate
        },
        articleMdDelData: (state) => {
            return state.articleMdDel
        },
        articleEnumData: (state) => {
            return state.articleEnum
        },
    },
    mutations: {
        articleMdList(state, val) {
            http('get', '/article/article_md', val).then(res => {
                state.articleMdList = res
            })
        },
        articleMdDetails(state, val) {
            http('get', '/article/article_md/' + val.id, val).then(res => {
                state.articleMdDetails = res
            })
        },
        articleMdAdd(state, val) {
            http('post', '/article/article_md', val).then(res => {
                state.articleMdAdd = res
            })
        },
        articleMdUpdate(state, val) {
            http('post', '/article/article_md/' + val.id, val).then(res => {
                state.articleMdUpdate = res
            })
        },
        articleMdDel(state, val) {
            http('delete', '/article/article_md/' + val.id).then(res => {
                state.articleMdDel = res
            })
        },
        articleEnum(state) {
            http('get', '/article/article_md_enum').then(res => {
                state.articleEnum = res
            })
        }
    },
    actions: {
        articleMdList({commit}, val) {
            commit("articleMdList", val)
        },
        articleMdDetails({commit}, val) {
            commit("articleMdDetails", val)
        },
        articleMdAdd({commit}, val) {
            commit("articleMdAdd", val)
        },
        articleMdUpdate({commit}, val) {
            commit("articleMdUpdate", val)
        },
        articleMdDel({commit}, val) {
            commit("articleMdDel", val)
        },
        articleEnum({commit}, val) {
            commit("articleEnum", val)
        },
    }
})
export default store;