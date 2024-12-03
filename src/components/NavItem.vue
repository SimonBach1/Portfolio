<template>
    <router-link :to="to" class="card" exact-active-class="active"  v-text="label"></router-link>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

/* Style des cartes (éléments de menu) */
.card {
  border: none; /* Suppression de la bordure par défaut */
  border-radius: 8px; /* Coins arrondis */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre */
  padding: 20px 40px; /* Marges internes */
  font-size: 18px;
  margin-right: 2%;
  font-weight: 500; /* Texte légèrement gras */
  background-color: #ffffff; /* Fond blanc */
  color: #333333; /* Couleur du texte */
  text-decoration: none; /* Supprime le soulignement */
  transition: all 0.3s ease; /* Transition douce pour les interactions */
  cursor: pointer;
}

/* Effet au survol */
.card:hover {
  color: #ffffff; /* Texte blanc */
  background-color: #353535; /* Fond bleu */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Accentuation de l'ombre */
  transform: translateY(-3px); /* Légère élévation */
}

/* Style pour les états actifs */
.card.active {
  background-color: #333232; /* Couleur active */
  color: #ffffff;
  font-weight: bold;
}


</style>
