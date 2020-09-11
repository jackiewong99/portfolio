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
    <main>
      <!-- HOME -->
      <!-- Idea: -->
      <!-- Style positioning of the home component in this 'main' element -->
      <!-- In the Home component, only style the font and text alignment. -->
      <section id="home">
        <Home />
      </section>
      <!-- ABOUT -->
      <section id="about">
        <About />
      </section>
      <!-- PROJECTS -->
      <section id="projects">
        <Projects />
      </section>
      <!-- CONTACT -->
      <section id="contact"></section>
    </main>
  </div>
</template>

<script>
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';

export default {
  name: 'App',
  components: {
    Home,
    About,
    Projects
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
html {
  scroll-behavior: smooth;
}

body {
  background-color: #ffffed;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  --primary-color: #a7d7c5;
  --secondary-color: #5c8d89;
  --hover-color: #57ddf3;
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
  color: var(--secondary-color);
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
  color: var(--secondary-color);
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 3px;
  text-decoration: none;
  transition: color 0.25s ease-in;
}

.nav-link:hover,
.nav-link:focus,
.nav-link:active {
  color: var(--hover-color);
}

.burger {
  cursor: pointer;
  display: none;
}

.burger div {
  background-color: var(--primary-color);
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
    background-color: var(--primary-color);
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

/* MAIN */
main {
  display: grid;
  grid-template-rows: auto 1fr auto;
  place-items: center;
  padding-top: 10px;
}

/* HOME */
#home {
  padding: 13rem 1rem 10rem 1rem;
}

/* ABOUT */
#about {
  padding: 9rem 5rem 19rem 5rem;
}

/* PROJECTS */
#projects {
  padding: 4rem 1rem 10rem 1rem;
}

/* MAIN MEDIA QUERIES */
@media screen and (max-width: 1354px) {
  #home {
    padding-left: 8rem;
  }
}

@media screen and (max-width: 1130px) {
  #home {
    padding-left: 11rem;
  }
}

@media screen and (max-width: 1024px) {
  #home {
    padding-left: 9rem;
  }
}

@media screen and (max-width: 880px) {
  #home {
    padding-left: 6rem;
  }
}

@media screen and (max-width: 768px) {
  #home {
    padding-left: 6rem;
  }
}

@media screen and (max-width: 527px) {
  #home {
    padding-left: 4rem;
  }
}
</style>
