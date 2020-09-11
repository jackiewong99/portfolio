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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects'
};
</script>

<style scoped>
.projects {
  --header-color: #5c8d89;
  --primary-color: #ddfddb;
  --secondary-color: #6da28e;
}

header h1 {
  color: var(--header-color);
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
  background-color: var(--primary-color);
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
  color: var(--header-color);
  margin: 0;
}

.card .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  color: var(--secondary-color);
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
