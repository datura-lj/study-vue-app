<template>
	<div class="home">
		<h2>我是home</h2>
		<nav-tools class="nav-tools"></nav-tools>
	</div>
</template>
<script>
import Navtab from '../components/navtools/Navtab'
export default {
	components: {
		'nav-tools': Navtab
	}
}
</script>
<style lang='scss' rel="stylesheet/scss" type="text/css" scoped>
   .nav-tools{
   		
   }
</style>