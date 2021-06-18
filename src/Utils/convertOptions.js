const convertOptions = {
	getOptionList(options){
		var optionsType = typeof options;
		if(Array.isArray(options)){
			optionsType = 'array';
		}
		return this[`${optionsType}Options2List`](options);
	},
	stringOptions2List(options){
		if(!options){
			return [];
		}
		return options.split(',').map((item, index)=>{
			return {
				title: item,
				value: String(item),
			};
		});
	},
	objectOptions2List(options){
		let list = [];
		for(let key in options){
			list.push({
				title: options[key],
				value: String(key),
			});
		}
		return list;
	},
	arrayOptions2List(options){
		return options.map((item)=>({
			title: item.title,
			value: String(item.value),
		}));
	}
};

export default convertOptions;
