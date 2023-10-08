<template>
  <div class="main-wrapper pages">
    <admin-confirmation :msg="confirmMsg" :state="confirmState" />
    <AdminNavigation />
    <div class="body-wrapper">
      <AdminTopHeader />
      <div class="content-wrapper">
        <div class="custom-card plan">
          <div class="pages-navbar">
            <span
              class="button w-button"
              :class="{ 'not-active': currentTag != 'Banner' }"
              @click="setTag('Banner')"
              >Banner</span
            >
            <span
              class="button w-button"
              :class="{ 'not-active': currentTag != 'About' }"
              @click="setTag('About')"
              >About</span
            >
            <span
              class="button w-button"
              :class="{ 'not-active': currentTag != 'FAQ' }"
              @click="setTag('FAQ')"
              >FAQ</span
            >
            <span
              class="button w-button"
              :class="{ 'not-active': currentTag != 'Terms' }"
              @click="setTag('Terms')"
              >Terms</span
            >
            <span
              class="button w-button"
              :class="{ 'not-active': currentTag != 'Signup' }"
              @click="setTag('Signup')"
              >Signup</span
            >
            <span
              class="button w-button"
              :class="{ 'not-active': currentTag != 'Card' }"
              @click="setTag('Card')"
              >Card</span
            >
            <span
              class="button w-button"
              :class="{ 'not-active': currentTag != 'Blog' }"
              @click="setTag('Blog')"
              >Blog</span
            >
          </div>
          <admin-page-banner v-if="currentTag == 'Banner'" />
          <admin-page-about v-else-if="currentTag == 'About'" />
          <admin-page-faq v-else-if="currentTag == 'FAQ'" />
          <admin-page-terms v-else-if="currentTag == 'Terms'" />
          <admin-page-signup v-else-if="currentTag == 'Signup'" />
          <admin-card v-else-if="currentTag == 'Card'" />
          <admin-page-blog v-else-if="currentTag == 'Blog'" />
        </div>
      </div>
      <div class="content-wrapper">
        <Instruction />
      </div>
      <AdminFooter />
    </div>
  </div>
</template>

<script>
import AdminCard from "../../components/admin/AdminCard.vue";
import AdminFooter from "../../components/admin/AdminFooter.vue";
import AdminNavigation from "../../components/admin/AdminNavigation.vue";
import AdminPageAbout from "../../components/admin/AdminPageAbout.vue";
import AdminTopHeader from "../../components/admin/AdminTopHeader.vue";
import Instruction from "../../components/admin/Instruction.vue";
export default {
  data() {
    return {
      confirmMsg: "",
      confirmState: true,
      currentTag: "Banner",
    };
  },
  methods: {
    setTag(tag) {
      this.currentTag = tag;
    },
  },
  components: {
    AdminFooter,
    Instruction,
    AdminNavigation,
    AdminTopHeader,
    AdminPageAbout,
    AdminCard,
  },
};
</script>

<style></style>
