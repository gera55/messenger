require('./bootstrap');

import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(Vuex);

Vue.component('contact-form-component', 
    require('./components/ContactFormComponent.vue'));
Vue.component('profile-form-component', 
    require('./components/ProfileFormComponent.vue'));
Vue.component('status-component', 
    require('./components/StatusComponent.vue'));
Vue.component('messenger-component', 
    require('./components/MessengerComponent.vue'));
Vue.component('message-conversation-component', 
	require('./components/MessageConversationComponent.vue'));
Vue.component('contact-component', 
	require('./components/ContactComponent.vue'));
Vue.component('contact-list-component', 
	require('./components/ContactListComponent.vue'));
Vue.component('active-conversation-component', 
	require('./components/ActiveConversationComponent.vue'));

const store = new Vuex.Store({
    state: {
        messages: [],
        selectedConversation: null,
        conversations: [],
        querySearch: ''
    },
    mutations: {
        newMessagesList(state, messages) {
            state.messages = messages;
        },
        addMessage(state, message) {
            state.messages.push(message);
        },
        selectConversation(state, conversation) {
            state.selectedConversation = conversation;
        },
        newQuerySearch(state, newValue) {
            state.querySearch = newValue;
        },
        newConversationsList(state, conversations) {
            state.conversations = conversations;
        }
    },
    actions: {        
        getMessages(context, conversation) {
            axios.get(`api/messages?contact_id=${conversation.contact_id}`)
            .then(
                response => {
                    context.commit('selectConversation', conversation);
                    context.commit('newMessagesList', response.data);
                }
            );
        },                    
        getConversations(context) {
            axios.get('api/conversations')
            .then(response => {
                context.commit('newConversationsList', response.data);
            });
        },
    },
    getters: {
        conversationsFiltered(state) {
            console.log('conversationsFiltered fired');
            return state.conversations.filter(
                conversation => conversation.contact_name
                    .toLowerCase()
                    .includes(state.querySearch.toLowerCase())
            );
        }
    }            
});

const app = new Vue({
    el: '#app',
    store,
    methods: {
        logout() {
            document.getElementById('logout-form').submit();
        }
    }
});
