<template lang="pug">
button.primary-button(@click.prevent="handleClick") #[LeftArrow]{{ content  }}
</template>
<script>
import LeftArrow from './left-button.vue'
export default {
  name: 'PrimaryButton',
  props: {
    content: {
      type: String,
      required: true
    },
    handleClick: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    LeftArrow
  }
}
</script>
<style lang="css">
.primary-button {
  background-color: white;
  border: none;
  color: #ff4d00;
  line-height: 19.2px;
  font-weight: 500;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
}
</style>
