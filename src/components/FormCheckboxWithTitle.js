import React, {useState } from 'react';

function FormCheckboxWithTitle(props) {
	const DEFAULT_INPUT_VALUE = 0;
	const CHECKED_VALUE = 1;
	let {
		value = DEFAULT_INPUT_VALUE,
		readonly,
		required,
		name,
		title,
		desc,
		onClickCheckboxTitleDesc
	} = props;
	let [inputValue, setVal] = useState(value);
	
	function getReverseValue(originValue){
		return 1 - originValue;
	}
	
	function handleChange(e){
		setVal(getReverseValue(e.target.value));
	}
	
	return <>
		<label>
			<input type="checkbox"
			       name={name}
			       checked={Number(inputValue) === CHECKED_VALUE}
			       onChange={handleChange}
			       required={required}
				   readOnly={readonly}
			       value={inputValue}/>
			<span className="form-checkbox-with__title">{title}</span>
		</label>
		<a href="#!" onClick={onClickCheckboxTitleDesc} className="form-checkbox-with__desc">{desc}</a>
	</>;
}

export default FormCheckboxWithTitle;
