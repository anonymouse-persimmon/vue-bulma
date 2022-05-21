<template>
  <div>
    <transition name="unfold">
      <div
          v-show="isShow"
          class="modal is-active"
      >
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">
              <slot name="header">title</slot>
            </p>
            <button class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <!-- Content ... -->
            <slot>
            </slot>
          </section>
          <footer class="modal-card-foot">
            <slot name="footer">
              <button class="button is-success">Save changes</button>
              <button class="button">Cancel</button>
            </slot>
          </footer>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    visibility: { type: Boolean, default: false },
  },
  emits:['changeModalState'],
  computed: {
    isShow() {
      return !!this.visibility;
    }
  },
  methods: {
    closeModal() {
      this.$emit('changeModalState', { "id": this.$el.id, "visibility": false })
    }
  },
  mounted() {
    (this.$el.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal')
      $close.addEventListener('click', () => {
        this.closeModal($target)
      })
    })
  },
  beforeUnmount() {
    (this.$el.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal')
      $close.removeEventListener('click', () => {
        this.closeModal($target)
      })
    })
  }
}
</script>

<style scoped lang="scss">
.unfold-enter-active {
  transform:scaleY(.01) scaleX(0);
  animation: unfoldIn .8s ease;
  .modal-card {
    transform:scale(0);
    animation: zoomIn .5s .3s ease-out;
  }
}
.unfold-leave-active {
  animation: unfoldOut .5s .3s ease-in;
  .modal-card {
    animation: zoomOut .8s ease-in;
  }
}
.unfold-enter-from {
  line-height: 0;
  opacity: 0;
}

@keyframes unfoldIn {
  0% {
    transform:scaleY(.005) scaleX(0);
  }
  50% {
    transform:scaleY(.005) scaleX(1);
  }
  100% {
    transform:scaleY(1) scaleX(1);
  }
}

@keyframes unfoldOut {
  0% {
    transform:scaleY(1) scaleX(1);
  }
  50% {
    transform:scaleY(.005) scaleX(1);
  }
  100% {
    transform:scaleY(.005) scaleX(0);
  }
}

@keyframes zoomIn {
  0% {
    transform:scale(0);
  }
  100% {
    transform:scale(1);
  }
}

@keyframes zoomOut {
  0% {
    transform:scale(1);
  }
  100% {
    transform:scale(0);
  }
}

</style>