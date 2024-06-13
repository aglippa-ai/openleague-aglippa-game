import { createApp } from 'vue'
import './style.css'
import Game from './Game.vue'

import router from './routes'

createApp(Game)
    .use(router)
    .mount('#app')
