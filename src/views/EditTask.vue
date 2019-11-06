<template>
  <div class="Edit">
    <input type="text" :value=findTask.task class="Edit-Input">
    <button>Сохранить</button>
  </div>
</template>

<script>
import { db } from '../assets/db'

export default {
  data () {
    return {
      listTasks: []
    }
  },
  firestore: {
    listTasks: db.collection('todolist')
  },
  computed: {
    findTask () {
      let task = ''
      console.log(this.listTasks)
      this.listTasks.forEach(item => {
        if (item.id === this.$route.params.id) {
          task = item
        }
      })
      return task
    }
  }
}
</script>
