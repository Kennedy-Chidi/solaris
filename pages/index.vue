<template>
  <div class="home">
    <div class="hero wf-section">
      <home-header />
      <div
        data-delay="6500"
        data-animation="fade"
        class="slider w-slider"
        data-autoplay="true"
        data-easing="ease-out-quint"
        data-hide-arrows="false"
        data-disable-swipe="false"
        data-autoplay-limit="0"
        data-nav-spacing="3"
        data-duration="700"
        data-infinite="true"
      >
        <div v-if="banners" class="w-slider-mask">
          <div
            v-for="banner in banners"
            :key="banner._id"
            class="slide w-slide"
            :style="{
              backgroundImage: `url(${FILE_URL}/${banner.bannerImage})`,
            }"
          >
            <div class="contain">
              <div class="home-slide-content-holder">
                <h1 class="hero-heading">
                  {{ banner.bannerTitle }}
                </h1>
                <div class="home-hero-text">{{ banner.bannerSubtitle }}</div>
                <nuxt-link to="/signup" class="button w-button"
                  >Get Started</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="left-arrow w-slider-arrow-left">
          <div class="w-icon-slider-left"></div>
        </div>
        <div class="right-arrow w-slider-arrow-right">
          <div class="w-icon-slider-right"></div>
        </div>
        <div class="w-slider-nav w-round"></div>
      </div>
    </div>

    <div class="contents wf-section">
      <div class="contain">
        <div class="home-content-one-holder">
          <div class="home-content-one-content-holder">
            <div class="top-head-holder">
              <h1 class="top-head">
                Presenting products and services that are right for you
              </h1>
            </div>
            <div class="product-holder">
              <div class="each-products-holder">
                <img
                  src="/images/online-business.png"
                  loading="lazy"
                  alt=""
                  class="image-6"
                />
                <div class="text-holder">
                  <div class="service-head-text">Online Business<br /></div>
                </div>
                <div class="div-block-90">
                  <div class="service-text">
                    Explore the power of simpler and smarter banking. Bank
                    online with over 250 services
                  </div>
                </div>
                <nuxt-link to="/login" class="texts-link">Apply Now</nuxt-link>
              </div>
              <div class="each-products-holder">
                <img
                  src="/images/business-plan.png"
                  loading="lazy"
                  alt=""
                  class="image-7"
                />
                <div class="text-holder">
                  <div class="service-head-text">Business Plan<br /></div>
                </div>
                <div class="div-block-90">
                  <div class="service-text">
                    From shares to shopping centres and term deposits to toll
                    roads, there’s a huge range of investments to choose
                  </div>
                </div>
                <nuxt-link to="/login" class="texts-link"
                  >Take the first step</nuxt-link
                >
              </div>
              <div class="each-products-holder">
                <img
                  src="/images/mobile-bank.png"
                  loading="lazy"
                  alt=""
                  class="image-8"
                />
                <div class="text-holder">
                  <div class="service-head-text">Mobile Bank<br /></div>
                </div>
                <div class="div-block-90">
                  <div class="service-text">
                    Explore the power of simpler and smarter banking. Bank
                    online with over 250 services
                  </div>
                </div>
                <nuxt-link to="/about" class="texts-link"
                  >Find out more</nuxt-link
                >
              </div>
              <div class="each-products-holder">
                <img
                  src="/images/online-deposit.svg"
                  loading="lazy"
                  alt=""
                  class="image-9"
                />
                <div class="text-holder">
                  <div class="service-head-text">Online Deposit<br /></div>
                </div>
                <div class="div-block-90">
                  <div class="service-text">
                    Explore the power of simpler and smarter banking. Bank
                    online with over 250 services
                  </div>
                </div>
                <nuxt-link to="/services" class="texts-link"
                  >Learn more</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-two wf-section">
      <div class="contain">
        <div class="tabs-holder">
          <div class="top-heading-holder">
            <h1 class="top-heading">Business Banking<br /></h1>
          </div>
          <div
            data-current="Tab 1"
            data-easing="ease"
            data-duration-in="300"
            data-duration-out="100"
            class="w-tabs"
          >
            <div class="tabs-menu w-tab-menu">
              <a
                v-for="(blog, int) in twoBlogs"
                :key="blog.id"
                :class="{ 'w--current': int == tab }"
                @click="tab = int"
                class="tab-link w-inline-block w-tab-link"
                ><div class="tab-link-texts">{{ blog.title }}</div></a
              >
            </div>
            <div class="w-tab-content">
              <div
                v-for="(blog, int) in blogs"
                :key="int"
                class="each-tab"
                :class="{ hide: int != tab }"
              >
                <div class="tab-content-holder">
                  <div class="tab-img-holder">
                    <img
                      :src="`${FILE_URL}/${blog.banner}`"
                      loading="lazy"
                      sizes="(max-width: 479px) 91vw, (max-width: 767px) 95vw, (max-width: 991px) 71vw, 45vw"
                      :srcset="`${FILE_URL}/${blog.banner} 500w,
                        ${FILE_URL}/${blog.banner}      508w`"
                      alt=""
                      class="image-11"
                    />
                  </div>
                  <div class="tab-text-content-holder">
                    <div class="tab-header-holder">
                      <h1 class="tab-header">
                        {{ blog.title }}
                      </h1>
                    </div>
                    <div class="tab-text-holder">
                      <div class="tab-text">
                        {{ blog.content.slice(0, 200) }}..
                      </div>
                    </div>
                    <nuxt-link
                      :to="`news-details/${blog.id}`"
                      class="red-button w-button"
                      >Learn more</nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-four wf-section">
      <div class="div-block-37">
        <div class="contain">
          <div class="contents-holder">
            <div
              class="full-img"
              style="background-image: url('/images/happyClient.jpg')"
            ></div>
            <div class="brand-write-up">
              <div class="brand-sub-header-holder">
                <div class="brand-sub-header">LEARNING CENTER</div>
              </div>
              <div class="brand-headings-holder">
                <h1 class="headings">
                  Making internet a brand new<br />experience<br />
                </h1>
              </div>
              <div class="brand-text-holder">
                <div class="brand-text">
                  Online banking can save you a lot of time and effort, you
                  can<br />undertake most transactions<br />
                  from the comforts of your<br />home. However, it is crucial to
                  use internet banking safely
                </div>
              </div>
              <nuxt-link to="/news" class="white-button w-button"
                >Learn more</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contents-five wf-section">
      <div class="contain">
        <div class="slider-holder">
          <div class="slide-content-holder">
            <div class="top-head-holder-2">
              <h1 class="top-head">Your news and information<br /></h1>
            </div>
            <div
              data-delay="4000"
              data-animation="slide"
              class="slider-2 w-slider"
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
                <div
                  v-for="blog in blogs"
                  :key="blog.id"
                  class="slide-return w-slide"
                >
                  <div class="slide-return-holder">
                    <div class="slide-return-img-holder">
                      <a href="#" class="news-link w-inline-block"
                        ><img
                          :src="`${FILE_URL}/${blog.banner}`"
                          loading="lazy"
                          sizes="(max-width: 479px) 91vw, (max-width: 767px) 46vw, (max-width: 991px) 31vw, 22vw"
                          :srcset="`${FILE_URL}/${blog.banner} 500w,
                            ${FILE_URL}/${blog.banner} 580w`"
                          alt=""
                          class="image-15"
                      /></a>
                    </div>
                    <div class="slide-return-writeup-holder">
                      <a href="#" class="slide-link-texts">{{ blog.title }}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="left-arrow-2 w-slider-arrow-left">
                <div class="w-icon-slider-left"></div>
              </div>
              <div class="right-arrow-2 w-slider-arrow-right">
                <div class="w-icon-slider-right"></div>
              </div>
              <div class="w-slider-nav w-slider-nav-invert w-round"></div>
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
import HomeHeader from "../components/home/HomeHeader";
export default {
  data() {
    return {
      banners: [],
      blogs: [],
      twoBlogs: [],
      tab: 0,
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

    getTwo(blogs) {
      const array = [];
      for (let i = 0; i < 2; i++) {
        array.push(blogs[i]);
      }
      return array;
    },

    async getBlogs() {
      try {
        const result = await this.$axios.get("/blogs/?category=Banking");
        this.blogs = result.data.data;
        this.twoBlogs = this.getTwo(result.data.data);
      } catch (err) {
        console.log(err.response);
      }
    },

    async getBanner() {
      try {
        const result = await this.$axios.get(`/banners/?bannerCategory=Home`);
        this.banners = result.data.data;
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

  components: { HomeFooter, HomeHeader },
};
</script>

<style>
.tabs-menu.w-tab-menu {
  justify-content: flex-start;
}

.tabs-menu.w-tab-menu a {
  margin: 0 10px;
}

.each-tab.hide {
  display: none;
}
</style>
