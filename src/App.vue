<template>
  <!-- <img
    class="main-img"
    src="@/assets/cropped-3840-2160-1123013.jpg" /> -->

  <Navbar></Navbar>
  <div class="page">
    <router-view></router-view>
  </div>

  <Footer id="footer"></Footer>
</template>

<script setup>
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";
</script>

<style scoped>
  .main-img {
    width: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: -1;
  }

  .icon-wrapper {
    border: rgb(255, 255, 255) 3px solid;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(#8c625f, #cea76a);
  }
  .portrait {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .page {
    max-width: 108rem;
    margin: 0 auto;
  }
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .page {
    flex: 1;
  }
</style>
