<template>
  <div class="input-wrapper w-form">
    <form
      id="email-form"
      name="email-form"
      data-name="Email Form"
      method="get"
      class="input-form big"
    >
      <div class="each-input sm">
        <label for="name-4" class="input-label"
          >Allow Recaptch<span class="important">*</span></label
        >
        <div class="check-wrapper">
          <div class="check-indicator"></div>
        </div>
      </div>
      <div class="each-input sm">
        <label for="name-4" class="input-label"
          >Allow Country<span class="important">*</span></label
        >
        <div class="check-wrapper">
          <div class="check-indicator"></div>
        </div>
      </div>
      <div class="each-input sm">
        <label for="name-4" class="input-label"
          >Allow Identity<span class="important">*</span></label
        >
        <div class="check-wrapper">
          <div class="check-indicator"></div>
        </div>
      </div>
      <div class="each-input sm">
        <label for="name-4" class="input-label"
          >Allow Phone Number<span class="important">*</span></label
        >
        <div class="check-wrapper">
          <div class="check-indicator active"></div>
        </div>
      </div>
    </form>
    <div class="w-form-done">
      <div>Thank you! Your submission has been received!</div>
    </div>
    <div class="w-form-fail">
      <div>Oops! Something went wrong while submitting the form.</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
