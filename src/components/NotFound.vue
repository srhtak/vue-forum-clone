<script setup></script>

<template>
  <div class="container">
    <div>
      <img class="img" src="https://i.ibb.co/G9DC8S0/404-2.png" />
    </div>
    <div class="container-text">
      <h1 class="title">
        Looks like you've found the doorway to the great nothing
      </h1>
      <p class="subtitle">
        Sorry about that! Please visit our hompage to get where you need to go.
      </p>
      <router-link to="/" class="button"> Take me there! </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: rela;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .img {
    display: absolute;
    width: 100%;
    background-color: cornflowerblue;
    padding: 1rem 3rem;
    border-radius: 2rem;
  }
  .subtitle {
    margin-bottom: 2rem;
  }
  .button {
    padding: 1rem 3rem;
    border-radius: 8px;
    background-color: cornflowerblue;
    color: white;
  }
  .button:hover {
    background-color: rgb(129, 166, 235);
  }
}
</style>
