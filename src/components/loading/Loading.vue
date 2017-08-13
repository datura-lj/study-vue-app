<template>
	<div class="loading">
		<div class="box">
	    <span>{{ loadingText }}</span>
    	<span class="mask">{{ loadingText }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'loading',
		props: {
			loadingText: {
				type: String,
				default: 'datura_lj'
			}
		}
	}
</script>

<style lang='scss' rel="stylesheet/scss" type="text/css" scoped>
	.loading{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		overflow: hidden;
		background-color: rgba(0,0,0,.8);

		.box{
	    width: 100%;
	    height: .5rem;
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    transform: translate(-50%, -50%);
	    color: #999;
	    cursor: pointer;

	    span{
		    width: 100%;
		    height: 100%;
		    font-size: .3rem;
		    text-align: center;
		    line-height: .5rem;
		    position: absolute;
		    left:0;
		    top: 0;
		  }

		  span.mask{
		    background: -webkit-linear-gradient(-45deg,rgba(0,0,0,0) 40%,rgba(255,255,255,1) 50%,rgba(0,0,0,0) 60%);
		    -webkit-background-clip: text;
		    color: rgba(0,0,0,0);
		    animation: 4s move linear infinite;
		  }
		}
	}
  @-webkit-keyframes move {
    0%{
        background-position: -2rem;
    }
    100%{
        background-position: 6rem;
    }
  }

</style>