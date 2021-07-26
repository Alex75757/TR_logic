<template>
  <div class="row">
    <div class="col s6 offset-s3">
    <h1>Create contact</h1>
    <form @submit.prevent="submitHandler">
      <div class="input-field">
          <label for="title">Title </label>
          <input v-model="title" id="title" type="text" class="validate" required>
          <span class="helper-text" data-error="Title is required"></span>
      </div>
      <br>      
      <div class="input-field">
             <label for="description">Description </label>
            <textarea v-model="description" id="description" class="textarea"></textarea>
            <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
      </div>
      <br>
      <div class="input-field">
          <label for="title">Email </label>
          <input v-model="email"  type="email" class="validate" required>
          <span class="helper-text" data-error="Email is required"></span>
      </div>
      <br>          
      <button class="button" type="submit"> Create contact</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
      description: '',
      title: ''
  }),
  
  methods: {
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        email: this.email
      }
      this.$store.dispatch('createContact', task)
      this.$router.push('/')    
    }
  },
}
</script>
<style lang="scss">
.textarea{
  width:200px;
}
text{
  width: 300px;
}
.input-field{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  margin: 10px 5px;
}
.validate{
  width: 180px;
  margin-left: 10px;
}
</style>
