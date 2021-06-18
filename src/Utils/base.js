export default {
	booleanValue(val){
	    return Boolean(Number(val));
    },
	jsonParse(json, defaultValue){
		let res = defaultValue;
		try{
			res = JSON.parse(json) || defaultValue;
		}catch(e){
			res = defaultValue;
		}
		return res;
	}
};
