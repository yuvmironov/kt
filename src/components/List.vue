<template>
  <div class="List">
    <NewTask/>
    <div class="List-Item" v-for="(item, index) in paginatedData" :key="index">
      <p>{{ item.task }}</p>
      <span class="List-Delete" v-on:click="dleeteListItem(item)"></span>
    </div>
    <div class="List-ButtonBlock">
      <button class="List-Button" :disabled="numberPage === 0" v-on:click="prevPage">Назад</button>
      <button class="List-Button" :disabled="numberPage >= pageCount -1" v-on:click="nextPage">Вперед</button>
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

export default {
  data () {
    return {
      numberPage: 0
    }
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 10
    },
    listTasks: []
  },
  components: {
    NewTask
  },
  methods: {
    dleeteListItem (item) {
      this.$store.commit('deleteElement', item)
    },
    nextPage () {
      this.numberPage++
    },
    prevPage () {
      this.numberPage--
    }
  },
  mounted () {
    this.$store.dispatch('getTaskList')
  },
  computed: {
    pageCount () {
      let l, s
      l = this.$store.state.taskList.length
      s = this.size
      return Math.ceil(l / s)
    },
    paginatedData () {
      let start, end
      start = this.numberPage * this.size
      end = start + this.size
      return this.$store.state.taskList.slice(start, end)
    }
  }
}
</script>
