<template>
  <div class="dashboard-wrapper withdraw">
    <dashboard-navigation />
    <div class="dashboard-content">
      <dashboard-header />
      <div class="content-body">
        <!-- <div v-if="!confirmWithdrawal" class="dashboard-card-wrap">
          <div class="card-title second">
            Enter Account Details To Withdraw To
          </div>
          <div class="personal-form payment-input w-form">
            <div class="form-flex">
              <div class="each-form-field">
                <label for="name-7" class="label">Bank Name</label
                ><input
                  type="text"
                  class="profile-input w-input"
                  v-model="receiverBank"
                  placeholder="Enter Bank Name"
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
                <label for="name-7" class="label">Account Number</label
                ><input
                  type="number"
                  class="profile-input w-input"
                  v-model="receiverAccountNumber"
                  placeholder="Enter Account Number"
                />
              </div>
              <div class="each-form-field">
                <label for="name-7" class="label">Routing Number</label
                ><input
                  type="number"
                  class="profile-input w-input"
                  placeholder="Enter Routing Number"
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
        </div> -->

        <div v-if="!confirmWithdrawal" class="dashboard-card-wrap">
          <div class="card-types">
            <div class="card-types-wrapper">
              <div class="type-card other select">
                <h1 class="balance-title">
                  Select any currency below to transfer from.
                </h1>

                <div class="accounts-holder">
                  <div
                    v-for="(account, int) in accounts"
                    :key="account.id"
                    class="each-account"
                    :class="{ selected: account.selected }"
                    @click="selectAccount(account)"
                  >
                    <div
                      class="account-name check"
                      :class="{ check: int == 1, current: int == 2 }"
                    >
                      {{ account.currency }}
                    </div>
                    <h1 class="each-account-balance">
                      {{ account.symbol
                      }}{{ formatMoney(Number(account.balance).toFixed(2)) }}
                    </h1>
                  </div>
                </div>
              </div>

              <div class="type-card select">
                <div class="each-form-field withdrawal">
                  <label for="name-7" class="label">Bank Name</label
                  ><input
                    type="text"
                    class="profile-input w-input"
                    v-model="receiverBank"
                    placeholder="Enter Bank Name"
                  />
                </div>

                <div class="each-form-field withdrawal">
                  <label for="name-7" class="label">Account Name</label
                  ><input
                    type="text"
                    class="profile-input w-input"
                    v-model="receiverAccountName"
                    placeholder="Enter Account Name"
                  />
                </div>
                <div class="each-form-field withdrawal">
                  <label for="name-7" class="label">Account Number</label
                  ><input
                    type="number"
                    class="profile-input w-input"
                    v-model="receiverAccountNumber"
                    placeholder="Enter Account Number"
                  />
                </div>
                <div class="each-form-field withdrawal">
                  <label for="name-7" class="label">Routing Number</label
                  ><input
                    type="number"
                    class="profile-input w-input"
                    placeholder="Enter Routing Number"
                  />
                </div>
                <div class="each-form-field withdrawal">
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
          <!-- <div v-if="showMsg" class="msg" :class="{ error: !colour }">
            {{ msg }}
          </div>
          <div class="button-holder">
            <span @click="beginTransfer" class="btn-custom w-button"
              >Proceed</span
            ><span class="btn-custom w-button">Cancel</span>
          </div> -->
        </div>

        <div v-else class="dashboard-card-wrap">
          <div class="card-types-wrapper">
            <div class="card-title">Confirm &amp; Send to..</div>
            <div class="type-card select account">
              <div class="card-type-flex">
                <h4 class="type-card-title">Type</h4>
                <div v-if="receiverAccountType">{{ receiverAccountType }}</div>
                <div v-else>Not Available</div>
              </div>
              <div class="card-type-flex">
                <h4 class="type-card-title">Name</h4>
                <div>{{ receiverAccountName }}</div>
              </div>
              <div class="card-type-flex">
                <h4 class="type-card-title">Account Number</h4>
                <div>{{ receiverAccountNumber }}</div>
              </div>
              <div class="card-type-flex">
                <h4 class="type-card-title">Bank</h4>
                <div>{{ receiverBank }}</div>
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
              @input="limitPin"
            />
          </div>
          <div v-if="!user.pin" class="each-form-field">
            <label for="name-7" class="label">Confirm Pin</label
            ><input
              type="password"
              class="profile-input w-input"
              maxlength="6"
              @input="limitCPin"
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
              @input="limitPin"
              maxlength="6"
              placeholder="Enter Pin"
            />
          </div>

          <div v-if="showMsg" class="msg" :class="{ error: !colour }">
            {{ msg }}
          </div>
          <div class="button-holder">
            <span @click="checkPin" class="btn-custom w-button">Save</span
            ><a href="#" @click="cancelWithdrawal" class="btn-custom w-button"
              >Back</a
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
import DashboardFooter from "../components/DashboardFooter.vue";
import DashboardTransactions from "../components/DashboardTransactions.vue";
export default {
  data() {
    return {
      receiverBank: "",
      receiverAccountType: "",
      receiverAccountNumber: "",
      receiverAccountName: "",
      amount: 0,
      company: "",
      account: "",
      accounts: [],

      pin: "",
      newPin: "",
      confirmPin: "",
      routingNumber: "",
      setPin: false,

      confirmWithdrawal: false,

      msg: "",
      colour: false,
      showMsg: false,
    };
  },

  methods: {
    showMessage(msg) {
      this.msg = msg;
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
      if (this.account == "") {
        this.showMessage(`Please select a currency type to continue.`);
        return;
      }

      if (this.amount < 5) {
        this.showMessage(`You can't transact below 5 ${this.account.currency}`);
        return;
      }

      if (
        this.receiverBank == "" ||
        this.receiverAccountNumber == "" ||
        this.receiverAccountName == ""
      ) {
        this.showMessage("Please fill in the necessary fields above");
        return;
      }

      if (this.amount > this.account.balance) {
        this.showMessage(
          `You have insufficient fund in your ${this.account.currency} account.`
        );
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

    limitNewPin() {
      const sanitizedInput = this.newPin.replace(/\D/g, "");
      const limitedInput = sanitizedInput.slice(0, 6);
      this.newPin = limitedInput;
      if (sanitizedInput.length > 6) {
        this.showMessage("Maximum 6 digits allowed");
      } else {
        this.errorText = "";
      }
    },

    limitCPin() {
      const sanitizedInput = this.confirmPin.replace(/\D/g, "");
      const limitedInput = sanitizedInput.slice(0, 6);
      this.confirmPin = limitedInput;
      if (sanitizedInput.length > 6) {
        this.showMessage("Maximum 6 digits allowed");
      } else {
        this.errorText = "";
      }
    },

    limitPin() {
      const sanitizedInput = this.pin.replace(/\D/g, "");
      const limitedInput = sanitizedInput.slice(0, 6);
      this.pin = limitedInput;
      if (sanitizedInput.length > 6) {
        this.showMessage("Maximum 6 digits allowed");
      } else {
        this.errorText = "";
      }
    },

    reshuffleAccounts(accounts) {
      const shuffledArray = [...accounts];

      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }

      return this.uncheckAccounts(shuffledArray);
    },

    selectAccount(account) {
      this.account = account;
      this.uncheckAccounts(this.accounts);
      account.selected = true;
    },

    uncheckAccounts(accounts) {
      for (let i = 0; i < accounts.length; i++) {
        accounts[i].selected = false;
      }
      return accounts;
    },

    async getAccount() {
      try {
        const result = await this.$axios.get(
          `/accounts/user-accounts/?username=${this.user.username}`
        );
        this.accounts = this.reshuffleAccounts(result.data.data);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async processWithdrawal() {
      const form = {
        amount: this.amount,
        receiverAccountNumber: this.receiverAccountNumber,
        receiverBank: this.receiverBank,
        receiverAccountName: this.receiverAccountName,
        newPin: this.newPin,
        confirmPin: this.confirmPin,
        pin: this.pin,
        setPin: this.setPin,
        transactionType: "Withdrawal",
        username: this.user.username,
        userId: this.user.id,
        email: this.user.email,
        dateCreated: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        time: new Date().getTime(),
        status: false,
        senderFullName: `${this.user.firstName} ${this.user.lastName}`,
        accountId: this.account.id,
        currency: this.account.currency,
        symbol: this.symbol,
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
    this.getAccount();
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },

  components: { DashboardFooter, DashboardTransactions },
};
</script>

<style>
.msg {
  width: 100%;
  text-align: left;
}

.each-form-field.withdrawal {
  width: 100%;
}

.btn-custom {
  margin-right: 20px;
  padding: 5px 7px;
  border-radius: 5px;
  background-color: #e53b24;
}
</style>
