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
      <p> Click on a character in the list on the home page when you want to favorite him. </p>
    </div>
    <div class="loading" v-if="loading">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  </fragment>
</template>

<script>
  import CardCharacters from '@/components/CardCharacters.vue'

  // request to api
  import axios from 'axios'
  import { apikey, hash } from '../apiCredentials.js'

  export default {
    mounted() {
      this.noResults = JSON.parse(localStorage.getItem('favorites')).length === 0 ? true : false;

      if (!this.noResults) {
        this.loading = true;
        JSON.parse(localStorage.getItem('favorites')).map(
          (favorite) => {
            axios
              .get(`http://gateway.marvel.com/v1/public/characters/${favorite}?ts=1&apikey=${apikey}&hash=${hash}`)
              .then(response => {
                response.data.data.results[0].thumbnail.path += this.size;
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
        size: '/standard_large.jpg',
        noResults: false
      }
    },
    components: {
      CardCharacters
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

    /* LOADING */
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
  }

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }

</style>
