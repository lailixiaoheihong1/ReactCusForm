import React, {useRef, useEffect } from 'react';

import FormText from './FormText';
import FormCheckboxWithTitle from './FormCheckboxWithTitle';
import FormTextarea from './FormTextarea';
import FormSelect from './FormSelect';
import FormAddrSelect from './FormAddrSelect';
import FormVerifyCode from './FormVerifyCode';
import FormImgVerifyCode from './FormImgVerifyCode';
import FormCheckbox from './FormCheckbox';
import FormRadio from './FormRadio';
import FormPlainText from './FormPlainText';
import FormHiddenField from './FormHiddenField';
import FormSwitch from './FormSwitch';
import FormRadioText from './FormRadioText';
import FormCheckboxText from './FormCheckboxText';
import ShowPictures from './ShowPictures';
import ShowFiles from './ShowFiles';

import Utils from "@/Utils";

function FormGroup(props) {
	let formGroupRef = useRef(null);
	const {
		type,
		value,
		placeholder,
		options,
		name,
		unitText,
		maxLength,
		verifyCodeUrl,
		extraClassName = '',
		showTextField,
		inputType,
		sendCodeRequest,
		onClickDesc,
		hidden,
		onClickCheckboxTitleDesc,
		onMount,
		textFieldName,
		textFieldVal,
		textFieldPlaceHolder,
		showDetailAddress,
	} = props;

	let required = Utils.booleanValue(props.required);
	let readonly = Utils.booleanValue(props.readonly);

	let inputEle,
		classExt = '',
		formGroupClassName = '',
		formNameClassName = '',
		formFieldClassName = '';
	
	useEffect(()=>{
		if(Utils.isType.isFunction(onMount)){
			onMount(formGroupRef.current,
				formGroupRef.current.querySelector(`[name=${name}]`));
		}
	});
	
	switch(type){
		case 'select':
			classExt = 'select';
			inputEle = <FormSelect
				required={required}
				readonly={readonly}
				name={name}
				value={value}
				options={options} />;
			break;
		case 'show-pictures':
			classExt = 'show-pictures';
			inputEle = <ShowPictures
				value={value} />;
			break;
		case 'show-files':
			classExt = 'show-files';
			inputEle = <ShowFiles
				value={value} />;
			break;
		case 'switch':
			classExt = 'switch';
			inputEle = <FormSwitch
				required={required}
				readonly={readonly}
				name={name}
				value={value}
				options={options} />;
			break;
		case 'verifyCode':
		case 'verify-code':
			classExt = 'verify-code';
			inputEle = <FormVerifyCode
				sendCodeRequest={sendCodeRequest}
				required={required}
				readonly={readonly}
				name={name}
				value={value}
				options={options} />;
			break;
		case 'imgVerifyCode':
		case 'img-verify-code':
			classExt = 'img-verify-code';
			inputEle = <FormImgVerifyCode
				required={required}
				readonly={readonly}
				verifyCodeUrl={verifyCodeUrl}
				name={name}
				value={value}
				options={options} />;
			break;
		case 'addrSelect':
		case 'addr-select':
			classExt = 'addr-select';
			inputEle = <FormAddrSelect
				required={required}
				readonly={readonly}
				name={name}
				showDetailAddress={showDetailAddress}
				textFieldName={textFieldName}
				textFieldVal={textFieldVal}
				textFieldPlaceHolder={textFieldPlaceHolder}
				value={value}
				options={options} />;
			break;
		case 'checkbox':
			classExt = 'checkbox';
			inputEle = <FormCheckbox
				required={required}
				readonly={readonly}
				name={name}
				showTextField={showTextField}
				textFieldName={textFieldName}
				textFieldVal={textFieldVal}
				textFieldPlaceHolder={textFieldPlaceHolder}
				value={value}
				options={options} />;
			break;
		case 'radio':
			classExt = 'radio';
			inputEle = <FormRadio
				required={required}
				readonly={readonly}
				name={name}
				showTextField={showTextField}
				textFieldName={textFieldName}
				textFieldVal={textFieldVal}
				textFieldPlaceHolder={textFieldPlaceHolder}
				value={value}
				options={options} />;
			break;
		case 'hiddenField':
		case 'hidden-field':
			classExt = 'hidden-field';
			inputEle = <FormHiddenField
				required={required}
				readonly={readonly}
				name={name}
				value={value} />;
			break;
		case 'radioText':
		case 'radio-text':
			classExt = 'radio-text';
			inputEle = <FormRadioText
				required={required}
				readonly={readonly}
				name={name}
				options={options}
				value={value} />;
			break;
		case 'checkboxText':
		case 'checkbox-text':
			classExt = 'checkbox-text';
			inputEle = <FormCheckboxText
				required={required}
				readonly={readonly}
				name={name}
				options={options}
				value={value} />;
			break;
		case 'textarea':
			classExt = 'textarea';
			inputEle = <FormTextarea
				required={required}
				readonly={readonly}
				name={name}
				maxLength={maxLength}
				value={value || ''}
				placeholder={placeholder} />;
			break;
		case 'checkboxWithTitle':
		case 'checkbox-with-title':
			classExt = 'checkbox-with-title';
			inputEle = <FormCheckboxWithTitle
				required={required}
				readonly={readonly}
				title={props.title}
				desc={props.desc}
				name={name}
				onClickCheckboxTitleDesc={onClickCheckboxTitleDesc}
				value={value || ''} />;
			break;
		case 'plainText':
		case 'plain-text':
		case 'description':
			classExt = 'plain-text';
			inputEle = <FormPlainText value={value || ''} />;
			break;
		default:
			classExt = 'text';
			if(unitText){
				formFieldClassName = `${formFieldClassName} form-field__text__with-unit`;
			}
			inputEle = <FormText
				required={required}
				readonly={readonly}
				unitText={unitText || ''}
				name={name}
				inputType={inputType}
				value={value || ''}
				placeholder={placeholder} />;
	}
	
	let formTipsDom;
	if(props.tips){
		formTipsDom = <div
			dangerouslySetInnerHTML={{
				__html: props.tips
			}}
			className="form-msg" />;
	}
	
	let subTitleDom;
	if(props.subTitle){
		subTitleDom = <div className="sub-title">{props.subTitle}</div>;
	}
	
	let descDom;
	if(props.desc){
		descDom = <div onClick={onClickDesc}
		               className="form-group__top-right">
					{props.desc}
				</div>
	}
	
	formGroupClassName = name ? `form-group__${name}` : '';
	formGroupClassName = readonly ?
		`${formGroupClassName} form-group__readonly` :
		`${formGroupClassName}`;
	formNameClassName = `form-name__${classExt}`;
	formFieldClassName = `${formFieldClassName} form-field__${classExt}`;
	
	return <div className={`form-group ${formGroupClassName}
				${hidden ? 'hidden' : ''}
				form-group__${classExt}
			    ${extraClassName}`
			}
		     ref={formGroupRef}
		     data-form-require={required}>
			<div className="form-group__top">
				<div className={`field-name form-group__top-left ${formNameClassName}`}>
					<div className="form-group__top-left">
						<span className="form-group__title">
							{props.title}
						</span>
						<span className={'field-require ' + (required ? '' : 'hidden')}>
							*</span>
						<span className="form-group__sub-title">
							{subTitleDom}
						</span>
					</div>
					{descDom}
				</div>
				<div className={`form-field ${formFieldClassName}`}>
					{inputEle}
				</div>
			</div>
			{formTipsDom}
		</div>;
}

export default FormGroup;

