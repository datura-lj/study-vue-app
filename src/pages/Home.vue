<template>
	<div class="home">
		<h2>vue</h2>
		<left-tab :leftTabData="leftTabData"></left-tab>
		<nav-tools v-show="toolState"></nav-tools>
	</div>
</template>
<script>
import NavTab from '../components/navtools/Navtab'
import LeftTab from '../components/navtools/LeftTabBar'
export default {
	data(){
		return{
			toolState: true,
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
		'left-tab': LeftTab
	}
}
</script>
<style lang='scss' rel="stylesheet/scss" type="text/css" scoped>
   .home{
      width: 100%;
      height: 100%;
   		position: relative;
     background-color: pink;
   }
</style>
