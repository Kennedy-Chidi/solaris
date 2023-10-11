<template>
  <div class="dashboard-wrapper withdraw">
    <dashboard-navigation />
    <div class="dashboard-content">
      <dashboard-header />
      <div class="content-body">
        <div v-if="!confirmWithdrawal" class="dashboard-card-wrap">
          <div class="card-types">
            <div class="card-types-wrapper">
              <div class="card-title">
                Deposit to the Account below to Fund your account
              </div>
              <div v-if="company" class="type-card select">
                <div class="card-type-flex">
                  <h4 class="type-card-title">Bank</h4>
                  <div>{{ company.companyBank }}</div>
                </div>
                <div class="card-type-flex">
                  <h4 class="type-card-title">Name</h4>
                  <div>
                    {{ company.companyBankName }}
                  </div>
                </div>
                <div class="card-type-flex">
                  <h4 class="type-card-title">Account Number</h4>
                  <div>{{ company.companyAccountNumber }}</div>
                </div>
                <div class="card-type-flex">
                  <h4 class="type-card-title">Routing Number</h4>
                  <div>{{ company.companyRoutingNumber }}</div>
                </div>
              </div>

              <div class="type-card other select">
                <h1 class="balance-title">
                  Click from the accounts below to Deposit.
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
                      }}{{ formatMoney(Number(account.balance)) }}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-title second">Enter Amount to Deposit</div>
          <div class="personal-form payment-input w-form">
            <div class="form-flex">
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
                <span @click="beginDeposit" class="btn-custom w-button"
                  >Proceed</span
                >
                <span class="btn-custom w-button">Cancel</span>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="dashboard-card-wrap">
          <div class="card-types-wrapper">
            <div class="card-title">Confirm &amp; Deposit to..</div>
            <div v-if="company" class="type-card select account">
              <div class="card-type-flex">
                <h4 class="type-card-title">Bank</h4>
                <div>{{ company.companyBank }}</div>
              </div>
              <div class="card-type-flex">
                <h4 class="type-card-title">Name</h4>
                <div>{{ company.companyBankName }}</div>
              </div>
              <div class="card-type-flex">
                <h4 class="type-card-title">Address</h4>
                <div>{{ company.companyAccountNumber }}</div>
              </div>
              <div class="card-type-flex">
                <h4 class="type-card-title">Routing Number</h4>
                <div>{{ company.companyRoutingNumber }}</div>
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
              @input="limitNewPin"
              placeholder="Enter Pin"
            />
          </div>
          <div v-if="!user.pin" class="each-form-field">
            <label for="name-7" class="label">Confirm Pin</label
            ><input
              type="password"
              maxlength="6"
              class="profile-input w-input"
              v-model="confirmPin"
              @input="limitCPin"
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
              @input="limitPin"
              placeholder="Enter Pin"
            />
          </div>

          <div v-if="showMsg" class="msg" :class="{ error: !colour }">
            {{ msg }}
          </div>
          <div class="button-holder">
            <span v-if="!company" class="btn-custom w-button">Disabled</span>
            <span v-else @click="checkPin" class="btn-custom w-button"
              >Save</span
            >
            <span @click="cancelWithdrawal" class="btn-custom w-button"
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
export default {
  data() {
    return {
      company: "",
      amount: 0,
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

    beginDeposit() {
      if (this.account == "") {
        this.showMessage(`Please select a currency type to continue.`);
        return;
      }
      if (this.amount < 5) {
        this.showMessage(`You can't Transact below 5 ${this.account.currency}`);
        return;
      }
      if (
        this.receiverBank == "" ||
        this.receiverAddress == "" ||
        this.receiverName == ""
      ) {
        this.showMessage("Please fill in the necessary fields above");
        return;
      } else {
        this.confirmWithdrawal = true;
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
          this.deposit();
        }
      } else if (this.pin != this.user.pin) {
        this.showMessage("Incorrect pin, please try again");
        return;
      } else if (this.pin == this.user.pin) {
        this.setPin = false;
        this.deposit();
      }
    },

    async deposit() {
      const form = {
        amount: this.amount,
        receiverAccountNumber: this.company.companyAccountNumber,
        receiverBank: this.company.companyName,
        receiverAccountName: this.company.companyBankName,
        transactionType: "Deposit",
        username: this.user.username,
        userId: this.user.id,
        senderFullName: `${this.user.firstName} ${this.user.lastName}`,
        email: this.user.email,
        dateCreated: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        time: new Date().getTime(),
        newPin: this.newPin,
        accountId: this.account.id,
        currency: this.account.currency,
        symbol: this.symbol,
        confirmPin: this.confirmPin,
        pin: this.pin,
        status: false,
        setPin: this.setPin,
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
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    this.getCompany();
    this.getAccount();
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

.type-card.other.select {
  cursor: default;
}

.each-account {
  cursor: pointer;
}

.each-account.selected {
  border: 1px solid #e524c5;
  background: #fff6f5;
}
</style>
