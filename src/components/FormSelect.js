import React, {useState } from 'react';
import FormText from './FormText';
import Utils from "@/Utils";

function FormSelect(props) {
	let {
		value,
		options,
		required,
		name,
		readonly,
	} = props;
	let [inputValue, setVal] = useState(value);
	let list = Utils.convertOptions.getOptionList(options);
	list.unshift({title: '--请选择--', value: ''});
	
	function handleChange(e){
		setVal(e.target.value);
	}
	return <>
		<select
			required={required}
			name={name}
			onChange={handleChange}
			value={inputValue}>
			{list.map((item)=> <option key={item.value}
									value={item.value}>
								{item.title}
							</option>)}
		</select>
	</>
}

export default FormSelect;
