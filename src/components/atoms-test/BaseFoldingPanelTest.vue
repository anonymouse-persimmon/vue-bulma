<template>
  <base-folding-panel
      panel-id="panel1"
      panelTitle="Panel1"
      class="is-primary"
  >
    <div class="panel1">
      Panel that can be opened and closed
    </div>
  </base-folding-panel>

  <br/>
</template>

<script>
import BaseFoldingPanel from '@/components/atoms/BaseFoldingPanel'

export default {
  name: "BaseFoldingPanelTest",
  components: {BaseFoldingPanel}
}
</script>

<style scoped>
.panel1 {
}
</style>