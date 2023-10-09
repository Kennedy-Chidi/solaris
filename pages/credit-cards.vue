<template>
  <div class="credit-cards-pages">
    <home-header />
    <div
      class="credit-cards-hero wf-section"
      :style="{ backgroundImage: `url(${FILE_URL}/${banner.bannerImage})` }"
    >
      <div class="contain">
        <div class="hero-holder">
          <div class="div-block-53">
            <h1 class="headings">Credit Cards</h1>
          </div>
          <div>
            <div class="sub-hero-texts">
              <a href="#" class="link">Home</a> / Credit Cards
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="credit-cards-content wf-section">
      <div class="contain">
        <div class="visa-holder">
          <div class="card-switch">
            <div class="card-holder">
              <img
                src="/images/zivik-blue-card.png"
                loading="lazy"
                alt=""
                class="image-17"
              />
            </div>
            <div class="card-holder-write-up">
              <div class="texts-header-holder-2">
                <div class="texts-header">PREMIUM</div>
              </div>
              <div class="top-heading-holder-3">
                <h1 class="top-heading">Visa and MasterCard Gold Cards</h1>
              </div>
              <div class="text-style-holder-2">
                <div class="text-style">
                  Account currency: USD, EURDiscounts and privileges from Visa
                  and MasterCard payment systemsIssue of additional bank
                  cardsCard issue within a payroll card programme
                </div>
              </div>
              <nuxt-link to="login" class="red-button w-button"
                >Order Now</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-bottom: 50px" class="credit-cards-content-2 wf-section">
      <div class="contain">
        <div class="div-block-62">
          <div class="content-holder">
            <div class="background-write">
              <div class="texts-header-holder-2">
                <div class="texts-header">PREMIUM</div>
              </div>
              <div class="top-heading-holder-3">
                <h1 class="top-heading">Join To Enjoy</h1>
              </div>
              <div class="text-style-holder-2">
                <div class="text-style">
                  Join the Solaris Bank community and simplify your banking.
                  Discover quick, simple and convenient way to take command of
                  your bank account, on your mobile phone.
                </div>
              </div>

              <nuxt-link to="login" class="red-button w-button"
                >Order Now</nuxt-link
              >
            </div>
            <div
              class="background"
              style="background-image: url('/images/creditBanner.jpg')"
            ></div>
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
    async getBanner() {
      try {
        const result = await this.$axios.get(
          `/banners/?bannerCategory=Banking`
        );
        this.banner = result.data.data[0];
        this.loadScript();
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
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
