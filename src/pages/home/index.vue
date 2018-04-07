<template>
	<div id="homePage">
		<Myheader col="green">
			<input class="seachInput" type="text" placeholder="电影 读书 音乐 小组等"/>
			<div class="pic pic1"><img src="../../assets/images/ic_search_gray.png" slot='leftImg'/></div>
			<div class="pic pic2"><img src="../../assets/images/ic_scan_gray.png" slot='right2Img'/></div>
			<div class="pic pic3"><img src="../../assets/images/ic_chat_white.png" slot='right2Img'/></div>
		</Myheader>
		<Mybanner swipeid="swiper01" :slidesPerView=1>
			<div class='swiper-slide' slot="swiper-con"><img src="../../assets/images/banner/01.jpg" /></div>
			<div class='swiper-slide' slot="swiper-con"><img src="../../assets/images/banner/02.jpg" /></div>
			<div class='swiper-slide' slot="swiper-con"><img src="../../assets/images/banner/03.jpg" /></div>
		</Mybanner>
		<!--<Mynews>
			<MyNewsitem></MyNewsitem>
		</Mynews>
		-->
		<div class="newsList">
		
			<MyNewsitem :option="item" :key="item.id" v-for="item in arrData"></MyNewsitem>
		</div>
	</div>
</template>

<script>
import Myheader from '../../components/header'
import Mybanner from '../../components/banner'
import MyNewsitem from './newsitem'

export default{
	components:{Myheader,Mybanner,MyNewsitem},
	mounted:function(){
		this.search();
	},
	methods:{
		search:function(){
		
			this.axios.get('./static/data/homeData.json',{
				withCredentials:true
			}).then((response) => {
console.log(response)
				for(var key in response.data){
					response.data[key].imgurl = require("../../../static/images/"+response.data[key].imgurl)
				}
				this.arrData=response.data

			}).catch(function(err){
				console.log(err);
			})
		}
		
	},
	data:function(){
		return{
			arrData:[]
		}
	}

}
</script>
<style lang="scss" scoped>
#homePage{ 
	
	padding-bottom:0.96rem;
	.newsList .newsitem:last-child{
		border-bottom:none
	}
}

</style>