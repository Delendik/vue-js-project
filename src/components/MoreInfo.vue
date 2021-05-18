<template>
  <div class="more-info">
    <h1>Карточка № {{card.id}}</h1>
    <h2>{{card.title}} </h2>
    <img :src="card.url" />
  </div>
</template>

<script>
  export default {
    name: 'MoreInfo',
    data() {
      return{
        card: this.$route.query,
      }
    },
  }
</script>

<style scoped>
  .more-info{
    width: 600px;
    height: 600px;
    margin: 0 auto;
    text-align: center;
  }
</style>