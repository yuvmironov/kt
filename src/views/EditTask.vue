<template>
  <div class="Edit">
    <p>{{ findTask.task }}</p>
    <input type="text" v-model='task' class="Edit-Input" placeholder="Введите исправление">
    <button v-on:click = 'saveTask'>Сохранить</button>
  </div>
</template>

<style lang="stylus" scoped>
.Edit
  width: 320px;
  margin: 0 auto;
  padding: 5px 5px;
  background-color white
  display flex
  flex-direction column
  &-Input
    margin-bottom 5px
</style>

<script>
import { db } from '../assets/db'

export default {
  data () {
    return {
      listTasks: [],
      idTask: '',
      task: ''
    }
  },
  firestore: {
    listTasks: db.collection('todolist')
  },
  methods: {
    setTask (idTask) {
      this.idTask = idTask
    },
    saveTask () {
      db.collection('todolist')
        .doc(this.idTask)
        .update({ task: this.task })
        .then(() => {
          this.$router.push('/')
        })
        .catch(e => {
          alert('Не удалось обновить задачу')
        })
    }
  },
  computed: {
    findTask () {
      let task = ''
      this.listTasks.forEach(item => {
        if (item.id === this.$route.params.id) {
          task = item
          this.setTask(item.id)
        }
      })
      return task
    }
  }
}
</script>
