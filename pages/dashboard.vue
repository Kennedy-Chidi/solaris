<template>
  <div class="dashboard-wrapper home">
    <dashboard-navigation />
    <div class="dashboard-content">
      <dashboard-header />
      <div class="content-body">
        <dashboard-balance />

        <div class="dashboard-card-wrap">
          <div class="card-types">
            <div class="card-details">
              <div class="card-wrap-header">
                <h4 class="card-wrap-title">Your Card Details</h4>
              </div>
              <div class="card-holder">
                <div class="card-number">4775 0959 **** ****</div>
                <div class="validity">
                  <div class="valid-time">Valid<br />Time</div>
                  <div class="card-number date">12/24</div>
                </div>
                <div v-if="user" class="card-number name">
                  {{ user.firstName.charAt(0) }}. {{ user.lastName }}
                </div>
                <img
                  src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/6413b7c66452a93e5640c298_Visa-Card-New.svg"
                  loading="lazy"
                  alt=""
                  class="card"
                />
              </div>
              <div class="card-apply">
                <div class="add-card"><h1 class="add-text">+</h1></div>
                <div class="apply">Apply For Card</div>
              </div>
            </div>
            <div class="card-types-wrapper add">
              <div class="card-title">Apply For Card</div>
              <div v-if="firstCard" class="type-card">
                <div class="card-type-flex">
                  <h4 class="type-card-title">Type</h4>
                  <div>{{ firstCard.cardType }}</div>
                </div>
                <div class="card-type-flex">
                  <h4 class="type-card-title">Issued</h4>
                  <div>{{ firstCard.issued }}</div>
                </div>
                <div class="card-type-flex">
                  <h4 class="type-card-title">Available</h4>
                  <div>{{ firstCard.totalNumber }}</div>
                </div>
              </div>

              <div v-if="secondCard" class="type-card other">
                <div class="card-type-flex">
                  <h4 class="type-card-title">Type</h4>
                  <div>{{ secondCard.cardType }}</div>
                </div>
                <div class="card-type-flex">
                  <h4 class="type-card-title">Issued</h4>
                  <div>{{ secondCard.issued }}</div>
                </div>
                <div class="card-type-flex">
                  <h4 class="type-card-title">Available</h4>
                  <div>{{ secondCard.totalNumber }}</div>
                </div>
              </div>

              <div v-if="thirdCard" class="type-card cool">
                <div class="card-type-flex">
                  <h4 class="type-card-title">Type</h4>
                  <div>{{ thirdCard.cardType }}</div>
                </div>
                <div class="card-type-flex">
                  <h4 class="type-card-title">Issued</h4>
                  <div>{{ thirdCard.issued }}</div>
                </div>
                <div class="card-type-flex">
                  <h4 class="type-card-title">Available</h4>
                  <div>{{ thirdCard.totalNumber }}</div>
                </div>
              </div>

              <div v-if="fourthCard" class="type-card other">
                <div class="card-type-flex">
                  <h4 class="type-card-title">Type</h4>
                  <div>{{ fourthCard.cardType }}</div>
                </div>
                <div class="card-type-flex">
                  <h4 class="type-card-title">Issued</h4>
                  <div>{{ fourthCard.issued }}</div>
                </div>
                <div class="card-type-flex">
                  <h4 class="type-card-title">Available</h4>
                  <div>{{ fourthCard.totalNumber }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <dashboard-transactions />

        <dashboard-activities />
      </div>
      <dashboard-footer />
    </div>
  </div>
</template>

<script>
import DashboardBalance from "../components/DashboardBalance.vue";
import DashboardHeader from "../components/DashboardHeader";
import DashboardTransactions from "../components/DashboardTransactions";
export default {
  data() {
    return {
      account: "",
      firstCard: "",
      secondCard: "",
      thirdCard: "",
      fourthCard: "",
    };
  },
  methods: {
    formatMoney(amount) {
      if (amount == 0) {
        return "0.00";
      }
      if (amount == "" || amount == null || amount == undefined) {
        return "0.00";
      } else {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
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
        const result = await this.$axios.get(`/users/get-user`);
        this.user = result.data.user;
        this.getAccount(this.user.username);
      } catch (err) {
        console.log(err);
      }
    },

    async getAccount() {
      try {
        const result = await this.$axios.get(`/account/${this.user.username}`);
        this.account = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getCards() {
      try {
        const result = await this.$axios.get("/cards");
        this.firstCard = result.data[0];
        this.secondCard = result.data[1];
        this.thirdCard = result.data[2];
        this.fourthCard = result.data[3];
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },
  mounted() {
    // this.getAccount();
    this.getCards();
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  components: { DashboardHeader, DashboardTransactions, DashboardBalance },
  head() {
    return {
      link: [
        { rel: "stylesheet", type: "text/css", href: "/css/dashboard.css" },
      ],
    };
  },
};
</script>

<style>
.card-apply {
  position: relative;
}

.card-apply:hover::before {
  content: "You can apply for card one month after registration";
}

.card-apply:hover::before {
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
