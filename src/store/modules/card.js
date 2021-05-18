export default {
  actions: {
    async getCards(ctx){
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=24"
    );
    const cards = await res.json();
    ctx.commit('updateCards', cards)
  }},
  mutations: {
    updateCards(state, cards){
      state.cards = cards
    }
  },
  state: {
    cards: [],
  },
  getters: {
    firstGroup(state) {
      return state.cards.slice(0, 6)
    },
    secondGroup(state) {
      return state.cards.slice(6, 12)
    },
    thirdGroup(state) {
      return state.cards.slice(12, 18)
    },
    fourthGroup(state) {
      return state.cards.slice(18, 24)
    }
  },
}