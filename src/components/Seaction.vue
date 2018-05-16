<template lang="pug">
  .contentAll
    .leftTab
      router-link.tabCell(v-for="(item, index) in tabList" :key="index" :to="item.path") {{item.name}}
    router-view
</template>

<script>
import api from './../api/index'
export default {
  name: 'Seaction',
  data() {
    return {
      tabList: [
        {
          name: '首页',
          path: '/Seaction/HomeContent'
        },
        {
          name: '新增话题',
          path: '/Seaction/AddContent'
        },
        {
          name: '我的收藏',
          path: '/Seaction/CollectList'
        },
        {
          name: '我的消息',
          path: '/Seaction/News'
        }
      ]
    }
  },
  created() {
    var data = {
      page: 0,
      tab: '',
      limit: 20
    }
    api.getTopicsData('topics', data).then((res) => {
      this.dataSource = res
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../sass/config'
@import '../sass/base/base'
.contentAll
  width: 80%
  margin: auto
  background: #fff
  min-height: 1000px
  .leftTab
    width: 180px
    background: blue
    float: left
    .tabCell 
      display: block
      color: #fff
      font-size: 20px
      text-align: center
      line-height: 60px
      border-left: 5px solid red
      border-bottom: 2px solid #fff
</style>
