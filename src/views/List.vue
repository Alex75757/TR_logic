<template>
  <div>
      <h1>List</h1>
      <hr>
      <table v-if="tasks.length">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th></th>
                  <th>Operations</th>
              </tr>
          </thead>
          <tbody>
             <tr 
              v-for="(task, idx) of tasks"
              :key="task.id"
              >
              <td>{{idx + 1}}</td>
              <td>{{task.title}}</td>
              <td class="td"><div class="text">{{task.description}}</div></td>
              <td>{{task.status}}</td>
              <td>
              <router-link tag="button" class="button button--change" :to="'/change/'+ task.id">
                  Change
              </router-link>
              <!-- </td>
                <td> -->
               <router-link tag="button" class="button button--delete"  :to="'/delete/' + task.id">
                   Delete
               </router-link>
              </td>
             </tr>
          </tbody>
      </table>
      <div v-else>
          <p >No contacts in book</p>
      </div>
      <hr>
      <router-link tag="button" class="button" :to="'/create/'">
                    Create contact
      </router-link>
  </div>
</template>

<script>
export default {
    computed: {
        tasks() {
            return this.$store.getters.tasks
        },
    },
}
</script>

<style lang="scss">
    td {
        max-width: 700px;
        width: 80px;
        margin: 0 15px;
    }
    th {
        width: 80px;
        padding: 0 15px;
    }
    .text {
        width: 200px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .button {
        margin: 0 5px;
        border: 1.5px solid darkcyan;
        border-radius: 15px;
        background-color: cyan;
        &:hover{
         cursor: pointer;
         color: darkcyan;
        }
        &--delete{
            border: 1.5px solid darkred;
            background-color: red;
             &:hover{
                 cursor: pointer;
                 color: darkred; 
            }
        }
        &--change{
            border: 1.5px solid darkgreen;
            background-color: rgb(21, 187, 21);
             &:hover{
                 cursor: pointer;
                 background-color: rgba($color: rgb(21, 187, 21), $alpha: 0.8); 
            }
        }
    }

</style>