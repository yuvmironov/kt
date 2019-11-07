<template>
  <div class="List">
    <NewTask/>
    <div class="List-Item" v-for="(item, index) in paginatedData" :key="index">
      <input type="checkbox" :checked=item.resolve :disabled=item.resolve v-on:change='finishedTask(item.id)'>
      <p class="List-Task" :class="{ 'List-Task_Resolve': item.resolve }" >{{ item.task }}</p>
      <span class="List-Edit" v-on:click='editElement(item.id)'>.</span>
      <span class="List-Delete" v-on:click='deleteElement(item.id)'></span>
    </div>
    <div class="List-ButtonBlock">
      <button class="List-Button" :disabled="namberPage === 0" v-on:click="prevPage">Назад</button>
      <button class="List-Button" :disabled="namberPage >= pageCount -1" v-on:click="nextPage">Вперед</button>
    </div>
  </div>
</template>

<style lang="stylus">
.List
  width 320px
  height 500px
  margin 0 auto
  background-color #fff
  border-radius 4px
  padding 5px
  &-Item
    display flex
    justify-content space-between
    padding 4px
    margin 4px 0
    border 1px solid black
    border-radius 2px
    position relative
    &:hover .List-Delete
      opacity 1
    &:hover .List-Edit
      opacity 1
  &-Delete
    position relative
    width 15px
    height 15px
    opacity 0
    cursor pointer
    &:after
      content ''
      position absolute
      width 15px
      height 1px
      background-color black
      transform rotate(45deg)
      top 7px
    &:before
      content ''
      position absolute
      width 15px
      height 1px
      background-color black
      transform rotate(-45deg)
      top 7px
  &-Edit
    opacity 0
    position absolute
    top 0
    right 40px
    width 15px
    height 15px
    cursor pointer
    &:after, &:before
      position absolute
      content '.'
    &:after
      left 5px
    &:before
      left 10px
  &-ButtonBlock
    display flex
    justify-content space-between
  &-Button
    padding 5px
  &-Task
    &_Resolve
      text-decoration line-through
</style>

<script>
import NewTask from '@/components/NewTask.vue'
import { db } from '../assets/db'

export default {
  components: {
    NewTask
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data () {
    return {
      listTasks: [],
      namberPage: 0
    }
  },
  firestore: {
    listTasks: db.collection('todolist').orderBy('time', 'desc')
  },
  methods: {
    deleteElement (id) {
      db.collection('todolist').doc(id).delete()
    },
    editElement (id) {
      this.$router.push({ name: `editTask`, params: { id: id } })
    },
    finishedTask (id) {
      db.collection('todolist')
        .doc(id)
        .update({ resolve: true })
        .then(() => {
          alert('Задача выполнена')
        })
        .catch(e => {
          alert('Не удалось обновить задачу')
        })
    },
    nextPage () {
      this.namberPage++
    },
    prevPage () {
      this.namberPage--
    }
  },
  computed: {
    pageCount () {
      let l, s
      l = this.listTasks.length
      s = this.size
      return Math.ceil(l / s)
    },
    paginatedData () {
      let start, end
      start = this.namberPage * this.size
      end = start + this.size
      return this.listTasks.slice(start, end)
    }
  }
}
</script>
