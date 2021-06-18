import React, {useState, useRef, useEffect } from 'react';
import Utils from "@/Utils";

function FormCheckboxText(props) {
	let {
		value,
		readonly,
		options,
		name,
	} = props;
	
	try{
		options = JSON.parse(Utils.htmlUtil.escape2Html(options));
	}catch(e){
		options = [];
	}
	
	try{
		value = JSON.parse(value);
	}catch(e){
		value = [];
	}
	
	options = initOptions(options);
	
	let [configOptions, setConfigOptions] = useState(options);
	let [hiddenFieldValue, setHiddenFieldValue] = useState('[]');
	
	useEffect(()=>{
		updateHiddenFieldValue();
	},[configOptions]);
	
	function initOptions(){
		return options.map((optionsItem)=>{
			value.forEach((valueItem)=>{
				if(optionsItem.title === valueItem.title){
					optionsItem.checked = true;
					optionsItem.text = valueItem.text;
				}
			})
			return optionsItem;
		})
	}
	
	function updateHiddenFieldValue(){
		const NEW_HIDDEN_FIELD_VALUE = configOptions.filter((item)=>{
			return item.checked;
		}).map((item)=>{
			const res = {
				title: item.title
			};
			if(item.text){
				res.text = item.text;
			}
			return res;
		});
		setHiddenFieldValue(JSON.stringify(NEW_HIDDEN_FIELD_VALUE));
	}
	
	function updateConfigOptions(){
		const NEW_CONFIG_OPTIONS = [...configOptions];
		setConfigOptions(NEW_CONFIG_OPTIONS);
		return NEW_CONFIG_OPTIONS;
	}
	
	function handleChange(e, item, index){
		item.checked = !item.checked;
		updateConfigOptions();
	}
	
	function handleInputText(e, item, index){
		item.text = e.target.value;
		updateConfigOptions();
	}

	return <React.Fragment>
		{configOptions.map((item, index)=>{
			return <div className={'form-item__box'} key={item.title}>
				<label
					className="form-item__label">
					<input
						checked={item.checked || false}
						onChange={(e)=>{
							return handleChange(e, item, index);
						}}
						value={''}
						readOnly={readonly}
						type="checkbox" />
					<div className={'label-title'}>{item.title}</div>
				</label>
				{item.need_text ?
					<input type="text"
				       value={item.text}
					   readOnly={readonly}
					   onChange={(e)=>{
							return handleInputText(e, item, index)
			           }} /> :
					<></>}
			</div>
		})}
		<input type="hidden"
		       name={name}
		       value={hiddenFieldValue} />
	</React.Fragment>;
}

export default FormCheckboxText;

