<style src="../../assets/css/common/toast.css"></style>
<template>
	<div class="toast" transition="toast" v-show="toastShow" >
		{{toastText}}
	</div>
</template>
<script>
	export default{
		props:{
			toastShow:{
				type:Boolean,
				default:()=>false,
				require:false
			},
			toastText:{
				type:String,
				default:()=>'未知错误',
				require:true
			},
			duration:{
				type:String,
				require:false,
				default:'2000'
			}
		},
		watch:{
             toastShow(val){
             	if(this._timeout) clearTimeout(this._timeout);
             	if(val && !!this.duration){
             		this._timeout = setTimeout(()=>this.toastShow = false,this.duration)
             	}
             }
		}
	}
</script>
