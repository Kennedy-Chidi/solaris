<template>
  <div class="main-wrapper user-details">
    <AdminNavigation />
    <div class="body-wrapper">
      <AdminTopHeader />

      <div class="content-wrapper">
        <div class="custom-card plan">
          <h4 class="page-title">Users Profile</h4>
          <div class="div-block pix">
            <img
              v-if="user"
              :src="`${FILE_URL}/${user.profilePicture}`"
              alt=""
              class="user-account"
            />
            <img v-else src="/images/user.svg" alt="" class="user-account" />
          </div>

          <div class="input-wrapper w-form">
            <h3 class="user-info-title">Personal Info</h3>
            <div action="#" class="input-form">
              <div class="each-input">
                <label for="name-4" class="input-label"
                  >First Name<span class="important">*</span></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  v-model="user.firstName"
                  name="Name"
                />
              </div>
              <div class="each-input">
                <label for="name-4" class="input-label"
                  >Middle Name<span class="important">*</span></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  name="Name"
                  v-model="user.middleName"
                />
              </div>
              <div class="each-input">
                <label for="name-4" class="input-label"
                  >Last Name<span class="important">*</span></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  name="Name"
                  v-model="user.lastName"
                />
              </div>
              <div class="each-input">
                <label for="email-4" class="input-label"
                  >Username <span class="important">*</span></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  name="username"
                  v-model="user.username"
                />
              </div>
            </div>
          </div>

          <!--=================================PASSWORD INFO====================================-->
          <div class="input-wrapper w-form">
            <h3 class="user-info-title">Reset Password</h3>
            <div class="input-form">
              <div class="each-input">
                <label for="duration-3" class="input-label"
                  >Old Password <span class="important">*</span></label
                ><input
                  type="email"
                  class="plan-input w-input"
                  maxlength="256"
                  v-model="oldPassword"
                />
              </div>
              <div class="each-input">
                <label for="password-3" class="input-label"
                  >Password<span class="important">*</span></label
                ><input
                  type="password"
                  class="plan-input w-input"
                  maxlength="256"
                  v-model="password"
                />
              </div>
              <div class="each-input">
                <label for="password-3" class="input-label"
                  >Confirm Password<span class="important">*</span></label
                ><input
                  type="password"
                  class="plan-input w-input"
                  maxlength="256"
                  v-model="cPassword"
                />
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
                  value="Edit User"
                  class="button w-button"
                  @click="processUserData"
                />
              </div>
            </div>
          </div>
          <!--==============================X==KIN INFO==X=================================-->
        </div>
        <Instruction />
      </div>
      <AdminFooter />
    </div>
  </div>
</template>

<script>
import AdminFooter from "../../components/admin/AdminFooter.vue";
import AdminNavigation from "../../components/admin/AdminNavigation.vue";
import AdminTopHeader from "../../components/admin/AdminTopHeader.vue";
import Instruction from "../../components/admin/Instruction.vue";

export default {
  data() {
    return {
      email: "",
      oldPassword: "",
      password: "",
      cPassword: "",

      response: "",
      responseState: false,
      showResponse: false,

      editState: false,
      editId: "",
      transactionTypes: ["Deposit", "Transfer", "Withdrawal"],
      transction: "Select Transaction",
      balance: "",
      showPlanList: false,

      currencies: [],
      currency: "Choose Currency",
      showCurrencyList: false,
      account: "",

      showEditButton: false,
      editAccountState: false,
      editIndex: "",
    };
  },
  methods: {
    showResponseMsg(msg, status) {
      this.response = msg;
      this.responseState = status;
      this.showResponse = true;
      setTimeout(() => {
        this.response = "";
        this.showResponse = false;
      }, 6000);
    },

    formatDate(data) {
      console.log(data);
      const date = new Date(data);
      const options = {
        weekday: "short",
        day: "numeric",
        month: "long",
      };

      const formatter = new Intl.DateTimeFormat("en-US", options);
      return formatter.format(date);
    },

    clearInputs() {
      this.editAccountState = false;
      this.editIndex = "";
    },

    processUserData() {
      const message = "success";
      if (!message == "success") {
      } else {
        const form = {
          oldPassword: this.oldPassword,
          password: this.password,
          cPassword: this.cPassword,
          username: this.user.username,
        };

        this.updateUser(form);
      }
    },

    async updateUser(form) {
      try {
        const result = await this.$axios.patch(`/users/update-password`, form);
        console.log(result);
        this.showResponseMsg(result.data, true);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, false);
      }
    },
  },

  computed: {
    countryArray() {
      return this.$store.state.registrationDetails.countries;
    },

    user() {
      return this.$store.state.auth.user;
    },

    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
  components: { AdminNavigation, AdminTopHeader, AdminFooter, Instruction },
};
</script>

<style>
.div-block.pix {
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.pix img {
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
}
.flex-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  background: whitesmoke;
  position: relative;
  border-radius: 5px;
  align-items: center;
  padding: 1px 10px;
  margin-bottom: 10px;
}

.flex-wrap label {
  font-size: 15px;
  color: #e74d8a;
}

.flex-wrap .delete {
  position: absolute;
  right: 10px;
  top: 10px;
}

.flex-wrap .delete {
  position: absolute;
  right: 30px;
  top: 10px;
}
</style>
