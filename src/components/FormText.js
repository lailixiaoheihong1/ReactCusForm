import React, {useState } from 'react';

function FormText(props) {
	let {
		value,
		placeholder,
		required,
		name,
		unitText,
		readonly,
		inputType = 'text',
		needInt=false,
	} = props;
	let [inputValue, setVal] = useState(value);
	
	function handleChange(e){
		if (needInt) {
			let number = e.target.value.replace(/[^0-9]+/g, '');
			setVal(number);
		} else {
			setVal(e.target.value);
		}
	}
	
	let unitDom;
	if(unitText){
		unitDom = <>
			<span className="unit">{unitText}</span>
		</>;
	}else{
		unitDom = <></>;
	}
	
	return <>
		<input type={inputType}
		       name={name}
		       onChange={handleChange}
		       required={required}
		       value={inputValue}
			   readOnly={readonly}
		       placeholder={placeholder} />
		{unitDom}
	</>;
}

export default FormText;
