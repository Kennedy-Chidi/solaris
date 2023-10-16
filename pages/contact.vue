<template>
  <div class="contact-us">
    <home-header />
    <div
      class="contact-hero wf-section"
      :style="{ backgroundImage: `url(${FILE_URL}/${banner.bannerImage})` }"
    >
      <div class="contain">
        <div class="hero-holder">
          <div class="div-block-53">
            <h1 class="headings">Contact Us</h1>
          </div>
          <div>
            <div class="sub-hero-texts">
              <a href="#" class="link">Home </a>/ Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-content wf-section">
      <div class="contain">
        <div>
          <div class="contact-content-holder">
            <div class="top-heading-holder-4">
              <h1 class="top-heading">Contact Us</h1>
            </div>
            <div class="contact-content-holde">
              <div class="contact-form w-form">
                <div>
                  <div>
                    <div class="div-block-127">
                      <input
                        type="text"
                        class="contact-us-input w-input"
                        placeholder="Your Name"
                        v-model="name"
                      />

                      <input
                        type="email"
                        class="contact-us-input w-input"
                        placeholder="Your e-mail"
                        required=""
                        v-model="email"
                      />
                    </div>
                    <textarea
                      placeholder="Your Message"
                      maxlength="5000"
                      v-model="content"
                      class="textarea w-input"
                    ></textarea>
                    <div v-if="showMsg" class="msg" :class="{ error: !colour }">
                      {{ msg }}
                    </div>
                    <span v-if="onResponse" class="red-button w-button"
                      ><img src="/images/rotate.svg" alt="" /> Processing</span
                    >
                    <span
                      v-else
                      @click="sendMessage"
                      class="red-button w-button"
                      >Send Message</span
                    >
                  </div>
                </div>
              </div>
              <div v-if="company" class="side-contact-writeup-holder">
                <div class="each-side-contact-write-up">
                  <div class="headers-holder">
                    <h1 class="headers">Address</h1>
                  </div>
                  <div class="texts-headers">
                    {{ company.companyAddress }}
                  </div>
                </div>

                <div class="each-side-contact-write-up">
                  <div class="headers-holder">
                    <h1 class="headers">Email</h1>
                  </div>
                  <div class="texts-headers">{{ company.email }}</div>
                </div>

                <div class="div-block-129">
                  <div class="headers-holder">
                    <h1 class="headers">Phone</h1>
                  </div>
                  <div class="texts-headers">+32 466905518</div>
                </div>

                <div>
                  <div class="headers-holder">
                    <h1 class="headers">Hours</h1>
                  </div>
                  <div class="texts-headers">
                    Mon-Fr: 8am-6pm, Sat-Sun: 10am-9pm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-content-2 wf-section">
      <div class="contain">
        <div class="div-block-131">
          <div class="div-block-130">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20204459.50864827!2d-19.625051390618637!3d51.81776824054755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fd09ff41afb%3A0xbd21e63a062c7e1c!2sSolaris!5e0!3m2!1sen!2suk!4v1696843467795!5m2!1sen!2suk"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <home-footer />
  </div>
</template>

<script>
import HomeFooter from "../components/home/HomeFooter.vue";
export default {
  data() {
    return {
      company: "",
      media: [],
      banner: "",

      name: "",
      email: "",
      content: "",

      msg: "",
      colour: false,
      showMsg: false,
      onResponse: false,
    };
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },

  methods: {
    loadScript() {
      if (!process.server) {
        let el = document.getElementById("script");

        if (el != undefined) {
          document.body.removeChild(el);
        }

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "/scripts/home.js";
        script.async = true;
        script.id = "script";
        const app = document.querySelector("#footer");
        if (app) {
          app.appendChild(script);
        } else {
          console.error("Could not find app node to append script element");
        }
      }
    },

    clearInputs() {
      this.email = "";
      this.name = "";
      this.content = "";
    },

    showMessage(msg) {
      this.onResponse = false;
      this.msg = msg;
      this.showMsg = true;
      setTimeout(() => {
        this.msg = "";
        this.showMsg = false;
        this.colour = false;
      }, 6000);
    },

    async getCompany() {
      try {
        const result = await this.$axios.get(`/company`);
        this.company = result.data;
        this.loadScript();
      } catch (err) {
        console.log(err);
      }
    },

    async sendMessage() {
      this.onResponse = true;
      if (this.name == "" || this.name.length < 2) {
        this.showMessage("Please write a valid name.");
        return;
      }
      if (
        this.email == "" ||
        !this.email ||
        !/^\S+@\S+\.\S+$/.test(this.email)
      ) {
        this.showMessage("Please provide a valid email.");
        return;
      }
      if (this.content.trim() == "" || this.content.length < 30) {
        this.showMessage("Sorry content must be at least 30 characters long.");
        return;
      }

      const form = {
        name: this.name,
        email: this.email,
        content: this.content,
      };

      try {
        await this.$axios.post(`/emails/send-message`, form);
        this.colour = true;
        this.showMessage("Message sent successfully", false);
        this.clearInputs();
      } catch (err) {
        this.showMessage(err.response.data.message);
      }
    },

    async getBanner() {
      try {
        const result = await this.$axios.get(
          `/banners/?bannerCategory=Contact`
        );
        this.banner = result.data.data[0];
        this.loadScript();
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getCompany();
    this.getBanner();
  },
  components: { HomeFooter },
};
</script>

<style>
iframe {
  width: 100%;
}

.red-button img {
  width: 20px;
}
</style>
