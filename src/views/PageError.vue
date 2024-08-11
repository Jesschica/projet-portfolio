<template>
  <div class="error-page">
    <h1 style="color:red">Erreur 404</h1>
    <p>Désolé, la page que vous avez demandée n'existe pas.</p>

    <img class="img" src="@/assets/image-error.jpg" alt="image-error-404">

  </div>
</template>

<script>
export default {
  name: 'PageError'
};
</script>

<style scoped>
.error-page {
    background-color: #edececef;
    text-align: center;   
    font-size: large;
    padding:10px;
    padding-bottom:30px;
}

.img {
    width: 40%;
    height: 40%;
    margin: auto;
    border-radius: 10px;
    box-shadow: 20px 20px 25px 0;
}
</style>