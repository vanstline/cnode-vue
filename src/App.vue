<template lang="pug">
  #app
    Header
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass"å>
@import './sass/config'
@import './sass/base/base'
body
  background: #f1f1f1
  width: 100%
  height: 100%
</style>
