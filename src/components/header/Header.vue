<template>
	<div class="header">
		<nav-tools v-show="true"></nav-tools>
		11111111
	</div>
</template>

<script>
	import NavTab from '../navtools/Navtab'
	export default {
		name: 'header',
		components: {
			'nav-tools': NavTab
		}
	}
</script>

<style lang="scss" type="text/css" rel="stylesheet/scss" scoped>
	@import "../../common/css/mixin";

	.header{
		width: 100%;
		height: .5rem;
		padding: 0.16rem 0.16rem 0 0.16rem;
		box-sizing: border-box;
		background: red;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		//@include border-1px(green);
	}
</style>