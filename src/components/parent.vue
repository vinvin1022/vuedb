<template>
	<div>
		<h1>{{ msg }}</h1>
		<Child :change="parentpage"></Child>
	</div>
</template>
<script>
import Child from "./child"
export default{
	data:function(){
		return{
			msg:"updata your data here page:10"
		}

	},
	methods:{
		parentpage:function(num){
			this.msg="updata your data here page:"+num
		}
		
	},
	components:{
		Child
	}
}

</script>

<style>
	h1{color:green;}
</style>
