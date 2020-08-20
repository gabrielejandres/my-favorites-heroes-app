<template>
  <fragment>
    <div class="card" v-on:click="setHover()">
      <img src="../assets/ironman.jpg"/>
    </div>
    <div class="card-hover" id="hover" v-on:click="removeFavorite(character.id)" v-if="this.favorites.includes(character.id)">
      <p> Click to unfavorite {{ character.name }}</p>
      <font-awesome-icon icon="heart" />
    </div>
    <div class="card-hover" id="hover" v-on:click="setFavorite(character.id)" v-else>
      <p> Click to favorite {{ character.name }}</p>
      <font-awesome-icon :icon="['far', 'heart']" />
    </div>
  </fragment>
</template>

<script>

export default {
  name: 'CardCharacters',
  props: {
    character: Object
  },
  data() {
    return {
      favorites: []
    }
  },
  methods: {
    setHover() {
      document.querySelector('#hover').classList.remove('card-hover');
      document.querySelector('#hover').classList.add('card-click');
    },

    setFavorite(id) {
      this.favorites.push(id);
      console.table(this.favorites);
    },

    removeFavorite(id) {
      const index = this.favorites.indexOf(id);
      this.favorites.splice(index, 1);
      console.table(this.favorites);
    }
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

  /* CARD */
  .card {
    position: absolute;
    margin-top: 8%;
    background-color: #fff;
    width: 80vw;
    height: 50vh;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .card-hover {
    position: absolute;
    margin-top: 8%;
    background-color: #000;
    color: #fff;
    width: 80vw;
    height: 50vh;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity 0.5s linear;
    -moz-transition: opacity 0.5s linear;
    -o-transition: opacity 0.5s linear;
    transition: opacity 0.5s linear;
  }

  .card-click {
    visibility: visible;
    opacity: 0.7;
    position: absolute;
    margin-top: 8%;
    background-color: #000;
    color: #fff;
    width: 80vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.3em;

    svg {
      font-size: 6em;
      margin-top: 5%;
    }
  }

</style>
