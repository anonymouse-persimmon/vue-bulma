<template>
  <base-fold-panel
    panel-id="panel1"
    panel-title="Panel1"
    class="is-primary"
  >
    <div class="panel1">
      Panel that can be opened and closed
    </div>
  </base-fold-panel>

  <br>
</template>

<script>
import BaseFoldPanel from '@/components/BaseFoldPanel'

export default {
  name: "BaseFoldPanelTest",
  components: {BaseFoldPanel}
}
</script>

<style scoped>
.panel1 {
}
</style>