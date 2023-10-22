<template>
  <div class="main-wrapper users">
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
          <h4 class="page-title">Users Page</h4>
          <div class="table-filters">
            <div class="each-filter-option">
              <div class="filter-page">Filter</div>
              <img
                src="/images/caret-down-gray.svg"
                loading="lazy"
                alt=""
                class="filter-icon drop"
                @click="showUsersList = !showUsersList"
              />
              <h4 class="filter-label" @click="showUsersList = !showUsersList">
                {{ usersType }}
              </h4>
              <ul role="list" class="filter-list" v-if="showUsersList">
                <li
                  @click="filterUser(usersType)"
                  class="filter-items"
                  v-for="(usersType, int) in usersTypes"
                  :key="int"
                >
                  <div>{{ usersType }}</div>
                </li>
              </ul>
            </div>
            <div class="each-filter-option">
              <div class="filter-page">Email</div>

              <h4 class="filter-label point" @click="hideEmail = !hideEmail">
                {{ selectedEmailName }}
              </h4>

              <ul role="list" class="filter-list" :class="{ hide: hideEmail }">
                <li
                  v-for="email in emails"
                  :key="email._id"
                  class="filter-items"
                  @click="selectEmail(email)"
                >
                  <div>{{ email.name }}</div>
                </li>
              </ul>
            </div>
            <div @click="sortDate" class="each-filter-option">
              <h4 class="filter-label">Sort By Date</h4>
              <img
                src="/images/caret-down-gray.svg"
                loading="lazy"
                alt=""
                class="filter-icon drop"
              />
            </div>
            <div @click="sortName" class="each-filter-option">
              <h4 class="filter-label">Sort By Name</h4>
              <img
                src="/images/caret-down-gray.svg"
                loading="lazy"
                alt=""
                class="filter-icon drop"
              />
            </div>
            <div class="each-filter-option">
              <div class="filter-page">Results</div>
              <input type="number" class="filter-label input" v-model="limit" />
              <div class="filter-box">
                <img
                  src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f6007a954c77c293682c_check-mark-icon%201.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon check"
                  @click="getUsers"
                />
              </div>
            </div>
          </div>
          <div class="table-wrapper">
            <table class="custom-table">
              <thead>
                <tr>
                  <td>S/N</td>
                  <td>Image</td>
                  <td>Username</td>
                  <td>Age</td>
                  <td>Phone</td>
                  <td>Email</td>
                  <td>Balance ($)</td>
                  <td>Registered</td>
                  <td>From</td>
                  <td>Status</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, int) in users" :key="user._id">
                  <td class="check-td">
                    {{ int + 1 }}
                    <div class="each-input sm">
                      <div
                        class="check-wrapper check-item"
                        @click="toggleCheck($event, user)"
                      >
                        <div
                          :class="{ active: user.checked }"
                          class="check-indicator"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div v-if="user.profilePicture" class="profile-pix">
                      <img
                        :src="`${FILE_URL}/${user.profilePicture}`"
                        alt=""
                        class="banner"
                      />
                    </div>
                    <div v-else class="user-image">
                      {{ user.username.charAt(0).toUpperCase() }}
                    </div>
                  </td>
                  <td>
                    <nuxt-link :to="`/admin/add-user/${user.id}`">{{
                      user.username
                    }}</nuxt-link>

                    <nuxt-link :to="`/admin/pending/?id=${user.id}`"
                      ><div class="filter-box">
                        <img
                          src="/images/deposit.svg"
                          loading="lazy"
                          alt=""
                          class="filter-icon check action-icon"
                        /></div
                    ></nuxt-link>
                  </td>
                  <td>{{ getAge(user.dob) }}</td>
                  <td>{{ user.phoneNumber1 }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.totalBalance }}</td>
                  <td>{{ formatDate(user.regDate) }}</td>
                  <td>
                    <div v-if="user.autoRegister" class="autoRegister">
                      Internal
                    </div>
                    <div v-else class="autoRegister">External</div>
                  </td>
                  <td>
                    <div
                      v-if="user.suspended"
                      @click="
                        toggleUserSuspension(user.id, {
                          status: user.suspended,
                          user: user,
                        })
                      "
                      class="status"
                      :class="{ success: !user.suspended }"
                    >
                      Pending
                    </div>
                    <div
                      v-else
                      @click="
                        toggleUserSuspension(user.id, {
                          status: user.suspended,
                          user: user,
                        })
                      "
                      class="status"
                      :class="{ success: !user.suspended }"
                    >
                      Approved
                    </div>
                  </td>
                  <td>
                    <nuxt-link :to="`/admin/add-user/${user.id}`"
                      ><div class="filter-box">
                        <img
                          src="/images/edit-gray.svg"
                          loading="lazy"
                          alt=""
                          class="filter-icon check action-icon"
                        /></div
                    ></nuxt-link>

                    <div
                      class="filter-box"
                      @click="
                        deleteConfirmation(
                          'Are you sure you want to delete this user?',
                          user.id
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
              <strong class="bold-text">Results</strong>: {{ itemLength }}
              <strong class="bold-text-2">Page</strong> {{ currentPage }} of
              {{ pages().length }}
            </div>
            <ul
              v-if="pages().length > 1"
              role="list"
              class="min-table-pagination"
            >
              <li
                v-if="currentPage != 1"
                class="pagination-item"
                @click="paginate(currentPage - 1)"
              >
                <img
                  src="/images/cheveron-left.svg"
                  loading="lazy"
                  alt=""
                  class="pagination-img"
                />
              </li>
              <li
                v-for="(page, int) in pages()"
                :key="int"
                class="pagination-item"
                @click="paginate(int + 1)"
              >
                <div>{{ int + 1 }}</div>
              </li>

              <li
                class="pagination-item"
                v-if="currentPage < pages(currentPage + 1).length"
                @click="paginate(currentPage + 1)"
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
          <div
            class="response"
            v-if="showResponse"
            :class="{ success: responseState }"
          >
            {{ response }}
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
              <div @click="bulkSelection" class="filter-box">
                <img
                  src="/images/bulk-gray.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon check"
                />
              </div>
            </div>
            <div class="each-filter-option min">
              <div class="filter-page">Send Email</div>
              <div
                @click="
                  showConfirmation(
                    `Are you sure you want to send  ${selectedEmailName} email to the selected users?`
                  )
                "
                class="filter-box"
              >
                <img
                  src="/images/emails.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon check"
                />
              </div>
            </div>
          </div>
        </div>
        <Instruction />
      </div>
      <AdminFooter />
    </div>
  </div>
</template>

<script>
import AdminConfirmation from "../../components/admin/AdminConfirmation.vue";
import AdminFooter from "../../components/admin/AdminFooter.vue";
import AdminNavigation from "../../components/admin/AdminNavigation";
import AdminTopHeader from "../../components/admin/AdminTopHeader.vue";
import Instruction from "../../components/admin/Instruction.vue";

export default {
  data() {
    return {
      users: [],
      limit: 4,
      selectedEmailName: "Select Email",
      selectedEmail: "",
      usersTypes: ["All Users", "Active", "Suspended"],
      usersType: "All Users",
      emails: [],
      hideEmail: true,
      isBulk: false,
      suspension: "",
      sort: "-regDate",
      itemLength: "",
      currentPage: 1,
      pages: function () {
        let array = [];
        let x = Math.ceil(this.itemLength / this.limit);
        for (let i = 0; i < x; i++) {
          array.push("i");
        }
        return array;
      },

      confirmMessage: "",
      confirmStatus: true,

      response: "",
      responseState: false,
      height: 0,
      showResponse: false,

      showUsersList: false,

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

    getAge(date) {
      const differenceMs = new Date().getTime() - new Date(date).getTime();
      return Math.floor(differenceMs / (1000 * 60 * 60 * 24 * 365));
    },

    clearSelected() {
      this.selectedEmailName = "Select Email";
      this.isBulk = false;
      this.users.forEach((el) => {
        el.checked = false;
      });
    },

    paginate(int) {
      this.currentPage = int;
      this.getUsers();
    },

    formatDate(data) {
      const date = new Date(data);
      const options = {
        weekday: "short",
        day: "numeric",
        month: "long",
      };

      const formatter = new Intl.DateTimeFormat("en-US", options);
      return formatter.format(date);
    },

    toggleCheck(e, item) {
      item.checked = !item.checked;
    },

    sortName() {
      this.sort = this.sort == "-username" ? "username" : "-username";
      this.getUsers();
    },

    sortDate() {
      this.sort = this.sort == "-regDate" ? "regDate" : "-regDate";
    },

    showConfirmation(msg) {
      if (this.selectedEmailName == "Select Email") {
        this.showResponseMsg("Please select email template", false);
      } else {
        this.confirmMessage = msg;
        this.confirmStatus = false;
      }
    },

    deleteConfirmation(msg, id) {
      this.deleteId = id;
      this.confirmMessage = msg;
      this.confirmStatus = false;
    },

    returnConfirmation(data) {
      this.confirmStatus = !this.confirmStatus;
      if (data == "yes") {
        if (this.deleteId != "") {
          this.deleteUser();
        } else {
          const emailedUsers = [];
          this.users.forEach((el) => {
            if (el.checked == true) {
              emailedUsers.push(el);
            }
          });

          if (emailedUsers.length == 0) {
            this.showResponseMsg("Please select at least one user", false);
          } else {
            this.sendEmail(emailedUsers);
          }
        }
      }
      this.deleteId = "";
    },

    filterUser(userType) {
      console.log(userType);
      if (userType == "All Users") {
        this.suspension = ``;
        this.getUsers();
      } else {
        const type = userType == "Active" ? false : true;
        this.suspension = `&suspension=${type}`;
        this.getUsers();
      }

      this.showUsersList = !this.showUsersList;
    },

    selectEmail(email) {
      this.selectedEmailName = email.name;
      this.selectedEmail = email;
      this.hideEmail = !this.hideEmail;
    },

    bulkSelection() {
      this.isBulk = !this.isBulk;
      if (this.isBulk) {
        this.users.forEach((el) => {
          el.checked = true;
        });
      } else {
        this.users.forEach((el) => {
          el.checked = false;
        });
      }
    },

    checkItems(items) {
      items.forEach((el) => {
        el.checked = false;
      });

      return items;
    },

    async toggleUserSuspension(id, data) {
      const form = {
        suspended: !data.status,
        user: data.user,
      };
      try {
        const result = await this.$axios.patch(
          `/users/toggle-suspension/?id=${id}`,
          form
        );
        this.getUsers();
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async sendEmail(users) {
      const form = {
        users: users,
        email: this.selectedEmail,
      };
      try {
        await this.$axios.post(`/emails/send-email`, form);
        this.showResponseMsg("The email was sent successfully", true);
        this.clearSelected();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getEmails() {
      try {
        const result = await this.$axios.get(`/emails`);
        this.emails = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getUsers() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}${this.suspension}`;
      try {
        const result = await this.$axios.get(`/users/${query}`);
        this.users = this.checkItems(result.data.data);
        this.itemLength = result.data.totalLength;
      } catch (err) {
        console.log(err.response);
      }
    },

    async deleteUser() {
      try {
        const result = await this.$axios.delete(`/users/?id=${this.deleteId}`);
        this.getUsers();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  mounted() {
    this.getUsers();
    this.getEmails();
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
  components: {
    Instruction,
    AdminFooter,
    AdminNavigation,
    AdminTopHeader,
    AdminConfirmation,
  },
};
</script>

<style>
.filter-label.point {
  cursor: pointer;
}

.filter-label.input {
  border: solid #f3f3f3;
  width: 70px;
  outline: none;
}
.check-td {
  position: relative;
}

.check-wrapper.check-item {
  position: absolute;
  right: -30px;
  top: -20px;
}

.profile-pix {
  overflow: hidden;
  height: 70px;
  width: 70px;
  border-radius: 50%;
}

.profile-pix img {
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
}

.user-image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e84c89, #9863a3);
  font-size: 20px;
  font-weight: 500;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
