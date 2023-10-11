<template>
  <div class="second-blog-content-holder">
    <div>
      <div class="each-side-link-holder">
        <h1 class="blog-link-header">Categories</h1>
        <div>
          <div class="div-block-115">
            <a href="#" class="link-3">Advice</a>
          </div>
          <div class="div-block-115">
            <a href="#" class="link-3">Solaris Bank</a>
          </div>
          <div class="div-block-115">
            <a href="#" class="link-3">Credit Cards</a>
          </div>
          <div class="div-block-115">
            <a href="#" class="link-3">Financial Fraud</a>
          </div>
          <div class="div-block-115">
            <a href="#" class="link-3">Making Money</a>
          </div>
          <div class="div-block-115">
            <a href="#" class="link-3">Personal Financial</a>
          </div>
        </div>
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
          <div v-for="blog in twoBlogs" :key="blog.id" class="each-blog-post">
            <div class="blog-post-img-holder">
              <img
                :src="`${FILE_URL}/${blog.banner}`"
                loading="lazy"
                alt=""
                class="image-32"
              />
            </div>
            <div>
              <div class="blog-post-text-link-holder">
                <nuxt-link
                  :to="`/news-details/?id=${blog.id}`"
                  class="blog-post-text-link"
                  >{{ blog.title }}</nuxt-link
                >
              </div>
              <div class="blog-post-link-text">{{ formatDate(blog.time) }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="fourth-blog-side-link-holder">
        <div class="blog-link-header-holder">
          <h1 class="blog-link-header">Contacts:</h1>
        </div>
        <div class="div-bottom-border-holder">
          <div class="div-bottom-border">
            <div class="texts-headers">Address:</div>
            <div class="texts-headers">
              {{ company.companyAddress }}
            </div>
          </div>
          <div class="div-bottom-border">
            <div class="texts-headers">Email:</div>
            <a href="#" class="email-link">{{ company.email }}</a>
          </div>
          <div class="div-bottom-border">
            <div class="texts-headers">Phone:</div>
            <div class="texts-headers">{{ company.companyPhone }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company: "",
      twoBlogs: [],
    };
  },
  methods: {
    getTwo(blogs) {
      const array = [];
      for (let i = 0; i < 3; i++) {
        array.push(blogs[i]);
      }
      return array;
    },

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

    async getBlogs() {
      try {
        const result = await this.$axios.get("/blogs/?category=Banking");
        this.blogs = result.data.data;
        this.twoBlogs = this.getTwo(result.data.data);
      } catch (err) {
        console.log(err.response);
      }
    },

    async getCompany() {
      try {
        const result = await this.$axios.get(`/company`);
        this.company = result.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    FILE_URL() {
      return this.$store.state.fileURL;
    },
  },
  mounted() {
    this.getBlogs();
    this.getCompany();
  },
};
</script>

<style></style>
