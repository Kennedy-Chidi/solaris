<template>
  <div class="main-wrapper crypto">
    <admin-confirmation
      :msg="confirmMessage"
      :state="confirmStatus"
      @confirm="returnConfirmation"
    />
    <AdminNavigation />
    <div class="body-wrapper">
      <AdminTopHeader />
      <div class="content-wrapper">
        <div class="custom-card plan">
          <h4 class="page-title">WALLET ADDRESS</h4>
          <div class="table-filters">
            <div class="each-filter-option">
              <div class="filter-page">Filter</div>
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg"
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
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg"
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
                  src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f6007a954c77c293682c_check-mark-icon%201.svg"
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
                  <td>Name</td>
                  <td>Address</td>
                  <td>Description</td>

                  <td>Status</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(currency, int) in currencies" :key="currency._id">
                  <td>{{ int + 1 }}</td>
                  <td>
                    <img
                      :src="`${FILE_URL}/${currency.symbol}`"
                      alt=""
                      class="banner"
                    />
                  </td>
                  <td>{{ currency.name }}</td>
                  <td>{{ currency.address }}</td>
                  <td>
                    {{ currency.description }}
                  </td>

                  <td>
                    <div
                      @click="
                        toggleCurrencyStatus(currency._id, currency.status)
                      "
                      class="status"
                      :class="{ success: currency.status }"
                      v-if="currency.status"
                    >
                      Active
                    </div>
                    <div
                      @click="
                        toggleCurrencyStatus(currency._id, currency.status)
                      "
                      :class="{ success: currency.status }"
                      class="status"
                      v-else
                    >
                      Draft
                    </div>
                  </td>
                  <td>
                    <div
                      class="filter-box"
                      @click="prepareCurrencyEdit(currency)"
                    >
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
                        showConfirmation(
                          'Are you sure you want to delete this currency',
                          currency._id
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
              <strong class="bold-text">Results</strong>: 10
              <strong class="bold-text-2">Page</strong> 1 of 12
            </div>
            <ul role="list" class="min-table-pagination">
              <li class="pagination-item">
                <img
                  src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982bc1672608295369ae_arrow-thin-chevron-left-icon.svg"
                  loading="lazy"
                  alt=""
                  class="pagination-img"
                />
              </li>
              <li class="pagination-item"><div>1</div></li>
              <li class="pagination-item active"><div>2</div></li>
              <li class="pagination-item"><div>3</div></li>
              <li class="pagination-item">
                <img
                  src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982b466e626df4567c6d_arrow-thin-chevron-right-icon.svg"
                  loading="lazy"
                  alt=""
                  class="pagination-img"
                />
              </li>
            </ul>
          </div>
          <div class="table-actions">
            <div class="each-filter-option min">
              <div class="filter-page">Delete</div>
              <div class="filter-box">
                <img
                  src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1da3b461fa0e7e3c7163c_trash-bin-icon%201.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon check"
                />
              </div>
            </div>
            <div class="each-filter-option min">
              <div class="filter-page">Bulk</div>
              <div class="filter-box">
                <img
                  src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1dbeaad117e09c9d6ba7c_select-all-icon%201.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon check"
                />
              </div>
            </div>
          </div>
          <div class="input-wrapper w-form">
            <form action="#" class="input-form">
              <div class="each-input">
                <label for="name-4" class="input-label"
                  >Currency Symbol <span class="important">*</span></label
                >
                <label for="currency" class="upload-btn">
                  <img
                    src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f449ac84aa271eca71d2_upload-outbox-line-icon%201.svg"
                    loading="lazy"
                    alt=""
                    class="upload-icon"
                  />
                  <div>Upload Symbol</div>
                  <input
                    type="file"
                    id="currency"
                    class="file-input"
                    @change="setSymbol"
                  />
                </label>
              </div>
              <div class="each-input">
                <label for="name-4" class="input-label"
                  >Currency Name<span class="important">*</span></label
                ><input type="text" class="plan-input w-input" v-model="name" />
              </div>
              <div class="each-input">
                <label for="email-3" class="input-label"
                  >Currency Address<span class="important">*</span></label
                ><input
                  type="email"
                  class="plan-input w-input"
                  v-model="address"
                />
              </div>
              <div class="each-input auto">
                <label for="field-2" class="input-label"
                  >Currency Description</label
                ><textarea
                  v-model="description"
                  class="plan-input w-input"
                ></textarea>
              </div>
              <div class="button-holder">
                <input
                  type="button"
                  value="Add Account"
                  @click="processCurrencyData"
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
      currencies: [],
      symbol: "",
      name: "",
      description: "",
      address: "",

      editingState: false,
      editingId: "",

      confirmMessage: "",
      confirmStatus: "",
      deleteId: "",
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

    setSymbol(e) {
      this.symbol = e.target.files[0];
    },

    clearInputs() {
      this.symbol = "";
      this.name = "";
      this.description = "";
      this.address = "";
      this.editingId = "";
      this.editingState = false;
    },

    showConfirmation(msg, id) {
      this.deleteId = id;
      this.confirmMessage = msg;
      this.confirmStatus = false;
    },

    returnConfirmation(data) {
      this.confirmStatus = !this.confirmStatus;
      if (data == "yes") {
        this.deleteCurrency(this.deleteId);
      }
    },

    prepareCurrencyEdit(currency) {
      this.editingId = currency._id;
      this.editingState = true;
      this.symbol = currency.symbol;
      this.name = currency.name;
      this.address = currency.address;
      this.description = currency.description;
    },

    processCurrencyData() {
      const form = new FormData();
      form.append("symbol", this.symbol);
      form.append("name", this.name);
      form.append("address", this.address);
      form.append("description", this.description);

      if (this.editingState) {
        this.updateCurrency(form);
      } else {
        this.createCurrency(form);
      }
    },

    toggleCurrencyStatus(id, status) {
      this.editingId = id;
      const data = new FormData();
      data.append("status", !status);

      this.updateCurrency(data);
    },

    async updateCurrency(form) {
      try {
        await this.$axios.patch(`/currency/${this.editingId}`, form);
        this.clearInputs();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async createCurrency(form) {
      try {
        await this.$axios.post(`/currency`, form);
        this.showResponseMsg("The currency was created successfully", true);
        this.currencies = result.data.data;
        this.clearInputs();
      } catch (err) {
        this.showResponseMsg(err.response.data.message, false);
      }
    },

    async getCurrencies() {
      try {
        const result = await this.$axios.get(`/currency`);
        this.currencies = result.data.data;
      } catch (err) {
        console.log(err.response.data);
      }
    },

    async deleteCurrency(id) {
      try {
        await this.$axios.delete(`/currency/${id}`);
        this.getCurrencies();
        this.deleteId = "";
      } catch (err) {
        this.showResponseMsg(err.response.data.message, false);
      }
    },
  },

  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },

  mounted() {
    this.getCurrencies();
  },
  components: { AdminFooter, AdminNavigation, AdminTopHeader, Instruction },
};
</script>

<style></style>
