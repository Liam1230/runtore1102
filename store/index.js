import Vuex from 'vuex'
import Vue from 'vue'

export default () => new Vuex.Store({
	state: {
		selectAnswer: [],
	},
	getters: {
		selectAnswers: (state) => state.selectAnswer,
	},
	mutations: {
		setSelectAnswers (state, answers) {
			state.selectAnswer.push({no:answers.no,answer:answers.answer})
			//Vue.set(state.selectAnswer,answers.no,{no:answers.no,answer:answers.answer})
        },
        setSelectAnswer(state, index, answer ){
            state.selectAnswers[index] = answer
		},
		spliceSelectAnswers (state) {
			state.selectAnswer.splice(0)
			//Vue.set(state.selectAnswer,answers.no,{no:answers.no,answer:answers.answer})
        },
	},
	actions:{
		setSelectAnswers(context,payload){
			context.commit('setSelectAnswers',payload)
		},
		spliceSelectAnswers(context){
			context.commit('spliceSelectAnswers')
		},
	}
})