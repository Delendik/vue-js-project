<template>
  <div class="about__container">
      <img :src="avatar" alt="фото автора" class="about__photo" /> 
      <div class="about__description">
        <h2 class="about__title">О проекте и авторе</h2>
        <p class="about__text">
          Привет! Меня зовут Алексей и я фронтендер.
          <br/><br/>
          Этот проект создан для знакомства с возможностями Vue.
          <br/><br/>
          Если хотите поработать вместе, пишите delendikalexey@gmail.com.
        </p>
      </div>
  </div>
</template>

<script>
  import avatar from '../images/author.jpg'
  export default {
    name: 'About',
    data() {
      return{
        avatar
      }
    },
  }
</script>

<style scoped>
  .about__container{
    margin: 144px 104px;
    display: flex;
    transition: all 0.5s ease-in;
  }

  .about__photo{
    width: 464px;
    height: 464px;
    border-radius: 1000px;
    transition: all 0.5s ease-in;
  }

  .about__description{
    margin-top: 51px;
    margin-left: 56px;
    transition: all 0.5s ease-in;
  }

  .about__title{
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 46px;
    color: #1A1B22;
    margin: 0;
  }

  .about__text{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #1A1B22;
    margin-top: 24px;
    margin-bottom: 0;
    white-space: pre-wrap;
    transition: all 0.5s ease-in;
  }
</style>
