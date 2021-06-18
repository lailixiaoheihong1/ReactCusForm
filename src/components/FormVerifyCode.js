import React, {useState } from 'react';
import isPromise from 'is-promise';

function FormVerifyCode(props) {
	let {value, options, required, name, sendCodeRequest} = props;
	
	const INIT_VALUE = '';
	let [inputValue, setVal] = useState(INIT_VALUE);
	
	const MIN_TIME = 0;
	const DEFAULT_TIMEOUT = 60;
	let time = DEFAULT_TIMEOUT;
	
	const STATUS_ENUM = {
		normal: 'normal',
		disabled: 'disabled',
	};
	const DEFAULT_STATUS = STATUS_ENUM.normal;
	let [status, setStatus] = useState(DEFAULT_STATUS);
	
	let DEFAULT_BTN_TEXT = '发送验证码';
	let [btnText, setBtnText] = useState(DEFAULT_BTN_TEXT);
	
	let intervalId = null;
	
	function handleChange(e){
		setVal(e.target.value);
	}
	
	function handleBtnClick(e){
		
		if(status === STATUS_ENUM.disabled){
			return false;
		}
		
		if(typeof sendCodeRequest !== 'function'){
			console.error('sendCodeRequest must be a function which return a promise');
			return false;
		}
		
		const SEND_CODE_PROMISE = sendCodeRequest();
		if(!isPromise(SEND_CODE_PROMISE)){
			console.error('please return a promise at function sendCodeRequest');
			return false;
		}
		
		
		SEND_CODE_PROMISE.then(function (res){
			setStatus(STATUS_ENUM.disabled);
			
			startTimeInterval();
			intervalId = setInterval(handleInterval, 1000);
		}).catch((e)=>{
		});
	}
	
	function handleInterval(){
		const CAN_STOP_TIMEOUT = time === MIN_TIME;
		if(CAN_STOP_TIMEOUT){
			stopTimeInterval();
		}else{
			startTimeInterval();
		}
	}
	
	function stopTimeInterval(){
		time = DEFAULT_TIMEOUT;
		clearInterval(intervalId);
		
		setStatus(STATUS_ENUM.normal);
		setBtnText(DEFAULT_BTN_TEXT);
	}
	
	function startTimeInterval(){
		time--;
		setBtnText(`${time} s`);
	}
	
	return <>
		<input type="text"
		       placeholder="输入验证码"
		       name={name}
		       onChange={handleChange}
		       value={inputValue} />
		<button type="button"
		        disabled={status === STATUS_ENUM.disabled}
		        onClick={handleBtnClick}
		        className={'btn btn-orange'}>
			{btnText}
		</button>
	</>;
}

export default FormVerifyCode;
