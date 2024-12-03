<template>
  <div>
    <h1>Portfolio : Troisième année de BUT à l'IUT de Nord Franche-Comté</h1>
    <h2 >SIMON BACH</h2>
    <div class="image-text-container">
      <template-image
          imagePath="images/acceuil/profil.jpg"
          altText="Profil utilisateur"
          maxWidth="800px"
          maxHeight="600px"
      />
      <TemplateTexte :content="htmlContent"></TemplateTexte>

    </div>
  </div>
</template>

<script>
import TemplateImage from "@/components/ImageTemplate.vue";
import TemplateTexte from "@/components/TexteTemplate.vue";

export default {
  name: 'AccueilTemplate',
  components: {TemplateTexte, TemplateImage},
  data() {
    return {
      htmlContent: '        <div style="text-align: center">Bienvenue sur mon portfolio !</div><br><br>\n' +
          '        <div style="text-align: justify">\n' +
          '          Ce portfolio se compose de plusieurs parties :<br><br>\n' +
          '          <div style="padding-left: 5%">\n' +
          '            - La première sera une courte présentation de moi-même et de mon rôle au sein de mon entreprise<br><br>\n' +
          '            - La seconde sera une présentation de mon entreprise Flexio<br><br>\n' +
          '            - La troisième sera une explication de l\'environnment autour du logiciel homonyme que développe Flexio <br><br>\n' +
          '            - La quatrième sera la démonstration des compétences que nous devons acquérir tout au long de cette année <br><br>\n' +
          '          </div>\n' +
          '        </div>'
    };
  }
}
</script>

<style scoped>
h1 {
  color: #333;
}


div {
  font-family: 'Calisto MT', sans-serif;
}

.image-text-container {
  display: flex;
  align-items: center; /* Centrer verticalement l'image et le texte */
  gap: 5%;

}


</style>
