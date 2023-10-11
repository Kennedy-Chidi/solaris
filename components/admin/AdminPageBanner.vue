<template>
  <div>
    <admin-confirmation
      :msg="confirmMessage"
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
            <td>Banner</td>
            <td>Category</td>
            <td>Intro</td>
            <td>Title</td>
            <td>Subtitle</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, int) in banner" :key="item._id">
            <td>{{ int + 1 }}</td>
            <td>
              <img
                :src="`${FILE_URL}/${item.bannerImage}`"
                alt=""
                class="banner"
              />
            </td>
            <td>{{ item.bannerCategory }}</td>
            <td>{{ item.bannerIntro }}</td>
            <td>{{ item.bannerTitle }}</td>
            <td>
              {{ item.bannerSubtitle }}
            </td>

            <td>
              <div
                @click="toggleBannerStatus(item._id, item.status)"
                class="status"
                :class="{ success: item.status }"
                v-if="item.status"
              >
                Active
              </div>
              <div
                @click="toggleBannerStatus(item._id, item.status)"
                :class="{ success: item.status }"
                class="status"
                v-else
              >
                Draft
              </div>
            </td>
            <td>
              <div class="filter-box" @click="prepareBannerEdit(item)">
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
                    'Are you sure you want to delete this Banner',
                    item.id
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
        <div class="each-input">
          <label for="name-3" class="input-label"
            >Banner Categories <span class="important">*</span></label
          >
          <h4
            class="select-display"
            @click="showBannerCategoryList = !showBannerCategoryList"
          >
            {{ bannerCategory }}
          </h4>
          <ul role="list" class="filter-list" v-if="showBannerCategoryList">
            <li
              v-for="(banner, index) in bannerCategories"
              :key="index"
              class="filter-items"
              @click="setBannerCategory(banner)"
            >
              <div>{{ banner }}</div>
            </li>
          </ul>
          <img
            src="/images/caret-down-gray.svg"
            loading="lazy"
            alt=""
            class="filter-icon middle"
            @click="showBannerCategoryList = !showBannerCategoryList"
          />
        </div>
        <div class="each-input">
          <label for="name-4" class="input-label"
            >Banner Intro<span class="important">*</span></label
          ><input
            type="text"
            class="plan-input w-input"
            v-model="bannerIntro"
            placeholder="Enter Banner Title"
          />
        </div>
        <div class="each-input">
          <label for="name-4" class="input-label"
            >Banner Title<span class="important">*</span></label
          ><input
            type="text"
            class="plan-input w-input"
            v-model="bannerTitle"
            placeholder="Enter Banner Title"
          />
        </div>
        <div class="each-input">
          <label for="password-3" class="input-label"
            >Banner Subtitle<span class="important">*</span></label
          ><input
            type="text"
            class="plan-input w-input"
            v-model="bannerSubtitle"
            placeholder="bannerSubtitle"
          />
        </div>
        <div class="button-holder">
          <label for="banner" class="upload-btn banner">
            <img
              src="/images/white-upload.svg"
              loading="lazy"
              alt=""
              class="upload-icon"
            />
            <input
              type="file"
              class="file-input"
              id="banner"
              @change="setBanner"
            />
            <div>Upload Banner</div>
          </label>
          <input
            type="button"
            value="Add Banner"
            @click="processBanner"
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
export default {
  data() {
    return {
      bannerCategories: [
        "Home",
        "About",
        "Services",
        "FAQ",
        "Contact",
        "Banking",
        "Terms",
      ],
      showBannerCategoryList: false,
      bannerCategory: "Select Category",
      bannerIntro: "",
      bannerTitle: "",
      bannerSubtitle: "",
      bannerImage: "",

      banner: [],

      editingState: false,
      editingId: "",

      confirmMessage: "",
      confirmStatus: true,
      deleteId: "",
    };
  },
  methods: {
    setBannerCategory(category) {
      this.bannerCategory = category;
      this.showBannerCategoryList = false;
    },

    setBanner(event) {
      this.bannerImage = event.target.files[0];
    },

    clearInputs() {
      this.editingId = "";
      this.editingState = false;
      this.bannerCategory = "Select Category";
      this.bannerIntro = "";
      this.bannerTitle = "";
      this.bannerSubtitle = "";
      this.bannerImage = "";
    },

    toggleBannerStatus(id, status) {
      this.editingId = id;
      const data = {
        status: !status,
      };
      this.updateBanner(data);
    },

    showConfirmation(msg, id) {
      this.deleteId = id;
      this.confirmMessage = msg;
      this.confirmStatus = false;
    },

    returnConfirmation(data) {
      if (data == "yes") {
        this.deleteBanner(this.deleteId);
      }
      this.confirmStatus = true;
    },

    prepareBannerEdit(banner) {
      this.editingId = banner._id;
      this.editingState = true;
      this.bannerImage = banner.bannerImage;
      this.bannerCategory = banner.bannerCategory;
      this.bannerTitle = banner.bannerTitle;
      this.bannerSubtitle = banner.bannerSubtitle;
      this.bannerIntro = banner.bannerIntro;
    },

    processBanner() {
      const form = new FormData();
      form.append("bannerCategory", this.bannerCategory);
      form.append("bannerIntro", this.bannerIntro);
      form.append("bannerTitle", this.bannerTitle);
      form.append("bannerSubtitle", this.bannerSubtitle);
      form.append("bannerImage", this.bannerImage);

      if (this.editingState) {
        this.updateBanner(form);
      } else {
        this.createBanner(form);
      }
    },

    async updateBanner(form) {
      try {
        const result = await this.$axios.patch(
          `/banners/?id=${this.editingId}`,
          form
        );
        this.banner = result.data.data;
        this.clearInputs();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async createBanner(form) {
      try {
        const result = await this.$axios.post("/banners", form);
        // this.banner = result.data.data;
        this.getBanner();
        this.clearInputs();
      } catch (err) {
        console.log(err);
        // console.log(err.response.data.message);
      }
    },

    async getBanner() {
      try {
        const result = await this.$axios.get(`/banners`);
        this.banner = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getBannerCategories() {
      try {
        const result = await this.$axios.get("/company");
        // if (result.data.data[0].bannerCategories) {
        //   this.bannerCategories = result.data.data[0].bannerCategories;
        // }
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async deleteBanner(id) {
      try {
        await this.$axios.delete(`/banners/?id=${id}`);
        this.getBanner();
        this.clearInputs();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  mounted() {
    this.getBannerCategories();
    this.getBanner();
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
};
</script>

<style></style>
