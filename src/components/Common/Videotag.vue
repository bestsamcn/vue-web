<style src="../../assets/css/common/videotag.css" scoped></style>
<template>
	<div class="video-tag" v-if="!!allTagList.length">
	    <h4>标签：</h4>
	    <div class="tag-wrapper">
	    	<label v-for="tag in allTagList" >
				<input type="checkbox" value="{{ tag.id }}" v-model="hasChooseTagsArr">
				<span>{{tag.name}}</span>
			</label>
	    </div>
	</div>
</template>
<script>
	export default{
        name:'videotag',
        props:['allTagList','hasChooseTags'],
        data(){
        	return {
        		hasChooseTagsArr:[]
        	}
        },
        methods:{
            arrayToString(){
                this.hasChooseTags = this.hasChooseTagsArr.join(',')
            }
        },
        watch:{
            hasChooseTagsArr:'arrayToString'
        }
	}
</script>