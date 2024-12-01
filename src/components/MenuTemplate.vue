<template>
  <div>
    <nav>
      <ul>
        <li class="card"><router-link to="/">Accueil</router-link></li>
        <li class="card"><router-link to="/present-me">Qui suis-je ?</router-link></li>
        <li class="card"><router-link to="/template-texte">Mon entreprise</router-link></li>
        <li class="card"><router-link to="/template-texte">Flexio c'est quoi ?</router-link></li>
        <li class="card"><router-link to="/template-texte">Mon développement de compétences</router-link></li>

      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuTemplate"
}
</script>

<style scoped>
nav {
  background-color: #333;
  padding: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline;
  margin-right: 10px;
}

div {
  font-family: 'Calisto MT', sans-serif;
  font-size: 20px;
}

.card{
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre de la carte */
  width: fit-content;
  padding: 1% 1% 1% 1%;
  font-size: 20px;
  background-color: #fff;
}

a {
  text-decoration: none;
  color: #333;
}
a:hover{
  text-decoration: none;
  color: #333;
}
.card:hover {
  color: white;
  background-color: #707070;

}
</style>
