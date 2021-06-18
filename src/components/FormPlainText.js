import React, {useState } from 'react';

function FormPlainText(props) {
	let {value} = props;

	return <div dangerouslySetInnerHTML={{__html: value}} />;
}

export default FormPlainText;
