import React, {useState } from 'react';

function FormText(props) {
	let {
		value,
		placeholder,
		required,
		name,
		unitText,
		readonly,
		inputType = 'text'
	} = props;
	let [inputValue, setVal] = useState(value);
	
	function handleChange(e){
		setVal(e.target.value);
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
