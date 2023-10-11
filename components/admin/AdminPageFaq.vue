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
            <td>Category</td>
            <td>Question</td>
            <td>Answer</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(faq, int) in faqs" :key="faq.id">
            <td>{{ int + 1 }}</td>

            <td>{{ faq.category }}</td>
            <td>{{ faq.question }}</td>
            <td>{{ faq.answer }}</td>
            <td>
              <div
                @click="toggleFAQStatus(faq.id, faq.status)"
                class="status"
                :class="{ success: faq.status }"
                v-if="faq.status"
              >
                Active
              </div>
              <div
                @click="toggleFAQStatus(faq.id, faq.status)"
                :class="{ success: faq.status }"
                class="status"
                v-else
              >
                Draft
              </div>
            </td>
            <td>
              <div class="filter-box" @click="prepareFAQEdit(faq)">
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
                    'Are you sure you want to delete this Question',
                    faq.id
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
        <div class="each-input half">
          <label for="name-4" class="input-label"
            >FAQ Category<span class="important">*</span></label
          ><input
            type="text"
            class="plan-input w-input"
            v-model="category"
            placeholder="Enter Category"
          />
        </div>

        <div class="each-input half">
          <label for="name-4" class="input-label"
            >FAQ Question<span class="important">*</span></label
          ><input
            type="text"
            class="plan-input w-input"
            v-model="question"
            placeholder="Enter Question"
          />
        </div>

        <div class="each-input full">
          <label for="password-3" class="input-label"
            >FAQ Answer<span class="important">*</span></label
          ><input
            type="text"
            class="plan-input w-input"
            v-model="answer"
            placeholder=""
          />
        </div>
        <div class="button-holder">
          <input
            type="button"
            value="Add FAQ"
            @click="processFAQ"
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
      category: "",
      question: "",
      answer: "",

      faqs: [],

      confirmMsg: "",
      confirmStatus: true,

      editingId: "",
      editingState: false,

      deleteId: "",
    };
  },
  methods: {
    clearInput() {
      this.answer = "";
      this.question = "";
      this.category = "";
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
        this.deleteFAQ();
      }
      this.confirmStatus = true;
    },

    toggleFAQStatus(id, status) {
      this.editingId = id;
      this.editingState = true;
      const form = {
        status: !status,
      };

      this.updateFAQ(form);
    },

    prepareFAQEdit(faq) {
      this.answer = faq.answer;
      this.question = faq.question;
      this.category = faq.category;
      this.editingId = faq.id;
      this.editingState = true;
    },

    processFAQ() {
      const form = {
        category: this.category,
        question: this.question,
        answer: this.answer,
      };

      if (this.editingState) {
        this.updateFAQ(form);
      } else {
        this.createFAQ(form);
      }
    },

    async updateFAQ(form) {
      try {
        await this.$axios.patch(`/faqs/?id=${this.editingId}`, form);
        this.getFAQ();
        this.clearInput();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async createFAQ(form) {
      try {
        await this.$axios.post(`/faqs`, form);
        this.getFAQ();
        this.clearInput();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getFAQ() {
      try {
        const result = await this.$axios.get("/faqs");
        this.faqs = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async deleteFAQ() {
      try {
        await this.$axios.delete(`/faqs/?id=${this.deleteId}`);
        this.getFAQ();
        this.deleteId = "";
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  mounted() {
    this.getFAQ();
  },
};
</script>

<style></style>
