<template>
  <div class="sign-up">
    <home-header />
    <div class="hero-sign-up wf-section">
      <div class="contain">
        <div class="div-block-136">
          <div class="div-block-135">
            <h1 class="headings change">Login</h1>
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
                    <div class="register-top-heading-holder">
                      <h1 class="register-top-heading">Login Info</h1>
                    </div>
                    <div class="register-content-holder">
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Username <span>*</span>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="registration-input w-input"
                          maxlength="256"
                          placeholder="Enter Username"
                          v-model="username"
                        />
                      </div>
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Password <span>*</span>
                          </div>
                        </div>
                        <input
                          type="password"
                          class="registration-input w-input"
                          maxlength="256"
                          placeholder="Enter Password"
                          v-model="password"
                          required=""
                          @keypress.enter="processUserData"
                        />
                      </div>
                    </div>
                    <div>
                      Forgotten Password?
                      <nuxt-link to="/forgotten-password">Click here</nuxt-link>
                    </div>
                  </div>
                </div>

                <div v-if="showMsg" class="msg" :class="{ error: !colour }">
                  {{ msg }}
                </div>
                <div class="register-button-holder">
                  <div class="div-block-150">
                    <span
                      v-show="onRequest"
                      class="register-submit-button w-button active"
                      >Processing...</span
                    >
                    <span
                      v-show="!onRequest"
                      @click="processUserData"
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
import HomeFooter from "../components/home/HomeFooter";
import HomeHeader from "../components/home/HomeHeader";
export default {
  data() {
    return {
      username: "",
      password: "",
      complete: true,
      user: "",

      msg: "",
      colour: false,
      showMsg: false,
      onRequest: false,
    };
  },
  methods: {
    showMessage(msg) {
      this.msg = msg;
      this.showMsg = true;
      this.onRequest = false;
      setTimeout(() => {
        this.msg = "";
        this.showMsg = false;
      }, 6000);
    },

    processUserData() {
      if (!this.complete) {
      } else {
        const form = { username: this.username, password: this.password };
        this.handleLogin(form);
      }
    },

    async handleLogin(form) {
      this.onRequest = true;

      try {
        const response = await this.$auth.loginWith("local", { data: form });
        if (response.data.user.status == "User") {
          this.$router.push("dashboard");
        } else {
          this.$router.push("admin");
        }
        this.onRequest = false;
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
