<template>
  <div class="dashboard-card-wrap">
    <div class="personal-form w-form">
      <form class="form-flex">
        <div v-if="user" class="each-form-field">
          <label for="name-4" class="label">Email</label
          ><input type="email" class="w-input" :placeholder="user.email" />
        </div>
        <div class="each-form-field">
          <label for="name-2" class="label">Password</label
          ><input
            type="password"
            class="profile-input w-input"
            placeholder="Enter Old Password"
            v-model="oldPassword"
          />
        </div>
        <div class="each-form-field">
          <label for="name-2" class="label">New Password</label
          ><input
            type="password"
            class="profile-input w-input"
            v-model="password"
            placeholder="Enter New Password"
          />
        </div>
        <div class="each-form-field">
          <label for="name-4" class="label">Confirm Password</label
          ><input
            type="password"
            class="profile-input w-input"
            v-model="cPassword"
            placeholder="Confirm Password"
          />
        </div>
        <div v-if="showMsg" class="msg" :class="{ error: !colour }">
          {{ msg }}
        </div>
        <div class="button-holder">
          <span @click="processPassword" class="btn-custom w-button"
            >Change Password</span
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountIndex: 0,
      oldPassword: "",
      password: "",
      cPassword: "",
      account: "",

      code: "",
      cCode: "",

      msg: "",
      colour: false,
      showMsg: false,
      alertBoxStatus: false,
      alertBoxMsg: "",
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

    async logout() {
      await this.$auth.logout(); // this method will logout the user and make token to false on the local storage of the user browser
    },

    showAlertBox() {
      this.alertBoxStatus = true;
    },

    clearInputs() {
      this.password = "";
      this.oldPassword = "";
      this.cPassword = "";
    },

    async processCode() {
      if (this.code.trim() == "" || this.code.trim().length < 6) {
        this.showMessage("Pin should be at least 6 digits long");
        return;
      }
      if (this.code != this.cCode) {
        this.showMessage("Sorry! Pins do not match, try again");
        return;
      }

      const form = {
        username: this.user.username,
        code: this.code,
        cCode: this.cCode,
      };

      try {
        await this.$axios.patch(`/users/${this.user._id}`, form);
        this.color = false;
        this.showMessage("Your code wass changed successfully");
      } catch (err) {
        this.showMessage(err.response.data.message);
      }
    },

    async processPassword() {
      if (
        this.password == "" ||
        this.oldPassword == "" ||
        this.cPassword == ""
      ) {
        this.showMessage("Please fill in the password fields");
      } else {
        if (this.password != this.cPassword) {
          this.showMessage("Sorry! Passwords do not match, try again");
        } else {
          const form = {
            oldPassword: this.oldPassword,
            password: this.password,
            cPassword: this.cPassword,
            username: this.user.username,
          };

          try {
            const result = await this.$axios.patch(
              `/users/update-password`,
              form
            );
            this.colour = true;
            this.showMessage("Your password was changed successfully");
            this.clearInputs();
          } catch (err) {
            this.showMessage(err.response.data.message);
          }
        }
      }
    },
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style></style>
