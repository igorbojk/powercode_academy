import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        courses: [
            {
                icon: 'android',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.'
            },
            {
                icon: 'php',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.'
            },
            {
                icon: 'js',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.'
            },
            {
                icon: 'android',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.'
            },
            {
                icon: 'android',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.'
            },
            {
                icon: 'android',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.'
            },
            {
                icon: 'android',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.'
            },
            {
                icon: 'android',
                level: 'для новичков',
                title: 'Создание приложений под андроид',
                duration: '4 месяца',
                lessons: '2 часа / нед.'
            }
        ],
        events: [
            {
                icon: 'android',
                title: 'Создание приложений под андроид',
                date: '24 сентября',
                duration: ['4 месяца', '2 часа / нед.'],
                price: '1150 грн.'
            },
            {
                icon: 'php',
                title: 'Создание приложений под андроид',
                date: '24 сентября',
                duration: ['4 месяца', '2 часа / нед.'],
                price: '1150 грн.'
            },
            {
                icon: 'js',
                title: 'Создание приложений под андроид',
                date: '24 сентября',
                duration: ['4 месяца', '2 часа / нед.'],
                price: '1150 грн.'
            },
            {
                icon: 'php',
                title: 'Создание приложений под андроид',
                date: '24 сентября',
                duration: ['4 месяца', '2 часа / нед.'],
                price: '1150 грн.'
            },
            {
                icon: 'js',
                title: 'Создание приложений под андроид',
                date: '24 сентября',
                duration: ['4 месяца', '2 часа / нед.'],
                price: '1150 грн.'
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
        }
    },
    actions: {
        increment({commit}, text) {
            commit('increment', text)
        }
    }
});