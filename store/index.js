import Vuex from 'vuex'

export default () => new Vuex.Store({
	state: {
		selectAnswer: [],
	},
	getters: {
		selectAnswers: (state) => state.selectAnswers,
	},
	mutations: {
		setSelectAnswers (state, answers) {
            state.selectAnswers = answers
        },
        setSelectAnswer(state, index, answer ){
            state.selectAnswers[index] = answer
        }
	},
})