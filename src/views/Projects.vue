<template>
  <div class="projects">
    <header>
      <h1>Projects</h1>
    </header>
    <div class="project-cards">
      <div class="card">
        <img src="../assets/logo.png" alt="" />
        <div class="container">
          <h4>Project Name</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            saepe temporibus hic similique, beatae accusamus accusantium cum
            excepturi repudiandae pariatur ducimus voluptatibus iste, aut
            consequatur. Exercitationem magni dicta inventore voluptas non,
            cupiditate ad omnis aperiam voluptate odit laudantium soluta
            doloremque quae
          </p>
        </div>
      </div>
      <div class="card">
        <img src="../assets/logo.png" alt="" />
        <div class="container">
          <h4>Project Name</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            saepe temporibus hic similique, beatae accusamus accusantium cum
            excepturi repudiandae pariatur ducimus voluptatibus iste, aut
            consequatur. Exercitationem magni dicta inventore voluptas non,
            cupiditate ad omnis aperiam voluptate odit laudantium soluta
            doloremque quae
          </p>
        </div>
      </div>
      <div class="card">
        <img src="../assets/logo.png" alt="" />
        <div class="container">
          <h4>Project Name</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            saepe temporibus hic similique, beatae accusamus accusantium cum
            excepturi repudiandae pariatur ducimus voluptatibus iste, aut
            consequatur. Exercitationem magni dicta inventore voluptas non,
            cupiditate ad omnis aperiam voluptate odit laudantium soluta
            doloremque quae
          </p>
        </div>
      </div>
      <div class="card">
        <img src="../assets/logo.png" alt="" />
        <div class="container">
          <h4>Project Name</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            saepe temporibus hic similique, beatae accusamus accusantium cum
            excepturi repudiandae pariatur ducimus voluptatibus iste, aut
            consequatur. Exercitationem magni dicta inventore voluptas non,
            cupiditate ad omnis aperiam voluptate odit laudantium soluta
            doloremque quae
          </p>
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
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.card {
  background-color: #80c0e8;
  border-radius: 15px;
}

.card .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  overflow: hidden;
}

.card .container p {
  width: clamp(33ch, 50%, 46ch);
}
</style>
