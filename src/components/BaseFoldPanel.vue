<template>
  <div class="panel fold-panel">
    <p
      class="panel-heading panel-heading-text"
      :class="{
        'is-open-panel-heading': isUnfoldedPanel,
        'is-close-panel-heading': isFoldedPanel
      }"
      @click="onPanelHeadingClick($event)"
    >
      <span
        class="icon"
        :class="{
          'is-open-panel-icon': isUnfoldedPanel,
          'is-close-panel-icon': isFoldedPanel
        }"
      >
        <ion-icon name="chevron-forward-outline" />
      </span>
      {{ panelTitle }}
    </p>
    <transition name="fold">
      <div
        v-show="isUnfoldedPanel"
        class="panel-body"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FoldPanel",
  props: {
    panelId : {
      type: String,
      required: true,
      default: ""
    },
    panelTitle: {
      type: String,
      require: true,
      default: ""
    },
    initialFolded: {
      type: Boolean,
      default: false
    }
  },
  emits:['click'],
  data() {
    return {
      isFolded: false
    }
  },
  computed: {
    isUnfoldedPanel() {
      return !this.isFolded
    },
    isFoldedPanel() {
      return !!this.isFolded
    }
  },
  mounted() {
    this.isFolded = this.initialFolded
  },
  methods: {
    onPanelHeadingClick() {
      this.isFolded = !this.isFolded

      this.$emit('click', {
        panelId: this.panelId,
        isFolded: this.isFolded
      })
    }
  }
}
</script>

<style scoped>
.fold-panel {
}

.panel-body {
  padding: 0;
  margin: 0;
}

.panel-heading-text {
  text-align: left;
}

.is-open-panel-heading {
  border-radius: 6px 6px 0 0;
  transition: all 0.5s ease-in-out;
}
.is-close-panel-heading {
  border-radius: 6px;
  transition: all 0.5s ease-in-out;
}
.is-open-panel-icon {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  transition: 1s;
}
.is-close-panel-icon {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  transition: 1s;
}

.fold-enter-active {
  transition: all 0.5s ease-out;
}
.fold-leave-active {
  transition: all 0.5s ease-in;
}
.fold-enter-from, .fold-leave-to {
  transform: translateY(-60%) scaleY(0);
  line-height: 0;
  opacity: 0;
}
</style>