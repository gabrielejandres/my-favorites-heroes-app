<template>
  <div id="app">
    <router-view/>
    <Navbar />
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Marvel', sans-serif;
  }

  html, body {
    height: 100%;
    background-color: #282828;
  }

  #app {
    height: 100%;
    background-color: #282828;
  }

</style>
