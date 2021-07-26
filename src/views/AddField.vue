<template>
  <div class="wrapper" >
    <div >
    <h2>Add Field to {{task.title}}</h2>
    <form @submit.prevent="submitHandler">
      <div class="field">
        <h4> name
         <input v-model="name" type="text" class="validate" required >
         <span class="helper-text" data-error="Title is required"></span>
        </h4>
      </div>
      <div class="field">
        <h4> value
         <input v-model="value" type="text" >
        </h4>
      </div>
      <br>

      <button class="button button--change" type="submit"> Add field and value</button>
      <button class="button" type="submit" @click="changeCancel"> Cancel</button>
    </form>
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
      this.$store.dispatch('addField', {
        id: this.task.id,
        name: this.name,
        value : this.value,
      })
      this.$router.push('/change/'+ this.task.id)    
    },
    changeCancel(){
      this.$router.push('/change/'+ this.task.id)
    }
  },
}
</script>
