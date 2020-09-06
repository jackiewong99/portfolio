<template>
  <div class="about">
    <header>
      <h1>About Me</h1>
    </header>
    <main>
      <div class="content">
        <div class="bio">
          <p>
            Hi there! I'm Jackie, a self-learning developer based in Honolulu,
            HI and am currently in my third year at the University of Hawaii at
            Manoa, majoring in computer science. More importantly, I'm
            passionate about exploring the possibilities of building cool
            websites and scalable web apps that deliver a simple user interface
            and modern user experience, while utilizing current backend
            technologies when applicable.
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
              <li>HTML & (S)CSS</li>
              <li>Java</li>
            </ul>
          </div>
        </div>
        <div class="profile-img">
          <!-- <p>Insert Profile Image Here</p> -->
          <img src="../assets/profile_img.jpg" alt="Profile Image" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'About'
};
</script>

<style scoped>
.about {
  display: grid;
  grid-template-rows: auto 1fr;
}

header h1 {
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
  border: 1px solid #505f6d;
  border-width: 2px 2px 0 0;
  transform: rotate(45deg);
}

.content .profile-img {
  padding-right: 5rem;
}

.content .profile-img::before {
  content: '';
  background-color: #1d99db;
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

@media screen and (max-width: 1227px) {
  .content .profile-img {
    padding-top: 5rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 768px) {
  .content .profile-img {
    padding-right: 6rem;
    padding-top: 2rem;
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
}
</style>
