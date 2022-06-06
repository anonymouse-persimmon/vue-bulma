<template>
  <base-button-test />
  <base-folding-panel-test />
  <base-modal-test />
</template>

<script>
import BaseButtonTest from '@/components/BaseButtonTest.vue'
import BaseFoldingPanelTest from "@/components/BaseFoldPanelTest";
import BaseModalTest from "@/components/BaseModalTest";

export default {
  name: "Element",
  components: {
    BaseButtonTest,
    BaseFoldingPanelTest,
    BaseModalTest
  }
}
</script>

<style scoped>

</style>