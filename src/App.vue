<template>
  <div class="page-cards">
    <div class="buttons">
      <v-btn
        depressed
        color="#19b2e6"
        v-on:click="firstButton"
      >
        Группа 1
      </v-btn>
      <v-btn
        depressed
        color="#19b2e6"
        v-on:click="secondButton"
      >
        Группа 2
      </v-btn>
      <v-btn
        depressed
        color="#19b2e6"
        v-on:click="thirdButton"
      >
        Группа 3
      </v-btn>
      <v-btn
        depressed
        color="#19b2e6"
        v-on:click="fourthButton"
      >
        Группа 4
      </v-btn>
    </div>
    <div id="app" class="cards-container">
      <div v-for="card in cardsForRender" :key="card.id">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              max-width="344"
            >
              <v-img :src="card.url"></v-img>
              <v-card-text>
                <h2>
                  {{card.title}}
                </h2>
              </v-card-text>

              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="#036358"
                >
                  <v-btn>Подробнее</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },

  computed: {
    ...mapGetters(['firstGroup', 'secondGroup', 'thirdGroup', 'fourthGroup']),
  },
  
  data() {
      return{
        cardsForRender: [],
      }
    },

  methods: {
    ...mapActions(['getCards']),
    firstButton(){
      this.cardsForRender = this.firstGroup;
    },
    secondButton(){
      this.cardsForRender = this.secondGroup;
    },
    thirdButton(){
      this.cardsForRender = this.thirdGroup;
    },
    fourthButton(){
      this.cardsForRender = this.fourthGroup;
    }
  },
    async mounted() {
      this.getCards();
    },  
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .cards-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-gap: 20px;
    justify-content: center;
  }

  .buttons{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px 0;
  }
</style>
