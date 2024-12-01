<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from './components/MenuTemplate.vue';

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
}

nav {
  background-color: #333;
  color: #fff;
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

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
