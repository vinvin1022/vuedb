<template>
	<div class="newsitem">
		<div class="news">
			<div class="newsCont">
				<div class="newsitemdleft">
					<h4 class="theme">{{items.title}}</h4>
					<p>{{items.des}}</p>
				</div>
				<div class="newsitemright">
					<img :src="items.imgurl"/>
				</div>
			</div>
			<div class="autoerFrom">
				<span class="txtl">作者：{{items.autoer}}</span>
				<span class="txtr" v-show="items.from">{{items.from}}</span>
			</div>
		</div>
		
		
	</div>
</template>
<script>
	export default{
		props:["option"],
		computed:{
			items: function() {
				return this.option
			}
		}
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
	width:70%;
	h4{
		font-size:0.3rem;
		line-height:0.4rem
	}
	p{
		font-size:0.22rem;
		color:#666;
		padding-top:0.15rem;
		line-height:0.35rem
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

