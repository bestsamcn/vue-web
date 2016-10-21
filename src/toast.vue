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
				default:'3000'
			}
		},
		ready(){

		},
		watch:(){
             toastShow(val){
             	if(this._timeout) clearTimeout(this._timeout);
             	if(val && !!this.duration){
             		this._timeout = setTimeout(()=>this.toastShow = false,this.duration)
             	}
             }
		}
	}
</script>
<style>
    .toast{
        position:absolute;
        left:50%;
        margin-left:-25%;
        bottom:30px;
        display:block;
        width:200px;
        height:auto;
        text-align:center;
        color:white;
        background-color:rgba(0,0,0,0.5);
        border-radius:10px;
        z-index:10;
        transform:scale(1);
        padding:5px;
    }
    .toast-transition{
        transition: all .3s ease;
    }
    .toast-enter{
        opacity:0;
        transform:scale(0.1);
    }
    .toast-leave{
        opacity:0;
        transform:scale(0.1);
    }
</style>