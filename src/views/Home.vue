<template>
  <div class="home">
    <p>Hello, my name is</p>
    <h1 class="name">Jackie Wong.</h1>
    <h1 class="intro">I build projects for the web.</h1>
    <p class="description">
      I am a self-learning web developer based in Honolulu, HI specializing in
      building modern websites, web apps, and all else on the web.
    </p>
    <button>Get In Touch</button>
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

button {
  background-color: #ffffed;
  border: 3px solid var(--secondary-text-color);
  border-radius: 6px;
  color: var(--secondary-text-color);
  cursor: pointer;
  font-size: 18px;
  margin: 5px 0px 0px 4px;
  padding: 20px 30px;
  outline: none;
  transition: 0.3s ease-in;
}

button:hover {
  /* background-color: rgba(255, 255, 237, 0.3); */
  background-color: rgba(236, 236, 211, 0.3);
  opacity: 0.6;
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
