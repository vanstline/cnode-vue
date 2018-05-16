<template lang="pug">
  header.header
    img(src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg")
</template>

<script>
import api from 'api/index'
export default {
  name: 'Header',
  data() {
    return {
      dataSource: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass"å>
@import './../../sass/config'
@import './../../sass/base/base'
.header 
  background: #444
  width: 100%
  height: 50px
  position: relative
  z-index: 9
  display: flex
  justify-content: flex-start
  align-items: center
  img
    width: 120px
    height: 30px
    margin-left: 60px
</style>