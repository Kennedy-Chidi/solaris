<template>
  <div class="sign-up">
    <home-header />
    <div class="hero-sign-up wf-section">
      <div class="contain">
        <div class="div-block-136">
          <div class="div-block-135">
            <h1 class="headings change">Forgotten Password</h1>
          </div>
          <div>
            <div class="sub-hero-texts change-color">
              Enter your email to reset your password.
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
                <div class="form-section-holder">
                  <div class="each-register-holder">
                    <div class="register-content-holder">
                      <div class="register-form-holder auto">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Email <span>*</span>
                          </div>
                        </div>
                        <input
                          type="email"
                          class="registration-input w-input"
                          maxlength="256"
                          placeholder="Enter Email"
                          v-model="email"
                        />
                      </div>
                    </div>
                    <div>
                      Already have an account?
                      <nuxt-link to="/login">Login</nuxt-link>
                    </div>
                  </div>
                </div>
                <div v-if="showMsg" class="msg" :class="{ error: !colour }">
                  {{ msg }}
                </div>
                <div class="register-button-holder">
                  <div class="div-block-150">
                    <span
                      @click="processEmail"
                      class="register-submit-button w-button active"
                      >Submit</span
                    >
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
      email: "",

      user: "",

      msg: "",
      colour: false,
      showMsg: false,
    };
  },
  methods: {
    showMessage(msg) {
      this.msg = msg;
      this.showMsg = true;
      //   setTimeout(() => {
      //     this.msg = "";
      //     this.showMsg = false;
      //   }, 6000);
    },

    async processEmail() {
      const form = {
        email: this.email,
      };
      try {
        await this.$axios.patch(`/users/forgotten-password`, form);
        this.colour = true;
        this.showMessage(
          "Please verify your email and click on the link button to continue."
        );
      } catch (err) {
        this.showMessage(err.response.data.message);
      }
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
  },

  mounted() {
    this.loadScript();
    if (this.isAuthenticated) {
      this.$router.push("dashboard");
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },
  },
  components: { HomeFooter, HomeHeader },
};
</script>

<style>
.form-holder.login {
  max-width: 600px;
  margin: 0 auto;
}

.register-form-holder.auto {
  margin: 0 auto;
  margin-bottom: 10px;
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
