<template>
  <div class="confirm-action" :class="{ hide: state }">
    <div class="confirm-box">
      <div>{{ msg }}</div>
      <div class="confirm-holder">
        <span @click="confirm('yes')" class="button w-button">Yes</span
        ><span @click="confirm('no')" class="button w-button">No</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
    },
    state: {
      type: Boolean,
    },
  },

  methods: {
    getState() {
      return this.$store.state.confirmState;
    },

    confirm(data) {
      this.$emit("confirm", data);
    },
  },
  computed: {},
};
</script>

<style></style>
