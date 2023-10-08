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
            <a href="#" class="link-3">Zivik Bank</a>
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
                  >Zivik Bank Receives Top Workplace Award</a
                >
              </div>
              <div class="blog-post-link-text">August 15, 2017</div>
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
            <div class="texts-headers" v-if="company.media">
              {{ company.media[0]?.text }}
            </div>
          </div>
          <div class="div-bottom-border">
            <div class="texts-headers">Email:</div>
            <a href="#" class="email-link">{{ company.systemEmail }}</a>
          </div>
          <div class="div-bottom-border">
            <div class="texts-headers">Phone:</div>
            <div class="texts-headers" v-if="company.media">
              {{ company.media[2]?.text }}
            </div>
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
    };
  },
  methods: {
    async getCompany() {
      try {
        const result = await this.$axios.get("/company");
        this.company = await result.data.data[0];
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  mounted() {
    this.getCompany();
  },
};
</script>

<style></style>
