<template>
  <div class="about">
    <header>
      <h1>About Me</h1>
    </header>
    <main>
      <div class="content">
        <div class="profile-img">
          <img src="../assets/profile_img.jpg" alt="Profile Image" />
        </div>
        <div class="bio">
          <p>
            Hi there! I'm Jackie, a self-learning developer based in Honolulu,
            HI and a computer science graduate from the University of Hawai'i at
            Manoa. I am passionate about exploring the possibilities of building
            cool websites and scalable web apps that deliver a simple user
            interface and modern user experience, while utilizing current
            backend technologies when applicable.
          </p>
          <p>Technologies I've Worked With:</p>
          <div class="tech-list">
            <ul class="first-list">
              <li>JavaScript (ES6+)</li>
              <li>Node.js</li>
              <li>Vue.js</li>
            </ul>
            <ul class="second-list">
              <li>React.js</li>
              <li>HTML &amp; (S)CSS</li>
              <li>Java</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about {
  --primary-color: #5c8d89;
  --secondary-color: #6da28e;
  --profile-bg-color: #cbf8c885;
  display: grid;
  grid-template-rows: auto 1fr;
  place-items: center;
  transition: all 0.2s linear;
}

header h1 {
  color: var(--primary-color);
  font-size: 32px;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 18px;
  text-align: left;
}

.content .bio {
  color: var(--secondary-color);
  padding: 7px 15px 10px 50px;
  width: clamp(40ch, 50%, 50ch);
}

.content .tech-list {
  display: flex;
  flex-direction: row;
  justify-content: start;
}

.tech-list ul {
  margin-left: 0;
  margin-top: 0;
  padding-left: 0;
}

.tech-list .second-list {
  padding-left: 3rem;
}

ul li {
  font-size: 15px;
  list-style: none;
  padding: 0 0 7px 20px;
  position: relative;
}

ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  height: 5px;
  width: 5px;
  border: 1px solid var(--primary-color);
  border-width: 2px 2px 0 0;
  transform: rotate(45deg);
}

.content .profile-img {
  padding-right: 5rem;
}

.content .profile-img::before {
  content: '';
  background-color: var(--profile-bg-color);
  border-radius: 50%;
  opacity: 0.7;
  position: absolute;
  width: 360px;
  height: 360px;
  transform: translateX(10rem) translateY(60px);
  z-index: -1;
}

.profile-img img {
  border-radius: 50%;
  width: 360px;
  height: 360px;
}

@media screen and (max-width: 1333px) {
  .content .bio {
    padding-left: 6rem;
  }
}

@media screen and (max-width: 1227px) {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content .profile-img {
    padding-top: 5rem;
  }

  .content .bio {
    padding-top: 4rem;
  }
}

@media screen and (max-width: 768px) {
  .about {
    padding-right: 8rem;
  }

  .about h1 {
    padding-left: 3rem;
  }

  .content .profile-img {
    padding-left: 2rem;
    padding-top: 5px;
  }

  .content .profile-img::before {
    width: 230px;
    height: 230px;
    transform: translateX(7rem) translateY(50px);
  }

  .content img {
    width: 230px;
    height: 230px;
  }

  .content .bio {
    padding-top: 4rem;
  }
}
</style>
