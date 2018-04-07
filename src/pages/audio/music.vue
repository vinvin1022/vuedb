<template>
	<div class="video">
		<Movieclasstitle></Movieclasstitle>

		<Mybanner swipeid="swiperMove" :pagination=false :autoplay=0 :slidesPerView=3 :loop=false :spaceBetween=10 :slidesOffsetBefore=20>
			<div class='swiper-slide' slot="swiper-con" v-for="(item,index) in arrData">
				<Movieitem :movieTitle="item.movieTitle" :movieImgUrl="item.movieImgUrl" :score="item.score"></Movieitem>
			</div>
		</Mybanner>
		
	</div>
</template>

<script>
	import Movieitem from './movieItem'
	import Movieclasstitle from './movieclasstitle'
	import Mybanner from '../../components/banner'

	var arrData = [
		{movieTitle:"天下无贼",movieImgUrl:require("../../assets/images/tushu1.jpg"),score:"6.5"},
		{movieTitle:"神话",movieImgUrl:require("../../assets/images/tushu2.jpg"),score:"8.5"},
		{movieTitle:"通天塔",movieImgUrl:require("../../assets/images/tushu3.jpg"),score:"7.5"},
		{movieTitle:"天下无贼",movieImgUrl:require("../../assets/images/tushu1.jpg"),score:"6.5"},
		{movieTitle:"神话",movieImgUrl:require("../../assets/images/tushu2.jpg"),score:"8.5"},
		{movieTitle:"红高粱",movieImgUrl:require("../../assets/images/tushu3.jpg"),score:"7.5"}
		
	];

	export default{
		components:{Movieclasstitle,Movieitem,Mybanner},
		data:function(){
			return {
				arrData:arrData
			}
		}
	}
</script>

<style scoped>

	.swiper-slide{width:1.9rem;}
</style>