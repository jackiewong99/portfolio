<template>
  <div class="home">
    <p>Hi, my name is</p>
    <h1 class="name">Jackie Wong.</h1>
    <h1 class="intro">I build projects for the web.</h1>
    <p class="description">
      I am a self-learning web developer based in Honolulu, HI specializing in
      building modern websites, web apps, and all else on the web.
    </p>
    <button>Contact me</button>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  width: 100%;
  text-align: left;
}

h1 {
  font-size: 5rem;
}

p {
  font-size: 18px;
  margin: 0px 0px 5px 4px;
}

button {
  background-color: #ffffff;
  border: 2px solid #1d99db;
  border-radius: 6px;
  cursor: pointer;
  margin: 5px 0px 0px 4px;
  padding: 20px 30px;
  outline: none;
}

.name {
  margin: 0px 0px 5px 0px;
}

.intro {
  margin: 0px;
}

.description {
  width: clamp(32ch, 50%, 46ch);
}

@media screen and (max-width: 1024px) {
  h1 {
    font-size: 57px;
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 35px;
  }
}
</style>
