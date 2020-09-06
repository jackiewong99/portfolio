<template>
  <div class="projects">
    <header>
      <h1>Projects</h1>
    </header>
    <div class="project-cards">
      <div class="card">
        <div class="card-content">
          <img src="../assets/logo.png" alt="" />
          <div class="container">
            <h2>Form Validation</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              incidunt laboriosam fugiat iste tempore perferendis nostrum ipsam.
              Praesentium nemo cum veniam placeat dicta voluptate, atque
              officiis optio ex possimus quia doloribus quasi quis ipsa at.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <img src="../assets/logo.png" alt="" />
          <div class="container">
            <h2>Grub Bot</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              incidunt laboriosam fugiat iste tempore perferendis nostrum ipsam.
              Praesentium nemo cum veniam placeat dicta voluptate, atque
              officiis optio ex possimus quia doloribus quasi quis ipsa at.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <img src="../assets/logo.png" alt="" />
          <div class="container">
            <h2>Pathfinding Visualizer</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              incidunt laboriosam fugiat iste tempore perferendis nostrum ipsam.
              Praesentium nemo cum veniam placeat dicta voluptate, atque
              officiis optio ex possimus quia doloribus quasi quis ipsa at.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <img src="../assets/logo.png" alt="" />
          <div class="container">
            <h2>Project Name 333</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              incidunt laboriosam fugiat iste tempore perferendis nostrum ipsam.
              Praesentium nemo cum veniam placeat dicta voluptate, atque
              officiis optio ex possimus quia doloribus quasi quis ipsa at.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <img src="../assets/logo.png" alt="" />
          <div class="container">
            <h2>Project Name 222</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              incidunt laboriosam fugiat iste tempore perferendis nostrum ipsam.
              Praesentium nemo cum veniam placeat dicta voluptate, atque
              officiis optio ex possimus quia doloribus quasi quis ipsa at.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <img src="../assets/logo.png" alt="" />
          <div class="container">
            <h2>Project Name 111</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias, quaerat?
              <!-- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              incidunt laboriosam fugiat iste tempore perferendis nostrum ipsam.
              Praesentium nemo cum veniam placeat dicta voluptate, atque
              officiis optio ex possimus quia doloribus quasi quis ipsa at. -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects'
};
</script>

<style scoped>
header h1 {
  font-size: 32px;
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
  background-color: #80c0e8;
  border-radius: 15px;
  transition: 0.3s ease-in;
  height: 425px;
}

.card:hover {
  transform: translateY(-5px);
}

.card .card-content {
  margin: 0 2rem;
}

.card .card-content h2 {
  margin: 0;
}

.card .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
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
  .project-cards {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
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
