<template>
  <div class="dashboard-card-wrap">
    <h4 class="card-wrap-title volume">Your Transaction Volume</h4>
    <div class="each-volume">
      <div class="volume-icon-holder">
        <img
          src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641400500eac7c2351f1d064_withdraw.svg"
          loading="lazy"
          alt=""
          class="volume-icon"
        />
      </div>
      <div class="volume-label">Make Fast <br />Withdrawal</div>
      <h1 class="volume-title">Withdrawal</h1>
      <h1 class="volume-title value">${{ formatMoney(withdrawalVolume) }}</h1>
    </div>
    <div class="each-volume creams">
      <div class="volume-icon-holder creams">
        <img
          src="/images/white-transfer.svg"
          loading="lazy"
          alt=""
          class="volume-icon big"
        />
      </div>
      <div class="volume-label">Make Fast <br />Transfer</div>
      <h1 class="volume-title">Internal</h1>
      <h1 class="volume-title value creams">${{ transferVolume }}</h1>
    </div>
    <div class="each-volume pink">
      <div class="volume-icon-holder pink">
        <img
          src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64140703dba3674f97b31faf_loan.svg"
          loading="lazy"
          alt=""
          class="volume-icon big"
        />
      </div>
      <div class="volume-label">Get Fast <br />Loan</div>
      <h1 class="volume-title">Loan</h1>
      <h1 class="volume-title value pink">${{ formatMoney(loanVolume) }}</h1>
    </div>
    <div class="each-volume red">
      <div class="volume-icon-holder red">
        <img
          src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/6414049c976598d4bd9eb06b_deposits.svg"
          loading="lazy"
          alt=""
          class="volume-icon"
        />
      </div>
      <div class="volume-label">Make Unlimited <br />Deposit</div>
      <h1 class="volume-title">Deposit</h1>
      <h1 class="volume-title value red">${{ formatMoney(depositVolume) }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      withdrawalVolume: 0,
      depositVolume: 0,
      transferVolume: 0,
      loanVolume: 0,
    };
  },
  methods: {
    setVolumes(volumes) {
      volumes.forEach((el) => {
        if (el.transactionType == "Withdrawal") {
          this.withdrawalVolume = el.totalAmount;
        }
        if (el.transactionType == "Deposit") {
          this.depositVolume = el.totalAmount;
        }
        if (el.transactionType == "Internal") {
          this.transferVolume = el.totalAmount;
        }
        if (el.transactionType == "Loan") {
          this.loanVolume = el.totalAmount;
        }
      });
    },

    formatMoney(amount) {
      if (amount == "" || amount == null || amount == undefined) {
        return "0.00";
      } else {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },

    async getTransactionVolume(username) {
      const query = `?username=${username}&status=1`;
      try {
        const result = await this.$axios.get(`/transactions/volumn/${query}`);
        this.setVolumes(result.data);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getUser() {
      try {
        const result = await this.$axios.get(`/users/get-user`);
        this.user = await result.data.user;
        this.getTransactionVolume(this.user.username);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getTransactionVolume(this.user.username);
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style></style>
