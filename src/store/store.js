import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	num: 12
}

const mutations = {
	add(state){
		state.num += 2;
	}
}

const getters = {
	num: function(state){
		return state.num;
	}
}

const actions = {
  addPlus(context){//context代表了整个的store
    context.commit('add',{a:5}); //每次加2
    console.log('Actions中的加');
  }
}

const moduleA = {
  state,
  mutations,
  getters,
  actions
}

export default new Vuex.Store({
  modules:{
  	a:moduleA
  }
})