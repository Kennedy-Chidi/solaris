<template>
  <div class="service">
    <home-header />
    <div
      v-if="banner"
      class="service-hero wf-section"
      :style="{ backgroundImage: `url(${FILE_URL}/${banner.bannerImage})` }"
    >
      <div class="contain">
        <div class="hero-holder">
          <div class="div-block-53"><h1 class="headings">Services</h1></div>
          <div>
            <div class="sub-hero-texts">
              <a href="#" class="link">Services </a>/ Careers
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="service-content wf-section">
      <div class="contain">
        <div>
          <div class="visa-holder">
            <div class="switch return">
              <div class="card-holder">
                <img
                  src="/images/online-laptop.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 91vw, (max-width: 767px) 86vw, (max-width: 991px) 66vw, 43vw"
                  srcset="
                    /images/online-laptop.jpg 500w,
                    /images/online-laptop.jpg 550w
                  "
                  alt=""
                  class="image-17"
                />
              </div>
              <div class="card-holder-write-up">
                <div class="texts-header-holder-2">
                  <div class="texts-header">Solaris Bank EXTRA</div>
                </div>
                <div class="top-heading-holder-3">
                  <h1 class="top-heading">Online Business<br /></h1>
                </div>
                <div class="text-style-holder-2">
                  <div class="text-style">
                    With Solaris Bank Extra, you can make your business
                    transactions online across the globe with Zero-Glitches.
                    Upgrade to Solaris Bank Extra to begin your smooth business
                    experience.
                  </div>
                </div>
                <nuxt-link to="login" class="red-button w-button"
                  >Apply Online</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="service-content-2 wf-section">
      <div class="contain">
        <div class="div-block-96">
          <div style="padding-top: 100px" class="content-holder return">
            <div class="background-write">
              <div class="texts-header-holder-2">
                <div class="texts-header">{{ blog.title }}</div>
              </div>
              <div class="top-heading-holder-3">
                <h1 class="top-heading">Business <br />Plan<br /></h1>
              </div>
              <div class="text-style-holder-2">
                <div v-if="blog.content" class="text-style">
                  {{ blog.content.slice(0, 200) }}...
                </div>
              </div>
              <nuxt-link
                :to="`news-details/${blog._id}`"
                class="red-button w-button"
                >Read More</nuxt-link
              >
            </div>
            <div
              class="background-image"
              :style="{ backgroundImage: `url(${FILE_URL}/${blog.banner})` }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="service-content-3 wf-section">
      <div class="contain">
        <div class="div-block-91">
          <div class="div-block-86">
            <div class="side-img-holder">
              <div class="div-block-85">
                <img
                  src="/images/pc-2.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 91vw, (max-width: 767px) 90vw, (max-width: 991px) 82vw, 45vw"
                  srcset="/images/pc-2.jpg 500w, /images/pc-2.jpg 550w"
                  alt=""
                  class="image-23"
                />
              </div>
            </div>
            <div class="service-offer-holder">
              <div class="each-service-offer">
                <img
                  src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6406942f52648aeef990f439_digital-banking-icon%201.svg"
                  loading="lazy"
                  alt=""
                  class="image-24"
                />
                <div class="div-block-89">
                  <div>
                    <div class="service-head-text">Mobile Bank</div>
                  </div>
                  <div class="service-text">
                    Explore the power of simpler and smarter banking. Bank
                    online with over 250 services
                  </div>
                </div>
              </div>
              <div class="each-service-offer">
                <img
                  src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6406944b7ebfb4e482820e8a_payment-gateway-icon%201.svg"
                  loading="lazy"
                  alt=""
                  class="image-25"
                />
                <div class="div-block-89">
                  <div>
                    <div class="service-head-text">Online Deposit</div>
                  </div>
                  <div class="service-text">
                    Keep safe your live savings from the commercial bank
                    failures and get percentage profits during withdrawal
                  </div>
                </div>
              </div>
              <div class="each-service-offer">
                <img
                  src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/64068f9bda659305e53756ae_capitol-building-icon%201.svg"
                  loading="lazy"
                  alt=""
                  class="image-26"
                />
                <div class="div-block-89">
                  <div>
                    <div class="service-head-text">Online Business<br /></div>
                  </div>
                  <div class="service-text">
                    Make online transactions across the globe with Zero-Glitches
                    and keep track of transactions with your business partners
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="service-content-4 wf-section">
      <div class="contain">
        <div>
          <div class="contents-holder return">
            <div class="side-brand-background"></div>
            <div class="brand-write-up">
              <div class="brand-sub-header-holder">
                <div class="brand-sub-header">SOLARIS BANK EXPERIENCE</div>
              </div>
              <div class="brand-headings-holder">
                <h1 class="headings">
                  Stay connected, enjoy<br />peace of mind<br />
                </h1>
              </div>
              <div class="brand-text-holder">
                <div class="brand-text">
                  Stay connected with Solaris Bank to get the best experience of
                  online banking with peace of mind on where your treasure lies
                  safe in your hands.
                  <br />
                </div>
              </div>
              <div class="div-block-93">
                <div class="div-block-133">
                  <nuxt-link to="signup" class="white-button w-button"
                    >Get Started</nuxt-link
                  >
                </div>
                <div class="div-block-134">
                  <nuxt-link to="deposit" class="white-button w-button"
                    >Make Deposit</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="service-content-5 wf-section">
      <div class="contain">
        <div class="div-block-95">
          <div
            data-delay="4000"
            data-animation="slide"
            class="slider-3 w-slider"
            data-autoplay="false"
            data-easing="ease"
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div class="w-slider-mask">
              <div class="slide-img-link w-slide">
                <a href="#" class="slide-link-img w-inline-block"
                  ><div class="top-slide-header-holder">
                    <h1 class="top-slide-header">Business Banking</h1>
                  </div>
                  <img
                    src="/images/5.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 31vw, 277.170166015625px"
                    srcset="/images/5.jpg 500w, /images/5.jpg 580w"
                    alt=""
                    class="image-27"
                /></a>
              </div>
              <div class="slide-img-link w-slide">
                <a href="#" class="slide-link-img w-inline-block"
                  ><div class="top-slide-header-holder">
                    <h1 class="top-slide-header">Personal Checking</h1>
                  </div>
                  <img
                    src="/images/1.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 31vw, 277.170166015625px"
                    srcset="/images/1.jpg 500w, /images/1.jpg 580w"
                    alt=""
                    class="image-27"
                /></a>
              </div>
              <div class="slide-img-link w-slide">
                <a href="#" class="slide-link-img w-inline-block"
                  ><div class="top-slide-header-holder">
                    <h1 class="top-slide-header">Personal Savings</h1>
                  </div>
                  <img
                    src="/images/2.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 31vw, 277.170166015625px"
                    srcset="
                      /images/2.jpg  500w,
                      /images/2.jpg  800w,
                      /images/2.jpg 1080w,
                      /images/2.jpg 1160w
                    "
                    alt=""
                    class="image-27"
                /></a>
              </div>
              <div class="slide-img-link w-slide">
                <a href="#" class="slide-link-img w-inline-block"
                  ><div class="top-slide-header-holder">
                    <h1 class="top-slide-header">Personal Loans</h1>
                  </div>
                  <img
                    src="/images/3.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 31vw, 277.170166015625px"
                    srcset="
                      /images/3.jpg  500w,
                      /images/3.jpg  800w,
                      /images/3.jpg 1080w,
                      /images/3.jpg 1160w
                    "
                    alt=""
                    class="image-27"
                /></a>
              </div>
              <div class="slide-img-link w-slide">
                <a href="#" class="slide-link-img w-inline-block"
                  ><div class="top-slide-header-holder">
                    <h1 class="top-slide-header">SBA Loans</h1>
                  </div>
                  <img
                    src="/images/4.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 31vw, 277.170166015625px"
                    srcset="
                      /images/4.jpg  500w,
                      /images/4.jpg  800w,
                      /images/4.jpg 1080w,
                      /images/4.jpg 1160w
                    "
                    alt=""
                    class="image-27"
                /></a>
              </div>
            </div>
            <div class="left-arrow-3 w-slider-arrow-left">
              <div class="w-icon-slider-left"></div>
            </div>
            <div class="right-arrow-3 w-slider-arrow-right">
              <div class="w-icon-slider-right"></div>
            </div>
            <div class="w-slider-nav w-slider-nav-invert w-round"></div>
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
      blog: "",
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

    async getBlogs() {
      try {
        const result = await this.$axios.get("/blogs/?category=Banking");
        this.blog = result.data.data[1];
      } catch (err) {
        console.log(err.response);
      }
    },

    async getBanner() {
      try {
        const result = await this.$axios.get(
          `/banners/?bannerCategory=Services`
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
    this.getBlogs();
  },
  components: { HomeFooter },
};
</script>

<style></style>
