const tools = (()=>{
	let isObject = (obj)=>{
		return obj  === Object(obj)
	}
	return {
		isObject:isObject
	}
})
export default tools