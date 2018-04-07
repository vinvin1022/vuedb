<template>
	<div class="broad">
		<Myheader>
			<h3>广播</h3>
			<span class="pic pic2"><img src="../../assets/images/ic_status_search_user.png" slot='right2Img'/></span>
			<span class="pic pic3"><img src="../../assets/images/ic_create_group_chat_blue.png" slot='right2Img'/></span>
		</Myheader>
		<div class="broadbanner">
			<img src="../../assets/images/ic_status_anonymous_header.png" />
			<div class="big-title">
				<h4>发现有趣的人</h4>
				<p>关注他们，发现更大的世界</p>
			</div>
			
		</div>
		<div>
			<Comment :avaterUrl="item.avaterUrl" :name="item.name" :peopleNum="item.peopleNum" :isAttention="item.isAttention" :content="item.content" :like="item.like" :comment="item.comment" :key="item.id"  v-for="item in broadData"></Comment>
		</div>
		
	</div>

</template>

<script>
import broadData from '../../../static/data/broadData.js'
import Myheader from '../../components/header'
import Comment from './comment'


export default{
	components:{Myheader,Comment},
	data: function(){
		return {
			broadData
		}
	}
}
</script>


<style lang="scss" scoped>
.broad{ padding-bottom:0.96rem;	
	position:relative;}
.broadbanner{
	position:relative;
	background:#f7f7f7;
	width:100%;
	border-top:1px solid #b1b1b1;
	img{
		position:absolute;
		left:1rem;
		top:0.32rem;
		width:1.8rem;
	}
	.big-title{
		padding-left:3.12rem;
		padding-top:0.55rem;
		padding-bottom:0.7rem;
		h4{font-size:0.3rem;line-height:0.6rem}
		p{font-size:0.25rem; color:#9a9a9a}
		
	}
}


</style>