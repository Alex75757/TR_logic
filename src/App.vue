<template>
  <div id="app">
    <Navigate msg="Contacts book test SPA"/>
  </div>
</template>

<script>
import Navigate from './components/Navigation'

export default {
  name: 'App',
  components: {
    Navigate
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
  margin-top: 40px;
}
</style>
