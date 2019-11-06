<template>
  <div class="NewTask">
    <input class="NewTask-Input" v-model='newTask' type="text">
    <button class="NewTask-Button" v-on:click = 'addTask'>Добавить задачу</button>
  </div>
</template>

<script>
import { db } from '../assets/db'

export default {
  data () {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask () {
      if (this.newTask) {
        let data = this.newTask
        db.collection('todolist').add({ id: '', task: data })
        this.newTask = ''
      } else {
        alert('Введите задачу')
      }
    }
  }
}
</script>

<style lang="stylus">
.NewTask
  display flex
  flex-direction column
  &-Input
    margin-bottom 5px
    padding 5px
</style>
