import React, {useState } from 'react';

function FormTextarea(props) {
	let {
		value,
		placeholder,
		required,
		name,
		readonly,
		maxLength: maxTextNumber
	} = props;
	let [inputValue, setVal] = useState(value);
	let [currentTextNumber, setCurrentTextNumber] = useState(value.length);
	
	function handleChange(e){
		// if(!isOverLength(e.target.value.length, maxTextNumber + 1)){
		// 	return false;
		// }
		const value = e.target.value;
		setVal(value);
		setCurrentTextNumber(value.length);
	}
	
	// function isOverLength(currentLength, maxLength){
	// 	return currentLength < maxLength;
	// }
	
	const TEXT_NUMBER_DOM = maxTextNumber ?
		<div className="text-number">{currentTextNumber} / {maxTextNumber}</div> :
		<></>;
	
	return <>
		<textarea name={name}
		       onChange={handleChange}
		       required={required}
		       value={inputValue}
			   readOnly={readonly}
	           maxLength={maxTextNumber}
		       placeholder={placeholder} />
		{TEXT_NUMBER_DOM}
	</>;
}

export default FormTextarea;
