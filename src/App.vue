<template>
  <div id="app">
    <!-- NAV BAR -->
    <nav class="nav" v-bind:class="{ blurBg: blurBackground }">
      <div class="logo">
        <a href="/">JACKIE WONG</a>
      </div>
      <ul ref="nav" class="nav-links">
        <li>
          <a class="nav-link" href="#about">About</a>
        </li>
        <li><a class="nav-link" href="#projects">Projects</a></li>
        <li>
          <a class="nav-link" href="#" v-on:click="displayModal">
            Contact
          </a>
        </li>

        <!-- **RESUME OPENS NEW TAB -->
        <li>
          <a
            class="nav-link"
            href="./Jackie_Wong_Resume_2020.docx.pdf"
            target="_blank"
            >RESUME</a
          >
        </li>
      </ul>
      <div v-on:click="navSlide" class="burger" ref="burger">
        <div class="line1 burger-bar"></div>
        <div class="line2 burger-bar"></div>
        <div class="line3 burger-bar"></div>
      </div>
    </nav>
    <section id="contact-modal">
      <Contact v-if="isDisplayModal" v-on:modalStateChange="hideModal" />
      <router-view class="form-submission-text"></router-view>
    </section>
    <main v-bind:class="{ blurBg: blurBackground }">
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
      <!-- FOOTER -->
      <section id="footer">
        <div>
          <h1>Interested?</h1>
          <div class="footer-content">
            <p class="footer-text">
              I'm always looking for new opportunities and my inbox is always
              open to any messages. I will get back to any inquiries, questions,
              or any other messages as soon as possible!
            </p>
            <button class="footer-btn" v-on:click="displayModal">
              Get In Touch
            </button>
            <div class="social-icon-container">
              <a target="_blank" href="https://github.com/jackiewong99"
                ><i class="social-icon fab fa-github fa-3x"></i
              ></a>
              <a target="_blank" href="https://www.linkedin.com/in/jackiezwong"
                ><i class="social-icon fab fa-linkedin-in fa-3x"></i
              ></a>
            </div>
          </div>
        </div>
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
  data() {
    return {
      isDisplayModal: false,
      blurBackground: false
    };
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
    },
    hideModal(hide) {
      this.isDisplayModal = hide;
      this.blurBackground = false;
    },
    displayModal() {
      this.isDisplayModal = true;
      this.blurBackground = true;
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
  background-color: #fdfdf8;
  margin: 0;
  padding: 0;
}

.blurBg {
  filter: blur(5px);
  -webkit-filter: blur(5px);
}

#app {
  --primary-color: #a7d7c5;
  --secondary-color: #5c8d89;
  --hover-color: #57ddf3;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* NAV */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40x 100px;
  min-height: 8vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  transition: all 0.3s ease;
}

nav.fixed-nav {
  position: fixed;
  background-color: var(--primary-color);
}

.logo {
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 5px;
  margin-left: 4rem;
}

.logo a {
  color: var(--secondary-color);
  text-decoration: none;
}

.nav-links {
  position: relative;
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  margin-right: 4rem;
  width: 35%;
}

.nav-links li {
  position: relative;
}

.nav-link {
  position: relative;
  color: var(--secondary-color);
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
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
  background-color: var(--secondary-color);
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
  transition: all 0.3s ease;
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

/* FORM SUBMISSION */
.form-submission-text {
  padding: 13rem 1rem 10rem 1rem;
}

/* FOOTER */
#footer {
  padding: 1rem 1rem 10rem 1rem;
  transition: all 0.2s linear;
}

#footer div h1 {
  color: var(--secondary-color);
  font-size: 32px;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-text {
  color: #6da28e;
  width: clamp(35ch, 50%, 46ch);
}

.footer-btn {
  background-color: #fdfdf8;
  border: 3px solid #6da28e;
  border-radius: 6px;
  color: #6da28e;
  cursor: pointer;
  font-size: 18px;
  margin: 5px 0px 0px 4px;
  padding: 20px 30px;
  outline: none;
  transition: 0.3s all ease-in;
}

.footer-btn:hover {
  background-color: rgba(236, 236, 211, 0.6);
  opacity: 0.6;
}

.footer-btn:active {
  background-color: rgba(236, 236, 211, 0.3);
  opacity: 0.3;
}

.social-icon-container {
  margin-top: 2rem;
}

.social-icon {
  color: #6da28e;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
  transition: 0.2s all ease-in;
}

.social-icon:hover {
  opacity: 0.6;
}

.social-icon:active {
  opacity: 0.3;
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

  #footer {
    padding-right: 2rem;
  }
}

@media screen and (max-width: 500px) {
  #footer {
    padding-right: 6rem;
  }
}
</style>
