<template>
  <fragment>
    <h1> My favorites characters 
    <font-awesome-icon icon="heart" />
    </h1>
    <div class="favorites" v-if="characters.length">
      <CardCharacters v-for="character in characters" v-bind:key="character.id" :character="character" class="card"/>
    </div>
      <div class="message" v-if="noResults">
      <h2> There are no favorite characters yet! </h2>
      <p> Click on a character in the list on the home page if you want to favorite him. </p>
    </div>
    <Loading v-if="loading"/>
  </fragment>
</template>

<script>
  import CardCharacters from '@/components/CardCharacters.vue'
  import Loading from '@/components/Loading.vue'
  import api, { API_DEFAULT_PARAMS } from '../services/api.js'

  export default {
    mounted() {
      this.noResults = JSON.parse(localStorage.getItem('favorites')).length === 0 ? true : false;

      if (!this.noResults) {
        this.loading = true;
        JSON.parse(localStorage.getItem('favorites')).map(
          (favorite) => {
            api.get(`/characters/${favorite}`, {
                    params: {
                      ...API_DEFAULT_PARAMS,
                    }})
              .then(response => {
                response.data.data.results[0].thumbnail.path += '/standard_large.jpg';
                this.characters.push(response.data.data.results[0]);
                
                // for the loading div disappear
                if (this.characters.length === JSON.parse(localStorage.getItem('favorites')).length) {
                  this.loading = false;
                }
              });
          }
        )
      }
    },
    data() {
      return {
        characters: [],
        loading: false,
        noResults: false
      }
    },
    components: {
      CardCharacters,
      Loading
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

  .favorites {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15vh;
  }

  h1 {
      color: #fff;
      font-weight: bold;
      margin-top: 5%;
      text-align: center;

      svg {
        color: $yellow;
      }
  }

  .message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    color: #fff;
    text-align: center;

    p {
      margin-top: 3vh;
    }
  }

</style>
