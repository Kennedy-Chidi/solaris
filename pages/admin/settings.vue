<template>
  <div class="main-wrapper settings">
    <!-- <admin-confirmation :msg="confirmMsg" :state="confirmState" /> -->
    <admin-navigation />
    <div class="body-wrapper">
      <admin-top-header />
      <div class="content-wrapper">
        <div class="custom-card plan">
          <div class="input-wrapper w-form">
            <form @submit.prevent="" action="#" class="input-form">
              <div class="each-input half down">
                <label for="email-3" class="input-label"
                  >Company Name<span class="important">*</span></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  maxlength="256"
                  v-model="companyName"
                  placeholder="Enter Company Name"
                />
              </div>

              <div class="each-input half down">
                <label for="email-3" class="input-label"
                  >System Email<span class="important">*</span></label
                ><input
                  type="email"
                  class="plan-input w-input"
                  v-model="systemEmail"
                  placeholder="Enter system Email"
                />
              </div>

              <div class="each-input half down">
                <label for="email-3" class="input-label"
                  >Company's Bank<span class="important">*</span></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  v-model="companyBankName"
                  placeholder="Enter company bank"
                />
              </div>

              <div class="each-input half down">
                <label for="email-3" class="input-label"
                  >Company's Bank Account Name<span class="important"
                    >*</span
                  ></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  v-model="companyBank"
                  placeholder="Enter Account Name"
                />
              </div>

              <div class="each-input half down">
                <label for="email-3" class="input-label"
                  >Company's Bank Account<span class="important">*</span></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  v-model="companyAccountNumber"
                  placeholder="Enter Account Number"
                />
              </div>

              <div class="each-input half down">
                <label for="email-3" class="input-label"
                  >Company's Routing Number<span class="important"
                    >*</span
                  ></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  v-model="companyRoutingNumber"
                  placeholder="Enter Routing Number"
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
                  value="Save"
                  @click="processData"
                  class="button w-button"
                /><input
                  type="submit"
                  value="Cancel"
                  data-wait="Please wait..."
                  class="button w-button"
                />
              </div>
            </form>
          </div>
        </div>
        <instruction />
      </div>
      <div class="content-wrapper"></div>
      <admin-footer />
    </div>
  </div>
</template>

<script>
import AdminConfirmation from "../../components/admin/AdminConfirmation.vue";
import Instruction from "../../components/admin/Instruction.vue";
export default {
  data() {
    return {
      company: "",
      companyName: "",
      companyBank: "",
      companyAccountNumber: "",
      systemEmail: "",
      companyBankName: "",
      companyRoutingNumber: "",

      editTempState: false,
      editingId: "",

      editingTempState: false,
      editingTempIndex: "",

      response: "",
      responseState: false,
      showResponse: false,

      editingState: false,
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

    clearInputs() {
      this.editingTempIndex = "";
      this.editingTempState = false;
      this.companyBank = "";
      this.routingNumber = "";
      this.accountName = "";
      this.accountNumber = "";
      this.companyName = "";
    },

    populateData(company) {
      this.editingId = company.id;
      this.companyBank = company.companyBank;
      this.companyAccountNumber = company.companyAccountNumber;
      this.companyBankName = company.companyBankName;
      this.companyName = company.companyName;
      this.systemEmail = company.email;
    },

    processData() {
      const form = {
        companyName: this.companyName,
        email: this.systemEmail,
        companyBank: this.companyBank,
        companyAccountNumber: this.companyAccountNumber,
        companyBankName: this.companyBankName,
        companyRoutingNumber: this.companyRoutingNumber,
      };

      this.updateCompany(form);
    },

    async updateCompany(form) {
      try {
        const result = await this.$axios.patch(
          `/company/?id=${this.editingId}`,
          form
        );
        // this.showResponseMsg("Data updated successfully.", true);
        console.log(result.data);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async getCompany() {
      try {
        const result = await this.$axios.get("/company");
        this.populateData(result.data);
      } catch (err) {
        this.showResponseMsg(err, true);
      }
    },
  },

  mounted() {
    this.getCompany();
  },

  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },

  components: { AdminConfirmation, Instruction },
};
</script>

<style>
.social-list {
  position: relative;
}

.social-list img {
  max-width: 25px;
}

.social-list .action-icon {
  position: absolute;
  top: 5px;
  cursor: pointer;
}
.social-list .delete {
  right: 10px;
}

.social-list .edit {
  right: 30px;
}

.contact-icons {
  width: 15px;
}
</style>
