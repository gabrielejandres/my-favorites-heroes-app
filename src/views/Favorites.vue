<template>
  <fragment>
    <h1> My favorites characters 
    <font-awesome-icon icon="heart" />
    </h1>
    <div class="favorites">
      <CardCharacters :character="characters[0]" class="card"/>
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
            path: '../assets/ironman.jpg',
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
  $dark-gray: #111111;

  .favorites {
    display: flex;
    flex-direction: column;
    align-items: center;
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
