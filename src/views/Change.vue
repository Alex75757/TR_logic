<template>
  <div>
    <div>
    <h2>Change contact  {{task.title}}</h2>
    <form @submit.prevent="submitHandler">
      <div class="field"
            v-for="(field,i) in task"
            :key="i"
        >
        <h4>{{i}} </h4>
         <input v-if=" i !== 'id' && i !== 'email' " v-model="task[i]" type="text" class="validate" required >
         <input v-else-if=" i == 'email'" v-model="task[i]" type="email" class="validate" required >
         <p v-else class="validate"> {{task[i]}} </p>
      </div>
   
      <br>
      <button class="button button--delete" type="submit"> Change contact</button>
       <router-link tag="button" class="button button--change" :to="'/addfield/' + task.id">
       Add field
       </router-link>
        <router-link tag="button" class="button button--delete" :to="'/deletefield/' + task.id">
       Delete field
       </router-link>
      <!-- <button class="button button--change" type="submit" @click="addField"> Add field</button> -->
      <!-- <button class="button button--delete" type="submit" @click="deleteField"> Delete field</button> -->
      <button class="button" type="submit" @click="changeCancel"> Cancel</button>
    </form>
    <router-view/>
    </div>
  </div>
</template>

<script>


export default {
  computed: {
    task(){
      return this.$store.getters.taskById(+this.$route.params.id)
    },
  },
  methods: {
    submitHandler() {
      this.$store.dispatch('updateContact', this.task.id)
      this.$router.push('/')    
    },
    changeCancel(){
      this.$router.push('/')
    },
    addField(){
      //at first usage get Uncaught (in promise) Error: Navigation cancelled
      //at second try all is ok!? very strange... solved by useing router-link
      this.$router.push('/addfield/'+ this.task.id)
    },
    deleteField(){
      this.$router.push('/deletefield/'+this.task.id)
    }
  },
}
</script>
<style lang="scss" scoped>
.field{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  margin: 0px auto;
  height: 50px;
}
</style>
