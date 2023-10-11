<template>
  <div id="footer">
    <div class="footer wf-section">
      <div class="contain">
        <div class="footer-holder">
          <div class="footer-top-holder">
            <div class="each-footer-content">
              <div class="footer-logo-holder">
                <img
                  src="/SolarisWhite.png"
                  loading="lazy"
                  alt=""
                  class="image-16"
                />
              </div>
              <div class="div-block-46">
                <div class="footer-link-holder">
                  <a href="#" class="footer-link">Communities</a>
                </div>
                <div class="footer-link-holder">
                  <a href="#" class="footer-link">Alister Bank Group</a>
                </div>
                <div class="footer-link-holder">
                  <a href="#" class="footer-link">Careers</a>
                </div>
                <div class="footer-link-holder">
                  <a href="#" class="footer-link">Website Disclaimer</a>
                </div>
              </div>
            </div>
            <div class="each-footer-content">
              <div class="footer-logo-holder">
                <h1 class="footer-header">Banking with Us</h1>
              </div>
              <div class="div-block-46">
                <div class="footer-link-holder">
                  <nuxt-link to="/services" class="footer-link"
                    >Internet Banking</nuxt-link
                  >
                </div>
                <div class="footer-link-holder">
                  <nuxt-link to="/services" class="footer-link"
                    >Mobile Banking</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="each-footer-content">
              <div class="footer-logo-holder">
                <h1 class="footer-header">Customer Service</h1>
              </div>
              <div class="div-block-46">
                <div class="footer-link-holder">
                  <nuxt-link to="/about" class="footer-link"
                    >About Us</nuxt-link
                  >
                </div>

                <div class="footer-link-holder">
                  <nuxt-link to="/contact" class="footer-link"
                    >Contact Us</nuxt-link
                  >
                </div>
                <div class="footer-link-holder">
                  <nuxt-link to="terms" class="footer-link">Legal</nuxt-link>
                </div>
              </div>
            </div>
            <div class="each-footer-content">
              <div class="footer-logo-holder">
                <h1 class="footer-header">Socials</h1>
              </div>
              <div class="div-block-46">
                <div class="footer-link-holder">
                  <a href="https://twitter.com" class="footer-link">Twitter</a>
                </div>
                <div class="footer-link-holder">
                  <a href="https://instagram.com" class="footer-link"
                    >Instagram</a
                  >
                </div>
                <div class="footer-link-holder">
                  <a href="https://facebook.com" class="footer-link"
                    >Facebook</a
                  >
                </div>
                <div class="footer-link-holder">
                  <a href="https://youtube.com" class="footer-link">YouTube</a>
                </div>
                <div class="footer-link-holder">
                  <a href="https://pinterest.com" class="footer-link"
                    >Pinterest</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="footer-down-line"></div>
          <div class="footer-last-link-holder">
            <div class="footer-copyright-text-holder">
              <div class="footer-copyright-text">
                Solaris Bank © {{ new Date().getFullYear() }} / All Rights
                Reserved
              </div>
            </div>
            <div class="footer-bottom-link-holder">
              <nuxt-link to="/about" class="footer-bottom-link"
                >About Bank</nuxt-link
              ><nuxt-link to="/services" class="footer-bottom-link"
                >Services</nuxt-link
              ><nuxt-link to="/credit-cards" class="footer-bottom-link"
                >Credit Cards</nuxt-link
              ><nuxt-link to="/services" class="footer-bottom-link"
                >Careers</nuxt-link
              ><nuxt-link to="/news" class="footer-bottom-link">Blog</nuxt-link
              ><nuxt-link to="/contact" class="footer-bottom-link"
                >Contact</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setFileURL() {
      this.$store.commit("SET_URL", this.$config.FILE_URL);
    },
  },
  mounted() {
    // this.loadScript();
    this.setFileURL();
  },
};
</script>

<style></style>
