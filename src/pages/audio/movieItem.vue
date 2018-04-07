<template>
	<div class="movieItemWrap">
			<img class="movieImg" :src="movieImgUrl"/>
			<p class="movieTitle" v-text="movieTitle"></p>
			<div class="scoreStar">
				<img class="xing" src="../../assets/images/rating_star_xsmall_on.png" alt="" />
				<img class="xing" src="../../assets/images/rating_star_xsmall_on.png" alt="" />
				<img class="xing" src="../../assets/images/rating_star_xsmall_half.png" alt="" />
				<img class="xing" src="../../assets/images/rating_star_xsmall_off.png" alt="" />
				<img class="xing" src="../../assets/images/rating_star_xsmall_off.png" alt="" />
				<span class="score">{{score}}</span>
			</div>
	</div>
</template>

<script>

	export default{
		props:{
			
			"movieImgUrl":{
				type:String,
				default:require("../../assets/images/dianying.jpg")
			},
			"movieTitle":{
				type:String,
				default:"天下无则"
			},
			"score":{
				type:String,
				default:5.5
			}
		}
		
	}
</script>

<style lang="scss" scoped>
.movieItemWrap{

	h3{font-size:0.3rem; color:#444444}
	.movieImg{
		width:100%;
		height:auto;
	}
	.movieTitle{
		font-size:0.25rem;
		color:#444444;
		padding:0.15rem 0;
	}
	.scoreStar img{
		width:0.25rem;
		float:left
	}
	.score{
		font-size:0.25rem;
		color:#909090;
		float:left;
		padding-left:0.2rem;
	}
	.more{
		font-size:0.25rem; 
		color:#50b653;
		text-decoration:none
	}
}
</style>