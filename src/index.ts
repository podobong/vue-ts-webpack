import Vue from 'vue'
import App from './App.vue'

new Vue({
    render: (hyperScript) => {
        return hyperScript(App)
    },
}).$mount('#app')
