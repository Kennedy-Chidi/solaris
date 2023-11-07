<template>
  <div class="dashboard-wrapper transactions">
    <dashboard-navigation />
    <div class="dashboard-content">
      <dashboard-header />
      <div class="content-body">
        <div class="dashboard-card-wrap transact">
          <div class="card-types">
            <div class="card-types-wrapper">
              <div class="card-title">Transaction History</div>
            </div>
          </div>
          <div class="transaction-filter">
            <div class="filter-head">
              <h1
                class="filter-title"
                @click="showTransactionList = !showTransactionList"
              >
                {{ transaction }}
              </h1>
              <img
                src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64145fbd036e352a3f4aec8f_caret.svg"
                loading="lazy"
                alt=""
                class="filter-icon"
                @click="showTransactionList = !showTransactionList"
              />
              <ul
                role="list"
                class="select-list"
                :class="{ hide: showTransactionList }"
              >
                <li
                  class="select-item"
                  @click="setTransactionTypes('All Transactions')"
                >
                  <div>All Transactions</div>
                </li>
                <li
                  v-for="(transaction, int) in transactionTypes"
                  :key="int"
                  class="select-item"
                  @click="setTransactionTypes(transaction)"
                >
                  <div>{{ transaction }}</div>
                </li>
              </ul>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641463ca1bb6f43f6edc8725_calendd.svg"
              loading="lazy"
              alt=""
              class="filter-icon"
            />
            <input type="date" v-model="time" @change="processDate" />
          </div>
          <div class="table-wrapper">
            <table class="transaction">
              <thead>
                <tr>
                  <td>S/N</td>
                  <td>Amount</td>
                  <td>Type</td>
                  <td>Sender</td>
                  <td>Receiver</td>
                  <td>Narration</td>
                  <td>Date</td>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(transaction, int) in transactions"
                  :key="transaction._id"
                >
                  <td>{{ int + 1 }}</td>
                  <td>${{ transaction.amount }}</td>
                  <td>{{ transaction.transactionType }}</td>
                  <td v-if="user.username != transaction.username">
                    {{ transaction.username }}
                  </td>
                  <td v-if="transaction.sender">{{ transaction.sender }}</td>
                  <td v-else>You</td>
                  <td>
                    {{ transaction.receiverName }}
                  </td>
                  <td>{{ transaction.narration }}</td>
                  <td>
                    {{ getTime(transaction.time) }},
                    {{ formatDate(transaction.time) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul v-if="pages().length != 1" role="list" class="pagination-list">
            <li
              v-if="currentPage != 1"
              class="paginate"
              @click="paginate(currentPage - 1)"
            >
              <img
                src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641464efc68c4e2723b54a93_arrow.svg"
                loading="lazy"
                alt=""
                class="paginate-icon"
              />
            </li>

            <li
              v-for="(page, int) in pages()"
              :key="int"
              @click="paginate(int + 1)"
              class="paginate"
              :class="{ active: int == currentPage - 1 }"
            >
              <div>{{ int + 1 }}</div>
            </li>
            <li
              class="paginate"
              v-if="currentPage < pages(currentPage + 1).length"
              @click="paginate(currentPage + 1)"
            >
              <img
                src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641464efc68c4e2723b54a93_arrow.svg"
                loading="lazy"
                alt=""
                class="paginate-icon flip"
              />
            </li>
          </ul>
        </div>
      </div>
      <dashboard-footer />
    </div>
  </div>
</template>

<script>
import DashboardFooter from "../components/DashboardFooter.vue";
import DashboardHeader from "../components/DashboardHeader.vue";
import DashboardNavigation from "../components/DashboardNavigation.vue";
export default {
  data() {
    return {
      transactions: [],
      limit: 10,
      currentPage: 1,
      dateCreated: "",
      time: "",
      type: "",
      transactionLength: "",

      transactionTypes: ["Deposit", "Internal", "Withdrawal"],
      showTransactionList: true,
      transaction: "All Transactions",

      pages: function () {
        let array = [];
        let x = Math.ceil(this.transactionLength / this.limit);
        for (let i = 0; i < x; i++) {
          array.push("i");
        }
        return array;
      },
    };
  },

  methods: {
    formatDate(data) {
      if (isNaN(data)) {
        return "0";
      }
      const date = new Date(data).getTime(); // Note that month is zero-indexed in JavaScript
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

    getTime(data) {
      const currentDate = new Date(data);
      let hours = currentDate.getHours();
      let minutes = currentDate.getMinutes();
      let amOrPm = hours >= 12 ? "PM" : "AM";

      // Convert to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'

      // Add leading zeros to minutes
      minutes = minutes < 10 ? "0" + minutes : minutes;

      // Output the formatted time
      return hours + ":" + minutes + " " + amOrPm;
    },

    processDate() {
      this.date = `${new Date(this.date).getDate()}/${
        new Date(this.date).getMonth() + 1
      }/${new Date(this.date).getFullYear()}`;
      this.getTransactions();
    },

    paginate(index) {
      this.currentPage = index;
      this.getTransactions();
    },

    setTransactionTypes(type) {
      this.transaction = type;
      if (type == "All Transactions") {
        this.date = "";
      }
      this.getTransactions();
      this.showTransactionList = true;
    },

    async getTransactions() {
      // const query = `?username=${this.user.username}&status=true&sort=-time&limit=${this.limit}&page=${this.currentPage}${this.dateCreated}${this.type}`
      const query = `?username=${this.user.username}&status=true&sort=-time&limit=${this.limit}&page=${this.currentPage}`;
      try {
        const result = await this.$axios.get(`/transactions/${query}`);
        this.transactions = result.data.data;
        this.transactionLength = result.data.totalLength;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },

  mounted() {
    this.getTransactions();
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },

  head() {
    return {
      link: [
        { rel: "stylesheet", type: "text/css", href: "/css/dashboard.css" },
      ],
    };
  },

  components: { DashboardFooter, DashboardNavigation, DashboardHeader },
};
</script>

<style>
.dashboard-content {
  display: flex;
  flex-direction: column;
}

.dashboard-footer {
  margin-top: auto;
}

table.transaction thead tr {
  background: #fff6f5;
}

thead td {
  font-weight: 500;
}
</style>
