<template>
  <div id="home">
    <div class="header">
      <h1>Hello, </h1>
      <p>Which super hero would you like to know better today?</p>
      <div class="button">
        <font-awesome-icon icon="search" />
        <p>Buscar</p>
      </div>

      <!-- <img alt="Vue logo" src="../assets/logo.png"> 
      <CardHeroes msg="Card Heroes Component"/> -->
    </div>
  </div>
</template>

<script>
  //import CardHeroes from '@/components/CardHeroes.vue'

  export default {
    name: 'Home',
    components: {
      // CardHeroes
    }
  }
</script>

<style scoped lang="scss">

  /* Color palette */
  $red: #a52544;
  $blue: #005658;
  $dark-blue: #002424;
  $gray: #d9d8d6;
  $yellow: #ee933a;
  $dark-gray: #111111;

  #home {
    height: 100%;
    position: relative;

    .header {
      background-image: linear-gradient(48.366deg, rgb(150, 53, 85), rgb(165, 37, 68));
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      position: absolute;
      height: 50%;
      width: 100%;
      text-align: center;

      &::after {
        background-image: linear-gradient(rgba(18, 18, 18, 0), rgb(18, 18, 18));
        content: "";
        height: 100%;
        left: 0px;
        position: absolute;
        top: 0px;
        width: 100%;
      }

      h1, p {
        z-index: 1;
      }

      h1 {
        font-weight: bold;
        margin: 0 32px 6px;
        font-size: 2.7em;
      }
      p {
        margin: 0 32px 32px;
      }

      div.button {
        background-color: rgb(255, 255, 255);
        display: grid;
        width: 80vw;
        grid-template-columns: 20% 80%;
        border-radius: 40px;
        text-decoration: none;
        color: $dark-gray;
      
        svg {
          height: 24px;
          width: 24px;
        }
      }
    }
  }

</style>
