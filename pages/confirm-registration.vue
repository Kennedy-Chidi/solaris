<template>
  <div class="sign-up">
    <home-header />
    <div class="hero-sign-up wf-section">
      <div class="contain">
        <div class="div-block-136">
          <div class="div-block-135">
            <h1 v-if="status" class="headings change">CONGRATULATIONS</h1>
            <h1 v-else class="headings change">CONFIRMING STATUS...</h1>
          </div>
          <div>
            <div v-if="status" class="sub-hero-texts change-color">
              Registration Successful
            </div>
            <div v-else class="sub-hero-texts change-color">
              Registration Pending...
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="signup-content wf-section">
      <div class="contain">
        <div class="signup-hero-holder">
          <div class="form-holder w-form login">
            <div>
              <div class="form-register-holder">
                <div class="register-rate-holder">
                  <div class="register-rate-completing-holder">
                    <div class="register-rate-complete"></div>
                    <div class="register-rate-uncomplete"></div>
                  </div>
                </div>
                <div v-if="status" class="form-section-holder">
                  <div class="each-register-holder">
                    <div class="register-top-heading-holder">
                      <h1 class="register-top-heading">
                        Your account is ready,
                        <nuxt-link to="/login">click login</nuxt-link> to start
                        enjoying your online banking experience with Zivik Bank
                        and check your email to confirm your account details.
                      </h1>
                    </div>
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
import HomeFooter from "../components/home/HomeFooter.vue";
import HomeHeader from "../components/home/HomeHeader.vue";
export default {
  data() {
    return {
      status: false,

      msg: "",
      colour: false,
      showMsg: false,
    };
  },
  methods: {
    async activateUser(id) {
      try {
        const result = await this.$axios.patch(`/users/activate-user/${id}`, {
          active: true,
        });
        this.status = true;
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },

  mounted() {
    if (this.$route.query.token) {
      this.activateUser(this.$route.query.token);
    }
  },

  components: { HomeFooter, HomeHeader },
};
</script>

<style>
.form-holder.login {
  max-width: 600px;
  margin: 0 auto;
}

.msg {
  padding: 10px;
  text-align: center;
  color: green;
  letter-spacing: 1px;
}

.msg.error {
  color: red;
}

.arrow-holder {
  cursor: pointer;
}
</style>
