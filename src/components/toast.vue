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
		ready(){

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
<style>
    .toast{
        position:fixed;
        left:50%;
        top:50%;
        transform: scale(1);
        display:block;
        width:160px;
        height:30px;
        margin-top:-15px;
        line-height: 30px;
        margin-left:-80px;
        height:auto;
        text-align:center;
        color:white;
        background-color:rgba(0,0,0,0.8);
        border-radius:30px;
        z-index:10;
        font-size: 12px;
        padding:5px;
    }

    .toast-transition{
        transition: all .3s ease;
        transform-origin: center center;
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