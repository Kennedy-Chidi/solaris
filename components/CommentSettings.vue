<template>
  <div class="account-wrapper review">
    <h4 class="card-wrap-title volume">Write your review</h4>
    <div class="personal-form w-form">
      <div class="form-flex">
        <div class="each-form-field flex">
          <label for="name-4" class="label">Rating</label
          ><input
            type="number"
            class="rating w-input"
            v-model="rating"
            placeholder="3.5"
          />
        </div>
        <textarea
          placeholder="Write About Us"
          v-model="comment"
          class="text-body w-input"
        ></textarea>
        <div v-if="showMsg" class="msg" :class="{ error: !colour }">
          {{ msg }}
        </div>
        <div class="button-holder">
          <span @click="processReview()" class="btn-custom w-button">Save</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: "",
      comment: "",

      msg: "",
      colour: false,
      showMsg: false,
      alertBoxStatus: false,
      alertBoxMsg: "",
    };
  },
  methods: {
    showMessage(msg) {
      this.msg = msg;
      this.showMsg = true;
      setTimeout(() => {
        this.msg = "";
        this.showMsg = false;
      }, 6000);
    },

    setReview() {
      this.rating = this.user.rating;
      this.comment = this.user.comment;
    },

    async processReview() {
      const form = {
        comment: this.comment,
        rating: this.rating,
      };

      try {
        const result = await this.$axios.patch(
          `/users/?id=${this.user.id}`,
          form
        );
        this.colour = true;
        this.showMessage("Your Review was posted successfully!");
        console.log(result.data);
      } catch (err) {
        this.showMessage(err.response.data.message);
      }
    },
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },

  mounted() {
    this.setReview();
  },

  head() {
    return {
      link: [
        { rel: "stylesheet", type: "text/css", href: "/css/dashboard.css" },
      ],
    };
  },
};
</script>

<style></style>
