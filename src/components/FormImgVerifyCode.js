import React, {useState} from 'react';

function FormImgVerifyCode(props) {
	let {value, options, required, name, verifyCodeUrl} = props;
	
	const INIT_VALUE = '';
	let [inputValue, setVal] = useState(INIT_VALUE);
	
	let [imgUrl, setImgUrl] = useState(getNewVerifyCode());
	
	function getNewVerifyCode(){
		return `${verifyCodeUrl}?t=${new Date().getTime()}`;
	}
	
	function handleChange(e){
		setVal(e.target.value);
	}
	
	function handleImgClick(e){
		setImgUrl(getNewVerifyCode());
	}
	
	return <>
		<input type="text"
		       placeholder="输入右侧验证码"
		       name={name}
		       onChange={handleChange}
		       value={inputValue} />
		<span className="img-verify-code" onClick={handleImgClick}>
			<img src={imgUrl} alt="" />
		</span>
	</>;
}

export default FormImgVerifyCode;
