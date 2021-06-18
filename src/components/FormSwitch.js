import React, {useState, useRef, useEffect } from 'react';
import Utils from "@/Utils";

function FormSwitch(props) {
	let {
		value,
		name,
	} = props;
	
	const DEFAULT_VALUE = 0;
	const INIT_VALUE = Number(Boolean(Number(value))) || DEFAULT_VALUE;
	let [inputVal, setInputVal] = useState(INIT_VALUE);
	
	function getNewVal(originVal){
		return 1 - originVal;
	}
	
	function handleClick(){
		const NEW_VALUE = getNewVal(inputVal);
		setInputVal(NEW_VALUE);
	}
	
	return <>
		<div onClick={handleClick}
			className={`switch-box ${inputVal ? 'switch-box__active' : ''}`}>
			<div className="switch-box__button" />
		</div>
		<input
			type="hidden"
			name={name}
			value={inputVal} />
	</>;
}

export default FormSwitch;
