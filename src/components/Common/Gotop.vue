<style src="../../assets/css/common/gotop.css" scoped></style>
<template>
	<a href="javasrcipt:;" id="go-top">
		<span></span>
	</a>
</template>
<script>
    import $$ from '../../utils/tools.js'
	export default{
		name:'gotop',
		props:['useFlag'],
		methods:{
			goTop(){
	            let oGotop = null
	            let oTarget = null
	            let isReady = ()=>{
	                let promise = new Promise((resolve,reject)=>{
	                   let t= setInterval(()=>{
	                        oGotop = $$.getById('go-top');
	                        oTarget = document.querySelector('.router-view')
	                        if(oGotop && oTarget){
	                            resolve()
	                            clearInterval(t)
	                        }
	                    },1000)
	                })
	                return promise
	            }
	            isReady().then(()=>{
	                let nScrollTop
	                let temp =()=>{
	                    nScrollTop = oTarget.scrollTop || oTarget.scrollTop;
	                    if (nScrollTop > 500) {
	                        $$.addClass(oGotop,'show');
	                    } else {
	                        $$.removeClass(oGotop,'show');
	                    };
	                }
	                $$.setScrolltop(0,oGotop,oTarget);
	                temp();
	                $$.addEvent(oTarget,'scroll',temp);
	            })
	        }
		},
		watch:{
			useFlag:'goTop'
		}

	}
</script>