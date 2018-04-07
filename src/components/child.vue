<template>
	<div>
		<ul>
			<li :class="currentPage==totalPage?'disabled':''" class="bte" @click="add(1)"><a href="#">首页</a></li>
			<li :class="currentPage==totalPage?'disabled':''" class="bte"><a href="#" @click="add(currpage-1)">上一页</a></li>
			<li class="bte" v-if="currpage-4>0" @click="add(currpage-4)">
				<a href="#" v-text="currpage-4" > </a>
			</li>
			<li class="bte" v-if="currpage-3>0" @click="add(currpage-3)"> <a href="#" v-text="currpage-3" > </a> </li>
			<li class="bte" v-if="currpage-2>0" @click="add(currpage-2)"> <a href="#" v-text="currpage-2" > </a> </li>
			<li class="bte" v-if="currpage-1>0" @click="add(currpage-1)"> <a href="#" v-text="currpage-1" > </a> </li>
			<li class="bte active"><a href="#" v-text="currpage"></a></li>
			<li class="bte" v-if="currpage+1<100" @click="add(currpage+1)"><a href="#" v-text="currpage+1"></a></li>
			<li class="bte" v-if="currpage+2<100" @click="add(currpage+2)"><a href="#" v-text="currpage+2"></a></li>
			<li class="bte" v-if="currpage+3<100" @click="add(currpage+3)"><a href="#" v-text="currpage+3"></a></li>
			<li class="bte" v-if="currpage+4<100" @click="add(currpage+4)"><a href="#" v-text="currpage+4"></a></li>
			<li :class="currentPage==totalPage?'disabled':''" class="bte"><a href="#" @click="add(currpage+1)">下一页</a></li>
			<li :class="currentPage==totalPage?'disabled':''" class="bte"><a href="#" @click="add(totarpage)">尾页</a></li>
		</ul>
		<div>
			当前:<span>{{ currpage }}</span>
			共有:<span>{{ totarpage }}</span>
			<input type="number" v-model="gotupage" :class="{err:bol}">
			<button @click="add(gotupage)">点击跳转</button>
		</div>
		
	</div>
</template>

<script>
	export default{
		props:["change"],
		data:function(){
			return{
				currpage:10,
				totarpage:100,
				gotupage:""	,
				bol:false
			}
		},
		methods:{
			add:function(num){
				
				var myNum = parseInt(num);
				
				if(myNum>100||myNum<1||!myNum){
					
					this.gotupage=""
					this.bol=true
					return
				}else{
					this.bol=false
				}
				this.currpage=myNum;
				this.change(num);
				this.gotupage=""
				this.bol=false
				
			}

		
		

		}
	}
</script>



<style>
	li{
		list-style:none;
	}
	a{
		text-decoration:none;
	}
	ul{
		position:absolute;
		left:35%;
		bottom:40%;
	}
	.bte{
		float:left;
		border:1px solid #eee;
		padding:5px 10px;
		background-color:red;
		
	}
	.bte a{
		color:#fff;

	}
	.active{
		background-color:blue;
	}
	.err{
		border:1px solid red;
	}
	.disabled a {cursor: not-allowed; color:gray;}
</style>