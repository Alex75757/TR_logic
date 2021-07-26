<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div >
        <router-view/>
    </div>
    <h6 style="text-align: left" >made by Me:)</h6>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.hello{
  margin: 0 auto;
  width: 600px;
  height: 600px;
  font-size: 1.3rem;
}
</style>
