<template>
  <div class="row" >
    <div class="col s6 offset-s3">
    <h2>Delete Field from {{task.title}}</h2>
    <form @submit.prevent="submitHandler">
      <div class="field">
        <h4> name
         <input v-model="name" type="text" class="validate" required >
         <span class="helper-text" data-error="Title is required"></span>
        </h4>
      </div>
      <br>
      <button class="button button--delete" type="submit"> Delete field and value</button>
      <button class="button" type="submit" @click="changeCancel"> Cancel</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    task(){
      console.log(this.$store.getters.taskById(+this.$route.params.id))
      return this.$store.getters.taskById(+this.$route.params.id)
    },
  },
  methods: {
    submitHandler() {
      if (this.name != 'id') {
       this.$store.dispatch('deleteField', {
        id: this.task.id,
        name: this.name
        })
      } else {
         alert("you can't delete id")
      }
      this.$router.push('/change/'+ this.task.id)    
    },
    changeCancel(){
      this.$router.push('/change/'+ this.task.id)
    }
  },
}
</script>
