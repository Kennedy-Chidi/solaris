<template>
  <div class="main-wrapper transactions">
    <admin-navigation />
    <div class="body-wrapper">
      <admin-top-header />
      <div class="content-wrapper">
        <div class="custom-card plan">
          <h4 class="page-title">TRANSACTION HISTORY</h4>
          <div class="table-filters">
            <div class="each-filter-option">
              <div class="filter-page">Filter</div>
              <img
                src="/images/caret-down-gray.svg"
                loading="lazy"
                alt=""
                class="filter-icon drop"
              />
              <h4 class="filter-label">All Users</h4>
              <ul role="list" class="filter-list hide">
                <li class="filter-items"><div>All Users</div></li>
                <li class="filter-items"><div>Active</div></li>
                <li class="filter-items"><div>Suspended</div></li>
                <li class="filter-items"><div>Blocked</div></li>
              </ul>
            </div>
            <div class="each-filter-option">
              <div class="filter-page">Sort</div>
              <h4 class="filter-label">Name</h4>
              <ul role="list" class="filter-list hide">
                <li class="filter-items"><div>Reg. Date</div></li>
                <li class="filter-items"><div>Deposit</div></li>
                <li class="filter-items"><div>Suspended</div></li>
                <li class="filter-items"><div>Blocked</div></li>
              </ul>
              <img
                src="/images/caret-down-gray.svg"
                loading="lazy"
                alt=""
                class="filter-icon drop"
              />
            </div>
            <div class="each-filter-option">
              <div class="filter-page">Results</div>
              <h4 class="filter-label input">10</h4>
              <div class="filter-box">
                <img
                  src="/images/check-gray.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon check"
                />
              </div>
            </div>
          </div>
          <div class="table-wrapper">
            <table class="custom-table">
              <thead>
                <tr>
                  <td>S/N</td>
                  <td>Symbol</td>
                  <td>Username</td>
                  <td>Account Name</td>
                  <td>Amount</td>
                  <td>Transaction</td>
                  <td>Date</td>
                  <td>Reciever Bank</td>
                  <td>Reciever Name</td>
                  <td>Reciever Address</td>
                  <td>Narration</td>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(transaction, int) in transactions"
                  :key="transaction._id"
                >
                  <td>{{ int + 1 }}</td>
                  <td>{{ transaction.currency }}</td>
                  <td>{{ transaction.username }}</td>
                  <td>{{ transaction.senderFullName }}</td>
                  <td>{{ transaction.amount }}</td>
                  <td>{{ transaction.transactionType }}</td>
                  <td>{{ formatDate(transaction.time) }}</td>
                  <td>{{ transaction.receiverBank }}</td>
                  <td>{{ transaction.receiverAccountName }}</td>
                  <td>{{ transaction.receiverAccountNumber }}</td>
                  <td>
                    {{ transaction.narration }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-label">
            <div>
              <strong class="bold-text">Results</strong>: {{ itemLength }}
              <strong class="bold-text-2">Page</strong> {{ currentPage }} of 12
            </div>
            <ul
              v-if="pages().length > 1"
              role="list"
              class="min-table-pagination"
            >
              <li
                v-if="currentPage != 1"
                class="pagination-item"
                @click="paginate(currentPage - 1)"
              >
                <img
                  src="/images/cheveron-left.svg"
                  loading="lazy"
                  alt=""
                  class="pagination-img"
                />
              </li>
              <li
                v-for="(page, int) in pages()"
                :key="int"
                class="pagination-item"
                @click="paginate(int + 1)"
              >
                <div>{{ int + 1 }}</div>
              </li>

              <li
                class="pagination-item"
                v-if="currentPage < pages(currentPage + 1).length"
                @click="paginate(currentPage + 1)"
              >
                <img
                  src="/images/cheveron-right.svg"
                  loading="lazy"
                  alt=""
                  class="pagination-img"
                />
              </li>
            </ul>
          </div>
        </div>
        <Instruction />
      </div>
      <admin-footer />
    </div>
  </div>
</template>

<script>
import AdminConfirmation from "../../../components/admin/AdminConfirmation.vue";
import Instruction from "../../../components/admin/Instruction.vue";

export default {
  data() {
    return {
      showEditButton: "",
      showTransactionList: false,
      showAccountList: false,
      transactionTypes: ["deposit"],
      transactionType: "Choose Transaction Type",
      transactions: [],
      transaction: "",
      accountType: "Choose Account",
      account: "",
      narration: "",
      sender: "",
      amount: "",
      date: "",
      user: "",
      datetime: "",
      receiverBank: "",
      receiverName: "",
      receiverAddress: "",
      account: "",
      company: "",

      response: "",
      responseState: false,
      showResponse: false,

      confirmMessage: "",
      confirmState: true,

      editingItem: "",
      deleteId: "",
      sort: "-dateCreated",

      limit: 5,
      itemLength: "",
      currentPage: 1,
      pages: function () {
        let array = [];
        let x = Math.ceil(this.itemLength / this.limit);
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

    paginate(int) {
      this.currentPage = int;
      this.getTransactions();
    },

    async getTransactions() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}&status=1`;
      try {
        const result = await this.$axios.get(`/transactions/${query}`);
        this.transactions = result.data.data;
        this.itemLength = result.data.totalLength;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getCompany() {
      try {
        const result = await this.$axios.get("/company");
        this.company = result.data.data[0];
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },

  mounted() {
    this.getTransactions();
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
  components: { Instruction, AdminConfirmation },
};
</script>

<style>
.banner.symbol {
  height: 35px;
  width: auto;
}
</style>
