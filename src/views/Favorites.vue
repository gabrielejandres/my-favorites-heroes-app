<template>
  <fragment>
    <h1> My favorites characters 
    <font-awesome-icon icon="heart" />
    </h1>
    <div class="favorites">
      <CardCharacters v-for="character in characters" v-bind:key="character.id" :character="character" class="card"/>
    </div>
  </fragment>
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
            path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaNGlEMBmyMD6uXamHaxzdyoPcwTPybEkobg&usqp=CAU'
          }
        ]
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

</style>
