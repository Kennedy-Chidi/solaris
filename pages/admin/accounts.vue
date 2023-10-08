<template>
  <div class="main-wrapper plans">
    <AdminNavigation />
    <div class="body-wrapper">
      <AdminTopHeader />
      <div class="content-wrapper">
        <div class="custom-card plan">
          <h4 class="page-title">INVESTMENT PLAN</h4>
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
                  <td>Banner</td>
                  <td>Name</td>
                  <td>Period</td>
                  <td>Duration</td>
                  <td>Percentage</td>
                  <td>Minimum</td>
                  <td>Maximum</td>
                  <td>Description</td>
                  <td>Tags</td>
                  <td>Status</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(plan, int) in plans" :key="plan._id">
                  <td>{{ int + 1 }}</td>
                  <td>
                    <img
                      :src="`${FILE_URL}/${plan.planBanner}`"
                      alt=""
                      class="banner"
                    />
                  </td>
                  <td>{{ plan.planName }}</td>
                  <td>{{ plan.planPeriod }}</td>
                  <td>{{ plan.planDuration }} Days</td>
                  <td>{{ plan.planPercentage }}</td>
                  <td>{{ formatMoney(plan.planMinimum) }}</td>
                  <td>{{ formatMoney(plan.planMaximum) }}</td>
                  <td>
                    {{ plan.planDescription }}
                  </td>
                  <td>
                    <div v-for="(tag, int) in plan.planTags" :key="int">
                      {{ tag }}
                    </div>
                  </td>
                  <td>
                    <div
                      @click="togglePlanStatus(plan._id, plan.planStatus)"
                      class="status"
                      :class="{ success: plan.planStatus }"
                      v-if="plan.planStatus"
                    >
                      Active
                    </div>
                    <div
                      @click="togglePlanStatus(plan._id, plan.planStatus)"
                      :class="{ success: plan.planStatus }"
                      class="status"
                      v-else
                    >
                      Draft
                    </div>
                  </td>
                  <td>
                    <div class="filter-box" @click="preparePlanEdit(plan)">
                      <img
                        src="/images/edit-gray.svg"
                        loading="lazy"
                        alt=""
                        class="filter-icon check action-icon"
                      />
                    </div>
                    <div class="filter-box" @click="deletePlan(plan._id)">
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
              <strong class="bold-text">Results</strong>: {{ planLength }}
              <strong class="bold-text-2">Page</strong> 1 of 12
            </div>
            <ul role="list" class="min-table-pagination">
              <li
                class="pagination-item"
                v-if="currentPage != 1 && planLength != 0"
              >
                <img
                  src="/images/cheveron-left.svg"
                  loading="lazy"
                  alt=""
                  class="pagination-img"
                />
              </li>
              <li
                v-for="(page, index) in pages()"
                :key="index"
                class="pagination-item"
              >
                <div>{{ index + 1 }}</div>
              </li>

              <li
                class="pagination-item"
                v-if="currentPage < pages().length && planLength != 0"
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
          <div class="table-actions">
            <div class="each-filter-option min">
              <div class="filter-page">Delete</div>
              <div class="filter-box">
                <img
                  src="/images/delete-gray.svg"
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
                  src="/images/bulk-gray.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon check"
                />
              </div>
            </div>
          </div>
          <div class="input-wrapper w-form">
            <div
              class="response"
              v-if="showResponse"
              :class="{ success: responseState }"
            >
              {{ response }}
            </div>
            <form class="input-form" action="#" @submit.prevent="">
              <div class="each-input">
                <label for="name" class="input-label"
                  >Plan Name <span class="important">*</span></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  maxlength="256"
                  name="Plan Name"
                  v-model="planName"
                />
              </div>
              <div class="each-input">
                <label for="name-3" class="input-label"
                  >Plan Period <span class="important">*</span></label
                >
                <h4
                  class="select-display"
                  @click="showPlanPeriodList = !showPlanPeriodList"
                >
                  {{ planPeriod }}
                </h4>
                <ul
                  role="list"
                  class="filter-list down"
                  v-if="showPlanPeriodList"
                >
                  <li
                    v-for="(plan, index) in planPeriodList"
                    :key="index"
                    class="filter-items"
                    @click="setPlanPeriod(plan)"
                  >
                    <div>{{ plan }}</div>
                  </li>
                </ul>
                <img
                  src="/images/caret-down-gray.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon middle"
                  @click="showPlanPeriodList = !showPlanPeriodList"
                />
              </div>
              <div class="each-input">
                <label for="duration" class="input-label"
                  >Plan Duration (In days)
                  <span class="important">*</span></label
                ><input
                  type="number"
                  class="plan-input w-input"
                  maxlength="256"
                  name="duration"
                  v-model="planDuration"
                />
              </div>
              <div class="each-input">
                <label for="duration-2" class="input-label"
                  >Percentage Profit <span class="important">*</span></label
                ><input
                  type="number"
                  class="plan-input w-input"
                  maxlength="256"
                  name="Profit"
                  v-model="planPercentage"
                />
              </div>
              <div class="each-input">
                <label for="duration-3" class="input-label"
                  >Minimum Deposit <span class="important">*</span></label
                ><input
                  type="number"
                  class="plan-input w-input"
                  maxlength="256"
                  name="Minimum"
                  v-model="planMinimum"
                />
              </div>
              <div class="each-input">
                <label for="duration-3" class="input-label"
                  >Maximum Deposit <span class="important">*</span></label
                ><input
                  type="number"
                  class="plan-input w-input"
                  maxlength="256"
                  name="duration-2"
                  v-model="planMaximum"
                />
              </div>
              <div class="each-input">
                <label for="name-2" class="input-label">Plan Banner</label>
                <label class="upload-btn" for="planBanner">
                  <img
                    src="/images/white-upload.svg"
                    loading="lazy"
                    alt=""
                    class="upload-icon"
                  />
                  <div>Upload Banner</div>
                  <input
                    type="file"
                    id="planBanner"
                    class="file-input"
                    @change="setPlanBanner"
                  />
                </label>
              </div>
              <div class="each-input">
                <label for="field" class="input-label">Plan Description</label
                ><textarea
                  placeholder="Plan Description"
                  maxlength="5000"
                  name="description"
                  v-model="planDescription"
                  class="plan-input w-input"
                ></textarea>
              </div>
              <div class="each-input">
                <ul v-if="planTags.length > 0" role="list" class="tags">
                  <li
                    v-for="(tag, int) in planTags"
                    :key="int"
                    class="each-tag"
                  >
                    <div>{{ tag }}</div>
                    <img
                      src="/images/delete-gray.svg"
                      alt=""
                      class="list-delete"
                      @click="removeListItem(int)"
                    />
                  </li>
                </ul>
                <label for="name-3" class="input-label">Plan Tags</label
                ><input
                  type="text"
                  class="plan-input w-input"
                  maxlength="256"
                  @keypress.enter.prevent="populateTags"
                  placeholder="Write and press Enter Key"
                  v-model="planTag"
                />
              </div>
              <div class="button-holder">
                <input
                  type="button"
                  value="Submit"
                  data-wait="Please wait..."
                  class="button w-button"
                  @click="processPlanData"
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
import ValidatePlan from "../../functions/planFunctions";

