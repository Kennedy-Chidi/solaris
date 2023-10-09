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
                      {{ formatDate(blog.time) }}
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
                  <div class="last-news-text">
                    {{ formatDate(blog.time) }} -
                  </div>
                </div>
                <a href="#" class="last-news-texts-link">{{ blog.author }}</a>
              </div>
            </div>
          </div>
          <aside-news />
        </div>
      </div>
    </div>
    <home-footer />
  </div>
</template>

<script>
import AsideNews from "../../components/AsideNews.vue";
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
        const result = await this.$axios.get(`/blogs/?id=${id}`);
        this.blog = result.data;
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
    this.getBlog(this.$route.query.id);
  },
  components: { HomeFooter, HomeHeader, AsideNews },
};
</script>

<style></style>
