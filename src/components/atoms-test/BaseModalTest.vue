<template>
  <base-buttons
    alignment="center">
    <base-button
        button-id="modal-trigger1"
        button-name="modal-trigger1"
        button-type="dark"
        @click="ShowModal"
    >
      モーダル1表示
    </base-button>
    <base-button
        button-id="modal-trigger2"
        button-name="modal-trigger2"
        button-type="black"
        @click="ShowModal"
    >
      モーダル2表示
    </base-button>
  </base-buttons>
  <base-modal
      id="modal-js-example1"
      :visibility="isModalShow1"
      @change-modal-state="ChangeModalState"
  >
    <h1>モーダルのボディ1</h1>
  </base-modal>
  <base-modal
      id="modal-js-example2"
      :visibility="isModalShow2"
      @change-modal-state="ChangeModalState"
  >
    <template v-slot:header>
      <h1>モーダルのタイトル2</h1>
    </template>
    <template v-slot:default>
      <h1>モーダルのボディ2</h1>
    </template>
    <template v-slot:footer>
      <h1>モーダルのフッタ2</h1>
    </template>
  </base-modal>
</template>

<script>
import BaseButton from "@/components/atoms/BaseButton";
import BaseButtons from "@/components/atoms/BaseButtons";
import BaseModal from "@/components/atoms/BaseModal";

export default {
  name: "BaseModalTest",
  components: {BaseButton, BaseButtons, BaseModal},
  data() {
    return {
      isModalShow1: false,
      isModalShow2: false
    }
  },
  methods: {
    ShowModal(param) {
      if (param=="modal-trigger1") {
        this.isModalShow1 = true;
      }
      if (param=="modal-trigger2") {
        this.isModalShow2 = true;
      }
    },
    ChangeModalState(param) {
      console.log(param)
      if (param.id=="modal-js-example1") {
        this.isModalShow1 = param.visibility;
      }
      if (param.id=="modal-js-example2") {
        this.isModalShow2 = param.visibility;
      }
    }
  }
}
</script>

<style scoped>

</style>