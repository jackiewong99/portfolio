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
      <section id="contact">
        <div>
          <h1>Interested?</h1>
          <div class="callToAction">
            <p>
              I'm always looking for new opportunities and my inbox is open to
              any messages. I will get back to any inquiries, questions, or any
              other messages as soon as possible!
            </p>
            <button>Get In Touch</button>
          </div>
        </div>
      </section>
      <section id="contact-modal">
        <Contact />
      </section>
    </main>
  </div>
</template>

<script>
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './components/Contact';

export default {
  name: 'App',
  components: {
    Home,
    About,
    Projects,
    Contact
  },
  methods: {
    navSlide() {
      const burger = this.$refs.burger;
      const nav = this.$refs.nav;
      const navLinks = this.$refs.nav.children;

      // Burger animation
      burger.classList.toggle('toggle');

      if (nav.style.backgroundColor === '') {
        nav.style.borderRadius = '30px 0px 0px 30px';
        nav.style.backgroundColor = 'var(--primary-color)';
      } else {
        nav.style.backgroundColor = '';
      }

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
  --primary-color: #a7d7c5;
  --secondary-color: #5c8d89;
  --hover-color: #57ddf3;
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
  padding: 9rem 5rem 19rem 3rem;
}

/* PROJECTS */
#projects {
  padding: 4rem 1rem 18rem 1rem;
}

#contact {
  padding: 4rem 1rem 17rem 1rem;
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

@media screen and (max-width: 578px) {
  #home {
    padding-left: 40px;
    padding-right: 3rem;
  }
}
</style>
