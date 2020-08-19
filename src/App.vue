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
/* Color palette */
$red: #a52544;
$blue: #005658;
$dark-blue: #002424;
$gray: #d9d8d6;
$yellow: #ee933a;
$dark-gray: #111111;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

#app {
  height: 100%;
  background-color: $dark-gray;
  font-family: "Segoe UI", "Arial", sans-serif;
}

</style>
