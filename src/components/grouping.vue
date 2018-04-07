<template>
	<div class="grouping">
		<h4>{{ text }}</h4>
	</div>
</template>


<style>
.grouping{
	border-top:1px solid #d1d1d1;
	margin-top:40px;
	position:relative;
}
.grouping h4{
	position:absolute;
	left:135px;
	top:-10px;
	background-color:#fff;
	width:100px;
}
</style>

<script>

export default{
	props:["text"]
}

</script>
