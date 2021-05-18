<template>
  <div class="page-cards">
    <div class="buttons" >
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
      <div v-for="card in cardsForRender" :key="card.id" >
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
                  <v-btn @click="handleClick(card)">Подробнее</v-btn>
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
import {mapGetters, mapActions} from 'vuex'
import router from '../router'
export default {
  name: 'Galery',
  computed: {
    ...mapGetters(['firstGroup', 'secondGroup', 'thirdGroup', 'fourthGroup']),
  },
  
  data() {
      return{
        cardsForRender: [],
        show: false,
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
    },
    handleClick: (card)=>{
      router.push({ 
        path: `/info/${card.id}`,
        query: card,
      })
    }
  },
  mounted() {
    this.getCards();
  },  
}
</script>

<style>
  .loading{
    position: absolute; 
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
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
