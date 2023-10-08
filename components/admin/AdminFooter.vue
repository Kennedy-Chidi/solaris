<template>
  <div id="footer" class="footer"><div>www.kennytechstudios.com</div></div>
</template>

<script>
export default {
  methods: {
    setFileURL() {
      this.$store.commit("SET_URL", this.$config.FILE_URL);
    },
  },
  mounted() {
    this.setFileURL();
  },
};
</script>

<style></style>
