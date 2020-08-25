<template>
  <fragment>
    <h1> My favorites characters 
    <font-awesome-icon icon='heart' />
    </h1>
    <div class='favorites' v-if='characters.length'>
      <CardCharacters v-for='character in characters' v-bind:key='character.id' :character='character'/>
    </div>
    <Message main='There are no favorite characters yet!' paragraph='Click on a character in the list on the home page if you want to favorite him.' v-if="noResults"/>
    <Loading v-if="loading"/>
  </fragment>
</template>

<script>
  import CardCharacters from '@/components/CardCharacters.vue'
  import Loading from '@/components/Loading.vue'
  import Message from '@/components/Message.vue'
  import api, { API_DEFAULT_PARAMS } from '../services/api.js'

  export default {
    data() {
      return {
        characters: [],
        loading: false,
        noResults: false
      }
    },
    mounted() {
      this.noResults = JSON.parse(localStorage.getItem('favorites')).length === 0 ? true : false;

      // search for characters from api only if there are favorites
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
    components: {
      CardCharacters,
      Loading,
      Message
    }
  }
</script>

<style scoped lang="scss">

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
