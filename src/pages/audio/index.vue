<template>
	<div class="audio">
		<Myheader>
			<h3>书影音</h3>
			<span class="pic pic2"><img src="../../assets/images/ic_actionbar_search_icon.png" slot='right1Img'/></span>
			<span class="pic pic3"><img src="../../assets/images/ic_create_group_chat_blue.png" slot='right2Img'/></span>
		</Myheader>
		<div class="navchild">
			<div class="linkwarp" @click="fn(0)" :class='{active:sel==0}'>
				<router-link to="/audio/video">电影</router-link>
			</div>
			<div class="linkwarp" @click="fn(1)" :class='{active:sel==1}'>
				<router-link to="/audio/book">读书</router-link>
			</div>
			<div class="linkwarp" @click="fn(2)" :class='{active:sel==2}'>
				<router-link to="/audio/television">电视</router-link>
			</div>
			<div class="linkwarp" @click="fn(3)" :class='{active:sel==3}'>
				<router-link to="/audio/city">同城</router-link>
			</div>
			<div class="linkwarp" @click="fn(4)" :class='{active:sel==4}'>
				<router-link to="/audio/music">音乐</router-link>
			</div>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
import Myheader from '../../components/header'
export default{
	components:{Myheader},
	data:function(){
		return{
			sel:0
		}
	},
	methods:{
		fn:function(val){
			this.sel = val;
		}
	}
}
</script>
<style lang="scss">
.audio{
	padding-bottom:1.3rem;
}
.navchild{
	border-bottom:0.1rem solid #eee;
	border-top:1px solid #b7b7b7;
	display:flex;
	.linkwarp{
		text-align:center;
		height:0.53rem;
		flex:1;
		display:flex;
		align-items:center;
		justify-content:center;
		border-bottom:0.03rem solid #f7f7f7;
		a{
			font-size:0.22rem;
			color:#939393;
			text-decoration: none;
			flex:1;
			line-height:0.55rem;
		}
	}
	.active{
		border-bottom:0.03rem solid green;
		a{
			color:green;
		}
	}

}


</style>
