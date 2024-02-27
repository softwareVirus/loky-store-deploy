import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import './normalize.css'
import store from './store'

async function main() {
  console.log(await store())
  const storeInstance = await store()

  createApp(App).use(storeInstance).use(router).mount('#app')
}
main()
