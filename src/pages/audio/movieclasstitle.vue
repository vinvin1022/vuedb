<template>
	<div class="movieClassTitle">
			<h3>{{movieTitle}}</h3>
			<a :href="moreUrl" class="more">更多></a>
		</div>
</template>

<script>

	export default{
		props:{
			"movieTitle":{
				type:String,
				default:"影院热映"
			},
			"moreUrl":{
				type:String,
				default:"https://www.baidu.com"
			},
		}
		
	}
</script>

<style lang="scss" scoped>
.movieClassTitle{
	padding:0.3rem 0.32rem;
	height:0.4rem;
	h3{	
		font-size:0.3rem; 
		height:0.4rem;
		line-height:0.4rem;
		color:#444444;
		float:left;
	}
	.more{
		font-size:0.25rem; 
		color:#50b653;
		text-decoration:none;
		float:right;
		padding-top:0.05rem
	}
}
</style>