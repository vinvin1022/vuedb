<template>
	<div class="videotitle">
		<div class="duo">{{ duo }}</div>
		<div class="gengduo">更多></div>
	</div>
</template>

<script>
	export default{
		props:["duo"]
	}
</script>

<style>
	.videotitle{
		
		height: 50px;
		line-height: 50px;
		position: relative;
		width: 100%;
	}
	.duo{
		float: left;
		
		font-size: 20px;
		font-weight: bold;
		position: absolute;
		left: 20px;
		top: 0;
	}
	.gengduo{
		float: left;
		margin-left: 277px;
		color: #62c970;
		position: absolute;
		top: 0;
		right:20px;
	}
</style>