<template>
  <div class="dashboard-wrapper withdraw">
    <dashboard-navigation />
    <div class="dashboard-content">
      <dashboard-header />
      <div class="content-body">
        <div v-if="!confirmWithdrawal" class="dashboard-card-wrap">
          <div class="card-title second">
            Enter Account Number To Make A Transfer(Internal Transfer)
          </div>
          <div class="personal-form payment-input w-form">
            <div class="form-flex">
              <div class="each-form-field">
                <label for="name-7" class="label">Account Number</label
                ><input
                  type="number"
                  class="profile-input w-input"
                  v-model="receiverAccountNumber"
                  @keyup="checkUser"
                  placeholder="Enter Account Number"
                />
              </div>

              <div class="each-form-field">
                <label for="name-7" class="label">Account Name</label
                ><input
                  type="text"
                  class="profile-input w-input"
                  v-model="receiverAccountName"
                  placeholder="Enter Account Name"
                />
              </div>

              <div class="each-form-field">
                <label for="name-7" class="label">Amount ($)</label
                ><input
                  type="number"
                  class="profile-input w-input"
                  v-model="amount"
                  placeholder="Enter Amount"
                />
              </div>
              <div v-if="showMsg" class="msg" :class="{ error: !colour }">
                {{ msg }}
              </div>
              <div class="button-holder">
                <span @click="beginWithdrawal" class="btn-custom w-button"
                  >Proceed</span
                ><span class="btn-custom w-button">Cancel</span>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="dashboard-card-wrap">
          <div class="card-types-wrapper">
            <div class="card-title">Confirm &amp; Send to..</div>
            <div class="type-card select account">
              <div class="card-type-flex">
                <h4 class="type-card-title">Type</h4>
                <div>Not Available</div>
              </div>
              <div class="card-type-flex">
                <h4 class="type-card-title">Name</h4>
                <div>{{ receiverAccountName }}</div>
              </div>
              <div class="card-type-flex">
                <h4 class="type-card-title">Account Number</h4>
                <div>{{ receiverAccountNumber }}</div>
              </div>
              <div v-if="company" class="card-type-flex">
                <h4 class="type-card-title">Bank</h4>
                <div>{{ company.companyName }}</div>
              </div>
              <div class="card-type-flex">
                <h4 class="type-card-title">Amount</h4>
                <div>{{ amount }}</div>
              </div>
            </div>
          </div>
          <div v-if="!user.pin" class="card-title" style="margin-bottom: 10px">
            You don't have Transaction Pin, create below to proceed
          </div>

          <div v-if="!user.pin" class="each-form-field">
            <label for="name-7" class="label"
              >Enter 6 Digits Transaction Pin</label
            ><input
              type="password"
              maxlength="6"
              class="profile-input w-input"
              v-model="newPin"
              placeholder="Enter Pin"
            />
          </div>
          <div v-if="!user.pin" class="each-form-field">
            <label for="name-7" class="label">Confirm Pin</label
            ><input
              type="password"
              class="profile-input w-input"
              maxlength="6"
              v-model="confirmPin"
              placeholder="Confirm Pin"
            />
          </div>
          <div v-else class="each-form-field">
            <label for="name-7" class="label">Enter Transaction Pin</label
            ><input
              type="password"
              class="profile-input w-input"
              v-model="pin"
              maxlength="6"
              placeholder="Enter Pin"
            />
          </div>
          <div v-if="showMsg" class="msg" :class="{ error: !colour }">
            {{ msg }}
          </div>
          <div class="button-holder">
            <span @click="checkPin" class="btn-custom w-button">Save</span
            ><span @click="cancelWithdrawal" class="btn-custom w-button"
              >Back</span
            >
          </div>
        </div>
        <dashboard-balance />
        <dashboard-transactions />
        <dashboard-activities />
      </div>
      <dashboard-footer />
    </div>
  </div>
</template>

<script>
import DashboardTransactions from "../components/DashboardTransactions.vue";
export default {
  components: { DashboardTransactions },
  data() {
    return {
      receiverBank: "",
      receiverAccountNumber: "",
      receiverAccountName: "",
      amount: 0,
      receiverAccount: "",
      company: "",

      pin: "",
      newPin: "",
      confirmPin: "",
      setPin: false,

      confirmWithdrawal: false,

      msg: "",
      colour: false,
      showMsg: false,
    };
  },
  methods: {
    showMessage(data) {
      this.msg = data;
      this.showMsg = true;
      setTimeout(() => {
        this.msg = "";
        this.showMsg = false;
      }, 6000);
    },

    formatMoney(amount) {
      if (amount == "" || amount == null || amount == undefined) {
        return "0.00";
      } else {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },

    beginWithdrawal() {
      if (this.amount < 5) {
        this.showMessage(`You can't withdraw below $5 USD. `);
        return;
      }
      if (this.receiverAccountNumber == "" || this.receiverAccountName == "") {
        this.showMessage("Please fill in the necessary fields above");
        return;
      }
      if (this.amount > this.user.totalBalance) {
        this.showMessage(
          "Sorry you have insufficient fund for this transaction"
        );
        return;
      } else if (this.user.username == this.receiverAccountName) {
        this.showMessage("You can not transfer to yoursel");
      } else {
        this.confirmWithdrawal = true;
      }
    },

    cancelWithdrawal() {
      this.confirmWithdrawal = false;
    },

    checkPin() {
      if (!this.user.pin) {
        if (this.newPin != this.confirmPin) {
          this.showMessage("Sorry your pin do not match!");
          return;
        } else {
          this.setPin = true;
          this.processWithdrawal();
        }
      } else if (this.pin != this.user.pin) {
        this.showMessage("Incorrect pin, please try again");
        return;
      } else if (this.pin == this.user.pin) {
        this.setPin = false;
        this.processWithdrawal();
      }
    },

    checkUser() {
      if (this.receiverAccountNumber.length == 10) {
        this.getUserAcount();
      }
    },

    async getUserAcount() {
      try {
        const result = await this.$axios.get(
          `/users/?accountNumber=${this.receiverAccountNumber}`
        );
        const receiver = result.data[0];
        this.colour = true;
        if (this.user.username == receiver.username) {
          this.msg = "You can not transfer to yourself";
          this.showMsg = true;
          setTimeout(() => {
            this.msg = "";
            this.showMsg = false;
          }, 6000);
        } else {
          this.receiverAccountName = receiver.username;
        }
      } catch (err) {
        this.showMessage(err.response);
      }
    },

    async processWithdrawal() {
      const form = {
        amount: this.amount,
        receiverAccountNumber: this.receiverAccountNumber,
        receiverBank: this.company.companyBankName,
        receiverAccountName: this.receiverAccountName,
        newPin: this.newPin,
        confirmPin: this.confirmPin,
        pin: this.pin,
        setPin: this.setPin,
        transactionType: "Internal",
        username: this.user.username,
        userId: this.user.id,
        senderFullName: `${this.user.firstName} ${this.user.lastName}`,
        email: this.user.email,
        status: false,
        dateCreated: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        time: new Date().getTime(),
      };

      try {
        const result = await this.$axios.post("/transactions", form);
        this.colour = true;
        this.showMessage("Your transaction was successful.");
        setTimeout(() => {
          location.reload();
        }, 6000);
      } catch (err) {
        this.showMessage(err.response.data.message);
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

  mounted() {
    this.getCompany();
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
};
</script>

<style>
.msg {
  width: 100%;
  text-align: left;
}

.each-form-field.block input {
  cursor: not-allowed;
}
</style>
