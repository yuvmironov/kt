<template>
  <div class="Home">
    <div class="Home-Content">
      <List/>
    </div>
  </div>
</template>

<script>
import List from '@/components/List.vue'

export default {
  name: 'home',
  components: {
    List
  }
}
</script>

<style lang="stylus">
.Home
  padding 15px
</style>
