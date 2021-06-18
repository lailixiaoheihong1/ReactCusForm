import React, {useState } from 'react';

function FormAddrSelect(props) {
	let {
		value,
		name,
		showDetailAddress,
		textFieldName,
		textFieldVal,
		textFieldPlaceHolder
	} = props;
	let [inputValue, setVal] = useState(value);
	let [inputTextFieldVal, setInputTextFieldVal] = useState(textFieldVal);

	function handleChange(e){
		setVal(e.target.value);
	}
	
	function handleDetailAddressChange(e){
		setInputTextFieldVal(e.target.value);
	}
	
	const DETAIL_ADDRESS_DOM = showDetailAddress ?
		<div className="addr-select-detail">
			<input type="text"
			       name={textFieldName}
			       value={inputTextFieldVal}
			       onChange={handleDetailAddressChange}
			       placeholder={textFieldPlaceHolder || `请输入详细地址`} />
		</div> :
		<></>;
	
	return <>
		<div
			data-value={value}
			className="area-select-box">
			<input
				type="hidden"
				name={name}
				onChange={handleChange}
				value={inputValue} />
		</div>
		{DETAIL_ADDRESS_DOM}
	</>
}

export default FormAddrSelect;
