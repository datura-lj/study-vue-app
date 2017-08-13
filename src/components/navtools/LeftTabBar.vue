<template>
	<div class="left-bar">
		<section v-for="(item,index) in leftTabData" :key="index">
      <h3>{{item.name}}</h3>
      <p>{{item.path}}</p>
    </section>
	</div>
</template>
<script>
export default{
  props:['leftTabData']
}
</script>
<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
	.left-bar{
		width: 25%;
		height: 100%;
		background-color: aqua;
    position: absolute;
    right: 0;
    top: 0;
	}
</style>
