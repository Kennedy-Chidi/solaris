<template>
  <div class="account-wrapper">
    <h1 class="balance-title">Your Savings Balance</h1>
    <h1 class="balance" v-if="user">
      ${{ formatMoney(Number(user.totalBalance).toFixed(2)) }}
    </h1>
    <div class="date">{{ formatDate() }}</div>
    <div class="accounts-holder">
      <div class="each-account">
        <div class="account-name">Savings</div>
        <h1 class="each-account-balance">
          ${{ formatMoney(Number(user.totalBalance).toFixed(2)) }}
        </h1>
      </div>
      <div class="each-account">
        <div class="account-name check">Fixed</div>
        <h1 class="each-account-balance">
          ${{ Number(checkAccounts("Fixed")).toFixed(2) }}
        </h1>
      </div>
      <div class="each-account">
        <div class="account-name current">current</div>
        <h1 class="each-account-balance">
          ${{ Number(checkAccounts("Current")).toFixed(2) }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      savings: 0,
      fixed: 0,
      current: 0,
      user: "",
    };
  },
  methods: {
    formatMoney(amount) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    formatDate() {
      const date = new Date().getTime(); // Note that month is zero-indexed in JavaScript
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        suffix: (day) => {
          if (day === 1 || day === 21 || day === 31) {
            return "st";
          } else if (day === 2 || day === 22) {
            return "nd";
          } else if (day === 3 || day === 23) {
            return "rd";
          } else {
            return "th";
          }
        },
      };

      return new Intl.DateTimeFormat("en-US", options).format(date);
    },

    async getUser() {
      try {
        const result = await this.$aixos.get("/users/get-user");
        this.user = result.data.user;
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },

  mounted() {
    this.getUser();
  },
};
</script>

<style></style>
