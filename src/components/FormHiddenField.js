import React, {useState, useRef, useEffect } from 'react';

function FormHiddenField(props) {
	let {
		value,
		required,
		readonly,
		name
	} = props;
	let inputRef = useRef(null);
	
	return <input
		ref={inputRef}
		required={required}
		readOnly={readonly}
		name={name}
		type="hidden"
		value={value} />;
}

export default FormHiddenField;
