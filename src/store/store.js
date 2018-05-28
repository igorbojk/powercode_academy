import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        filteredCourses: [],
        courses: [
            {
                icon: 'android',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.',
                city: 'kiev',
                id: 1
            },
            {
                icon: 'php',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.',
                city: 'kiev',
                id: 2
            },
            {
                icon: 'js',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.',
                city: 'kiev',
                id: 3
            },
            {
                icon: 'android',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.',
                city: 'kiev',
                id: 4
            },
            {
                icon: 'android',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.',
                city: 'kiev',
                id: 5
            },
            {
                icon: 'android',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.',
                city: 'zaporozhye',
                id: 6
            },
            {
                icon: 'android',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.',
                city: 'zaporozhye',
                id: 7
            },
            {
                icon: 'android',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.',
                city: 'zaporozhye',
                id: 8
            }
        ],
        events: [
            {
                icon: 'android',
                title: 'Создание приложений под андроид',
                date: '24 сентября',
                duration: ['4 месяца', '2 часа / нед.'],
                price: '1150  '
            },
            {
                icon: 'php',
                title: 'Создание приложений под андроид',
                date: '24 сентября',
                duration: ['4 месяца', '2 часа / нед.'],
                price: '1150  '
            },
            {
                icon: 'js',
                title: 'Создание приложений под андроид',
                date: '24 сентября',
                duration: ['4 месяца', '2 часа / нед.'],
                price: '1150  '
            },
            {
                icon: 'php',
                title: 'Создание приложений под андроид',
                date: '24 сентября',
                duration: ['4 месяца', '2 часа / нед.'],
                price: '1150  '
            },
            {
                icon: 'js',
                title: 'Создание приложений под андроид',
                date: '24 сентября',
                duration: ['4 месяца', '2 часа / нед.'],
                price: '1150  '
            },
        ],
        faq: [
            {
                question: 'Я не успел(а) записаться и курс уже начался. Могу ли присоединиться к группе?',
                answer: 'test-everest'
            },
            {
                question: 'Я не успел(а) записаться и курс уже начался. Могу ли присоединиться к группе?',
                answer: 'test-everest'
            },
            {
                question: 'Я не успел(а) записаться и курс уже начался. Могу ли присоединиться к группе?',
                answer: 'test-everest'
            },
            {
                question: 'Я не успел(а) записаться и курс уже начался. Могу ли присоединиться к группе?',
                answer: 'test-everest'
            },
            {
                question: 'Я не успел(а) записаться и курс уже начался. Могу ли присоединиться к группе?',
                answer: 'test-everest'
            },
            {
                question: 'Я не успел(а) записаться и курс уже начался. Могу ли присоединиться к группе?',
                answer: 'test-everest'
            },
            {
                question: 'Я не успел(а) записаться и курс уже начался. Могу ли присоединиться к группе?',
                answer: 'test-everest'
            },
            {
                question: 'Я не успел(а) записаться и курс уже начался. Могу ли присоединиться к группе?',
                answer: 'test-everest'
            },
            {
                question: 'Я не успел(а) записаться и курс уже начался. Могу ли присоединиться к группе?',
                answer: 'test-everest'
            }
        ],
        count: 0,
        text: '',
    },
    mutations: {
        increment(state, payload) {
            state.count++;
            state.text = payload;
        },
        changeCity(state, city){
            state.filteredCourses = state.courses.filter(i => i.city === city);
        }
    },
    actions: {
        increment({commit}, text) {
            commit('increment', text)
        },
        changeCity ({ commit }, city) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('changeCity', city)
                    resolve()
                })
            })
        }
    },
});