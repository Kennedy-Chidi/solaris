<template>
  <div>Home Page</div>
</template>

<script>
export default {
  data() {
    return {
      bannerCategories: ["Home", "About", "FAQ", "Signup"],
    };
  },
  methods: {
    async setBannerCategories() {
      const form = {
        bannerCategories: this.bannerCategories,
      };
      try {
        await this.$axios.post("/company/set-banner", form);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getBanners() {
      try {
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getBannerCategory() {
      try {
        const result = await this.$axios.get("/company");
        if (
          result.data.data[0].bannerCategories == undefined ||
          result.data.data[0].bannerCategories == null ||
          result.data.data[0].bannerCategories.length == 0
        ) {
          this.setBannerCategories();
        } else {
          this.getBanners();
        }
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },

  mounted() {
    this.getBannerCategory();
  },
};
</script>

<style></style>
