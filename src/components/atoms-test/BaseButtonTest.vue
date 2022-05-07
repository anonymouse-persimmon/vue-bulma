<template>
  <div>
    <section class="section">
      <h2>Base</h2>
      <p class="eg">
        <base-button
            button-id="normal"
            button-name="normal">
          Normal
        </base-button>
      </p>
    </section>
    <section class="section">
      <h2>Color</h2>
      <p class="eg">
        <base-button
            button-id="white"
            button-name="white"
            buttonType="white">
          White
        </base-button>
        <base-button
            button-id="light"
            button-name="light"
            :light=true>
          Light
        </base-button>
        <base-button
            button-id="dark"
            button-name="dark"
            buttonType="dark">
          Dark
        </base-button>
        <base-button
            button-id="black"
            button-name="black"
            buttonType="black">
          Black
        </base-button>
        <base-button
            button-id="text"
            button-name="text"
            buttonType="text">
          Text
        </base-button>
        <base-button
            button-id="ghost"
            button-name="ghost"
            buttonType="ghost">
          Ghost
        </base-button>
      </p>
      <p class="eg">
        <base-button
            button-id="primary"
            button-name="primary"
            buttonType="primary">
          Primary
        </base-button>
        <base-button
            button-id="link"
            button-name="link"
            buttonType="link">
          Link
        </base-button>
        <base-button
            button-id="info"
            button-name="info"
            buttonType="info">
          Info
        </base-button>
        <base-button
            button-id="success"
            button-name="success"
            buttonType="success">
          Success
        </base-button>
        <base-button
            button-id="warning"
            button-name="warning"
            buttonType="warning">
          Warning
        </base-button>
        <base-button
            button-id="danger"
            button-name="danger"
            buttonType="danger">
          Danger
        </base-button>
      </p>
      <p class="eg">
        <base-button
            button-id="primary light"
            button-name="primary light"
            buttonType="primary"
            :light="true">
          Primary Light
        </base-button>
        <base-button
            button-id="link light"
            button-name="link light"
            buttonType="link"
            :light="true">
          Link Light
        </base-button>
        <base-button
            button-id="info light"
            button-name="info light"
            buttonType="info"
            :light="true">
          Info Light
        </base-button>
        <base-button
            button-id="success light"
            button-name="success light"
            buttonType="success"
            :light="true">
          Success Light
        </base-button>
        <base-button
            button-id="warning light"
            button-name="warning light"
            buttonType="warning"
            :light="true">
          Warning Light
        </base-button>
        <base-button
            button-id="danger light"
            button-name="danger light"
            buttonType="danger"
            :light="true">
          Danger Light
        </base-button>
      </p>
    </section>
    <section class="section">
      <h2>Size</h2>
      <p class="eg">
        <base-button
            button-id="small"
            button-name="small"
            size="small">
          Small
        </base-button>
        <base-button
            button-id="medium"
            button-name="medium"
            size="medium">
          Medium
        </base-button>
        <base-button
            button-id="large"
            button-name="large"
            size="large">
          Large
        </base-button>
      </p>
      <p>
        <base-button
            button-id="fullwidth"
            button-name="fullwidth"
            :fullwidth="true">
          Fullwidth
        </base-button>

      </p>
    </section>
    <section class="section">
      <h2>Outlined</h2>
      <p class="eg">
        <base-button
            button-id="outlined dark"
            button-name="outlined dark"
            buttonType="dark"
            :outlined="true">
          Dark Outlined
        </base-button>
        <base-button
            button-id="outlined primary"
            button-name="outlined primary"
            buttonType="primary"
            :outlined="true">
          Primary Outlined
        </base-button>
        <base-button
            button-id="outlined info"
            button-name="outlined info"
            buttonType="info"
            :outlined="true">
          Info Outlined
        </base-button>
      </p>
    </section>
    <section class="section">
      <h2>Inverted</h2>
      <p class="eg">
        <base-button
            button-id="inverted dark"
            button-name="inverted dark"
            buttonType="dark"
            :inverted="true">
          Dark Inverted
        </base-button>
        <base-button
            button-id="inverted primary"
            button-name="inverted primary"
            buttonType="primary"
            :inverted="true">
          Primary Inverted
        </base-button>
        <base-button
            button-id="inverted Info"
            button-name="inverted Info"
            buttonType="info"
            :inverted="true">
          Info Inverted
        </base-button>
      </p>
    </section>
    <section class="section">
      <h2>Rounded</h2>
      <p class="eg">
        <base-button
            button-id="rounded dark"
            button-name="rounded dark"
            buttonType="dark"
            :rounded="true">
          Dark Rounded
        </base-button>
        <base-button
            button-id="rounded primary"
            button-name="rounded primary"
            buttonType="primary"
            :rounded="true">
          Primary Rounded
        </base-button>
        <base-button
            button-id="rounded info"
            button-name="rounded info"
            buttonType="info"
            :rounded="true">
          Info Rounded
        </base-button>
      </p>
    </section>
    <section class="section">
      <h2>Loading</h2>
      <p class="eg">
        <base-button
            button-id="loading"
            button-name="loading"
            :loading="isLoading"
            @click="loadingClick"
        >
          Loading
        </base-button>
      </p>
    </section>
    <section class="section">
      <h2>Disabled</h2>
      <p class="eg">
        <base-button
            button-id="disabled dark"
            button-name="disabled dark"
            buttonType="dark"
            :disabled="true">
          Dark Disabled
        </base-button>
        <base-button
            button-id="disabled primary"
            button-name="disabled primary"
            buttonType="primary"
            :disabled="true">
          Primary Disabled
        </base-button>
        <base-button
            button-id="disabled info"
            button-name="disabled info"
            buttonType="info"
            :disabled="true">
          Info Disabled
        </base-button>
      </p>
    </section>
    <section class="section">
      <h2>Icon Button</h2>
      <p class="eg">
        <base-button
            button-id="icon"
            button-name="icon"
        >
          <span class="icon is-small">
            <ion-icon name="bug-outline"></ion-icon>
          </span>
          <span>ボタンの名前</span>
        </base-button>
      </p>
    </section>

  </div>
</template>

<script>
import BaseButton from '@/components/atoms/BaseButton'

export default {
  name: "BaseButtonTest",
  components: {
    BaseButton
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
  .eg {
    padding: 0.5rem;
  }
</style>