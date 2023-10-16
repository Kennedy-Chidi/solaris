<template>
  <div class="about-us">
    <home-header />
    <div
      class="about-hero wf-section"
      :style="{ backgroundImage: `url(${FILE_URL}/${banner.bannerImage})` }"
    >
      <div class="contain">
        <div class="hero-holder">
          <div class="div-block-53">
            <h1 class="headings">About Bank</h1>
          </div>
          <div>
            <div class="sub-hero-texts">
              <a href="#" class="link">Home</a> / About Bank
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-content wf-section">
      <div class="contain">
        <div class="visa-holder">
          <div class="card-switch return">
            <div class="card-holder">
              <img
                src="/images/Light-Card.svg"
                loading="lazy"
                alt=""
                class="image-17"
              />
            </div>
            <div class="card-holder-write-up">
              <div class="texts-header-holder-2">
                <div class="texts-header">Solaris Bank</div>
              </div>
              <div class="top-heading-holder-3">
                <h1 class="top-heading">
                  What is Solaris Bank and why does it give out cards?
                </h1>
              </div>
              <div v-if="about" class="text-style-holder-2">
                <div class="text-style">
                  {{ about.content }}
                </div>
              </div>
              <nuxt-link to="/signup" class="red-button w-button"
                >Get Started</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-conten--2 wf-section">
      <div class="contain">
        <div class="about-content-2-holder">
          <div class="div-block-65">
            <h1 class="top-heading change">
              It’s more than just Bank<br />We connect people
            </h1>
          </div>
          <div class="videos-img">
            <img
              src="/images/33.png"
              loading="lazy"
              sizes="(max-width: 479px) 91vw, (max-width: 991px) 95vw, 45vw"
              srcset="/images/33.png 500w, /images/33.png 663w"
              alt=""
              class="image-19"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="about-content-3 wf-section">
      <div class="contain">
        <div class="div-block-69">
          <div class="div-block-68">
            <h1 class="top-heading">Our Founders</h1>
          </div>
          <div class="profile-holder">
            <div class="each-profile-holder">
              <div class="profile">
                <img
                  src="https://th.bing.com/th/id/OIP.RsoBQA0goxLF5dY2VgCewgAAAA?pid=ImgDet&rs=1"
                  loading="lazy"
                  alt=""
                  class="image-20"
                />
              </div>
              <div class="div-block-72">
                <h1 class="profile-name">Max Turner</h1>
              </div>
              <div class="div-block-73">
                <div class="red-texts">Financial Analyst<br /></div>
              </div>
            </div>
            <div class="each-profile-holder">
              <div class="profile">
                <img
                  src="/images/1-1.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 200.00001525878906px, 240.00001525878906px"
                  srcset="/images/1-1.jpg 500w, /images/1-1.jpg 580w"
                  alt=""
                  class="image-20"
                />
              </div>
              <div class="div-block-72">
                <h1 class="profile-name">Christopher Adams</h1>
              </div>
              <div class="div-block-73">
                <div class="red-texts">Co-Founder<br /></div>
              </div>
            </div>
            <div class="each-profile-holder">
              <div class="profile">
                <img
                  src="/images/3-1.jpg"
                  loading="lazy"
                  alt=""
                  class="image-20"
                />
              </div>
              <div class="div-block-72">
                <h1 class="profile-name">James Jameson</h1>
              </div>
              <div class="div-block-73">
                <div class="red-texts">Founder<br /></div>
              </div>
            </div>
          </div>
          <!----<div class="black-button-holder">
            <a href="#" class="black-button w-button">View All</a>
          </div>-->
        </div>
      </div>
    </div>
    <div class="about-content-4 wf-section">
      <div class="contain">
        <div>
          <div class="visa-holder">
            <div class="card-switch">
              <div class="video-player">
                <img
                  src="/images/work-at.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 91vw, (max-width: 767px) 95vw, (max-width: 991px) 76vw, 43vw"
                  srcset="/images/work-at.jpg 500w, /images/work-at.jpg 615w"
                  alt=""
                  class="image-21"
                />
              </div>
              <div class="card-holder-write-up">
                <div class="texts-header-holder-2">
                  <div class="texts-header">PREMIUM</div>
                </div>
                <div class="top-heading-holder-3">
                  <h1 class="top-heading">Work at Solaris Bank</h1>
                </div>
                <div class="sub-top-header-holder">
                  <div class="sub-top-header">
                    A unique innovative company that will allow you to:<br />
                  </div>
                </div>
                <div class="text-style-holder-2">
                  <div class="text-style">
                    Account currency: USD, EUR Discounts and privileges from
                    Visa and MasterCard payment systems Issue of additional bank
                    cards Card issue within a payroll card programme
                  </div>
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
import HomeFooter from "../components/home/HomeFooter";
export default {
  data() {
    return {
      banner: "",
      about: "",
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

    async getBlogs() {
      try {
        const result = await this.$axios.get("/blog/?category=Banking");
        this.blogs = result.data.data;
      } catch (err) {
        console.log(err.response);
      }
    },

    async getBanner() {
      try {
        const result = await this.$axios.get(`/banners/?bannerCategory=About`);
        this.banner = result.data.data[0];
        this.loadScript();
      } catch (err) {
        console.log(err);
      }
    },

    async getAbout() {
      try {
        const result = await this.$axios.get(`/about`);
        this.about = result.data.data[0];
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getBanner();
    this.getAbout();
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
