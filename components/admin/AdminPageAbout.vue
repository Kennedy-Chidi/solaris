<template>
  <div class="input-wrapper w-form">
    <div class="input-form">
      <div class="each-input full flex">
        <img
          v-if="certificate"
          :src="certificate"
          alt=""
          class="company-cert"
        />
        <img v-else :src="`${FILE_URL}/${cert}`" alt="" class="company-cert" />
      </div>
      <div class="each-input full">
        <label for="name-4" class="input-label"
          >Write about your company<span class="important">*</span></label
        >
        <textarea
          name=""
          v-model="content"
          class="plan-input w-input"
        ></textarea>
      </div>
      <div class="button-holder">
        <label for="certificate" class="upload-btn banner">
          <img
            src="/images/white-upload.svg"
            loading="lazy"
            alt=""
            class="upload-icon"
          />
          <div>Upload Certificate</div>
          <input
            type="file"
            class="file-input"
            id="certificate"
            @change="setCertificate"
          />
        </label>
        <input
          type="button"
          value="Save"
          @click="processAbout"
          class="button w-button"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      certificate: "",
      cert: "",
      company: "",
      editState: false,
    };
  },
  methods: {
    setCertificate(event) {
      this.cert = event.target.files[0];
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.certificate = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    processAbout() {
      const form = new FormData();
      form.append("content", this.content);
      form.append("certificate", this.cert);

      if (this.editState) {
        this.updateeAbout();
      } else {
        this.saveAbout(form);
      }
    },

    async getCompany() {
      try {
        const result = await this.$axios.get("/about");

        console.log(result);
        this.content = await result.data.data[0].content;
      } catch (err) {
        console.log(err);
      }
    },

    async saveAbout(form) {
      try {
        await this.$axios.post(`/about`, form);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async updateeAbout(form) {
      try {
        await this.$axios.patch(`/about`, form);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
  mounted() {
    this.getCompany();
  },
};
</script>

<style>
.full.flex {
  display: flex;
  justify-content: center;
}

.company-certificate {
  height: 200;
  width: 100;
  margin: 20px auto;
}

.each-input.full textarea {
  min-height: 40vh;
}
</style>
