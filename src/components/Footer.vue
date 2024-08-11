<template>
    <footer class="footer">
        <div class ="container">
            <a href="https://www.linkedin.com" target="_blank">
            <img class="icon-liens-sociaux" src="../assets/Linkedin.jpg" alt="Linkedin"></a>
            <a href="https://github.com/" target="_blank">
            <img class="icon-liens-sociaux" src="../assets/github-app-tips.jpg" alt="Github"></a>
            <p>Dernière mise à jour :{{ lastUpdated }} </p>
        </div>      
    </footer>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      lastUpdated: new Date().toLocaleDateString()
        };
    }
}
</script>


<style scored>

footer {
    padding: 20px;
    background-color: #2D2E33;
    color: white;
    height: 100px;
    text-align: center;
}

.icon-liens-sociaux{
    width: 30px;
    height: 30px;
    margin-right:10px
}
    
</style>