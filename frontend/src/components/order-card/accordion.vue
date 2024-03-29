<template lang="pug">
.accordion-container
    .accordion-header 
        h4.accordion-title {{title}}
        button.order-card-button(@click.prevent="onClickAccordion") 
            template(v-if="isOpen")
                MinusIcon(color="#2D2D2D")
            template(v-else)
                PlusIcon(color="#2D2D2D")
    div.panel(:class="{ 'open': isOpen }", ref="panel")
        p.accordion-content {{content}}
        .button-box(v-if="isButtonDisplay")
            DimensionButton(
                v-for="(item,index) in buttons" 
                :key="'14x'+item+index" 
                :content="item" 
                :selectedClass="buttonIndex == index ? 'active' : ''"
                :clickButton="handleSelect"
                :index="index"
                :disabled="!sortedButtonList.includes(item)"
                @updateRefValue="updateRefValue"
                :refValue="refValue"
            ) {{item}}
</template>
<script>
import PlusIcon from './plus-icon.vue'
import MinusIcon from './minus-icon.vue'
import DimensionButton from './dimension-button.vue'
import { ref, computed } from 'vue'

export default {
  name: 'Accordion',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    isButtonDisplay: {
      type: Boolean,
      default: false
    },
    buttonList: {
      type: Array,
      default: []
    },
    refValue: {
      type: String,
      default: null
    },
    updateSelectedDimension: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    PlusIcon,
    MinusIcon,
    DimensionButton
  },
  setup(props) {
    const isOpen = ref(false)
    const panel = ref(null)
    const buttons = ['S', '55', 'M', '58', 'L', '61', 'XL', '64', 'XXL', '67']
    const sortedButtonList = computed(() =>
      props.buttonList.sort(function (a, b) {
        return buttons.indexOf(a) - buttons.indexOf(b)
      })
    )
    const buttonIndex = ref(props.refValue != null ? buttons.indexOf(props.refValue) : null)
    const onClickAccordion = (e) => {
      isOpen.value = !isOpen.value
      if (isOpen.value) {
        panel.value.style.maxHeight = panel.value.scrollHeight + 2 + 'px'
      } else {
        panel.value.style.maxHeight = '0'
      }
    }

    const handleSelect = (index) => {
      if (buttonIndex.value === index) {
        buttonIndex.value = null
      } else {
        buttonIndex.value = index
      }
    }

    const updateRefValue = (newValue) => {
      props.updateSelectedDimension(newValue)
    }
    return {
      isOpen,
      onClickAccordion,
      panel,
      buttons,
      buttonIndex,
      handleSelect,
      sortedButtonList,
      updateRefValue
    }
  }
}
</script>

<style lang="css">
.accordion-container {
  border-bottom: #0000001a 1px solid;
  padding: 12px 24px;
  color: var(--bg-textColor-secondary);
  display: flex;
  align-items: center;
  flex-direction: column;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.accordion-title {
  margin: 0;
  font-weight: 400;
}

.accordion-content {
  color: var(--bg-textColor-thirth);
  width: calc(100% - 3px);
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 300;
}

.panel {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.25s ease-out;
  width: calc(100% + 3px);
  display: flex;
  align-items: center;
  flex-direction: column;
}

.button-box {
  display: flex;
  gap: 0.83px;
  justify-content: center;
  align-items: center;
  width: calc(100% + 2px);
  height: 35.17px;
}

.open {
  max-height: none;
  transition: max-height 0.25s ease-in;
}
</style>
