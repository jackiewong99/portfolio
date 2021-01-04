<template>
  <div class="submission-success">
    <h1>
      Oops, looks like something went wrong!
    </h1>
    <router-link :to="{ name: 'Contact' }">
      <button>Back to form.</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SubmissionFail'
};
</script>

<style scoped></style>
