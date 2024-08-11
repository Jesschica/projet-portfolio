<template>
  <div class="container-main">
    <!-- Titre principal du portfolio -->
    <h1 id="title">{{Title}}</h1>
    <hr class="trait-title"/>
    

    <!-- Section de présentation -->
    <section id="Presentation">
      <p>
        <i>
          <!-- Affichage de trois lignes de texte de présentation -->
          {{Presentation1}} <br>
          {{Presentation2}} <br>
          {{Presentation3}}
        </i>
      </p>
    </section>


    <!-- Section des créations -->
    <section id="creation">
      <h2 id="créations">Mes créations :</h2>


      <!-- Liste des créations en utilisant une boucle v-for -->
      <div class="creations">
        <div class="creation" v-for="creation in creations" :key="creation.id">
          <h3><u>{{ creation.title }}</u></h3>
          <!-- Image de la création -->
          <img class="image-projet" :src="creation.image" :alt="creation.title" />
          <!-- Bouton pour ouvrir une modal affichant plus de détails sur la création -->
          <button class="btn" @click="openModal(creation)">Accéder</button>
        </div>
      </div>
    </section>


    <!-- Section du formulaire de contact -->
    <section id="contact">
      <h2 id="contacter">Me contacter :</h2>

      <div class="contact">
        <div class="info-formulaire">
          <fieldset>
            <h3><u>Formulaire de contact</u></h3>

            <!-- Formulaire avec événement @submit.prevent pour empêcher la soumission par défaut -->
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-container">

                <div class="form-row">
                  <label for="name">Nom/Prénom :<font color="red">*</font></label>
                  <input v-model="formData.name" type="text" id="name" name="name" required />
                </div>

                <div class="form-row">
                  <label for="object">Objet :<font color="red">*</font></label>
                  <input v-model="formData.object" type="text" id="object" name="object" required />
                </div>

                <div class="form-row">
                  <label for="message-form">Message :<font color="red">*</font></label>
                  <textarea v-model="formData.message" id="message-form" placeholder="Votre message..." style= "height: 250px" name="message" rows="4" required></textarea>
                </div>

                <!-- Bouton de soumission du formulaire -->
              
                <div class="button-form">
                  <button type="submit" class="btn">Envoyer</button>
                </div>
              </div>

            </form>
          </fieldset>
        </div>
      </div>
    </section>


    <!-- Modal pour afficher plus de détails sur une création -->
    <Modal :visible="isModalVisible" @close="closeModal">
    <section class="descriptif">
      <h3>{{ selectedCreation.title }}</h3>
      <p><strong>Date de création :</strong>{{ selectedCreation.date }}</p>
      <p><strong>Technologies utilisées :</strong> {{ selectedCreation.technologies }}</p>
      <!-- Liens conditionnels : affichés uniquement si la création a un lien ou un repository GitHub -->
      <p v-if="selectedCreation.link">
          <router-link :to="selectedCreation.link">Visiter le site / Voir le fichier PDF</router-link>
      </p>
      <p v-if="selectedCreation.github">
          <a :href="selectedCreation.github" target="_blank">Voir le repository GitHub</a>
      </p>
    </section>
    <section class="modal-img">
      <img :src="selectedCreation.image" :alt="selectedCreation.title" class="modal-image"/>
    </section>
    </Modal> 
 </div>
</template>

<script>
// Import des images et du composant Modal
import image1 from '@/assets/image-projet1.jpg';
import image2 from '@/assets/image-projet2.jpg';
import image3 from '@/assets/image-projet3.jpg';
import Modal from '@/components/Modal.vue';

export default {
  name: 'Home',
  components: {
    Modal // Déclaration du composant Modal
  },
  data() {
    return {
      // Données pour le titre et la présentation
      Title: "PORTFOLIO JESSICA PEAN",
      Presentation1: "Bienvenue sur mon portfolio !",
      Presentation2: "Je m'appelle Jessica PEAN, passionnée par l'informatique,",
      Presentation3: "j'étudie actuellement la formation de développeur Web et mobile au centre européen de formation.",


      // Objet pour stocker les données du formulaire
      formData: {
        name: "",
        object: "",
        message: ""
      },


      // Liste des créations avec leurs propriétés
      creations: [
        { 
          id: 1, 
          title: 'Créer un cv en HTML et CSS', 
          image: image1,
          date: "16-09-2023",
          technologies: "HTML, CSS",
          link: '/error', 
          github: 'https://github.com/Jesschica/Devoir01-CV.git'  
        },
        { 
          id: 2, 
          title: 'Rédiger un cahier des charges', 
          image: image2,
          date: "11-07-2024",
          technologies: "Word, PDF",
          link: '/error',  
          github: '/error'
        },
        { 
          id: 3, 
          title: 'Dynamiser un espace commentaire', 
          image: image3,
          date: "12-07-2024",
          technologies: "JavaScript, HTML, CSS",
          link: '/error',  
          github: 'https://github.com/Jesschica/dynamiser-commentaire.git'  
        }
      ],


      // Variables pour la gestion de la modal
      isModalVisible: false, // Indique si la modal est visible ou non
      selectedCreation: {} // Contient les informations de la création sélectionnée pour la modal
    };

  },
  methods: {
    // Ouvre la modal avec les détails d'une création
    openModal(creation) {
      this.selectedCreation = creation;
      this.isModalVisible = true;
    },


    // Ferme la modal
    closeModal() {
      this.isModalVisible = false;
    },


    // Gère la soumission du formulaire
    submitForm() {
      alert('Message envoyé avec succès');
      // Réinitialise les champs du formulaire après l'envoi
      this.formData.name = "";
      this.formData.object = "";
      this.formData.message = "";
    }
  }
};
</script>

<style scoped>

.container-main {
  background-color: #edececef;
  padding: 30px;
  max-width: 100%;
  box-sizing: border-box;
}

h1,h3 {
  text-align: center;
}

h2 {
  background-color: #CBCDD0;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0 auto;
}

#Presentation {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 20px;
}

.trait-title {
  width: 40%;
  background-color: #31569A;
  height: 5px;
  margin: 0 auto;
}

.creations {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 60px;
  margin-top: 50px;
}

.creation {
  box-shadow: 15px 15px 15px 5px #2D2E33;
  border-radius: 10px;
  background-color: white;
  width: 28%;
  margin: 20px;
  padding: 20px;
  text-align: center;
}

.image-projet {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  padding-bottom: 15px;
  object-fit: cover;
}

.btn {
  background-color: #31569A;
  color: white;
  border-radius: 10px;
  width: 50%;
  padding: 10px;
  margin: 20px auto 0; 
  display: block; 
  cursor: pointer;
}


.btn:hover {
  background-color: green;
}

.contact {
  width: 100%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.info-formulaire {
  background-color: white;
  border-radius: 10px;
  box-shadow: 15px 15px 15px 5px #2D2E33;
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  margin: 20px;

}

fieldset {
  border-radius: 5px;
}

h3 {
  padding-bottom:20px;
}

.form-container {
  max-width: 100%;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.form-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
}

.form-row label {
  width: 100%;
  margin-bottom: 5px;
}

.form-row input,
.form-row textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.modal-image {
  max-width: 100%;
  margin: 20px auto;
  display: block;
}

@media (max-width: 768px) {
    .creations {
      flex-direction: column;
    }
  
    .creation {
      width: 90%;
      max-width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    .btn, .button-envoyer {
      width: 100%;
    }
  
    h2, h3 {
      font-size: 1.5rem;
    }
  
    .trait-title {
      width: 80%;
    }
  }

</style>