<template>
  <div class="dashboard-wrapper notice">
    <dashboard-navigation />
    <div class="dashboard-content">
      <dashboard-header />
      <div class="content-body">
        <div class="dashboard-card-wrap transact">
          <div class="card-types">
            <div class="card-types-wrapper">
              <div class="card-title">Notification History</div>
            </div>
          </div>
          <div class="transaction-filter">
            <div v-if="showFilter" class="filter-head">
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
                  @click="setTransactionType('All Transactions')"
                >
                  <div>All Transactions</div>
                </li>
                <li
                  v-for="(transaction, int) in transactions"
                  :key="int"
                  class="select-item"
                  @click="setTransactionType(transaction)"
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
            <input type="date" v-model="date" @change="processDate" />
          </div>
          <div class="notice-body">
            <div
              v-for="notification in notifications"
              :key="notification._id"
              class="each-notice"
            >
              <img
                src="https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641481bde77ff933d922c5fb_icon-removebg-preview.png"
                loading="lazy"
                alt=""
                class="notice-icon"
              />
              <div class="notice-holder">
                <h4 class="notice-title">
                  {{ notification.subject }}
                  <span class="date"
                    >{{ getTime(notification.dateCreated) }}
                    {{ formatDate(notification.dateCreated) }}</span
                  >
                </h4>
                <div>
                  {{ notification.message }}
                </div>
              </div>
            </div>
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

        <div class="account-wrapper review">
          <h4 class="card-wrap-title volume">Write your review</h4>
          <div class="personal-form w-form">
            <div class="form-flex">
              <div class="each-form-field flex">
                <label for="name-7" class="label">Rating</label
                ><input
                  type="number"
                  class="rating w-input"
                  maxlength="256"
                  name="name-4"
                  data-name="Name 4"
                  placeholder="3.5"
                  id="name-4"
                />
              </div>
              <textarea
                placeholder="Type your message"
                maxlength="5000"
                class="text-body w-input"
              ></textarea>
              <div class="button-holder">
                <span class="btn-custom w-button">Save</span>
              </div>
            </div>
          </div>
        </div>
        <dashboard-transactions />
      </div>
      <dashboard-footer />
    </div>
  </div>
</template>

<script>
import DashboardFooter from "../components/DashboardFooter.vue";
import DashboardNavigation from "../components/DashboardNavigation.vue";
export default {
  data() {
    return {
      notifications: [],
      limit: 5,
      currentPage: 1,
      date: "",
      notificationLength: "",
      user: "",
      showFilter: false,

      transactions: ["Deposit", "Transfer", "Withdrawal", "Loan"],
      showTransactionList: true,
      transaction: "All Transactions",

      pages: function () {
        let array = [];
        let x = Math.ceil(this.notificationLength / this.limit);
        for (let i = 0; i < x; i++) {
          array.push("i");
        }
        return array;
      },
    };
  },

  methods: {
    formatDate(data) {
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
      this.getNotifications();
    },

    paginate(index) {
      this.currentPage = index;
      this.getNotifications();
    },

    setTransactionType(type) {
      this.transaction = type;
      if (type == "All Transactions") {
        this.date = "";
      }
      this.getNotifications();
      this.showTransactionList = true;
    },

    async getNotifications() {
      let day = this.date != "" ? `&date=${this.date}` : "";

      const type =
        this.transaction == "All Transactions"
          ? ""
          : `&subject=${this.transaction} Notice`;
      const query =
        this.transaction != "All Transactions"
          ? `?username=${this.user.username}&sort=-dateCreated&limit=${this.limit}&page=${this.currentPage}${day}${type}`
          : `?username=${this.user.username}&sort=-dateCreated&limit=${this.limit}&page=${this.currentPage}${day}`;

      try {
        const result = await this.$axios.get(
          `/transactions/notifications/${query}`
        );
        this.notifications = result.data.data;
        this.notificationLength = result.data.length;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getUser() {
      try {
        const result = await this.$axios.get(`/users/get-user`);
        this.user = result.data.user;
        this.getNotifications();
      } catch (err) {
        console.log(err);
      }
    },
  },

  mounted() {
    this.getUser();
  },

  components: { DashboardNavigation, DashboardFooter },
};
</script>

<style>
.notice-title span {
  font-size: 13px;
  display: block;
  font-weight: 400;
}
</style>
