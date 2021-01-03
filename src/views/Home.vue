<template>
  <div class="home">
    <p>Hello, my name is</p>
    <h1 class="name">Jackie Wong.</h1>
    <h1 class="intro">I build projects for the web.</h1>
    <p class="description">
      I am a self-learning web developer based in Honolulu, HI specializing in
      building modern websites, web apps, and all else on the web.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.home {
  --primary-text-color: #5c8d89;
  --secondary-text-color: #6da28e;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  width: 100%;
  text-align: left;
  transition: all 0.2s linear;
}

h1 {
  color: var(--primary-text-color);
  font-size: 5rem;
  word-break: break-word;
}

p:first-child {
  color: #78d1af;
}

p {
  color: var(--secondary-text-color);
  font-size: 18px;
  margin: 0px 0px 5px 4px;
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
    font-size: 40px;
  }
}
</style>
