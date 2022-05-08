<template>
  <div
      class="buttons"
      :class="{
      'are-small': areSmall,
      'are-medium': areMedium,
      'are-large': areLarge,
      'has-addons': hasAddons,
      'is-centered': isCentered,
      'is-right': isRight,
      }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseButtons",
  props: {
    size: {type: String, default: "medium"},
    alignment: {type: String, default: ""},
    addons: {type: Boolean, default: false}
  },
  computed: {
    areSmall() {
      return 'small'=== this.size
    },
    areMedium() {
      return 'medium'=== this.size
    },
    areLarge() {
      return 'large'=== this.size
    },
    hasAddons() {
      return !!(this.addons)
    },
    isCentered() {
      return 'center'=== this.alignment
    },
    isRight() {
      return 'right'=== this.alignment
    }
  }
}
</script>

<style scoped>

</style>