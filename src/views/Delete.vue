<template>
  <div class="row">
    <div class="col s6 offset-s3">
    <h1>Delete contact</h1>
    <label for=""> Are you shure?</label>
     <hr>
     <h3> Contact</h3>
     <div>Title: {{task.title}}</div>
     <div>Description: {{task.description}}</div>
     <hr>
     <h4>Delete?</h4>
     <button class="button button--delete" type="button" @click="submitDelete"> Yes</button>
     <button class="button button--change" type="button" @click="submitCancel"> No</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    task(){
      return this.$store.getters.taskById(+this.$route.params.id)
    }
  },
  methods: {
    submitDelete() {
      this.$store.dispatch('deleteContact', this.task.id)
      this.$router.push('/')    
    },
    submitCancel() {
      this.$router.push('/')    
    }
  },
}
</script>
