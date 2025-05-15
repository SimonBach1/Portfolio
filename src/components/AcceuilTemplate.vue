<template>
  <div>
    <h1>Portfolio : Troisième année de BUT à l'IUT de Nord Franche-Comté</h1>
    <h2 >SIMON BACH</h2>
    <div style="padding-left: 2%" class="image-text-container">
      <template-image
          imagePath="images/acceuil/portfolio.png"
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
      htmlContent: '<h1>Bienvenue sur mon portfolio !</h1><br><br>\n'
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