export default {
  components: { Instruction, AdminNavigation, AdminFooter, AdminTopHeader },
  data() {
    return {
      plans: [],
      planLength: "",
      limit: 4,
      pages: function () {
        let array = [];
        let x = Math.ceil(this.planLength / this.limit);
        for (let i = 0; i < x.length; i++) {
          array.push("i");
        }
        return array;
      },
      currentPage: 1,

      planName: "",
      planPeriod: "Select",
      planDuration: "",
      planPercentage: "",
      planMinimum: "",
      planMaximum: "",
      planBanner: "",
      planDescription: "",
      planTags: [],
      planTag: "",
      planPeriodList: ["Daily", "Weekly", "Fortnightly", "Monthly", "Yearly"],
      showPlanPeriodList: false,

      response: "",
      responseState: false,
      height: 0,
      showResponse: false,

      editState: false,
      editId: "",
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

    formatMoney(number) {
      return number.toLocaleString("en-US");
    },

    clearInputs() {
      this.editId = "";
      this.editState = false;
      this.planName = "";
      this.planPeriod = "";
      this.planDuration = "";
      this.planPercentage = "";
      this.planMinimum = "";
      this.planMaximum = "";
      this.planBanner = "";
      this.planDescription = "";
      this.planTags = "";
    },

    removeListItem(index) {
      this.planTags.splice(index, 1);
    },

    setPlanPeriod(item) {
      this.planPeriod = item;
      this.showPlanPeriodList = false;
    },

    populateTags() {
      this.planTags.push(this.planTag);
      this.planTag = "";
    },

    setPlanBanner(e) {
      this.planBanner = e.target.files[0];
    },

    preparePlanEdit(plan) {
      this.editId = plan._id;
      this.editState = true;
      this.planName = plan.planName;
      this.planPeriod = plan.planPeriod;
      this.planDuration = plan.planDuration;
      this.planPercentage = plan.planPercentage;
      this.planMinimum = plan.planMinimum;
      this.planMaximum = plan.planMaximum;
      this.planBanner = plan.planBanner;
      this.planDescription = plan.planDescription;
      this.planTags = plan.planTags;
    },

    processPlanData() {
      const result = new ValidatePlan(
        this.planName,
        this.planPeriod,
        this.planDuration,
        this.planPercentage,
        this.planMinimum,
        this.planMaximum
      )
        .validateName()
        .validatePeriod()
        .validateDuration()
        .validatePercentage()
        .validateMinimum()
        .validateMaximum();

      const message = result.checkErrors();
      if (message != "success") {
        this.showResponseMsg(message, false);
      } else {
        const formData = new FormData();
        formData.append("planName", this.planName);
        formData.append("planPeriod", this.planPeriod);
        formData.append("planDuration", this.planDuration);
        formData.append("planPercentage", this.planPercentage);
        formData.append("planMinimum", this.planMinimum);
        formData.append("planMaximum", this.planMaximum);
        formData.append("planBanner", this.planBanner);
        formData.append("planDescription", this.planDescription);
        formData.append("planTags", this.planTags);

        if (this.editState) {
          this.updatePlan(formData);
        } else {
          this.createPlan(formData);
        }
      }
    },

    async togglePlanStatus(id, status) {
      const data = {
        planStatus: !status,
      };
      try {
        const result = await this.$axios.patch(
          `/plans/toggle-status/${id}`,
          data
        );
        this.getPlans();
      } catch (err) {
        console.log(err.response);
      }
    },

    async getPlans() {
      try {
        const result = await this.$axios.get("/plans");
        this.plans = result.data.data;
        this.planLength = result.data.length;
      } catch (err) {
        console.log(err.response);
      }
    },

    async updatePlan(form) {
      try {
        const result = await this.$axios.patch(`/plans/${this.editId}`, form);
        this.clearInputs();
        this.getPlans();
      } catch (err) {
        console.log(err.response);
      }
    },

    async createPlan(form) {
      try {
        await this.$axios.post("/plans", form);
        this.showResponseMsg("Plan created successfully", true);
        this.getPlans();
        this.clearInputs();
      } catch (err) {
        this.showResponseMsg(err.response.data, false);
      }
    },

    async deletePlan(id) {
      try {
        await this.$axios.delete(`/plans/${id}`);
        this.getPlans();
      } catch (err) {
        this.showResponseMsg(err.response.data, false);
      }
    },
  },

  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },

  mounted() {
    this.getPlans();
  },
};
</script>

<style></style>
