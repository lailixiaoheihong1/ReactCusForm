import Utils from "@/Utils";

const DEFAULT_EMPTY_VALUE = '';

function readonlyWrapper(config, handleReadonlyFn = ()=>{}, handleNormalFn = config=>config){
	const readonly = Utils.booleanValue(config.readonly);
	
	if(readonly === false){
		return handleNormalFn(config);
	}
	
	const READONLY_VALUE = handleReadonlyFn();
	return {
		type: 'plainText',
		value: READONLY_VALUE,
		title: config.title,
	};
}

function handleReadonlyText(config){
	return readonlyWrapper(config, function (){
		const value = String(config.value);
		
		const HAS_VALUE = config.value;
		if(HAS_VALUE){
			return value;
		}else{
			return DEFAULT_EMPTY_VALUE;
		}
	});
}

function handleReadonlyListOptions(config){
	return readonlyWrapper(config, function (){
		const value = String(config.value);
		
		const HAS_VALUE = config.value;
		if(!HAS_VALUE){
			return DEFAULT_EMPTY_VALUE;
		}
		
		const list = Utils.convertOptions.getOptionList(config.options);
		const SEARCH_RESULT_ARR = list.filter((item)=>{
			return item.value === value;
		});
		
		const HAS_SEARCH_VALUE = SEARCH_RESULT_ARR[0];
		if(HAS_SEARCH_VALUE){
			return SEARCH_RESULT_ARR[0].title;
		}else{
			return DEFAULT_EMPTY_VALUE;
		}
	});
}

function handleReadonlyCheckboxText(config){
	return readonlyWrapper(config, function (){
		let valueArr = Utils.jsonParse(config.value, []);
		const HAS_VALUE = Utils.booleanValue(valueArr.length);
		
		if(!HAS_VALUE){
			return DEFAULT_EMPTY_VALUE;
		}
		return valueArr.map((item, index)=>{
			let resText = '';
			if(item.text){
				resText = `<div>
						${item.title}: ${item.text}
					</div>`;
			}else{
				resText = `<div>
						${item.title}
					</div>`;
			}
			return resText;
		}).join('');
	});
}

function handleReadonlyRadioText(config){
	return readonlyWrapper(config, function (){
		let valueArr = Utils.jsonParse(config.value, []);
		const HAS_VALUE = valueArr[0];
		if(!HAS_VALUE){
			return DEFAULT_EMPTY_VALUE;
		}
		if(valueArr[0].text){
			return `<div>
					${valueArr[0].title}: ${valueArr[0].text}
				</div>`;
		}else{
			return `<div>
					${valueArr[0].title}
				</div>`;
		}
	});
}

function handleReadonlyAddrSelect(config){
	return readonlyWrapper(config, function (){
		const {
			value_text = '',
			textFieldVal = ''
		} = config;
		return `${value_text} ${textFieldVal}`;
	});
}

export default {
	city: function (config) {
		return readonlyWrapper(config, function (){
			return config.valueText || config.value_text || DEFAULT_EMPTY_VALUE;
		},function (config) {
			return Object.assign({}, config, {
				type: 'addrSelect',
				onMount: function (el, input) {
					$(input).reactFullAreaSelect({
						level: 3,
					});
				}
			});
		});
	},
	
	addrSelect: handleReadonlyAddrSelect,
	'addr-select': handleReadonlyAddrSelect,
	
	switch: function (config){
		return readonlyWrapper(config, function (){
			let value = Utils.booleanValue(config.value);
			let valueText = '';
			const ENUM_VALUE = {
				checked: true,
				unchecked: false,
			}
			const ENUM_DESC = {
				checked: '是',
				unchecked: '否',
			}
			
			if(value === ENUM_VALUE.checked){
				valueText = ENUM_DESC.checked;
			}else{
				valueText = ENUM_DESC.unchecked;
			}
			
			return valueText;
		});
	},
	textarea: handleReadonlyText,
	text: handleReadonlyText,
	plainText: handleReadonlyText,
	
	select: handleReadonlyListOptions,
	checkbox: handleReadonlyListOptions,
	radio: handleReadonlyListOptions,
	
	checkboxText: handleReadonlyCheckboxText,
	'checkbox-text': handleReadonlyCheckboxText,
	
	radioText: handleReadonlyRadioText,
	'radio-text': handleReadonlyRadioText,
}
