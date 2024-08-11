<template>
  <header>
        <div class="container-header">
            <div class="logo">
            <a href="#title">
                <img class="img-logo" src="../assets/logo-pf.png" alt="photo portfolio jessica pean">
            </a>
            </div>
            <nav class="menu">
                <router-link to="/" style="color: white">Accueil</router-link>
                <a href="#Presentation" style="color: white;">Présentation</a>
                <a href="#créations" style="color: white;">Créations</a>
                <a href="#contacter" style="color: white;">Me contacter</a> 
            </nav>
            
        </div>
    </header>
</template>

<script>

    export default {
        name:'Header',
    
    };

</script>


<style scoped>

.container-header { 
    display: flex;
    align-items: center;
    padding: 15px;
    padding-right:30px;
    background-color: #2D2E33;
    justify-content: space-between; 
}



.img-logo {
    width: 70%;
    max-width: 250px; 
    height: auto; 
    border-radius: 10px;
    margin-left: 20px;
}

.menu { 
    display: flex;
    justify-content: flex-end; 
    gap: 15px; 
}

a {
    color: white;
    text-decoration: none;
    font-size: 1.2em;
}

@media (max-width: 768px) {
    .container-header {
        flex-direction: column; 
        align-items: center;
        padding: 10px;
    }

    .logo {
        margin-bottom: 10px; 
        text-align: center;
    }

    .menu {
        flex-direction: column; 
        align-items: center;
    }

    .menu a {
        font-size: 1em; 
        margin: 5px 0; 
    }
}

@media (max-width: 480px) {
    .img-logo {
        width: 80%; 
        margin-left: 0;
    }

    .menu a {
        font-size: 0.9em; 
    }
}



</style>