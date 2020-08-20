<template>
  <div id="home">
    <div class="header">
      <h1>Hello, </h1>
      <p>Which Marvel character would you like to know better today?</p>
    </div>

    <div class="form">
      <form v-on:submit.prevent="submitForm">
        <div class="search">
          <font-awesome-icon icon="search" />
          <input placeholder="Type a character name" type="text" name="search" v-model="search">
        </div>
        <button type="submit"> Search </button>
      </form>
    </div>

    <div class="characters">
      <CardCharacters :character="characters[0]" />
    </div>
  </div>
</template>

<script>
  import CardCharacters from '@/components/CardCharacters.vue'

  export default {
    data() {
      return {
        search: '',
        characters: [
          {
            id: 1,
            name: 'Iron Man',
            path: '../assets/ironman.jpg',
          },
          {
            id: 2,
            name: 'Iron Man 2',
            path: '../assets/ironman.jpg',
          },
          {
            id: 3,
            name: 'Iron Man',
            path: '../assets/ironman.jpg',
          }
        ]
      }
    },
    methods: {
      submitForm() {
        if (this.search.trim() === '') {
          return 'Type a valid name';
        } 
        // console.log(this.search);
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
        margin: 10% 2% 2% 2%;
        font-size: 3em;
      }
      p {
        margin-bottom: 32px;
        font-size: 1.3em;
      }

    }

    .form {
      position: relative;
      
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        height: 40vh;

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
        display: grid;
        width: 80vw;
        height: 7vh;
        align-items: center;
        grid-template-columns: 10% 90%;
        border-radius: 40px;
        text-decoration: none;
        color: $red;

        input {
          border: none;
          width: 90%;
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
  }
 }

</style>
