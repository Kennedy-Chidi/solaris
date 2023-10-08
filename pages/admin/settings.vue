<template>
  <div class="main-wrapper settings">
    <!-- <admin-confirmation :msg="confirmMsg" :state="confirmState" /> -->
    <admin-navigation />
    <div class="body-wrapper">
      <admin-top-header />
      <div class="content-wrapper">
        <div class="custom-card plan">
          <div class="table-wrapper">
            <table class="custom-table">
              <thead>
                <tr>
                  <td>S/N</td>
                  <td>Company</td>
                  <td>Email</td>
                  <td>Socials</td>
                  <td>Colored Socials</td>
                  <td>Media</td>
                  <td>Colored Media</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, int) in company" :key="item._id">
                  <td>{{ int + 1 }}</td>
                  <td>{{ item.companyName }}</td>
                  <td>{{ item.systemEmail }}</td>
                  <td>
                    <div v-for="(el, index) in item.socials" :key="index">
                      <div>{{ el.text }}</div>
                      <img :src="el.tempIcon" alt="" class="contact-icons" />
                    </div>
                  </td>
                  <td>
                    <div
                      v-for="(el, index) in item.coloredSocials"
                      :key="index"
                    >
                      <div>{{ el.text }}</div>
                      <img :src="el.tempIcon" alt="" class="contact-icons" />
                    </div>
                  </td>
                  <td>
                    <div v-for="(el, index) in item.media" :key="index">
                      <div>{{ el.text }}</div>
                      <img :src="el.tempIcon" alt="" class="contact-icons" />
                    </div>
                  </td>
                  <td>
                    <div v-for="(el, index) in item.coloredMedia" :key="index">
                      <div>{{ el.text }}</div>
                      <img :src="el.tempIcon" alt="" class="contact-icons" />
                    </div>
                  </td>

                  <td>
                    <div class="filter-box" @click="prepareCompanyEdit(item)">
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

          <div class="input-wrapper w-form">
            <form @submit.prevent="" action="#" class="input-form">
              <div class="each-input half down">
                <div v-for="(med, int) in media" :key="int" class="social-list">
                  <img
                    v-if="med.tempIcon"
                    :src="med.tempIcon"
                    loading="lazy"
                    alt=""
                    class="social-img"
                  />
                  <img v-else :src="`${FILE_URL}/${med.icon}`" alt="" />
                  <div>{{ med.text }}</div>
                  <img
                    src="/images/edit-gray.svg"
                    @click="startEditTempState(int, media, 'media')"
                    loading="lazy"
                    alt=""
                    class="filter-icon check action-icon edit"
                  />

                  <img
                    src="/images/delete-gray.svg"
                    loading="lazy"
                    alt=""
                    @click="removeTempState(int, 'media')"
                    class="filter-icon check action-icon delete"
                  />
                </div>

                <div class="social-holder">
                  <label for="media" class="upload-btn sm">
                    <img
                      src="/images/white-upload.svg"
                      loading="lazy"
                      alt=""
                      class="upload-icon"
                    />
                    <input
                      id="media"
                      type="file"
                      class="file-input"
                      @change="setIcon($event, 'media')"
                    />
                  </label>
                  <input
                    type="text"
                    class="plan-input w-input"
                    maxlength="256"
                    v-model="mediaText"
                    @keypress.enter="
                      enterTempState(
                        media,
                        mediaText,
                        mediaTempIcon,
                        mediaIcon,
                        'media'
                      )
                    "
                    placeholder="Media Contact"
                  />
                </div>
              </div>

              <div class="each-input half down">
                <div
                  v-for="(med, int) in coloredMedia"
                  :key="int"
                  class="social-list"
                >
                  <img
                    v-if="med.tempIcon"
                    :src="med.tempIcon"
                    loading="lazy"
                    alt=""
                    class="social-img"
                  />
                  <img
                    v-else
                    :src="`${FILE_URL}/${med.icon}`"
                    loading="lazy"
                    alt=""
                    class="social-img"
                  />
                  <div>{{ med.text }}</div>
                  <img
                    src="/images/edit-gray.svg"
                    @click="
                      startEditTempState(int, coloredMedia, 'coloredMedia')
                    "
                    loading="lazy"
                    alt=""
                    class="filter-icon check action-icon edit"
                  />

                  <img
                    src="/images/delete-gray.svg"
                    loading="lazy"
                    alt=""
                    @click="removeTempState(int, 'coloredMedia')"
                    class="filter-icon check action-icon delete"
                  />
                </div>

                <div class="social-holder">
                  <label for="coloredMedia" class="upload-btn sm">
                    <img
                      src="/images/white-upload.svg"
                      loading="lazy"
                      alt=""
                      class="upload-icon"
                    />
                    <input
                      id="coloredMedia"
                      type="file"
                      class="file-input"
                      @change="setIcon($event, 'coloredMedia')"
                    />
                  </label>
                  <input
                    type="text"
                    class="plan-input w-input"
                    maxlength="256"
                    v-model="coloredMediaText"
                    @keypress.enter="
                      enterTempState(
                        coloredMedia,
                        coloredMediaText,
                        coloredMediaTempIcon,
                        coloredMediaIcon,
                        'coloredMedia'
                      )
                    "
                    placeholder="Colored Media Contact"
                  />
                </div>
              </div>

              <div class="each-input half down">
                <div
                  v-for="(med, int) in socials"
                  :key="int"
                  class="social-list"
                >
                  <img
                    v-if="med.tempIcon"
                    :src="med.tempIcon"
                    loading="lazy"
                    alt=""
                    class="social-img"
                  />
                  <img
                    v-else
                    :src="`${FILE_URL}/${med.icon}`"
                    loading="lazy"
                    alt=""
                    class="social-img"
                  />
                  <div>{{ med.text }}</div>
                  <img
                    src="/images/edit-gray.svg"
                    @click="editTempState(index, media, 'media')"
                    loading="lazy"
                    alt=""
                    class="filter-icon check action-icon edit"
                  />

                  <img
                    src="/images/delete-gray.svg"
                    loading="lazy"
                    alt=""
                    @click="removeTempState(index, media, 'media')"
                    class="filter-icon check action-icon delete"
                  />
                </div>

                <div class="social-holder">
                  <label for="socials" class="upload-btn sm">
                    <img
                      src="/images/white-upload.svg"
                      loading="lazy"
                      alt=""
                      class="upload-icon"
                    />
                    <input
                      id="socials"
                      type="file"
                      class="file-input"
                      @change="setIcon($event, 'socials')"
                    />
                  </label>
                  <input
                    type="text"
                    class="plan-input w-input"
                    maxlength="256"
                    v-model="socialText"
                    @keydown.enter="
                      enterTempState(
                        socials,
                        socialText,
                        socialTempIcon,
                        socialIcon,
                        'socials'
                      )
                    "
                    placeholder="Social Contact"
                  />
                </div>
              </div>

              <div class="each-input half down">
                <div
                  v-for="(med, int) in coloredSocials"
                  :key="int"
                  class="social-list"
                >
                  <img
                    v-if="med.tempIcon"
                    :src="med.tempIcon"
                    loading="lazy"
                    alt=""
                    class="social-img"
                  />
                  <img
                    v-else
                    :src="`${FILE_URL}/${med.icon}`"
                    loading="lazy"
                    alt=""
                    class="social-img"
                  />
                  <div>{{ med.text }}</div>
                  <img
                    src="/images/edit-gray.svg"
                    @click="startEditTempState(int, socials, 'coloredSocials')"
                    loading="lazy"
                    alt=""
                    class="filter-icon check action-icon edit"
                  />

                  <img
                    src="/images/delete-gray.svg"
                    loading="lazy"
                    alt=""
                    @click="removeTempState(int, 'coloredSocials')"
                    class="filter-icon check action-icon delete"
                  />
                </div>

                <div class="social-holder">
                  <label for="coloredSocial" class="upload-btn sm">
                    <img
                      src="/images/white-upload.svg"
                      loading="lazy"
                      alt=""
                      class="upload-icon"
                    />
                    <input
                      id="coloredSocial"
                      type="file"
                      class="file-input"
                      @change="setIcon($event, 'coloredSocials')"
                    />
                  </label>
                  <input
                    type="text"
                    class="plan-input w-input"
                    maxlength="256"
                    v-model="coloredSocialText"
                    @keypress.enter="
                      enterTempState(
                        coloredSocials,
                        coloredSocialText,
                        coloredSocialTempIcon,
                        coloredSocialIcon,
                        'coloredSocials'
                      )
                    "
                    placeholder="Colored Social Contact"
                  />
                </div>
              </div>

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
                  v-model="companyAccountName"
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
      companyAccountName: "",
      companyAccountNumber: "",
      systemEmail: "",
      companyBankName: "",
      companyRoutingNumber: "",

      socialText: "",
      socialIcon: "",
      socialTempIcon: "",
      socials: [],

      coloredSocialTempIcon: "",
      coloredSocialIcon: "",
      coloredSocials: [],
      coloredSocialText: "",

      mediaText: "",
      mediaIcon: "",
      mediaTempIcon: "",
      media: [],

      coloredMediaText: "",
      coloredMediaIcon: "",
      coloredMediaTempIcon: "",
      coloredMedia: [],

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
      this.socials = [];
      this.coloredSocials = [];
      this.media = [];
      this.coloredMedia = [];
      this.companyBank = "";
      this.routingNumber = "";
      this.accountName = "";
      this.accountNumber = "";
      this.companyName = "";
    },

    setIcon(event, type) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();

        if (type == "socials") {
          reader.onload = (e) => {
            this.socialIcon = input.files[0];
            this.socialTempIcon = e.target.result;
          };
        } else if (type == "coloredSocials") {
          reader.onload = (e) => {
            this.coloredSocialIcon = input.files[0];
            this.coloredSocialTempIcon = e.target.result;
          };
        } else if (type == "media") {
          reader.onload = (e) => {
            this.mediaIcon = input.files[0];
            this.mediaTempIcon = e.target.result;
          };
        } else if (type == "coloredMedia") {
          reader.onload = (e) => {
            this.coloredMediaIcon = input.files[0];
            this.coloredMediaTempIcon = e.target.result;
          };
        }

        reader.readAsDataURL(input.files[0]);
      }
    },

    clearType(type) {
      this.editingTempState = false;
      if (type == "socials") {
        this.socialIcon = "";
        this.socialText = "";
        this.socialTempIcon = "";
      } else if (type == "coloredSocial") {
        this.coloredSocialIcon = "";
        this.coloredSocialText = "";
        this.coloredSocialTempIcon = "";
      } else if (type == "media") {
        this.mediaIcon = "";
        this.mediaText = "";
        this.mediaTempIcon = "";
      } else if (type == "coloredMedia") {
        this.coloredMediaIcon = "";
        this.coloredMediaText = "";
        this.coloredMediaTempIcon = "";
      }
    },

    enterTempState(array, receivedText, receivedTempIcon, receivedIcon, type) {
      if (receivedTempIcon != "") {
        const data = {
          text: receivedText,
          tempIcon: receivedTempIcon,
          icon: receivedIcon,
        };

        if (this.editingTempState) {
          array.splice(this.editingTempIndex, 1, data);
        } else {
          const existingObj = array.find((item) => item.text === data.text);
          if (existingObj) {
            this.showResponseMsg("Named item already exist", true);
          } else {
            array.push(data);
          }
        }
        this.clearType(type);
      } else {
        this.showResponseMsg("Please select icon first", true);
      }
    },

    removeTempState(index, type) {
      if (type == "socials") {
        this.socials.splice(index, 1);
      } else if (type == "coloredSocials") {
        this.coloredSocials.splice(index, 1);
      } else if (type == "media") {
        this.media.splice(index, 1);
      } else if (type == "coloredMedia") {
        this.coloredMedia.splice(index, 1);
      }
    },

    startEditTempState(index, array, type) {
      this.editingTempState = true;
      this.editingTempIndex = index;
      const item = array[index];
      if (type == "socials") {
        this.socialIcon = item.icon;
        this.socialText = item.text;
        this.socialTempIcon = item.tempIcon;
      } else if (type == "coloredSocials") {
        this.coloredMediaIcon = item.icon;
        this.coloredSocialText = item.text;
        this.coloredSocialTempIcon = item.tempIcon;
      } else if (type == "media") {
        this.mediaText = item.text;
        this.mediaTempIcon = item.tempIcon;
        this.mediaIcon = item.icon;
      } else if (type == "coloredMedia") {
        this.coloredMediaText = item.text;
        this.coloredMediaTempIcon = item.tempIcon;
        this.coloredMediaIcon = item.icon;
      }
    },

    populateData(company) {
      this.editingId = company._id;
      this.companyAccountName = company.companyAccountName;
      this.companyAccountNumber = company.companyAccountNumber;
      this.companyBankName = company.companyBankName;
      this.companyName = company.companyName;
      this.systemEmail = company.systemEmail;
      this.socials = company.socials;
      this.coloredSocials = company.coloredSocials;
      this.media = company.media;
      this.coloredMedia = company.coloredMedia;
    },

    processData() {
      const form = new FormData();
      form.append("companyName", this.companyName);
      form.append("systemEmail", this.systemEmail);
      form.append("companyAccountName", this.companyAccountName);
      form.append("companyAccountNumber", this.companyAccountNumber);
      form.append("companyBankName", this.companyBankName);
      form.append("companyRoutingNumber", this.companyRoutingNumber);
      this.socials.forEach((el) => {
        form.append("socialIcon", el.icon);
        form.append("socialText", el.text);
      });
      this.coloredSocials.forEach((el) => {
        form.append("coloredSocialIcon", el.icon);
        form.append("coloredSocialText", el.text);
      });
      this.media.forEach((el) => {
        form.append("mediaIcon", el.icon);
        form.append("mediaText", el.text);
      });
      this.coloredMedia.forEach((el) => {
        form.append("coloredMediaIcon", el.icon);
        form.append("coloredMediaText", el.text);
      });
      if (this.editingId != "") {
        this.updateCompany(form);
      } else {
        this.createCompany(form);
      }
    },

    async updateCompany(form) {
      try {
        await this.$axios.patch(`/company/${this.editingId}`, form);
        this.showResponseMsg("Data updated successfully.", true);
        this.clearInputs();
        this.getCompany();
      } catch (err) {
        this.showResponseMsg(err, true);
      }
    },

    async createCompany(form) {
      try {
        await this.$axios.post("/company", form);
        this.showResponseMsg("The data was created successfully", true);
        this.getCompany();
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async getCompany() {
      try {
        const result = await this.$axios.get("/company");
        if (result.data.data.length != 0) {
          this.populateData(result.data.data[0]);
        }
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
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

  // processData() {
  //   const form = new FormData();
  //   this.socials.forEach((el) => {
  //     form.append("socialIcon", el.icon);
  //     form.append("socialText", el.text);
  //   });

  //   this.coloredSocials.forEach((el) => {
  //     form.append("coloredSocialIcon", el.icon);
  //     form.append("coloredSocialText", el.text);
  //   });

  //   form.append("companyName", this.companyName);
  //   form.append("systemEmail", this.systemEmail);

  //   this.createCompany(form);
  // },
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
