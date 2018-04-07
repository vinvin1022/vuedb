<template>
	<div class="tabbar">
	        <Warp :sel="selected">
	            <Item txt="首页" id="home" @change="getVal">
	            	<img src="../assets/images/ic_tab_home_normal.png" slot='normalImg'>
					<img src="../assets/images/ic_tab_home_active.png" slot='activeImg'>
	            </Item>
	            <Item txt="书影音" id="audio" @change="getVal">
	            	<img src="../assets/images/ic_tab_subject_normal.png" slot='normalImg'>
					<img src="../assets/images/ic_tab_subject_active.png" slot='activeImg'>
	            </Item>
	            <Item txt="广播" id="broadcast" @change="getVal">
	            	<img src="../assets/images/ic_tab_status_normal.png" slot='normalImg'>
					<img src="../assets/images/ic_tab_status_active.png" slot='activeImg'>
	            </Item>
	            <Item txt="小组" id="group" @change="getVal">
	            	<img src="../assets/images/ic_tab_group_normal.png" slot='normalImg'>
					<img src="../assets/images/ic_tab_group_active.png" slot='activeImg'>
	            </Item>
	            <Item txt="我的" id="mine" @change="getVal">
	            	<img src="../assets/images/ic_tab_profile_female_normal.png" slot='normalImg'>
					<img src="../assets/images/ic_tab_profile_female_active.png" slot='activeImg'>
	            </Item>
	        </Warp>
	</div>
</template>

<script>
import Warp from './wrap';
import Item from './item';
export default{
	components:{
		Warp,Item
	},
	data:function(){
		return{
			selected:this.$route.name
		}
	},
	methods:{
		getVal:function(val){
			this.selected=val;
		}
	}
}

</script>

