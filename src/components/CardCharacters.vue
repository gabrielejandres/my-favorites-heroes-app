<template>
  <fragment>
    <div class="card" v-on:click="showOption()">
      <img :src="character.thumbnail.path"/>
      <div class="unfavorite" v-if="showReaction && favorites.includes(character.id)" v-on:click="removeFavorite(character.id)">
        <p> Click to unfavorite {{ character.name }}</p>
        <font-awesome-icon icon="heart" />
      </div>
      <div class="favorite" v-if="showReaction && !favorites.includes(character.id)" v-on:click="setFavorite(character.id)">
        <p> Click to favorite {{ character.name }}</p>
        <font-awesome-icon :icon="['far', 'heart']" />
      </div>
    </div>
  </fragment>
</template>

<script>

export default {
  mounted: function() {
    // if don't have a favorites section in localStorage
    if (JSON.parse(localStorage.getItem('favorites')) === null) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
  },
  props: {
    character: Object
  },
  data() {
    return {
      showReaction: false,
      favorites: JSON.parse(localStorage.getItem('favorites'))
    }
  },
  methods: {
    showOption() {
      this.showReaction = true;
    },

    setFavorite(id) {
      this.favorites = JSON.parse(localStorage.getItem('favorites'));
      this.favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      console.table(this.favorites);
    },

    removeFavorite(id) {
      this.favorites = JSON.parse(localStorage.getItem('favorites'));
      const index = this.favorites.indexOf(id);
      this.favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
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
    margin-top: 8%;
    background-color: #fff;
    width: 80vw;
    height: 50vh;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.2);
    }

    .unfavorite, .favorite {
      background-color: #000;
      color: #fff;
      position: absolute;
      margin-top: -50.5vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80vw;
      height: 50vh;
      border-radius: 10px;
      opacity: 0.7;
      -webkit-transition: opacity 0.5s linear;
      -moz-transition: opacity 0.5s linear;
      -o-transition: opacity 0.5s linear;
      transition: opacity 0.5s linear;

      svg {
        font-size: 6em;
        margin-top: 5%;
      }
    }
  }

</style>
