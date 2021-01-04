<template>
  <div class="submission-success">
    <h1>
      Thank you for your interest! I will respond as soon as possible, have a
      nice day!
    </h1>
    <router-link :to="{ name: 'Contact' }">
      <button>Back to form.</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SubmissionSuccess'
};
</script>

<style scoped></style>
