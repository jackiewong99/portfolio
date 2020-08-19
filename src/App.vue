<template>
  <div id="app">
    <!-- NAV BAR -->
    <nav class="nav">
      <div class="logo">
        Logo
      </div>
      <ul ref="nav" class="nav-links">
        <li>
          <a class="nav-link" href="#about">About</a>
        </li>
        <li><a class="nav-link" href="#projects">Projects</a></li>
        <li><a class="nav-link" href="#contact">Contact</a></li>

        <!-- **RESUME OPENS NEW TAB -->
        <li><a class="nav-link" href="#">Resume</a></li>
      </ul>
      <div v-on:click="navSlide" class="burger" ref="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
    <!-- HOME -->
    <Home id="home" />
    <!-- ABOUT -->
    <section id="about"></section>
    <!-- PROJECTS -->
    <section id="projects"></section>
    <!-- CONTACT -->
    <section id="contact"></section>
  </div>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',
  components: {
    Home
  },
  methods: {
    navSlide() {
      const burger = this.$refs.burger;
      const nav = this.$refs.nav;
      const navLinks = this.$refs.nav.children;

      // Burger animation
      burger.classList.toggle('toggle');

      nav.classList.toggle('nav-active');

      // Animate links
      navLinks.forEach((link, index) => {
        if (link.children[0].style.animation) {
          link.children[0].style.animation = '';
        } else {
          link.children[0].style.animation = `navLinkFade 0.5s ease forwards ${index /
            7 +
            0.5}s`;
        }
      });
    }
  }
};
</script>

<style>
/* BODY */
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* NAV */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 8vh;
  z-index: 3;
}

.logo {
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 5px;
  margin-left: 4rem;
}

.nav-links {
  display: flex;
  list-style: none;
  justify-content: space-around;
  margin-right: 4rem;
  width: 35%;
}

.nav-link {
  color: #2c3e50;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 3px;
  text-decoration: none;
  transition: color 0.25s ease-in;
}

.nav-link:hover,
.nav-link:focus,
.nav-link:active {
  color: #6c9dce;
}

.burger {
  cursor: pointer;
  display: none;
}

.burger div {
  background-color: #6c9dce;
  border-radius: 50px;
  height: 3px;
  width: 25px;
  margin: 5px;
  transition: all 0.3s ease;
}

@media screen and (max-width: 1024px) {
  .nav-links {
    width: 60%;
  }
}

@media screen and (max-width: 768px) {
  body {
    overflow-x: hidden;
  }

  .nav-links {
    background-color: #3db876;
    margin-right: 0px;
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }

  .nav-link {
    opacity: 0;
  }

  .burger {
    display: block;
    margin-right: 2rem;
  }
}

.nav-active {
  transform: translateX(0%);
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

/* HOME COMPONENT */
/* #home {
  width: 100%;
  height: 90vh;
} */
</style>
