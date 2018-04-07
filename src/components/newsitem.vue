<template>
	<div class="newsitem">
		<div class="news">
			<div class="newsCont">
				<div class="newsitemdleft">
					<h4 class="theme">{{option.title}}</h4>
					<p>{{option.des}}</p>
				</div>
				<div class="newsitemright">
					<img :src="option.imgurl"/>
				</div>
			</div>
			<div class="autoerFrom">
				<span class="txtl">作者：{{option.autoer}}</span>
				<span class="txtr" v-show="option.from">{{option.from}}</span>
			</div>
		</div>
		
		
	</div>
</template>
<script>
	export default{
		props:["option"]
	}
</script>

<style lang="scss">
.newsitem{
	text-align:left;
	border-bottom:1px solid #eee;
	.news{
		padding:0.28rem 0.32rem;
		.newsCont{
			overflow:hidden
		}
		.autoerFrom{
			display:flex;
			padding-top:0.3rem;
			span{
				flex:1;
				font-size:0.22rem;
				color:#999
			}
			.txtl{
				text-align:left
			}
			.txtr{
				text-align:right
			}
		}
	
	}

}

.newsitemdleft{
	float:left;
	width:60%;
	h4{
		font-size:0.3rem;
		line-height:0.4rem
	}
	p{
		font-size:0.22rem;
		color:#666;
		padding-top:0.15rem
	}
}

.newsitemright {
	font-size:12px;
	color:#eee;
	float:right;
	width:1.75rem;
	img{
		width:1.75rem;
	}
}




</style>

