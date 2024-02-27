<template lang="pug">
#product-pictures-background
  img.product-bg-image(:src="'https://lh3.google.com/u/0/d/16VkENUABXo-XXBRQrg3AkYBE1PGwYwhg=w1879-h931-iv1'")
  img.product-bg-image(:src="'https://lh3.google.com/u/0/d/16VkENUABXo-XXBRQrg3AkYBE1PGwYwhg=w1879-h931-iv1'")
  img.product-bg-image(:src="'https://lh3.google.com/u/0/d/16VkENUABXo-XXBRQrg3AkYBE1PGwYwhg=w1879-h931-iv1'")
OrderCard(:product="data")
</template>
<script>
import { useStore } from 'vuex'
import OrderCard from '../components/order-card/order-card.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
export default {
  name: 'Product',
  components: {
    OrderCard
  },
  async setup(props) {
    const route = useRoute()
    const store = useStore()

    const data = ref(await store.dispatch('fetchProduct', route.params.id))
    console.log(data.value)
    return {
      data
    }
  }
}
</script>
<style lang="css">
.product-bg-image {
  height: 100vh;
}

#product-pictures-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: auto;
  display: flex;
}

#product-pictures-background::-webkit-scrollbar {
  display: none;
}

@media (max-width: 1020px) {
  .product-bg-image {
    width: 100%;
    height: auto;
  }
  #product-pictures-background {
    flex-direction: column;
  }
}
</style>
