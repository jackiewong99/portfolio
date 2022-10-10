<template>
  <div class="projects">
    <header>
      <h1>Projects</h1>
    </header>
    <div class="project-cards">
      <div class="card">
        <div class="card-content">
          <a
            class="project-repo-link"
            href="https://github.com/hot-n-code/ghg-tracker"
            target="_blank"
            ><i class="project-icon far fa-folder-open fa-10x"></i
          ></a>
          <div class="container">
            <a
              class="project-live-link"
              href="https://github.com/hot-n-code/ghg-tracker"
              target="_blank"
              ><h2>GHG Tracker</h2></a
            >
            <p>
              A web app developed in collaboration with Hawaiian Electric
              Industries to allow residents of Hawai'i to track their daily
              greenhouse gas emissions.
            </p>
            <div class="tech-stack-container">
              <ul>
                <li class="tech-stack">React</li>
                <li class="tech-stack">Meteor</li>
                <li class="tech-stack">Semantic UI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <a
            class="project-repo-link"
            href="https://github.com/jackiewong99/portfolio"
            target="_blank"
            ><i class="project-icon far fa-folder-open fa-10x"></i
          ></a>
          <div class="container">
            <a
              class="project-live-link"
              href="https://www.wongjackie.com/"
              target="_blank"
              ><h2>Portfolio</h2></a
            >
            <p>
              My first and current iteration of my portfolio website that I
              designed and built in 2020. This website was built with Vue JS and
              currently hosted on Netlify.
            </p>
            <div class="tech-stack-container">
              <ul>
                <li class="tech-stack">Vue</li>
                <li class="tech-stack">Node.js</li>
                <li class="tech-stack">CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <a
            class="project-repo-link"
            href="https://github.com/gruhb-doc/gruhb-doc"
            target="_blank"
            ><i class="project-icon far fa-folder-open fa-10x"></i
          ></a>
          <div class="container">
            <a
              class="project-live-link"
              href="https://github.com/gruhb-doc/gruhb-doc"
              target="_blank"
              ><h2>Gruhb</h2></a
            >
            <p>
              *No longer hosted.* Similar to Grub Bot, this web app makes
              finding a place to eat on the UH Manoa campus an easier task. This
              was for the final group project of my ICS 314 Software Engineering
              course.
            </p>
            <div class="tech-stack-container">
              <ul>
                <li class="tech-stack">React</li>
                <li class="tech-stack">Node.js</li>
                <li class="tech-stack">Meteor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <a
            class="project-repo-link"
            href="https://github.com/jackiewong99/form-validation"
            target="_blank"
            ><i class="project-icon far fa-folder-open fa-10x"></i
          ></a>
          <div class="container">
            <a
              class="project-live-link"
              href="https://form-validation-29df6.web.app/"
              target="_blank"
              ><h2>Form Validation</h2></a
            >
            <p>
              Form validating project that validates the common form fields'
              data input. This project was my first experience using Vue JS (fun
              fact: this portfolio website is also built with Vue JS).
            </p>
            <div class="tech-stack-container">
              <ul>
                <li class="tech-stack">Vue</li>
                <li class="tech-stack">Firebase</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <a
            class="project-repo-link"
            href="https://github.com/jackiewong99/grub-bot"
            target="_blank"
            ><i class="project-icon far fa-folder-open fa-10x"></i
          ></a>
          <div class="container">
            <a
              class="project-live-link"
              href="https://jackiewong99.github.io/grub-bot/"
              target="_blank"
              ><h2>Grub Bot</h2></a
            >
            <p>
              A web app that simplifies the task of finding a place to eat. The
              user answers a few questions and the chat bot randomly finds a
              restaurant based on the user's preference using the Yelp Fusion
              API.
            </p>
            <div class="tech-stack-container">
              <ul>
                <li class="tech-stack">JS</li>
                <li class="tech-stack">Node.js</li>
                <li class="tech-stack">SCSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <a
            class="project-repo-link"
            href="https://github.com/jackiewong99/Pathfinding-Visualizer"
            target="_blank"
            ><i class="project-icon far fa-folder-open fa-10x"></i
          ></a>
          <div class="container">
            <a
              class="project-live-link"
              href="https://jackiewong99.github.io/Pathfinding-Visualizer/#"
              target="_blank"
              ><h2>Pathfinding Visualizer</h2></a
            >
            <p>
              A simple project that currently visualizes Dijkstra's Algorithm
              and is hosted on GitHub Pages. This project was also my first dive
              into React JS.
            </p>
            <div class="tech-stack-container">
              <ul>
                <li class="tech-stack">React</li>
                <li class="tech-stack">CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
};
</script>

<style scoped>
.projects {
  --header-color: #5c8d89;
  --primary-color: #ddfddb;
  --secondary-color: #12714d;
  transition: all 0.2s linear;
}

header h1 {
  color: var(--header-color);
  font-size: 32px;
  text-align: center;
}

.project-cards {
  display: grid;
  column-gap: 3rem;
  row-gap: 3rem;
  grid-template-columns: repeat(3, minmax(250px, 370px));
  padding-top: 3rem;
  place-items: center;
}

.card {
  background-color: var(--primary-color);
  border-radius: 15px;
  height: 425px;
  transition: 0.3s ease-in;
}

.card:hover {
  transform: translateY(-5px);
}

.project-repo-link {
  text-decoration: none;
}

.project-live-link {
  text-decoration: none;
  transition: 0.2s all ease-in;
}

.project-live-link:hover {
  opacity: 0.6;
}

.project-live-link:active {
  opacity: 0.3;
}

.project-icon {
  color: var(--header-color);
  transition: 0.2s all ease-in;
}

.project-icon:hover {
  opacity: 0.6;
}

.project-icon:active {
  opacity: 0.3;
}

.card .card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
}

.card .card-content h2 {
  color: var(--header-color);
  margin: 0;
}

.card .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--secondary-color);
}

.card .container p {
  text-align: left;
}

.tech-stack-container {
  margin-right: 2rem;
}

.tech-stack {
  display: inline;
  list-style: none;
  margin-right: 10px;
  margin-left: 10px;
  opacity: 0.6;
}

@media screen and (max-width: 1268px) {
  .projects {
    padding: 0 3rem;
  }
  .project-cards {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
}

@media screen and (max-width: 925px) {
  .card {
    height: 460px;
  }
}

@media screen and (max-width: 807px) {
  .card {
    height: 495px;
  }
}

@media screen and (max-width: 768px) {
  .projects h1 {
    padding-right: 6rem;
  }

  .project-cards {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
    padding-right: 6rem;
  }

  .card {
    height: 365px;
  }
}

@media screen and (max-width: 670px) {
  .card {
    height: 440px;
  }
}
</style>
