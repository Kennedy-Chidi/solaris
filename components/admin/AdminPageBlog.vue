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
            <td>Title</td>
            <td>Subtitle</td>
            <td>Author</td>
            <td>Date</td>
            <td>content</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, int) in blogs" :key="item.id">
            <td>{{ int + 1 }}</td>
            <td>
              <img :src="`${FILE_URL}/${item.banner}`" alt="" class="banner" />
            </td>
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td>
              {{ item.subtitle }}
            </td>
            <td>{{ item.author }}</td>
            <td>{{ formatDate(item.time) }}</td>
            <td>{{ item.content.slice(0, 100) }}</td>
            <td>
              <div
                @click="toggleBlogStatus(item.id, item.status)"
                class="status"
                :class="{ success: item.status }"
                v-if="item.status"
              >
                Active
              </div>
              <div
                @click="toggleBlogStatus(item.id, item.status)"
                :class="{ success: item.status }"
                class="status"
                v-else
              >
                Draft
              </div>
            </td>
            <td>
              <div class="filter-box" @click="prepareBlog(item)">
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
            >Blog Categories <span class="important">*</span></label
          >
          <h4
            class="select-display"
            @click="showBlogCategoryList = !showBlogCategoryList"
          >
            {{ category }}
          </h4>
          <ul role="list" class="filter-list" v-if="showBlogCategoryList">
            <li
              v-for="(banner, index) in categories"
              :key="index"
              class="filter-items"
              @click="setBlogCategory(banner)"
            >
              <div>{{ banner }}</div>
            </li>
          </ul>
          <img
            src="/images/caret-down-gray.svg"
            loading="lazy"
            alt=""
            class="filter-icon middle"
            @click="showBlogCategoryList = !showBlogCategoryList"
          />
        </div>

        <div class="each-input">
          <label for="name-4" class="input-label"
            >Blog Title<span class="important">*</span></label
          ><input
            type="text"
            class="plan-input w-input"
            v-model="title"
            placeholder="Enter Banner Title"
          />
        </div>
        <div class="each-input">
          <label for="password-3" class="input-label"
            >Blog Subtitle<span class="important">*</span></label
          ><input type="text" class="plan-input w-input" v-model="subtitle" />
        </div>
        <div class="each-input">
          <label for="password-3" class="input-label"
            >Blog Author<span class="important">*</span></label
          ><input type="text" class="plan-input w-input" v-model="author" />
        </div>
        <div class="each-input">
          <label for="password-3" class="input-label"
            >Blog Date<span class="important">*</span></label
          ><input type="date" class="plan-input w-input" v-model="date" />
        </div>
        <div class="each-input full">
          <label for="name-4" class="input-label"
            >Blog content<span class="important">*</span></label
          ><textarea v-model="content"></textarea>
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
            @click="processBlog"
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
      categories: ["Home", "About", "Services", "FAQ", "Contact", "Banking"],
      showBlogCategoryList: false,
      category: "Select Category",
      title: "",
      subtitle: "",
      banner: "",
      content: "",
      blogs: [],
      date: "",
      author: "",

      editingState: false,
      editingId: "",

      confirmMessage: "",
      confirmStatus: true,
      deleteId: "",
    };
  },
  methods: {
    formatDate(data) {
      if (data == null || data == undefined) {
        return "N/A";
      }
      const date = new Date(data).getTime(); // Note that month is zero-indexed in JavaScript
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        suffix: (day) => {
          if (day === 1 || day === 21 || day === 31) {
            return "st";
          } else if (day === 2 || day === 22) {
            return "nd";
          } else if (day === 3 || day === 23) {
            return "rd";
          } else {
            return "th";
          }
        },
      };

      return new Intl.DateTimeFormat("en-US", options).format(date);
    },

    setBlogCategory(category) {
      this.category = category;
      this.showBlogCategoryList = false;
    },

    setBanner(event) {
      this.banner = event.target.files[0];
    },

    clearInputs() {
      this.editingId = "";
      this.editingState = false;
      this.category = "Select Category";
      this.title = "";
      this.subtitle = "";
      this.banner = "";
      this.content = "";
      this.date = "";
      this.author = "";
    },

    toggleBlogStatus(id, status) {
      this.editingId = id;
      const data = {
        status: !status,
      };
      this.updateBlog(data);
    },

    showConfirmation(msg, id) {
      this.deleteId = id;
      this.confirmMessage = msg;
      this.confirmStatus = false;
    },

    returnConfirmation(data) {
      if (data == "yes") {
        this.deleteBlog(this.deleteId);
      }
      this.confirmStatus = true;
    },

    prepareBlog(blog) {
      this.editingId = blog.id;
      this.editingState = true;
      this.banner = blog.banner;
      this.category = blog.category;
      this.title = blog.title;
      this.subtitle = blog.subtitle;
      this.content = blog.content;
      this.author = blog.author;
      this.date = blog.date;
    },

    processBlog() {
      const form = new FormData();
      form.append("category", this.category);
      form.append("title", this.title);
      form.append("subtitle", this.subtitle);
      form.append("banner", this.banner);
      form.append("content", this.content);
      form.append("author", this.author);
      form.append(
        "time",
        this.date == "" ? new Date().getTime() : new Date(this.date).getTime()
      );
      if (this.editingState) {
        this.updateBlog(form);
      } else {
        this.createBlog(form);
      }
    },

    async updateBlog(form) {
      try {
        await this.$axios.patch(`/blogs/${this.editingId}`, form);
        this.clearInputs();
        this.getBlog();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async createBlog(form) {
      try {
        const result = await this.$axios.post("/blogs", form);
        this.clearInputs();
        this.blogs = result.data.data;
      } catch (err) {
        console.log(err);
        console.log(err.response.data.message);
      }
    },

    async getBlog() {
      try {
        const result = await this.$axios.get(`/blogs`);
        this.blogs = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getBlogCategories() {
      try {
        const result = await this.$axios.get("/company");
        // if (result.data.data[0].bannerCategories) {
        //   this.bannerCategories = result.data.data[0].bannerCategories;
        // }
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async deleteBlog(id) {
      try {
        await this.$axios.delete(`/banners/?id=${id}`);
        this.getBlog();
        this.clearInputs();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  mounted() {
    this.getBlogCategories();
    this.getBlog();
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
};
</script>

<style>
.each-input textarea {
  width: 100%;
}
</style>
