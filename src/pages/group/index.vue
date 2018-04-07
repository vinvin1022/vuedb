<template>
	<div>
		<Myheader>
			<p>小组</p>
			<span class="pic pic2"><img src="../../assets/images/ic_actionbar_search_icon.png" slot='right2Img'/></span>
			<span class="pic3"><img src="../../assets/images/ic_create_group_chat_blue.png" slot='right2Img'/></span>
		</Myheader>
		<Mygrouppropaganda></Mygrouppropaganda>
		<Mygrouping text="首页"></Mygrouping>
		<Mygroupchild></Mygroupchild>
		<Mygrouping text="读书"></Mygrouping>
	</div>
</template>

<script>
import Myheader from '../../components/header'
import Mygrouppropaganda from '../../components/grouppropaganda'
import Mygrouping from '../../components/grouping'
import Mygroupchild from '../../components/groupchild'


export default{
	components:{Myheader,Mygrouppropaganda,Mygrouping,Mygroupchild}
}
</script>