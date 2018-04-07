<template>
	<div class="warp">
		<slot></slot>
	</div>
</template>


<script>
export default{
	props:["sel"]
}
</script>

<style>
	.warp{
		height:0.96rem;
		width:100%;
		background-color:#fff;
		position: fixed;
		bottom:0;
		border-top:1px solid #eee;
		display:flex;
		z-index:555
		
	}
</style>