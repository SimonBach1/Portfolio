<template>
  <div>
    <h1>Ma présentation</h1>
    <h2>SIMON BACH</h2>

    <div style="padding-left: 2%" class="image-text-container">
      <template-image
          imagePath="/images/perso/profil.jpg"
          altText="Profil utilisateur"
          maxWidth="800px"
          maxHeight="600px"
      />

      <TemplateTexte :content="htmlContent"></TemplateTexte>

  </div>
  </div>
</template>

<script>

import TemplateTexte from "@/components/TexteTemplate.vue";
import TemplateImage from "@/components/ImageTemplate.vue";

export default {
  name: 'PresentMe',
  components: {TemplateTexte, TemplateImage},
  data() {
    return {
      htmlContent: '        <div style="text-align: center">Qui suis-je ?</div><br><br>\n' +
          '        <div style="text-align: justify">\n' +
          '          <div style="padding-left: 5%">\n' +
          'Étudiant en 3ᵉ année de BUT Informatique, actuellement en 2ᵉ année d&apos;alternance. <br>' +
          ' Passionné par le développement, je mets en pratique mes compétences à travers des projets<br> en entreprise, '+
          'où je développe des solutions concrètes et apprends chaque jour.<br>'+
          'Les missions que l&apos;on me confie sont :  <br><br>\n' +
          '- L&apos;ajout de nouvelles fonctionnalités dans le logiciel Flexio (remaniement de code existant ou nouveau projet <br><br>\n'+
          '- Assurer la maintenance des projets que j&apos;ai développé depuis mon arrivée en septembre 2023'+
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


