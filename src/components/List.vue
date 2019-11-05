<template>
  <div class="List">
    <NewTask/>
    {{ this.$store.state.taskList }}
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
</style>

<script>
import NewTask from '@/components/NewTask.vue'

export default {
  components: {
    NewTask
  },
  mounted () {
    this.$store.dispatch('getTaskList')
  }
}
</script>
