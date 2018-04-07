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


var arrData = [
	{id:1,title:"《加勒比海盗》14年老粉给你带来所有彩蛋和深埋梗",des:"此影评送给那些不离不弃的老粉和船长杰克·斯派罗",autoer:"豆掰",imgurl:require("../../assets/images/news2.jpg"),from:"来自栏目:一周热门影视"},
	{id:2,title:"《加勒比海盗》14年老粉给你带来所有彩蛋和深埋梗",des:"此影评送给那些不离不弃的老粉和船长杰克·斯派罗",autoer:"天下",imgurl:require("../../assets/images/news2.jpg"),from:"来自栏目:一周热门影视"},
	{id:3,title:"《加勒比海盗》14年老粉给你带来所有彩蛋和深埋梗",des:"此影评送给那些不离不弃的老粉和船长杰克·斯派罗",autoer:"悠悠",imgurl:require("../../assets/images/news2.jpg"),from:"来自栏目:一周热门影视"},
	{id:4,title:"《加勒比海盗》14年老粉给你带来所有彩蛋和深埋梗",des:"此影评送给那些不离不弃的老粉和船长杰克·斯派罗",autoer:"了了",imgurl:require("../../assets/images/news2.jpg")}
];
export default{
	components:{Myheader,Mybanner,MyNewsitem},
	mounted:function(){
		this.search();
	},
	methods:{
		search:function(){
			console.log(this.axios.get)
			this.axios.get('./static/data/homeData.json',{
				withCredentials:true
			}).then((response) => {
console.log(response)
				for(var key in response.data){
					console.log(response.data)
					response.data[key].imgurl = require("../../../static/images/"+response.data[key].imgurl)
				}
			
				console.log(response.data)
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