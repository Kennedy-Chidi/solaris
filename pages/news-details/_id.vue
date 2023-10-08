<template>
  <div class="news">
    <home-header />
    <div class="news-hero wf-section">
      <div class="contain">
        <div class="blog-hero-holder">
          <div class="div-block-53">
            <h1 class="headings change">Blog</h1>
          </div>
          <div>
            <div class="sub-hero-texts change-color">
              <nuxt-link to="/" class="link change-color">Home </nuxt-link>/
              Blog
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="news-content wf-section">
      <div class="contain">
        <div class="blog-content-holder">
          <div class="first-blog-content-holder">
            <div class="blog-holder">
              <div class="blog-link-background-holder">
                <span
                  :style="{
                    backgroundImage: `url(${FILE_URL}/${blog.banner})`,
                  }"
                  class="blog-link-background w-inline-block"
                ></span>
              </div>
              <div class="blog-bottom-text-holder">
                <div class="blog-icon-holder">
                  <a href="#" class="comment-amount-holder w-inline-block"
                    ><img
                      src="/images/author.svg"
                      loading="lazy"
                      alt=""
                      class="image-29"
                    />
                    <div class="link-amount">
                      {{ blog.author }}
                    </div></a
                  >
                </div>
                <div class="blog-icon-holder">
                  <a href="#" class="comment-amount-holder w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/64062db80c1ec3bec200ef36_send-message-icon%201.svg"
                      loading="lazy"
                      alt=""
                      class="image-29"
                    />
                    <div class="link-amount">
                      {{ formatDate(blog.date) }}
                    </div></a
                  >
                </div>
              </div>
              <div class="news-head-link-holder">
                <a href="#" class="news-head-link">{{ blog.subtitle }}</a>
              </div>
              <div class="blog-content-text-holder">
                <div class="blog-content-text">
                  {{ blog.content }}
                </div>
              </div>

              <div class="last-news-text-holder">
                <div class="hold-last-news-text">
                  <div class="last-news-text">July 21, 2017 -</div>
                </div>
                <a href="#" class="last-news-texts-link">cmsmasters</a>
              </div>
            </div>
          </div>
          <div class="second-blog-content-holder">
            <div>
              <div class="form-space-bar-holder w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                >
                  <div class="space-bar-holder">
                    <input
                      type="text"
                      class="space-bar w-input"
                      maxlength="256"
                      name="name"
                      data-name="Name"
                      placeholder="enter Keywords"
                      id="name"
                    /><img
                      src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/64063f49ee6ec7493c7588d5_search-line-icon%20(1)%202.svg"
                      loading="lazy"
                      alt=""
                      class="image-31"
                    />
                  </div>
                </form>
              </div>

              <div class="second-blog-side-link-holder">
                <div class="blog-link-header-holder">
                  <h1 class="blog-link-header">Blog</h1>
                </div>
                <div class="blog-post-link-holder">
                  <div class="comment-holder">
                    <a href="#" class="comment red">Latest</a>
                  </div>
                  <div class="comment-holder">
                    <a href="#" class="comment">- Popular</a>
                  </div>
                  <a href="#" class="comment">- Comment</a>
                </div>
                <div class="blog-post-holder">
                  <div class="each-blog-post">
                    <div class="blog-post-img-holder">
                      <img
                        src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6408df24e4cf6a2ab0fb0f3a_8-150x150.jpg"
                        loading="lazy"
                        alt=""
                        class="image-32"
                      />
                    </div>
                    <div>
                      <div class="blog-post-text-link-holder">
                        <a href="#" class="blog-post-text-link"
                          >Zivik Bank Receives Top Workplace Award</a
                        >
                      </div>
                      <div class="blog-post-link-text">August 15, 2017</div>
                    </div>
                  </div>
                  <div class="each-blog-post">
                    <div class="blog-post-img-holder">
                      <img
                        src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6408e6218291c60570f4ecc9_6-150x150.jpg"
                        loading="lazy"
                        alt=""
                        class="image-32"
                      />
                    </div>
                    <div class="blog-post-text">
                      <div class="blog-post-text-link-holder">
                        <a href="#" class="blog-post-text-link"
                          >Zivik Bank Announce Officer promotion</a
                        >
                      </div>
                      <div class="blog-post-link-text">August 15, 2017</div>
                    </div>
                  </div>
                  <div class="each-blog-post">
                    <div class="blog-post-img-holder">
                      <img
                        src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6408e6a1e4cf6a832afb8f53_7-75x75.jpg"
                        loading="lazy"
                        alt=""
                        class="image-32"
                      />
                    </div>
                    <div>
                      <div class="blog-post-text-link-holder">
                        <a href="#" class="blog-post-text-link"
                          >ZivikBank Receives Top Workplace Award</a
                        >
                      </div>
                      <div class="blog-post-link-text">August 15, 2017</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="third-blog-side-link-holder">
                <div class="blog-link-header-holder">
                  <h1 class="blog-link-header">Blog</h1>
                </div>
                <div
                  data-delay="4000"
                  data-animation="slide"
                  class="slider-4 w-slider"
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
                    <div class="slide-post w-slide">
                      <a href="#" class="slide-post-img w-inline-block"></a>
                    </div>
                    <div class="slide-post w-slide">
                      <a
                        href="#"
                        class="slide-post-img second w-inline-block"
                      ></a>
                    </div>
                    <div class="slide-post w-slide">
                      <a
                        href="#"
                        class="slide-post-img third w-inline-block"
                      ></a>
                    </div>
                  </div>
                  <div class="left-arrow-4 w-slider-arrow-left">
                    <div class="w-icon-slider-left"></div>
                  </div>
                  <div class="right-arrow-4 w-slider-arrow-right">
                    <div class="w-icon-slider-right"></div>
                  </div>
                  <div class="w-slider-nav w-slider-nav-invert w-round"></div>
                </div>
              </div>
              <div class="fourth-blog-side-link-holder">
                <div class="blog-link-header-holder">
                  <h1 class="blog-link-header">Contacts:</h1>
                </div>
                <div class="div-bottom-border-holder">
                  <div class="div-bottom-border">
                    <div class="texts-headers">Address:</div>
                    <div class="texts-headers">Brooklyn, 10036, US</div>
                  </div>
                  <div class="div-bottom-border">
                    <div class="texts-headers">Email:</div>
                    <a href="#" class="email-link">example@example.com</a>
                  </div>
                  <div class="div-bottom-border">
                    <div class="texts-headers">Phone:</div>
                    <div class="texts-headers">1-800-123-1234</div>
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
import HomeFooter from "../../components/home/HomeFooter.vue";
import HomeHeader from "../../components/home/HomeHeader.vue";
export default {
  data() {
    return {
      blog: "",
    };
  },
  methods: {
    formatDate(data) {
      if (data == null || data == undefined) {
        return "N/A";
      }
      const date = new Date(data).getTime(); // Note that month is zero-indexed in JavaScript
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        suffix: (day) => {
          if (day === 1 || day === 21 || day === 31) {
            return "st";
          } else if (day === 2 || day === 22) {
            return "nd";
          } else if (day === 3 || day === 23) {
            return "rd";
          } else {
            return "th";
          }
        },
      };

      return new Intl.DateTimeFormat("en-US", options).format(date);
    },

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

    async getBlog(id) {
      try {
        const result = await this.$axios.get(`/blog/${id}`);
        this.blog = result.data.data;
        this.loadScript();
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
  mounted() {
    this.getBlog(this.$route.params.id);
  },
  components: { HomeFooter, HomeHeader },
};
</script>

<style></style>
