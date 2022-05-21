<template>
  <base-button-test/>
  <base-folding-panel-test/>
  <base-modal-test/>
</template>

<script>
import BaseButtonTest from '@/components/atoms-test/BaseButtonTest.vue'
import BaseFoldingPanelTest from "@/components/atoms-test/BaseFoldPanelTest";
import BaseModalTest from "@/components/atoms-test/BaseModalTest";

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