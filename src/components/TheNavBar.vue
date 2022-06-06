<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div
      class="navbar-brand"
    >
      <a
        class="navbar-item"
        href="./"
      >
        <img
          src="/SampleLogo.png"
          width="112"
          height="28"
          alt="logo"
        >
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasic"
        :class="{
          'is-active': isBurgerMenu
        }"
        @click="navbarClick"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div
      id="navbarBasic"
      class="navbar-menu"
      :class="{
        'is-active': isBurgerMenu
      }"
    >
      <div class="navbar-start">
        <router-link
          to="/"
          class="navbar-item"
        >
          Home
        </router-link>
        <router-link
          to="/about"
          class="navbar-item"
        >
          About
        </router-link>
        <router-link
          to="/element"
          class="navbar-item"
        >
          Element
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <base-button
            v-show="!isLoggedIn"
            button-id="login"
            button-name="login"
            button-type="info"
            light
          >
            <span class="icon is-large">
              <ion-icon name="person-circle-outline" />
            </span>
            <span>ログイン</span>
          </base-button>
          <base-button
            v-show="isLoggedIn"
            button-id="logout"
            button-name="logout"
            button-type="info"
            inverted
          >
            <span class="icon is-large">
              <ion-icon name="walk-outline" />
            </span>
            <span>ログアウト</span>
          </base-button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  name: "TheNavBar",
  components: {BaseButton},
  data() {
    return {
      isBurgerMenu: false,
      isLoggedIn: false
    }
  },
  methods: {
    navbarClick() {
      this.isBurgerMenu = !this.isBurgerMenu
    }
  }
}

</script>

<style scoped>

</style>