<template>
	<div class="home">
    <my-header></my-header>
    <loading v-if="loading.state" :loadingText="loading.text"></loading>
		<h2>vue</h2>
		<left-tab :leftTabData="leftTabData"></left-tab>
		<nav-tools v-show="toolState"></nav-tools>
	</div>
</template>
<script>
import Header from '../components/header/Header'
import NavTab from '../components/navtools/Navtab'
import LeftTab from '../components/navtools/LeftTabBar'
import Loading from '../components/loading/Loading'

export default {
	data(){
		return{
			toolState: true,
      loading: { //load页面显示状态与文本字段
        state: false,
        text: 'datura_lj000'
      },
      leftTabData: [
        {
          "name": '基础语法',
          "path": 'base',
        },
        {
          "name": '进阶',
          "path": 'bbb',
        }
      ]
		}
	},
	components: {
		'nav-tools': NavTab,
		'left-tab': LeftTab,
    'loading': Loading,
    'my-header': Header
	}
}
</script>
<style lang='scss' rel="stylesheet/scss" type="text/css" scoped>
   .home{
      width: 100%;
      height: 100%;
   		position: relative;
      overflow: hidden;
     background-color: pink;
   }
</style>
