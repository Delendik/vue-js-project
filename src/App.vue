<template>
  <div class="page">
    <v-progress-circular
      class="loading"
      :size="200"
      :width="7"
      color="#800080"
      indeterminate
      v-if="!show"
    ></v-progress-circular>
    <v-card class="overflow-hidden" v-if="show">
      <v-app-bar color="#b1cff1">
        <v-app-bar-nav-icon @click="showMenu = !showMenu" v-on:click="handleClick" />
        <v-toolbar-title >Burger-menu</v-toolbar-title>
      </v-app-bar>
    </v-card>
    <div class="menu-container" v-if="showMenu">
      <img :src="avatar" alt="фото автора" class="menu-photo" /> 
      <p class="menu-title">Алексей</p>
      <p class="menu-subtitle">delendikalexey@gmail.com</p>
      <a href="/" class="menu-link">Галерея</a>
      <a href="/about" class="menu-link">Обо мне</a>
    </div>
    <router-view v-if="show"/>
  </div>
  
</template>

<script>
import avatar from './images/author.jpg'
export default {
  name: 'App',
  data() {
    return{
      showMenu: false,
      show: false,
      avatar
    }
  },
  methods: {
    handleClick() {
      console.log(this.showMenu)
    }
  },
  mounted() {
    setTimeout(() => this.show = true, 500);
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

  .page{
    height: 100vh;
    background-color: rgb(201, 228, 247);
  }
  
  .menu-container{
    width: 200px;
    height: 400px;
    position: absolute;
    z-index: 5;
    background-color: #b1cff1;
    top: 80px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .menu-photo{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 10px;
  }

  .menu-title{
    font-size: 20px;
    margin: 10px 0;
  }

  .menu-subtitle{
    margin: 10px 0;
  }

  .menu-link{
    text-decoration: none;
    margin: 10px 0;
    font-size: 25px;
    font-weight: 700;
  }
</style>
