<template>
  <div class="nav-wrapper">
    <div class="vertical-navigation">
      <img
        src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641442165b5e4a499ae9f723_menu-close.svg"
        loading="lazy"
        alt=""
        class="menu-toggle"
        @click="hideNav"
      /><nuxt-link to="/" class="brand w-inline-block"
        ><img src="/SolarisBlack.png" loading="lazy" alt="" class="logo"
      /></nuxt-link>
      <div class="nav-intro">Enjoy Smooth Banking Experience</div>
      <ul role="list" class="nav-list">
        <li>
          <nuxt-link
            to="/dashboard"
            class="nav-links w-inline-block"
            :class="{ active: route == 'dashboard' }"
            ><img
              src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641332980aba34f385a4eeac_dashboard.svg"
              loading="lazy"
              alt=""
              class="nav-icons"
            />
            <div>Dashboard</div></nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/profile"
            class="nav-links w-inline-block"
            :class="{ active: route == 'profile' }"
            ><img
              src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0e476a25fb94bb5bc_profile.svg"
              loading="lazy"
              alt=""
              class="nav-icons"
            />
            <div>Profile</div></nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/deposit"
            class="nav-links w-inline-block"
            :class="{ active: route == 'deposit' }"
            ><img
              src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133a9b2d3c101d19bfdf93_deposit.svg"
              loading="lazy"
              alt=""
              class="nav-icons"
            />
            <div>Deposit</div></nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/withdraw"
            class="nav-links w-inline-block"
            :class="{ active: route == 'withdraw' }"
            ><img
              src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133c52259c487edf10323c_buyer-pay-icon%201.svg"
              loading="lazy"
              alt=""
              class="nav-icons"
            />
            <div>Withdraw</div></nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/internal"
            class="nav-links w-inline-block"
            :class="{ active: route == 'internal' }"
            ><img
              src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133d2ec4c4694654dfe706_transfer.svg"
              loading="lazy"
              alt=""
              class="nav-icons"
            />
            <div>User 2 User Transfer</div></nuxt-link
          >
        </li>
        <li class="my-element loan">
          <span class="nav-links w-inline-block"
            ><img
              src="/images/loan.svg"
              loading="lazy"
              alt=""
              class="nav-icons"
            />
            <div>Loan</div></span
          >
        </li>
        <li class="my-element card">
          <span class="nav-links w-inline-block"
            ><img
              src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133a9b5f5f5607f2ef1d8d_card.svg"
              loading="lazy"
              alt=""
              class="nav-icons"
            />
            <div>Virtual Card</div></span
          >
        </li>
        <li>
          <nuxt-link
            to="/transactions"
            class="nav-links w-inline-block"
            :class="{ active: route == 'transactions' }"
            ><img
              src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641332980aba34f385a4eeac_dashboard.svg"
              loading="lazy"
              alt=""
              class="nav-icons"
            />
            <div>Transactions</div></nuxt-link
          >
        </li>
        <!-- <li>
          <nuxt-link
            to="/notification"
            class="nav-links w-inline-block"
            :class="{ active: route == 'notification' }"
            ><img
              src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f055e38d2c4db8492c_notification.svg"
              loading="lazy"
              alt=""
              class="nav-icons"
            />
            <div>Notifications</div></nuxt-link
          >
        </li> -->
        <li @click="logout">
          <a href="#" class="nav-links w-inline-block"
            ><img
              src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0fbeda4ab78bee286_logout.svg"
              loading="lazy"
              alt=""
              class="nav-icons"
            />
            <div>Logout</div></a
          >
        </li>
      </ul>
      <h1 v-if="company" class="brand-name">{{ company.companyName }}</h1>
      <div>The best choice of Online-Banking with No-Restrictions</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      route: "",
      company: "",
    };
  },
  methods: {
    // toggleNav() {
    //   this.$store.commit("TOGGLE_DASHBOARD_NAV");
    // },
    authenticateUser() {
      if (this.user.staffType == "Admin") {
        this.$router.push("/admin");
      }
    },
    hideNav() {
      const navbar = document.querySelector(".nav-wrapper");
      navbar.classList.remove("show");
    },

    async getCompany() {
      try {
        const result = await this.$axios.get("/company");
        this.company = result.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async logout() {
      await this.$auth.logout();
    },
  },

  mounted() {
    // this.authenticateUser();
    this.route = this.$route.name;
    this.getCompany();
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },

    showDashobardNav() {
      return this.$store.state.showDashboardNav;
    },
  },
};
</script>

<style>
.nav-wrapper {
  transition: all 0.3s;
}
.nav-wrapper.show {
  left: 0;
}

.nav-links.w-inline-block {
  display: flex;
}

.my-element {
  position: relative;
  display: block;
}

.my-element.card:hover::before {
  content: "Sorry, virtual card is currently not available at the moment.";
}

.my-element.loan:hover::before {
  content: "Sorry, loan is currently not available at the moment.";
}

.my-element:hover::before {
  position: absolute;
  width: 250px;
  top: -10px;
  left: 0;
  background-color: #e53b24;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
}
</style>
