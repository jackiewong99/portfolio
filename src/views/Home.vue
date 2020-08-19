<template>
  <div class="home">
    <p>Hi, my name is</p>
    <h1 class="name">Jackie Wong.</h1>
    <h1 class="intro">I build cool projects for the web.</h1>
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
  width: 70%;
  height: 69%;
  position: absolute;
  left: 20rem;
  top: 17rem;
  padding-bottom: 5px;
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
  padding: 10px;
  outline: none;
}

.name {
  margin: 0px 0px 5px 0px;
}

.intro {
  margin: 0px;
}

.description {
  /* width: 37%; */
  width: clamp(30ch, 50%, 46ch);
}

@media screen and (max-width: 1024px) {
  .home {
    left: 15rem;
  }

  h1 {
    font-size: 60px;
  }
}

@media screen and (max-width: 768px) {
  .home {
    left: 8rem;
  }

  h1 {
    font-size: 40px;
  }
}
</style>
