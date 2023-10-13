<template>
  <div class="main-wrapper email">
    <AdminNavigation />
    <div class="body-wrapper">
      <AdminTopHeader />
      <div class="content-wrapper">
        <div class="custom-card plan">
          <h4 class="page-title">Email Settings</h4>
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
                  <td>Name</td>
                  <td>Title</td>
                  <td>Content</td>
                  <td>Greeting</td>
                  <td>Warning</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(email, int) in emails" :key="email._id">
                  <td>
                    {{ int + 1 }}
                  </td>
                  <td>
                    <img
                      v-if="email.banner"
                      :src="`${FILE_URL}/${email.banner}`"
                      alt=""
                      class="banner"
                    />
                  </td>
                  <td>{{ email.name }}</td>
                  <td>{{ email.title }}</td>
                  <td>{{ email.content }}</td>
                  <td>{{ email.greeting }}</td>
                  <td>{{ email.warning }}</td>
                  <td>
                    <div class="filter-box" @click="prepareEmailEdit(email)">
                      <img
                        src="/images/edit-gray.svg"
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
          <div v-if="editState" class="input-wrapper w-form">
            <form action="#" class="input-form">
              <div class="each-input">
                <label for="duration-3" class="input-label"
                  >Title <span class="important">*</span></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  placeholder="Email Title"
                  v-model="title"
                />
              </div>
              <div class="each-input">
                <label for="duration-3" class="input-label"
                  >Greeting <span class="important">*</span></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  placeholder="Hi {Username}/ Dear {fullName}"
                  v-model="greeting"
                />
              </div>
              <div class="each-input">
                <label for="duration-3" class="input-label"
                  >Email Colors <span class="important">*</span></label
                >

                <div class="color-holder">
                  <div>
                    <h3>Main Color</h3>
                    <input
                      type="color"
                      class="plan-input w-input"
                      v-model="mainColor"
                    />
                  </div>
                  <div>
                    <h3>Header color</h3>
                    <input
                      type="color"
                      class="plan-input w-input"
                      v-model="headerColor"
                    />
                  </div>
                  <div>
                    <h3>Footer color</h3>
                    <input
                      type="color"
                      class="plan-input w-input"
                      v-model="footerColor"
                    />
                  </div>
                </div>
              </div>
              <div class="each-input">
                <label for="duration-3" class="input-label"
                  >Warning <span class="important">*</span></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  placeholder="Please ignore if you didn't send this email"
                  v-model="warning"
                />
              </div>
              <div class="each-input content">
                <label for="field-3" class="input-label">Email Content</label
                ><textarea
                  placeholder="Plan Description"
                  maxlength="5000"
                  v-model="content"
                  class="plan-input w-input"
                ></textarea>
              </div>

              <div class="button-holder">
                <label for="email" class="upload-btn button">
                  <img
                    src="/images/white-upload.svg"
                    loading="lazy"
                    alt=""
                    class="upload-icon"
                  />
                  <div>Upload Image</div>
                  <input
                    type="file"
                    id="email"
                    class="file-input"
                    @change="setEmailBanner"
                  />
                </label>
                <input
                  type="button"
                  value="Edit Email"
                  class="button w-button"
                  @click="updateEmail"
                /><input
                  type="button"
                  value="Cancel"
                  class="button w-button"
                  @click="editState = !editState"
                />
              </div>
            </form>
          </div>
        </div>
        <instruction />
      </div>
      <AdminFooter />
    </div>
  </div>
</template>

<script>
import AdminFooter from "../../components/admin/AdminFooter.vue";
import AdminNavigation from "../../components/admin/AdminNavigation";
import AdminTopHeader from "../../components/admin/AdminTopHeader.vue";
import Instruction from "../../components/admin/Instruction.vue";

export default {
  data() {
    return {
      emails: [],
      content: "",
      editState: false,
      editId: "",
      content: "",
      name: "",
      title: "",
      headerColor: "",
      footerColor: "",
      mainColor: "",
      greeting: "",
      warning: "",
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
      this.editId = "";
      this.editState = false;
      this.name = "";
      this.content = "";
    },

    setEmailBanner(e) {
      this.banner = e.target.files[0];
    },

    prepareEmailEdit(email) {
      this.editState = true;
      this.editId = email.id;
      this.content = email.content;
      this.title = email.title;
      this.name = email.name;
    },

    async updateEmail() {
      const form = {
        title: this.title,
        content: this.content,
        name: this.name,
      };
      try {
        await this.$axios.patch(`/emails/?id=${this.editId}`, form);
        this.getEmails();
        this.clearInputs();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async createEmails() {
      const form = {
        doc1: { name: "confirm-registration" },
        doc2: { name: "reset-password" },
        doc3: { name: "deposit" },
        doc4: { name: "withdrawal" },
        doc5: { name: "registration-successful" },
        doc6: { name: "maintenance" },
        doc7: { name: "deposit-approval" },
        doc8: { name: "internal-transfer-approval" },
        doc9: { name: "credit-approval" },
        doc10: { name: "message" },
      };
      try {
        const result = await this.$axios.post("/emails", form);
        this.emails = result.data.data;
      } catch (err) {
        console.log(err.response);
      }
    },

    async getEmails() {
      try {
        const result = await this.$axios.get(`/emails`);
        this.emails = result.data.data;
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },

  mounted() {
    this.getEmails();
  },

  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
    editor() {
      return this.$store.state.editor.editor;
    },
  },

  components: {
    AdminFooter,
    AdminNavigation,
    AdminTopHeader,
    Instruction,
  },
};
</script>

<style>
.color-holder {
  display: flex;
  justify-content: space-between;
}

.color-holder h3 {
  font-size: 12px;
  line-height: 15px;
  margin: 0;
}

input[type="color"] {
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
}
</style>
