import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{

    },
    actions,
    mutations,
    modules:{

    },
})

export default store