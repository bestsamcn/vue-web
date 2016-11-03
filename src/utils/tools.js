const tools = (()=>{
	let isObject = (obj)=>{
		return obj  === Object(obj)
	}
	let getById = (id)=>{
		return document.getElementById(id)
	}
	let addEvent = (obj,event,handler)=>{
		obj.addEventListener(event,handler,false)
	}
	let addClass = (obj,cla)=>{
		var t = obj.className;
        var l =[],b = false;
        if(t){
            l = t.split(/\s+/);
            for(var i=0 ;i<l.length;i++){
                if(l[i] == cla){
                    b = false;
                }else{
                    b = true;
                }
            }
            if(b){
                l.push(cla); 
                obj.className = l.join(' ');
            }
            
        }else{
            obj.className = cla;
        }
	}
	let removeClass = (obj,cla)=>{
		var t = obj.className,l=[],b = false,n,g;
        if(t){
           l = t.split(/\s+/);
           for(var i =0 ;i< l.length; i++){
                if(l[i] == cla){
                    n = i;
                    b = true;
                }else{
                    b = false;
                }
            } ;
            b && l.splice(n,1) && (obj.className =  l.join(' '));
        }
	}
	let setScrolltop = (dis,obj,tar)=>{
        let that =tools;
        let iTimer = null;
        let b = 0;
        if(obj !== 'undefined'){
            that.addEvent(obj,'click',function(){
                clearInterval(iTimer);
                runFn(dis);
            });
        }
        that.addEvent(tar,'scroll',function(){
            if (b != 1) {
                clearInterval(iTimer);
            }
            b = 2;
        });
        function runFn(dis) {
            clearInterval(iTimer)
            let iSpeed = 0
            let iCur = 0
            iTimer = setInterval(function() {
                iCur = tar.scrollTop || tar.scrollTop;
                iSpeed = iSpeed > 0 ?  Math.ceil((dis - iCur) / 7) : Math.floor((dis -iCur)/7);
                if (iCur != dis) {
                    tar.scrollTop = tar.scrollTop = iCur + iSpeed;
                } else {
                    clearInterval(iTimer);
                }
                b = 1;
            }, 30);
        }
    }
	return {
		isObject:isObject,
		getById:getById,
		addEvent:addEvent,
		addClass:addClass,
		removeClass:removeClass,
		setScrolltop:setScrolltop

	}
})()
export default tools