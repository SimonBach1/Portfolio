<template>
  <div class="navbar">
        <NavItem to="/" label="Acceuil"></NavItem>
        <NavItem to="/present-me" label="Qui suis-je ?"></NavItem>
        <NavItem to="/template-texte" label="Mon entreprise"></NavItem>
        <NavItem to="/template-texte" label="Flexio c'est quoi ?"></NavItem>
        <NavItem to="/template-texte" label="Mon développement de compétences"></NavItem>
  </div>
</template>

<script>
import NavItem from './NavItem.vue';

export default {
  name: "MenuTemplate",
  components: {
    NavItem,
  },
};
</script>

<style scoped>

/* Style général de la barre de navigation */
.navbar {
  position: fixed; /* Fixe la barre */
  top: 0; /* Positionne en haut de la page */
  left: 0; /* Aligne à gauche */
  width: 100%; /* Prend toute la largeur */
  background-color: #f8f9fa; /* Couleur de fond */
  padding: 2% 2% 2% 2% ; /* Espacement interne */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Ombre subtile */
  z-index: 1000; /* Assure que la barre est au-dessus d'autres éléments */
}


</style>
