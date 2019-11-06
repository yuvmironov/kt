<template>
  <div class="List">
    <NewTask/>
    <div class="List-Item" v-for="(item, index) in this.$store.state.taskList" :key="index">
      <p>{{ item.task }}</p>
      <span class="List-Delete" v-on:click="dleeteListItem(item)"></span>
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
</style>

<script>
import NewTask from '@/components/NewTask.vue'

export default {
  data () {
    return {
      listTasks: []
    }
  },
  components: {
    NewTask
  },
  methods: {
    dleeteListItem (item) {
      this.$store.commit('deleteElement', item)
    }
  },
  mounted () {
    this.$store.dispatch('getTaskList')
  }
}
</script>
