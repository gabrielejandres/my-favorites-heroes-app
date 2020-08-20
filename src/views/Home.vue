<template>
  <div id="home">
    <div class="header">
      <h1>Hello, </h1>
      <p> Select some serie and find it wonderful characters to choose your favorites! </p>
    </div>

    <div class="form">
      <form v-on:submit.prevent="submitForm">
        <div class="search">
          <select v-model="selectedSerie">
            <option value="" selected disabled>
              Pick some serie
            </option>
            <option v-for="serie in series" v-bind:value="serie.id" v-bind:key="serie.id">
              {{ serie.title }}
            </option>
          </select>
        </div>
        <button type="submit"> Search </button>
      </form>
    </div>

    <div class="characters" v-if="characters.length">
      <CardCharacters v-for="character in characters" v-bind:key="character.id" :character="character" />
    </div>
    <div class="message" v-if="noResults">
      <h2> No characters registered! </h2>
      <p> Try again with another series! </p>
    </div>
    <div class="loading" v-if="loading">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>

<script>
  import CardCharacters from '@/components/CardCharacters.vue'

  // request to api
  import axios from 'axios'
  import { apikey, hash } from '../apiCredentials.js'

  export default {
    mounted: function() {
      this.getSeries();
    },
    data() {
      return {
        characters: [],
        series: [],
        selectedSerie: '',
        size: '/standard_large.jpg',
        noResults: false,
        loading: false
      }
    },
    methods: {
      submitForm() {
        this.loading = true;
        axios
          .get(`http://gateway.marvel.com/v1/public/series/${this.selectedSerie}/characters?ts=1&apikey=${apikey}&hash=${hash}`)
          .then(response => {
            this.characters = response.data.data.results;

            this.characters.map((character) => character.thumbnail.path += this.size);

            this.noResults = this.characters.length === 0 ? true: false;

            console.log(response.data.data.results);
          });
      },
      getSeries() {
        axios
          .get(`http://gateway.marvel.com/v1/public/series?ts=1&apikey=${apikey}&hash=${hash}`)
          .then(response => {
            this.series = response.data.data.results;
        });
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
  $dark-gray: #111111;

  #home {
    height: 100%;
    position: relative;

    /* HEADER */
    .header {
      background-image: linear-gradient(48.366deg, rgb(129, 75, 108), rgb(165, 37, 68));
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      position: absolute;
      height: 50%;
      width: 100%;
      text-align: center;

      &::after {
        background-image: linear-gradient(rgba(40, 40, 40, 0), rgba(40, 40, 40, 1));
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
        margin: 15% 2% 2% 2%;
        font-size: 3em;
      }
      p {
        margin-top: 3%;
        font-size: 1.1em;
      }

    }

    .form {
      position: relative;
      
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        height: 45vh;

        button {
          background-color: $yellow;
          color: $gray;
          padding: 2% 8%;
          border: none;
          border-radius: 40px;
          margin-top: 5%;
          font-size: 1.3em;
          outline: none;
        }
      }
      .search {
        background-color: #fff;
        width: 85vw;
        height: 7vh;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 40px;
        text-decoration: none;

        select {
          border: none;
          width: 75vw;
          border-radius: 40px;
          height: 100%;
          color: $dark-gray;
          font-size: 1.3em;
          outline: none;
        }
      
        svg {
          justify-self: center;
          font-size: 1em;
        }
      }
  }

  /* CHARACTERS DIV */

  .characters {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1vh;
    margin-bottom: 15vh;
  }

  /* MESSAGE NO RESULTS */
  .message {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    color: #fff;
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

 }

</style>
