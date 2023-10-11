<template>
  <div class="faq">
    <home-header />
    <div
      class="faq-hero wf-section"
      :style="{ backgroundImage: `url(${FILE_URL}/${banner.bannerImage})` }"
    >
      <div class="contain">
        <div class="hero-holder">
          <div class="div-block-53"><h1 class="headings">Faq</h1></div>
          <div>
            <div class="sub-hero-texts">
              <a href="#" class="link">Home</a> / Faq
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="faq-content wf-section">
      <div class="contain">
        <div class="faq-content-holder">
          <div class="faq-holder">
            <div
              v-for="faq in faqs"
              :key="faq.id"
              class="each-faq-holder active"
            >
              <div class="faq-heading-holder">
                <h1 class="faq-header active">
                  {{ faq.question }}
                </h1>
                <div class="faq-icon-holder">
                  <img
                    src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/641404889d689f40f60e0914_plus-line-icon%202.svg"
                    loading="lazy"
                    alt=""
                    class="image-40"
                  /><img
                    src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/641404bf0ee69a3ca8ab857e_minus-line-icon%201.svg"
                    loading="lazy"
                    alt=""
                    class="image-41"
                  />
                </div>
              </div>
              <div class="faq-text-holder">
                <div class="faq-texts">
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>
          <div class="faq-background-img-holder">
            <div
              class="faq-background-img"
              style="background-image: url('/images/happyClient.jpg')"
            ></div>
            <div class="faq-number-holder">
              <img
                src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/64140af5f4c32a16eaab6889_call-us-icon%201.svg"
                loading="lazy"
                alt=""
                class="image-43"
              />
              <div>
                <h5 class="heading-7">CALL ANYTIME</h5>
                <div v-if="company" class="text-block-6">
                  {{ company.companyPhone }}<br />
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
      faqs: [],
      banner: "",
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
        this.company = result.data;
      } catch (err) {
        console.log(err.response);
      }
    },

    async getQuestion() {
      try {
        const result = await this.$axios.get("/faqs");
        this.faqs = await result.data.data;
      } catch (err) {
        console.log(err.response);
      }
    },

    async getBanner() {
      try {
        const result = await this.$axios.get("/banners/?bannerCategory=FAQ");
        this.banner = result.data.data[0];
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
  mounted() {
    this.loadScript();
    this.getQuestion();
    this.getCompany();
    this.getBanner();
  },
  components: { HomeFooter },
};
</script>

<style></style>
