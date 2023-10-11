<template>
  <div class="dashboard-header">
    <div v-if="company" class="header-caption">
      <h1 class="header-title">Welcome to {{ company.companyName }}</h1>
      <div>
        It&#x27;s easier than you thought with<br />{{ company.companyName }}
      </div>
    </div>
    <div class="top-icon-holder">
      <div class="each-icon-wrapper close" @click="toggleNav">
        <img
          src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641442165b5e4a499ae9f723_menu-close.svg"
          loading="lazy"
          alt=""
          class="top-icons menu"
        />
      </div>
      <div @click="goToNotification" class="each-icon-wrapper">
        <img
          src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f055e38d2c4db8492c_notification.svg"
          loading="lazy"
          alt=""
          class="top-icons dash"
        />
      </div>
      <div @click="goToProfile" v-if="user" class="each-icon-wrapper round">
        <img :src="`${FILE_URL}/${user.profilePicture}`" alt="" srcset="" />
        <div
          class="top-image"
          :style="{
            backgroundImage: `url(${FILE_URL}/${user.profilePicture})`,
          }"
        ></div>
      </div>
      <div class="each-icon-wrapper" @click="logout">
        <img
          src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0fbeda4ab78bee286_logout.svg"
          loading="lazy"
          alt=""
          class="top-icons add dash"
        />
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
          href: "/css/dashboard.css",
          type: "text/css",
        },
      ],
    };
  },

  data() {
    return {
      company: "",
    };
  },

  methods: {
    toggleNav() {
      const navbar = document.querySelector(".nav-wrapper");
      if (navbar.classList.contains("show")) {
        navbar.classList.remove("show");
      } else {
        navbar.classList.add("show");
      }
    },

    hideNav() {
      const navbar = document.querySelector(".nav-wrapper");
      navbar.classList.remove("show");
    },

    goToProfile() {
      this.$router.push("/profile");
    },

    goToNotification() {
      this.$router.push("/notification");
    },

    checkAuthentication() {
      if (!this.isAuthenticated) {
        this.$router.push("/login");
      }
    },

    async logout() {
      await this.$auth.logout(); // this method will logout the user and make token to false on the local storage of the user browser
    },

    async getUser() {
      try {
        const result = await this.$axios.get(`/users/get-user`);
        this.user = result.data.user;
      } catch (err) {
        console.log(err);
      }
    },

    async getCompany() {
      try {
        const result = await this.$axios.get("/company");
        this.company = result.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },

  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },

    user() {
      return this.$store.state.auth.user;
    },

    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },
  },

  mounted() {
    this.hideNav();
    this.$store.commit("SET_URL", this.$config.FILE_URL);
    this.getCompany();
    // this.getUser();
  },
};
</script>

<style>
.each-icon-wrapper .top-icons {
  margin: 0 auto;
}

.top-icons.dash {
  width: 18px;
}
</style>
