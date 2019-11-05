<template>
  <div class="Home">
    <div class="Home-Content">
      <List/>
      <Button/>
    </div>
  </div>
</template>

<script>
import List from '@/components/List.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'home',
  components: {
    List,
    Button
  }
}
</script>

<style lang="stylus">
.Home
  padding 15px
  &-Content
    display flex
    flex-direction column
    align-items center
</style>
