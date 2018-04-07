<template>
	<div>
	
	
		<Myheader>
			<p>我的</p>
			<span class="pic pic2"><img src="../../assets/images/ic_actionbar_search_icon.png" slot='right2Img'/></span>
			<span class="pic3"><img src="../../assets/images/ic_create_group_chat_blue.png" slot='right2Img'/></span>
		</Myheader>
		<img class="immm" src="../../assets/images/20170602193436_02.jpg" alt="" />
		<img class="immm" src="../../assets/images/20170602193436_04.jpg" alt="" />
		<img class="immm" src="../../assets/images/20170602193436_06.jpg" alt="" />


		

	</div>
</template>

<script>
import Myheader from '../../components/header'
export default{
	components:{Myheader},
	methods:{
		ctrlenter:function(){
			console.log("xxx");
		}
	}
}
</script>
<style type="text/css">
	.immm{
		width: 100% ;
	}
</style>