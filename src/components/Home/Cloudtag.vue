<style src="../../assets/css/home/cloudtag.css" scoped></style>
<template>
	<div class="cloud-tag" v-if="!!cloudTagList.length">
	    <div class="wrapper">
			<canvas width="300" height="150" id="tags-box"></canvas>
			<div id="tags-list" class="tags-list">
				<ul>
					<li v-for="item in cloudTagList">
						<a href="/html/tagIndex.html?id={{item.id}}" target="_blank">{{item.name}}</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'cloudtag',
		props:{
			cloudTagList:{
				type:Array,
				default:[],
				require:true
			}
		}
	}
</script>