<template>
  <div class="nav-holder">
    <div class="nav-contains">
      <div class="top-header">
        <nuxt-link to="/" class="logo-link w-inline-block"
          ><img src="/SolarisBlack.png" loading="lazy" alt="" class="image-33"
        /></nuxt-link>
        <div class="top-nav-info-holder">
          <nuxt-link to="/contact" class="nav-link-block last w-inline-block"
            ><img
              src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/64062db80c1ec3bec200ef36_send-message-icon%201.svg"
              loading="lazy"
              alt=""
              class="link-icon"
            />
            <div class="link-block-text">Contact us</div></nuxt-link
          >

          <a
            v-if="isAuthenticated"
            href="#"
            class="nav-link-block last w-inline-block"
            @click="logout"
            ><img
              src="/images/logout-round.svg"
              loading="lazy"
              alt=""
              class="link-icon _4"
            />
            <div class="link-block-text">Logout</div></a
          >

          <nuxt-link
            v-else
            to="/login"
            class="nav-link-block last w-inline-block"
            @click="logout"
            ><img
              src="/images/login.svg"
              loading="lazy"
              alt=""
              class="link-icon _4"
            />
            <div class="link-block-text">Login</div></nuxt-link
          >

          <nuxt-link
            v-if="isAuthenticated"
            to="/dashboard"
            class="nav-link-block w-inline-block"
            ><img
              src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6406403f5b16231c4daa13d4_persona-icon%201.svg"
              loading="lazy"
              alt=""
              class="link-icon _3"
            />
            <div class="link-block-text">Dashboard</div></nuxt-link
          >

          <nuxt-link v-else to="/signup" class="nav-link-block w-inline-block"
            ><img
              src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6406403f5b16231c4daa13d4_persona-icon%201.svg"
              loading="lazy"
              alt=""
              class="link-icon _3"
            />
            <div class="link-block-text">Sign Up</div></nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="nav-hold">
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        class="navbar w-nav"
      >
        <div class="nav-contain">
          <div>
            <nav role="navigation" class="nav-menu w-nav-menu">
              <nuxt-link to="/" class="nav-link fit w-nav-link">Home</nuxt-link>
              <nuxt-link to="/about" class="nav-link fit w-nav-link"
                >About</nuxt-link
              >
              <nuxt-link to="/credit-cards" class="nav-link fit w-nav-link"
                >Credit Cards</nuxt-link
              >
              <nuxt-link to="/services" class="nav-link fit w-nav-link"
                >Services</nuxt-link
              >

              <nuxt-link to="/contact" class="nav-link fit w-nav-link"
                >Contact</nuxt-link
              >

              <nuxt-link to="/news" class="nav-link fit w-nav-link"
                >Blog</nuxt-link
              >
              <nuxt-link to="/faq" class="nav-link fit w-nav-link"
                >FAQ</nuxt-link
              >
            </nav>
            <div class="menu-button w-nav-button">
              <div class="icon w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "/css/home.css",
          type: "text/css",
        },
      ],
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout(); // this method will logout the user and make token to false on the local storage of the user browser
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },

    user() {
      return this.$store.state.auth.user; // it check if user isAuthenticated
    },
  },
};
</script>

<style>
.logo-link.w-inline-block {
  display: flex;
  justify-content: center;
}
img.image-33 {
  height: 70px;
  width: auto;
  margin: 0 auto;
}
</style>
