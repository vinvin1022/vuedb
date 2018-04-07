<template>
	<div class="comment-item">
		<div class="close"></div>
		<img class="commentImg" :src="avaterUrl" slot="commentImg"/>
		<div class="content">
			<div class="name-attention clearfix"> 
				<div class="name-title">
					<h2 class="name">{{ name }}</h2>
					<span class="til">{{peopleNum}}人关注</span>
				</div>
				<span class="btnattention">关注</span>
			</div>
			<p class="text">{{content}}</p>
			<div class="like_comment">	
				<span class="spanlike">{{like}}</span>
				<span class="spancomment">{{comment}}</span>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	props:["avaterUrl","name","peopleNum","isAttention","content","like","comment"],
}
</script>




<style lang="scss" scoped>

.comment-item{
	display:flex;
	padding:0.3rem .2rem;
	margin:0 .2rem .2rem;
	background-color:#fff;
	position:relative;
	border-radius:5px;
	box-shadow:3px 5px 5px #ccc;
	.close{position:absolute;right:0.16rem;top:0.16rem; width:.2rem; height:.2rem; background-size:100%;background:url(../../../static/images/ic_close_status_recommend.png) center center no-repeat}
	.content{
		flex:1;
	}
	img{
		width:1rem;
		height:1rem;
		margin-right:.2rem;
	}
	
	.name{
		font-size:0.3rem;
		color:#484848;
		line-height:0.5rem
	}
	.til{
		color:#8b8b8b;
		font-size:0.2rem;
	}
	.text{
		padding-bottom:0.1rem;
		font-size:0.26rem;
		line-height:0.3rem;
		color:#424242
	}
	.like_comment{ color:#dcdcdc;font-size:0.12rem;}
	.spanlike{
		background:url(../../../static/images/ic_liked.png) left center no-repeat;
		background-size:.4rem .4rem;
		padding:0.1rem 0 0.1rem 0.4rem;
	}
	.spancomment{
		background:url(../../../static/images/ic_group_comment_0.png) left center no-repeat;
		background-size:.4rem .4rem;
		padding:0.1rem 0 0.1rem 0.4rem;
	}
	.btnattention{
		float:right;
		font-size:0.16rem;
		background-color:#42c055;
		color:#fff;
		text-decoration:none;
		padding:0.08rem .2rem;
		border-radius:3px;
		margin-top:0.16rem;
		margin-right:0.16rem
	}
}
.name-title{float:left;padding-bottom:10px;}
.name-attention{ clear:both}


</style>