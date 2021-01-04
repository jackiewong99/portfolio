<template>
  <div class="submission-success">
    <h1 class="submission-success-text">
      Thank you for your interest! I will respond as soon as possible, have a
      nice day!
    </h1>
    <router-link :to="{ name: 'Home' }">
      <button class="nav-btn">Back to website.</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SubmissionSuccess'
};
</script>

<style scoped>
.submission-success {
  display: block;
  position: fixed;
  z-index: 10;
  top: 6%;
  left: 0;
  text-align: left;
}

.submission-success::before {
  filter: blur(5px);
  -webkit-filter: blur(5px);
  z-index: -1;
}

.submission-success-text {
  color: #275854;
}

.nav-btn {
  text-align: center;
}

.nav-btn input {
  background-color: #a7d7c5;
  border: 3px solid #275854;
  border-radius: 6px;
  color: #275854;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  margin: 5px 0px 0px 4px;
  padding: 20px 30px;
  outline: none;
  transition: 0.3s ease-in;
}

.nav-btn:hover {
  background-color: rgba(236, 236, 211, 0.6);
  opacity: 0.6;
}

.nav-btn:active {
  background-color: rgba(236, 236, 211, 0.3);
  opacity: 0.3;
}
</style>
