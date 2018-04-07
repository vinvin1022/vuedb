<template>
	<div class="warpitem" @click="fn()">
		<span v-show="bol"><slot name="normalImg"></slot><br></span>
		<span v-show="!bol"><slot name="activeImg"></slot><br></span>
		<span>{{ txt }}</span>
	</div>
</template>

<script>

export default{
	props:["txt","id"],
	computed:{
		bol:function(){
			return this.$parent.sel!=this.id		
		}
	},
	methods:{
		fn:function(){
			this.$router.push('/'+this.id)
			this.$emit("change",this.id)
		}
	}
}
</script>

<style lang="scss" scoped>
	.warpitem{
		flex:1;
		text-align:center;
		color:#50b653;
		padding-top:0.06rem;
		img{
			width:0.55rem;
		}
		span{
			font-size:0.18rem;
		}

	}

</style>