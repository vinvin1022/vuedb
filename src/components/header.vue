<template>
	<div class="myheader" :style='{background:col}'>
		<div class="hearderCont">
			<slot></slot>
			<slot name="leftImg"></slot>
			<slot name="right1Img"></slot>
			<slot name="right2Img"></slot>
		</div>
	</div>
</template>
<script>
export default{
	props:{
			col:{
				default:"#f7f7f7"
			}
		}	
	}
</script>
<style lang="scss">
.myheader{
	width:100%;
	h3{
		font-size:0.4rem;
		line-height:0.88rem;
		text-align:center;
		font-weight:normal;
		color:#4e4e4e
	}
	
}
.myheader .hearderCont{ 
	padding:0 0.1rem;	line-height:0.88rem;
	font-weight:bold;
	position:relative;height:0.88rem;
}

.myheader {
	.pic{
		width:0.42rem;
		height:0.42rem;
		img{
			width:0.42rem;position:absolute;
		}
	}
	.pic1 img{
		top:0.25rem;
		left:0.20rem;
	}

	.pic2 img{
		top:0.25rem;
		right:0.98rem;
	}
	.pic3 img{
		top:0.25rem;
		right:0.2rem;
	}
	.seachInput{width:6.25rem;height:0.58rem;text-indent:0.6rem;border-radius:5px;border:none;position: absolute;top: 0.16rem; font-size:0.24rem}
}

</style>