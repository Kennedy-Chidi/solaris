<template>
  <div class="content-header">
    <img
      @click="toggleNav"
      src="/images/menu.svg"
      loading="lazy"
      alt=""
      class="menu"
    />
    <div class="top-icons">
      <img src="/images/profile.svg" loading="lazy" alt="" class="top-icon" />
      <div class="notification">
        <div class="badge"></div>
        <img
          src="/images/notification.svg"
          loading="lazy"
          alt=""
          class="top-icon"
        />
        <div class="custom-card pie-chart-holder notify">
          <h4 class="activites">Recent Activies</h4>
          <div class="each-activity">
            <div class="activity-title">Deposit</div>
            <div class="activity-coin">
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg"
                loading="lazy"
                alt=""
                class="activity-img"
              />
              <div class="activity-line"></div>
            </div>
            <div class="activity-value">
              <h4 class="activity-amount">$12.00</h4>
              <div class="activity-time">12/06/2022 9:04 AM</div>
            </div>
          </div>
          <div class="each-activity">
            <div class="activity-title">Withdrawal</div>
            <div class="activity-coin">
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg"
                loading="lazy"
                alt=""
                class="activity-img"
              />
              <div class="activity-line"></div>
            </div>
            <div class="activity-value">
              <h4 class="activity-amount">$12.00</h4>
              <div class="activity-time">12/06/2022 9:04 AM</div>
            </div>
          </div>
          <div class="each-activity">
            <div class="activity-title">Deposit</div>
            <div class="activity-coin">
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg"
                loading="lazy"
                alt=""
                class="activity-img"
              />
              <div class="activity-line"></div>
            </div>
            <div class="activity-value">
              <h4 class="activity-amount">$12.00</h4>
              <div class="activity-time">12/06/2022 9:04 AM</div>
            </div>
          </div>
          <div class="each-activity">
            <div class="activity-title">Deposit</div>
            <div class="activity-coin">
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg"
                loading="lazy"
                alt=""
                class="activity-img"
              />
              <div class="activity-line"></div>
            </div>
            <div class="activity-value">
              <h4 class="activity-amount">$12.00</h4>
              <div class="activity-time">12/06/2022 9:04 AM</div>
            </div>
          </div>
        </div>
      </div>
      <img
        @click="logout"
        src="/images/logout.svg"
        loading="lazy"
        alt=""
        class="top-icon"
      />
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
          href: "/css/main.css",
          type: "text/css",
        },
      ],
    };
  },

  methods: {
    toggleNav() {
      this.$store.commit("TOGGLE_ADMIN_NAV");
    },

    authenticateUser() {
      if (!this.isAuthenticated) {
        this.$router.push("/");
      } else if (this.user.staffType == "User") {
        this.$router.push("/dashboard");
      }
    },

    async logout() {
      await this.$auth.logout();
      this.$router.push("/");
    },
  },

  mounted() {
    this.authenticateUser();
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },

    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style></style>
