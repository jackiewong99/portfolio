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

.content img {
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
  .content .profile-img::before {
    width: 230px;
    height: 230px;
    transform: translateX(7rem) translateY(60px);
  }

  .content img {
    width: 230px;
    height: 230px;
  }
}
</style>
