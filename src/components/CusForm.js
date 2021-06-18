import React, {useState, useRef, useEffect } from 'react';
import FormGroup from './FormGroup';
const uuid = require('uuid-random');

import Utils from "@/Utils";

function CusForm(props) {
	const {
		formItems,
		onMount,
	} = props;
	
	useEffect(()=>{
		if(Utils.isType.isFunction(onMount)){
			onMount();
		}
	});
	
	return <div className="react-cus-form">
		{formItems.map((item)=>
			<FormGroup
				key={`${uuid()}-${item.name}`}
				{...item} />
		)}
	</div>;
}

export default CusForm;
