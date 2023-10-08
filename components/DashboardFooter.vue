<template>
  <div v-if="company" id="footer" class="dashboard-footer">
    <h3 class="footer-text">
      {{ company.companyName }}... We are here for you!
    </h3>
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
        this.company = result.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  mounted() {
    this.getCompany();
  },
};
</script>

<style></style>
