<template>
  <button
    type="button"
    class="button"
    title="buttonName"
    value="buttonName"
    :class="{
      'is-white': isWhite,
      'is-light': isLight,
      'is-dark': isDark,
      'is-black': isBlack,
      'is-text': isText,
      'is-ghost': isGhost,
      'is-primary': isPrimary,
      'is-link': isLink,
      'is-info': isInfo,
      'is-success': isSuccess,
      'is-warning': isWarning,
      'is-danger': isDanger,
      'is-loading': isLoading,
      'is-small': isSmall,
      'is-medium': isMedium,
      'is-large': isLarge,
      'is-responsive': isResponsive,
      'is-fullwidth': isFullwidth,
      'is-inverted': isInverted,
      'is-outlined': isOutlined,
      'is-rounded': isRounded
    }"
    :disabled="isDisabled"
    @click.stop.prevent="onClick($event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    buttonName: { type: String, required: true },
    buttonId : { type: String, required: true },
    buttonType: { type: String, default: null },
    disabled: { type: Boolean, default: false },
    inverted: { type: Boolean, default: false },
    fullwidth: {type: Boolean, default: false },
    light: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
    responsive: { type: Boolean, default: true },
    rounded: { type: Boolean, default: false },
    size: { type: String, default: "" },
  },
  emits:['click'],
  data() {
    return {
      clickTime: null
    }
  },
  computed: {
    isWhite() {
      return 'white'=== this.buttonType
    },
    isDark() {
      return 'dark'=== this.buttonType
    },
    isBlack() {
      return 'black'=== this.buttonType
    },
    isText() {
      return 'text'=== this.buttonType
    },
    isGhost() {
      return 'ghost'=== this.buttonType
    },
    isPrimary() {
      return 'primary'=== this.buttonType
    },
    isLink() {
      return 'link'=== this.buttonType
    },
    isInfo() {
      return 'info'=== this.buttonType
    },
    isSuccess() {
      return 'success'=== this.buttonType
    },
    isWarning() {
      return 'warning'=== this.buttonType
    },
    isDanger() {
      return 'danger'=== this.buttonType
    },
    isLoading() {
      return !!(this.loading)
    },
    isDisabled() {
      return !!(this.disabled)
    },
    isSmall() {
      return 'small'=== this.size
    },
    isMedium() {
      return 'medium'=== this.size
    },
    isLarge() {
      return 'large'=== this.size
    },
    isResponsive() {
      return !!(this.responsive)
    },
    isFullwidth() {
      return !!(this.fullwidth)
    },
    isInverted() {
      return !!(this.inverted)
    },
    isLight() {
      return !!(this.light)
    },
    isOutlined() {
      return !!(this.outlined)
    },
    isRounded() {
      return !!(this.rounded)
    }
  },
  methods: {
    onClick() {
      if (!this.isDisabled && !this.isLoading) {
        this.$emit('click', this.buttonId)
        this.clickTime = Date.now()
      }
    }
  }
}
</script>

<style scoped>

</style>