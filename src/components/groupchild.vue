<template>
	<div class="groupchild">
		<Mygroupwarp>
			<Mygroupitem></Mygroupitem>
		</Mygroupwarp>
	</div>
</template>

<script>
import Mygroupwarp from './groupwarp'
import Mygroupitem from './groupitem'
export default{
	components:{Mygroupwarp,Mygroupitem}

}
</script>