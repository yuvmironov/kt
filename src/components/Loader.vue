<template>
  <div class="Loader" v-if="flag">
    <div class=" lds-facebook">
      <div></div><div></div><div></div>
    </div>
  </div>
</template>

<style lang="stylus">
.Loader
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background-color rgba(255, 255, 255, 0.5)
  display flex
  justify-content center
  align-items center
  height 100%
  z-index 1100
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #000;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 45px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 51px;
  }
  50%, 100% {
    top: 19px;
    height: 26px;
  }
}

</style>

<script>
export default {
  props: [
    'flag'
  ]
}
</script>
