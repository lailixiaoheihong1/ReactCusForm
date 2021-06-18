import React, {useState, useRef, useEffect } from 'react';
import Utils from "@/Utils";

function FormRadio(props) {
	let {
		value,
		readonly,
		options,
		name,
		showTextField,
		textFieldName,
		textFieldVal,
		textFieldPlaceHolder
	} = props;
	let inputValInit = [];
	try{
		inputValInit = value.split(',').filter((item)=>item !== '');
	}catch(e){
	}
	let [inputVal, setInputVal] = useState(inputValInit);
	let [inputTextVal, setInputTextVal] = useState(textFieldVal);
	
	let list = Utils.convertOptions.getOptionList(options);
	
	let inputRef = useRef(null);
	
	function handleInputTextVal(e){
		setInputTextVal(e.target.value);
	}

	function handleChange(e, item, index){
		const newVal = e.target.value;
		const UN_CHECKED = inputVal.indexOf(newVal) === -1;
		if(UN_CHECKED){
			addVal(newVal);
		}else{
			removeVal();
		}
		
		setTimeout(()=>{
			triggerEvent('change');
		});
	}
	
	function triggerEvent(type){
		var changeEvent = new Event(type);
		inputRef.current.dispatchEvent(changeEvent);
	}
	
	function addVal(newVal){
		setInputVal([newVal]);
	}
	
	function removeVal(){
		setInputVal([]);
	}
	
	
	return <>
		<div className="form-item__label-box">
			{list.map((item, index)=>{
				return <label className="form-item__label-radio" key={item.value}>
					<input
						checked={inputVal.indexOf(String(item.value)) > -1}
						onChange={(e)=>{
							return handleChange(e, item, index);
						}}
						type="radio"
						readOnly={readonly}
						name={`${name}_cus`}
						value={String(item.value)} />{item.title}
				</label>
			})}
		</div>
		<input
			type="hidden"
			ref={inputRef}
			name={name}
			value={inputVal.join(',')} />
		<div className={showTextField ? 'form-item__text-field ' : 'hidden form-item__text-field '}>
			<input type="text"
			       name={textFieldName}
				   readOnly={readonly}
			       value={inputTextVal}
			       onChange={handleInputTextVal}
			       placeholder={textFieldPlaceHolder} />
		</div>
	</>;
}

export default FormRadio;
