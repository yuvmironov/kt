<template>
  <div class="List">
    {{ listTasks }}
    <NewTask/>
    <div class="List-Item" v-for="(item, index) in listTasks" :key="index">

      <p>{{ item.task }}</p>
      <span class="List-Delete" v-on:click='deleteElement(item.id)'></span>
    </div>
    <!-- <div class="List-ButtonBlock">
      <button class="List-Button" :disabled="numberPage === 0" v-on:click="prevPage">Назад</button>
      <button class="List-Button" :disabled="numberPage >= pageCount -1" v-on:click="nextPage">Вперед</button>
    </div> -->
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
    &:hover .List-Delete
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
  &-ButtonBlock
    display flex
    justify-content space-between
  &-Button
    padding 5px
</style>

<script>
import NewTask from '@/components/NewTask.vue'
import { db } from '../assets/db'

export default {
  components: {
    NewTask
  },
  data () {
    return {
      listTasks: []
    }
  },
  firestore: {
    listTasks: db.collection('todolist')
  },
  methods: {
    deleteElement (id) {
      console.log(id)
      db.collection('todolist').doc(id).delete()
    }
  }
}
</script>
