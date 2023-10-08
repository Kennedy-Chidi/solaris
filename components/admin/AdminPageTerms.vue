<template>
  <div>
    <admin-confirmation
      :msg="confirmMsg"
      :state="confirmStatus"
      @confirm="returnConfirmation"
    />
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
            <td>Heading</td>
            <td>Body</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(term, int) in terms" :key="term._id">
            <td>{{ int + 1 }}</td>

            <td>{{ term.heading }}</td>
            <td><div v-html="term.body.slice(0, 200)"></div></td>
            <td>
              <div
                @click="toggleTermsStatus(term._id, term.status)"
                class="status"
                :class="{ success: term.status }"
                v-if="term.status"
              >
                Active
              </div>
              <div
                @click="toggleTermsStatus(term._id, term.status)"
                :class="{ success: term.status }"
                class="status"
                v-else
              >
                Draft
              </div>
            </td>
            <td>
              <div class="filter-box" @click="prepareTermEdit(term)">
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
                    'Are you sure you want to delete this Term',
                    term._id
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
      <div class="input-form">
        <div class="each-input full">
          <label for="name-4" class="input-label"
            >Terms Heading<span class="important">*</span></label
          ><input
            type="text"
            class="plan-input w-input"
            v-model="heading"
            placeholder="Terms Heading"
          />
        </div>
        <div class="each-input full">
          <label for="field-4" class="input-label">Terms Description</label
          ><textarea
            placeholder="Terms Description"
            maxlength="5000"
            v-model="body"
            class="plan-input w-input"
          ></textarea>
        </div>
        <div class="button-holder">
          <input
            type="button"
            value="Add Terms"
            @click="processTerms"
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
</template>

<script>
import AdminConfirmation from "./AdminConfirmation.vue";
export default {
  components: { AdminConfirmation },
  data() {
    return {
      heading: "",
      body: "",

      terms: [],

      editingId: "",
      editingState: false,

      confirmMsg: "",
      confirmStatus: true,
    };
  },
  methods: {
    clearInput() {
      this.heading = "";
      this.body = "";
      this.editingState = false;
      this.editingId = "";
    },

    showConfirmation(msg, id) {
      this.deleteId = id;
      this.confirmMsg = msg;
      this.confirmStatus = false;
    },

    returnConfirmation(data) {
      if (data == "yes") {
        this.deleteTerms();
      }
      this.confirmStatus = true;
    },

    toggleTermsStatus(id, status) {
      this.editingId = id;
      this.editingState = true;
      const form = {
        status: !status,
      };

      this.updateTerms(form);
    },

    prepareTermEdit(term) {
      this.heading = term.heading;
      this.body = term.body;
      this.editingId = term._id;
      this.editingState = true;
    },

    processTerms() {
      const form = {
        heading: this.heading,
        body: this.body,
      };

      if (this.editingState) {
        this.updateTerms(form);
      } else {
        this.createTerms(form);
      }
    },

    async updateTerms(form) {
      try {
        await this.$axios.patch(`/terms/${this.editingId}`, form);
        this.getTerms();
        this.clearInput();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async createTerms(form) {
      try {
        await this.$axios.post(`/terms`, form);
        this.getTerms();
        this.clearInput();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getTerms() {
      try {
        const result = await this.$axios.get("/terms");
        this.terms = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async deleteTerms() {
      try {
        await this.$axios.delete(`/terms/${this.deleteId}`);
        this.getTerms();
        this.deleteId = "";
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  mounted() {
    this.getTerms();
  },
};
</script>

<style></style>
