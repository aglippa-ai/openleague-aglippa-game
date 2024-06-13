import { createMemoryHistory, createRouter } from "vue-router"

import GameMain from '../components/GameMain.vue'

const routes = [
    { path: '/', component: GameMain }
]

export default createRouter({
    history: createMemoryHistory(),
    routes
})