<template lang="pug">
.textarea-container 
    textarea.outlined-textarea(:placeholder="placeholder" :style="style" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)")
    div
</template>
<script>
export default {
  name: 'OutlinedTextarea',
  props: {
    placeholder: {
      type: String,
      required: true
    },
    style: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="css">
.outlined-textarea {
  width: 438px;
  height: 150px;
  border: none;
  border-bottom: 3px solid #f5d5c6;
  padding: 6px 0px 8px 5px;
  box-sizing: border-box;
  color: #ff4d00;
  font-size: 21px;
  line-height: 28.8px;
  resize: none;
}

.outlined-textarea::placeholder {
  font-size: 21px;
  color: #f5d5c6;
  line-height: 28.8px;
}

.outlined-textarea + div {
  content: '';
  width: 0;
  display: block;
  height: 3px;
  background-color: #ff4d00;
  transition: all 0.3s ease-in;
  position: relative;
  top: -7px;
}

.outlined-textarea:focus {
  outline: none;
}

.outlined-textarea:focus + div {
  width: 443px;
}

@media (max-width: 600px) {
  .outlined-textarea {
    width: 100%;
  }

  .outlined-textarea::placeholder {
    font-size: 1.25rem;
    color: #f5d5c6;
    line-height: 1.25rem;
  }

  .outlined-textarea:focus + div {
    width: 100%;
  }
}
</style>
