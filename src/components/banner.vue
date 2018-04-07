<template>
	<div class="swiper-container banner" :class="swipeid">
		<div class="swiper-wrapper">
			<slot name="swiper-con"></slot>
		</div>
		<div  :class='{"swiper-pagination":pagination}' :style='{"text-align":paginationDirection}'></div>
	</div>
</template>



<script>
import '../assets/libs/swiper/js/swiper.js';
export default{
	props:{
		swipeid:{
			type:String,
			default:""
		},
		pagination:{
			type:Boolean,
			default:true			
		},
		paginationDirection:{
			type:String,
			default:"center"		
		},
		effect:{
			type:String,
			default:"slide"				
		},
		loop:{
			type:Boolean,
			default:true			
		},
		direction:{
			type:String,
			default:"horizontal"				
		},
		autoplay:{
			type:Number,
			default:5000			
		},
		paginationType:{
			type:String,
			default:'bullets'
		},
		spaceBetween:{
			type:Number,
			default:0
		},
		slidesPerView:{
			type:Number,
			default:0
		},
		slidesOffsetBefore:{
			type:Number,
			default:0
		}
	

	},
	mounted:function(){
		var That=this;
		new Swiper('.'+That.swipeid,{
			loop:That.loop,
			pagination:".swiper-pagination",
			paginationType:That.paginationType,
			direction:That.direction,
			autoplay:That.autoplay,
			effect:That.effect,
			slidesPerView: That.slidesPerView,
			spaceBetween:That.spaceBetween,
			slidesOffsetBefore : That.slidesOffsetBefore,
		})

	}
}

</script>
<style lang="scss" scoped>
@import '../assets/libs/swiper/css/swiper.css';

.banner{
	width:100%;
	img{
		width:100%;height:auto;
	}
}

</style>