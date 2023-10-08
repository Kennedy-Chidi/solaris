<template>
  <div class="main-wrapper transactions">
    <admin-confirmation
      :msg="confirmMessage"
      :state="confirmState"
      @confirm="returnConfirmation"
    />
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
                  <td>Status</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(transaction, int) in transactions"
                  :key="transaction._id"
                >
                  <td>{{ int + 1 }}</td>
                  <td>
                    <img
                      :src="`${FILE_URL}/${transaction.symbol}`"
                      alt=""
                      class="banner symbol"
                    />
                  </td>
                  <td>{{ transaction.account.username }}</td>
                  <td>{{ transaction.account.fullName }}</td>
                  <td>{{ transaction.amount }}</td>
                  <td>{{ transaction.transactionType }}</td>
                  <td>{{ formatDate(transaction.dateCreated) }}</td>
                  <td>{{ transaction.receiverBank }}</td>
                  <td>{{ transaction.receiverName }}</td>
                  <td>{{ transaction.receiverAddress }}</td>
                  <td>
                    {{ transaction.narration }}
                  </td>
                  <td>
                    <div class="status success" v-if="transaction.status">
                      Approved
                    </div>
                    <div
                      @click="startAproveTransaction(transaction)"
                      class="status"
                      v-else
                    >
                      Draft
                    </div>
                  </td>
                  <td>
                    <div class="filter-box" @click="editDate(transaction)">
                      <img
                        src="/images/edit-gray.svg"
                        loading="lazy"
                        alt=""
                        class="filter-icon check action-icon"
                      />
                    </div>
                    <div
                      class="filter-box"
                      @click="
                        deleteConfirmation(
                          'Are you sure you want to delete this transaction?',
                          transaction._id
                        )
                      "
                    >
                      <img
                        src="/images/delete-gray.svg"
                        loading="lazy"
                        alt=""
                        class="filter-icon check action-icon"
                      />
                    </div>
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
          <div v-if="showEditButton" class="input-wrapper w-form">
            <div class="input-form">
              <div class="each-input">
                <label for="name-4" class="input-label">Transaction Type</label>
                <h4
                  class="select-display"
                  @click="showTransactionList = !showTransactionList"
                >
                  {{ transactionType }}
                </h4>
                <ul
                  role="list"
                  class="filter-list down"
                  :class="{ hide: !showTransactionList }"
                >
                  <li
                    class="filter-items"
                    v-for="(item, i) in transactionTypes"
                    :key="i"
                  >
                    <div @click="selectTransaction(item)">
                      {{ item }}
                    </div>
                  </li>
                </ul>
                <img
                  @click="showTransactionList = !showTransactionList"
                  src="/images/caret-down-gray.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon middle"
                />
              </div>

              <div class="each-input">
                <label for="email-3" class="input-label"
                  >Amount<span class="important">*</span></label
                ><input
                  type="number"
                  class="plan-input w-input"
                  v-model="amount"
                />
              </div>
              <div class="each-input">
                <label for="email-3" class="input-label">Date</label
                ><input
                  type="datetime-local"
                  class="plan-input w-input"
                  v-model="datetime"
                />
              </div>
              <div class="each-input">
                <label for="email-3" class="input-label"
                  >Sender<span class="important">*</span></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  v-model="sender"
                />
              </div>
              <div class="each-input content">
                <label for="field-2" class="input-label"
                  >Narration
                  <nuxt-link :to="`/admin/add-user/${user._id}`">{{
                    user.username
                  }}</nuxt-link></label
                >

                <textarea
                  v-model="narration"
                  class="plan-input w-input"
                ></textarea>
              </div>
              <div
                class="response"
                v-if="showResponse"
                :class="{ success: responseState }"
              >
                {{ response }}
              </div>
              <div class="button-holder">
                <input
                  type="button"
                  value="Create Transaction"
                  @click="processTransaction"
                  class="button w-button"
                /><input
                  type="submit"
                  value="Cancel"
                  data-wait="Please wait..."
                  class="button w-button"
                />
              </div>
            </div>
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
    checkId() {
      if (
        this.$route.params == undefined ||
        this.$route.params.id.length != 24
      ) {
        this.showEditButton = false;
        return false;
      } else {
        this.showEditButton = true;
        return true;
      }
    },

    showConfirmation(msg) {
      if (this.selectedEmailName == "Select Email") {
        this.showResponseMsg("Please select email template", false);
      } else {
        this.confirmMessage = msg;
        this.confirmStatus = false;
      }
    },

    deleteConfirmation(msg, id) {
      this.deleteId = id;
      this.confirmMessage = msg;
      this.confirmState = false;
    },

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

    showResponseMsg(msg, status) {
      this.response = msg;
      this.responseState = status;
      this.showResponse = true;
      setTimeout(() => {
        this.response = "";
        this.showResponse = false;
      }, 6000);
    },

    cleareInputs() {
      this.editingItem = "";
      this.transactionType = "Choose Transaction Type";
      this.narration = "";
      this.amount = "";
    },

    selectTransaction(item) {
      this.transactionType = item;
      this.showTransactionList = false;
    },

    selectAccount(item) {
      this.accountType = item.name;
      this.account = item;
      this.showAccountList = false;
    },

    returnConfirmation(data) {
      this.confirmState = true;
      this.confirmMessage = "";
      if (data == "yes") {
        if (this.deleteId != "") {
          this.deleteTransaction(this.deleteId);
        } else {
          this.approveTransaction();
        }
      }
    },

    startAproveTransaction(transaction) {
      this.confirmMessage =
        "Are you sure you want to approve this transaction?";
      this.confirmState = false;
      this.editingItem = transaction;
      this.datetime = transaction.dateCreated;
    },

    processTransaction() {
      const form = {
        receiverAccountType: this.account.accountType,
        receiverAddress: this.account.accountNumber,
        receiverBank: this.company.companyBank,
        receiverName: this.account.fullName,
        receiverUsername: this.account.username,
        username: this.account.username,
        amount: this.amount,
        narration: this.narration,
        sender: this.sender,
        account: this.account,
        transactionType: "deposit",
        autoTransact: true,
        user: this.user,
        date:
          this.datetime != ""
            ? `${new Date(this.datetime).getDate()}/${new Date(
                this.datetime
              ).getMonth()}/${new Date(this.datetime).getFullYear()}`
            : `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        dateCreated:
          this.datetime != ""
            ? new Date(this.datetime).getTime()
            : new Date().getTime(),
      };

      this.createTransaction(form);
    },

    paginate(int) {
      this.currentPage = int;
      this.getTransactions();
    },

    editDate(transaction) {
      this.editingItem = transaction;
      this.datetime = transaction.date;
    },

    async createTransaction(form) {
      try {
        await this.$axios.post(`/transactions`, form);
        this.getTransactions();
        this.cleareInputs();
      } catch (err) {
        this.showResponseMsg(err.response.data.message);
      }
    },

    async getUser(id) {
      try {
        const result = await this.$axios.get(`/users/${id}`);
        this.user = result.data.data;
        this.getAnAccount(this.user.username);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async approveTransaction() {
      // this.editingItem.date =
      //   this.datetime != ""
      //     ? `${new Date(this.datetime).getDate()}/${new Date(
      //         this.datetime
      //       ).getMonth()}/${new Date(this.datetime).getFullYear()}`
      //     : `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;

      // this.editingItem.dateCreated =
      //   this.datetime != ""
      //     ? new Date(this.datetime).getTime()
      //     : new Date().getTime();

      try {
        await this.$axios.patch(
          `/transactions/${this.editingItem._id}`,
          this.editingItem
        );
        this.getTransactions();
        this.cleareInputs();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getTransactions() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}&status=false`;

      try {
        const result = await this.$axios.get(`/transactions/${query}`);
        this.transactions = result.data.data;
        this.itemLength = result.data.length;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getAnAccount(username) {
      try {
        const result = await this.$axios.get(`/account/${username}`);
        this.account = result.data.data;
        console.log(this.account);
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

    async deleteTransaction(id) {
      try {
        await this.$axios.delete(`transactions/${id}`);
        this.getTransactions();
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },

  mounted() {
    if (this.checkId()) {
      this.getUser(this.$route.params.id);
    }
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
