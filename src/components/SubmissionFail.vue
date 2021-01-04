<template>
  <div class="submission-fail">
    <h1 class="submission-fail-text">
      Oops, looks like something went wrong! Try refreshing the page.
    </h1>
  </div>
</template>

<script>
export default {
  name: 'SubmissionFail'
};
</script>

<style scoped>
.submission-fail {
  display: block;
  position: fixed;
  z-index: 10;
  top: 6%;
  left: 0;
  text-align: left;
}

.submission-fail::before {
  filter: blur(5px);
  -webkit-filter: blur(5px);
  z-index: -1;
}

.submission-fail-text {
  color: #275854;
}
</style>
