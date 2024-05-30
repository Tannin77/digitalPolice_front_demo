import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import piniaPluginPersist from 'pinia-plugin-persist'
import mitt from 'mitt'

//import "@/styles/normalize.css"

import App from './App.vue'
import router from './router'
//import "amfe-flexible/index.js"
import "element-plus/dist/index.css"

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)

const bus = mitt()
//app.config.globalProperties.$bus = bus

app.use(ElementPlus, {
    locale: zhCn,
})

app.mount('#app')
