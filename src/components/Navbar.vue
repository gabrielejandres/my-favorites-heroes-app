<template>
  <div id="navbar">
    <router-link to="/" :class="{active: menuActive === 'home'}" v-on:click="setActive('home')">
      <span class="icon" v-on:click="setActive('home')">
        <font-awesome-icon icon="home" />
        <span class="title">Home</span>
      </span>
    </router-link>

    <router-link to="/favorites" :class="{active: menuActive === 'favorites'}">
      <span class="icon" v-on:click="setActive('favorites')">
        <font-awesome-icon icon="heart" />
        <span class="title">Favorites</span>
      </span>
    </router-link>
  </div>
</template>

<script>
  export default {
    data: () => ({
      menuActive: "home"
    }),
    methods: {
      setActive(option) {
        // console.log(option);
        this.menuActive = option;
        console.log(this.menuActive);
      }
    }
  };
</script>

<style scoped lang="scss">
  /* Color palette */
  $red: #a52544;
  $blue: #005658;
  $dark-blue: #002424;
  $gray: #d9d8d6;
  $yellow: #ee933a;
  $dark-gray: #111111;

  #navbar {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #282828;
    border-top: 1px solid #181818;

    a {
      text-align: center;
      color: #c9c9c9;
      text-decoration: none;
    
      &.active {
        font-weight: bold;
        color: $red;
      }
      .title, .icon {
        display: block;
      }
      .title {
        font-size: 0.9em;
        padding-top: 5%;
      }
      .icon svg {
        font-size: 1.5em;
      }
    }
  }
</style>
