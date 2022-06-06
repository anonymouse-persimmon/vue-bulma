<template>
  <div>
    <section class="section">
      <h2>Base</h2>
      <div class="buttons">
        <base-button
          button-id="normal"
          button-name="normal"
        >
          Normal
        </base-button>
      </div>
    </section>
    <section class="section">
      <h2>Color</h2>
      <div class="buttons">
        <base-button
          button-id="white"
          button-name="white"
          button-type="white"
        >
          White
        </base-button>
        <base-button
          button-id="light"
          button-name="light"
          light
        >
          Light
        </base-button>
        <base-button
          button-id="dark"
          button-name="dark"
          button-type="dark"
        >
          Dark
        </base-button>
        <base-button
          button-id="black"
          button-name="black"
          button-type="black"
        >
          Black
        </base-button>
        <base-button
          button-id="text"
          button-name="text"
          button-type="text"
        >
          Text
        </base-button>
        <base-button
          button-id="ghost"
          button-name="ghost"
          button-type="ghost"
        >
          Ghost
        </base-button>
      </div>
      <div class="buttons">
        <base-button
          button-id="primary"
          button-name="primary"
          button-type="primary"
        >
          Primary
        </base-button>
        <base-button
          button-id="link"
          button-name="link"
          button-type="link"
        >
          Link
        </base-button>
        <base-button
          button-id="info"
          button-name="info"
          button-type="info"
        >
          Info
        </base-button>
        <base-button
          button-id="success"
          button-name="success"
          button-type="success"
        >
          Success
        </base-button>
        <base-button
          button-id="warning"
          button-name="warning"
          button-type="warning"
        >
          Warning
        </base-button>
        <base-button
          button-id="danger"
          button-name="danger"
          button-type="danger"
        >
          Danger
        </base-button>
      </div>
      <div class="buttons">
        <base-button
          button-id="primary light"
          button-name="primary light"
          button-type="primary"
          light
        >
          Primary Light
        </base-button>
        <base-button
          button-id="link light"
          button-name="link light"
          button-type="link"
          light
        >
          Link Light
        </base-button>
        <base-button
          button-id="info light"
          button-name="info light"
          button-type="info"
          light
        >
          Info Light
        </base-button>
        <base-button
          button-id="success light"
          button-name="success light"
          button-type="success"
          light
        >
          Success Light
        </base-button>
        <base-button
          button-id="warning light"
          button-name="warning light"
          button-type="warning"
          light
        >
          Warning Light
        </base-button>
        <base-button
          button-id="danger light"
          button-name="danger light"
          button-type="danger"
          light
        >
          Danger Light
        </base-button>
      </div>
    </section>
    <section class="section">
      <h2>Size</h2>
      <div class="buttons">
        <base-button
          button-id="small"
          button-name="small"
          size="small"
        >
          Small
        </base-button>
        <base-button
          button-id="medium"
          button-name="medium"
          size="medium"
        >
          Medium
        </base-button>
        <base-button
          button-id="large"
          button-name="large"
          size="large"
        >
          Large
        </base-button>
      </div>
      <base-button
        button-id="fullwidth"
        button-name="fullwidth"
        :fullwidth="true"
      >
        Fullwidth
      </base-button>
    </section>
    <section class="section">
      <h2>Outlined</h2>
      <div class="buttons">
        <base-button
          button-id="outlined dark"
          button-name="outlined dark"
          button-type="dark"
          outlined
        >
          Dark Outlined
        </base-button>
        <base-button
          button-id="outlined primary"
          button-name="outlined primary"
          button-type="primary"
          outlined
        >
          Primary Outlined
        </base-button>
        <base-button
          button-id="outlined info"
          button-name="outlined info"
          button-type="info"
          outlined
        >
          Info Outlined
        </base-button>
      </div>
    </section>
    <section class="section">
      <h2>Inverted</h2>
      <div class="buttons">
        <base-button
          button-id="inverted dark"
          button-name="inverted dark"
          button-type="dark"
          inverted
        >
          Dark Inverted
        </base-button>
        <base-button
          button-id="inverted primary"
          button-name="inverted primary"
          button-type="primary"
          inverted
        >
          Primary Inverted
        </base-button>
        <base-button
          button-id="inverted Info"
          button-name="inverted Info"
          button-type="info"
          inverted
        >
          Info Inverted
        </base-button>
      </div>
    </section>
    <section class="section">
      <h2>Rounded</h2>
      <div class="buttons">
        <base-button
          button-id="rounded dark"
          button-name="rounded dark"
          button-type="dark"
          rounded
        >
          Dark Rounded
        </base-button>
        <base-button
          button-id="rounded primary"
          button-name="rounded primary"
          button-type="primary"
          rounded
        >
          Primary Rounded
        </base-button>
        <base-button
          button-id="rounded info"
          button-name="rounded info"
          button-type="info"
          rounded
        >
          Info Rounded
        </base-button>
      </div>
    </section>
    <section class="section">
      <h2>Loading</h2>
      <div class="buttons">
        <base-button
          button-id="loading"
          button-name="loading"
          :loading="isLoading"
          @click="loadingClick"
        >
          Loading
        </base-button>
      </div>
    </section>
    <section class="section">
      <h2>Disabled</h2>
      <div class="buttons">
        <base-button
          button-id="disabled dark"
          button-name="disabled dark"
          button-type="dark"
          disabled
        >
          Dark Disabled
        </base-button>
        <base-button
          button-id="disabled primary"
          button-name="disabled primary"
          button-type="primary"
          disabled
        >
          Primary Disabled
        </base-button>
        <base-button
          button-id="disabled info"
          button-name="disabled info"
          button-type="info"
          disabled
        >
          Info Disabled
        </base-button>
      </div>
    </section>
    <section class="section">
      <h2>Icon Button</h2>
      <div class="buttons">
        <base-button
          button-id="icon"
          button-name="icon"
        >
          <span class="icon is-small">
            <ion-icon name="bug-outline" />
          </span>
          <span>ボタンの名前</span>
        </base-button>
      </div>
    </section>
    <section class="section">
      <h2>Buttons Alignment</h2>
      <base-buttons>
        <base-button
          button-id="buttons1-1"
          button-name="buttons1-1"
          button-type="success"
        >
          buttons1-1
        </base-button>
        <base-button
          button-id="buttons1-2"
          button-name="buttons1-2"
        >
          buttons1-2
        </base-button>
        <base-button
          button-id="buttons1-3"
          button-name="buttons1-3"
        >
          buttons1-3
        </base-button>
      </base-buttons>
      <base-buttons alignment="center">
        <base-button
          button-id="buttons2-1"
          button-name="buttons2-1"
          button-type="success"
        >
          buttons2-1
        </base-button>
        <base-button
          button-id="buttons2-2"
          button-name="buttons2-2"
        >
          buttons2-2
        </base-button>
        <base-button
          button-id="buttons2-3"
          button-name="buttons2-3"
        >
          buttons2-3
        </base-button>
      </base-buttons>
      <base-buttons alignment="right">
        <base-button
          button-id="buttons3-1"
          button-name="buttons3-1"
          button-type="success"
        >
          buttons3-1
        </base-button>
        <base-button
          button-id="buttons3-2"
          button-name="buttons3-2"
        >
          buttons3-2
        </base-button>
        <base-button
          button-id="buttons3-3"
          button-name="buttons3-3"
        >
          buttons3-3
        </base-button>
      </base-buttons>
    </section>
    <section class="section">
      <h2>Buttons Size</h2>
      <base-buttons
        size="small"
      >
        <base-button
          button-id="buttons4-1"
          button-name="buttons4-1"
          button-type="success"
        >
          buttons4-1
        </base-button>
        <base-button
          button-id="buttons4-2"
          button-name="buttons4-2"
        >
          buttons4-2
        </base-button>
        <base-button
          button-id="buttons4-3"
          button-name="buttons4-3"
        >
          buttons4-3
        </base-button>
      </base-buttons>
      <base-buttons>
        <base-button
          button-id="buttons5-1"
          button-name="buttons5-1"
          button-type="success"
        >
          buttons5-1
        </base-button>
        <base-button
          button-id="buttons5-2"
          button-name="buttons5-2"
        >
          buttons5-2
        </base-button>
        <base-button
          button-id="buttons5-3"
          button-name="buttons5-3"
        >
          buttons5-3
        </base-button>
      </base-buttons>
      <base-buttons
        size="large"
      >
        <base-button
          button-id="buttons6-1"
          button-name="buttons6-1"
          button-type="success"
        >
          buttons6-1
        </base-button>
        <base-button
          button-id="buttons6-2"
          button-name="buttons6-2"
        >
          buttons6-2
        </base-button>
        <base-button
          button-id="buttons6-3"
          button-name="buttons6-3"
        >
          buttons6-3
        </base-button>
      </base-buttons>
    </section>
    <section class="section">
      <h2>Buttons Addons</h2>
      <base-buttons addons>
        <base-button
          button-id="buttons7-1"
          button-name="buttons7-1"
          button-type="success"
        >
          buttons7-1
        </base-button>
        <base-button
          button-id="buttons7-2"
          button-name="buttons7-2"
        >
          buttons7-2
        </base-button>
        <base-button
          button-id="buttons7-3"
          button-name="buttons7-3"
        >
          buttons7-3
        </base-button>
      </base-buttons>
      <base-buttons addons>
        <base-button
          button-id="buttons8-1"
          button-name="buttons8-1"
        >
          <span class="icon is-small">
            <ion-icon name="play-back-outline" />
          </span>
        </base-button>
        <base-button
          button-id="buttons8-2"
          button-name="buttons8-2"
          button-type="success"
        >
          <span class="icon is-small">
            <ion-icon name="play-outline" />
          </span>
        </base-button>
        <base-button
          button-id="buttons8-3"
          button-name="buttons8-3"
        >
          <span class="icon is-small">
            <ion-icon name="play-forward-outline" />
          </span>
        </base-button>
      </base-buttons>
    </section>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import BaseButtons from "@/components/BaseButtons";

export default {
  name: "BaseButtonTest",
  components: {
    BaseButton,
    BaseButtons
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    loadingClick(event) {
      console.log(event)
      this.isLoading = true
      setTimeout(() => {this.isLoading = false}, 5000)
    }
   }
}
</script>

<style scoped>

</style>