import Vuex from 'vuex'

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
        },
        setSelectAnswer(state, index, answer ){
            state.selectAnswers[index] = answer
        }
	},
	actions:{
		setSelectAnswers(context,payload){
			context.commit('setSelectAnswers',payload)
		}
	}
})