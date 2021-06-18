import React, {useState, useRef, useEffect } from 'react';
import Utils from "@/Utils";

function FormCheckbox(props) {
	let {
		value,
		options,
		readonly,
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
	
	let inputRef = useRef(null);
	
	let list = Utils.convertOptions.getOptionList(options);
	
	function handleChange(e, item, index){
		const newVal = e.target.value;
		const UN_CHECKED = inputVal.indexOf(newVal) === -1;
		
		if(UN_CHECKED){
			addVal(newVal);
		}else{
			removeVal(newVal);
		}
		
		setTimeout(()=>{
			triggerEvent('change');
		});
	}
	
	function triggerEvent(type){
		const CHANGE_EVENT = new Event(type);
		inputRef.current.dispatchEvent(CHANGE_EVENT);
	}
	
	function handleInputTextVal(e){
		setInputTextVal(e.target.value);
	}
	
	function addVal(newVal){
		setInputVal([...inputVal, newVal]);
	}
	
	function removeVal(newVal){
		const newArr = [...inputVal].filter((item)=>{
			return item !== newVal;
		});
		setInputVal([...newArr]);
	}
	
	return <>
		<div className="form-item__label-box">
			{list.map((item, index)=>{
				return <label className="form-item__label-checkbox" key={item.value}>
					<input
						checked={inputVal.indexOf(String(item.value)) > -1}
						onChange={(e)=>{
							return handleChange(e, item.value, index);
						}}
						type="checkbox"
						readOnly={readonly}
						value={String(item.value)} />{item.title}
				</label>
			})}
		</div>
		<input type="hidden"
		       ref={inputRef}
		       name={name}
		       value={inputVal.join(',')} />
		<div className={showTextField ? 'form-item__text-field ' : 'hidden form-item__text-field '}>
			<input type="text"
			       name={textFieldName}
			       value={inputTextVal}
				   readOnly={readonly}
				   onChange={handleInputTextVal}
			       placeholder={textFieldPlaceHolder} />
		</div>
	</>;
}

export default FormCheckbox;
