<template>
  <div class="faq">
    <home-header />
    <div
      class="faq-hero wf-section"
      :style="{ backgroundImage: `url(${FILE_URL}/${banner.bannerImage})` }"
    >
      <div class="contain">
        <div class="hero-holder">
          <div class="div-block-53">
            <h1 class="headings">TEMRS & CONDITIONS</h1>
          </div>
          <div>
            <div class="sub-hero-texts">
              <a href="#" class="link">Home</a> / Terms
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="faq-content wf-section">
      <div class="contain">
        <div class="faq-content-holder">
          <div class="faq-holder">
            <div class="each-faq-holder active">
              <div class="faq-heading-holder">
                <h1 class="faq-header active">
                  The Terms & Conditions of Solaris KG
                </h1>
              </div>
              <div class="faq-text-holder">
                <div class="faq-texts" v-html="terms.body"></div>
              </div>
            </div>
          </div>
          <div class="faq-background-img-holder">
            <div class="faq-background-img"></div>
            <div class="faq-number-holder">
              <img
                src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/64140af5f4c32a16eaab6889_call-us-icon%201.svg"
                loading="lazy"
                alt=""
                class="image-43"
              />
              <div v-if="company.media">
                <h5 class="heading-7">CALL ANYTIME</h5>
                <div v-if="company.media[2]" class="text-block-6">
                  {{ company.media[2].text }}<br />
                </div>
              </div>
            </div>
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
      banner: "",
      terms: [],
    };
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

    async getCompany() {
      try {
        const result = await this.$axios.get("/company");
        this.company = await result.data;
      } catch (err) {
        console.log(err.response);
      }
    },

    async getTerms() {
      try {
        const result = await this.$axios.get("/terms");
        this.terms = await result.data.data[0];
      } catch (err) {
        console.log(err.response);
      }
    },

    async getBanner() {
      try {
        const result = await this.$axios.get("/banners/?bannerCategory=Terms");
        this.banner = result.data.data[0];
      } catch (err) {
        console.log(err.response);
      }
    },
  },

  mounted() {
    this.loadScript();
    this.getTerms();
    this.getCompany();
    this.getBanner();
  },

  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
  components: { HomeFooter },
};
</script>

<style></style>
