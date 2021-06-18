import ReactCusForm from './reactCusForm';
import './styles/style.less';

function fontRem() {
	var designW = 720;
	var html = document.getElementsByTagName('html')[0];
	var winW = Math.min(html.offsetWidth, 414);
	html.style.fontSize = (winW / designW) * 100 + 'px';
}
fontRem();
window.onresize = fontRem;

// var formItems = [
// 	{
// 		"title": "图片上传",
// 		"type": "picture",
// 		"options": "",
// 		"tips": "上传一张图片，非必填",
// 		"placeholder": "",
// 		"required": "0",
// 		"other_limit": "{\"min_limit\":null}",
// 		"deleted": "0",
// 		"readonly": true,
// 		"name": "cus_form_17"
// 	},
// 	{
// 		"title": "多图上传",
// 		"type": "pictures",
// 		"options": "{&quot;max_upload_count&quot;:&quot;3&quot;}",
// 		"tips": "限制3张图片，必填",
// 		"placeholder": "",
// 		"required": "1",
// 		"readonly": true,
// 		"other_limit": "{\"min_limit\":null}",
// 		"deleted": "0",
// 		"name": "cus_form_18"
// 	},
// 	{
// 		"title": "多图上传2",
// 		"type": "pictures",
// 		"options": "{&quot;max_upload_count&quot;:&quot;&quot;}",
// 		"tips": "没有上传数量限制，必填",
// 		"placeholder": "",
// 		"required": "1",
// 		"readonly": true,
// 		"other_limit": "{\"min_limit\":null}",
// 		"deleted": "0",
// 		"name": "cus_form_19"
// 	},
// 	{
// 		"title": "附件上传",
// 		"type": "file",
// 		"options": "",
// 		"tips": "非必填",
// 		"placeholder": "",
// 		"required": "0",
// 		"readonly": true,
// 		"other_limit": "{\"min_limit\":null}",
// 		"deleted": "0",
// 		"name": "cus_form_20"
// 	},
// 	{
// 		"title": "说明文本",
// 		"type": "description",
// 		"options": "",
// 		"tips": "非必填",
// 		"readonly": true,
// 		"value": "说明文本说明文本value",
// 		"placeholder": "",
// 		"required": "0",
// 		"other_limit": "{\"min_limit\":null}",
// 		"deleted": "0",
// 		"name": "cus_form_21"
// 	},
// 	{
// 		"title": "多选文本",
// 		"type": "checkbox-text",
// 		"options": "[{&quot;title&quot;:&quot;选项标题1&quot;,&quot;need_text&quot;:true},{&quot;title&quot;:&quot;选项标题2&quot;,&quot;need_text&quot;:false},{&quot;title&quot;:&quot;选项标题3&quot;,&quot;need_text&quot;:false}]",
// 		"tips": "选项1有附加文本，非必填",
// 		"placeholder": "",
// 		"readonly": true,
// 		"required": "0",
// 		"other_limit": "{\"min_limit\":null}",
// 		"deleted": "0",
// 		"name": "cus_form_22"
// 	},
// 	{
// 		"title": "单选文本",
// 		"type": "radio-text",
// 		"options": "[{&quot;title&quot;:&quot;选项标题1&quot;,&quot;need_text&quot;:true},{&quot;title&quot;:&quot;选项标题2&quot;,&quot;need_text&quot;:false},{&quot;title&quot;:&quot;选项标题3&quot;,&quot;need_text&quot;:false}]",
// 		"tips": "选项1有附加文本，非必填",
// 		"placeholder": "",
// 		"required": "0",
// 		"readonly": true,
// 		"other_limit": "{\"min_limit\":null}",
// 		"deleted": "0",
// 		"name": "cus_form_23"
// 	}
// ];

var formItems = [
	{
		"title": "多选框",
		"type":"checkbox-text",
		"options": '[{"title":"多选框","need_text":true},{"title":"12312","need_text":false}]',
		"tips":"",
		"readonly": true,
		"placeholder":"",
		"required":"0",
		"other_limit":"{\"min_limit\":null}",
		"deleted":"0",
		value: '[{"title": "多选框1", "text": "viki"}, {"title": "多选框2"}]',
		"name":"cus_form_2"
	},
	{
		"title": "单选框",
		"type":"radio-text",
		"options": '[{"title":"单选框","need_text":true},{"title":"12312","need_text":false}]',
		"tips":"",
		"placeholder":"",
		"required":"0",
		"readonly": true,
		"other_limit":"{\"min_limit\":null}",
		"deleted":"0",
		value: '[{"title": "单选框", "text": "viki"}]',
		"name":"cus_form_1151"
	},
	{
		from_id: 1,
		title: '是否开启',
		type: 'switch',
		value: 1,
		"readonly": true,
		tips: '请选择',
		name: 'cus_from_1'
	},
	{
		from_id: 1,
		title: 'textarea',
		type: 'textarea',
		options: [],
		maxLength: 5,
		value: 'viki',
		"readonly": true,
		tips: '请填写textarea',
		placeholder: '请认真填写textarea',
		required: 1,
		name: 'cus_from_1111'
	},
	{
		from_id: 1,
		title: 'text',
		type: 'text',
		options: [],
		maxLength: 5,
		value: 'viki',
		"readonly": true,
		tips: '请填写textarea',
		placeholder: '请认真填写textarea',
		required: 1,
		name: 'cus_from_1111'
	},
	{
		from_id: 1,
		title: '姓名',
		type: 'plainText',
		desc: '更换姓名',
		options: [],
		"readonly": true,
		value: '姓名viki',
		tips: '请填写姓名',
		required: 1,
		name: 'cus_from_15x'
	},
	{
		from_id: 1,
		title: '性别1',
		type: 'select',
		"readonly": true,
		options: [
			{"title": "男 ","value":1},
			{"title": "女","value":2},
			{"title": "未知","value":0}
		],
		value: '2',
		tips: '请填写性别',
		placeholder: '请认真填写',
		required: 1,
		name: 'cus_from_2',
		onMount: function (el ,input){
		}
	},
	{
		from_id: 1,
		title: '性别2',
		"readonly": true,
		type: 'select',
		options: {
			1: '党员',
			2: '团员',
			3: '无',
		},
		value: 2,
		tips: '请填写性别',
		placeholder: '请认真填写',
		required: 1,
		name: 'cus_from_21'
	},
	{
		from_id: 1,
		title: '性别3',
		"readonly": true,
		type: 'select',
		options: '广东,江西,浙江',
		value: '浙江',
		tips: '请填写性别',
		placeholder: '请认真填写',
		required: 1,
		name: 'cus_from_21'
	},
	{
		from_id: 1,
		title: '学历checkbox',
		type: 'checkbox',
		showTextField: true,
		textFieldName: 'viki_haha',
		textFieldVal: 'lucy',
		"readonly": true,
		textFieldPlaceHolder: 'textx',
		options: '大专,本科,无',
		value: '大专',
		tips: '请填写性别',
		placeholder: '请认真填写',
		required: 1,
		name: 'cus_from_3'
	},
	{
		from_id: 1,
		"readonly": true,
		title: '性别checkbox',
		type: 'checkbox',
		options: [
			{"title": "男 ","value":1},
			{"title": "女","value":2},
			{"title": "未知","value":0}
		],
		value: 99,
		extraClassName: 'form-group__inline',
		tips: '请填写性别',
		placeholder: '请认真填写',
		required: 1,
		name: 'cus_from_154'
	},
	{
		from_id: 1,
		title: '性别radio',
		type: 'radio',
		options: '男,女,其他',
		value: '女',
		showTextFieldOnLast: true,
		"readonly": true,
		textFieldName: 'viki_haha',
		textFieldVal: 'lucy',
		textFieldPlaceHolder: 'text',
		extraClassName: 'form-group__inline',
		tips: '请填写性别',
		placeholder: '请认真填写',
		required: 1,
		name: 'cus_from_194'
	},
	{
		deleted: "0",
		name: "cus_form_15",
		options: "",
		other_limit: "{\"min_limit\":null}",
		placeholder: "",
		readonly: true,
		required: "1",
		tips: "必填",
		title: "城市地区",
		type: "city",
		value: "440783",
		value_text: "广东 江门 开平",
	},
	{
		deleted: "0",
		name: "cus_form_15",
		options: "",
		other_limit: "{\"min_limit\":null}",
		placeholder: "",
		readonly: false,
		required: "1",
		tips: "必填",
		title: "城市地区",
		type: "addrSelect",
		showDetailAddress: true,
		textFieldName: 'detail-address',
		textFieldVal: '赤坎镇',
		textFieldPlaceHolder: '详细地址',
		value: "140303",
		value_text: "山西省 阳泉市 矿区",
	},
	{
		from_id: 1,
		title: '我已阅读并同意',
		desc: '《维德法务中心法律志愿服务协议》',
		onClickCheckboxTitleDesc(){
			console.log(111);
		},
		type: 'checkboxWithTitle',
		options: '',
		value: '',
		extraClassName: '',
		tips: '请填写服务协议',
		required: 1,
		name: 'cus_from_195'
	},
	{
		from_id: 1,
		title: '手机验证码',
		type: 'verifyCode',
		options: '',
		value: '男',
		tips: '请填写验证码',
		placeholder: '请认真验证码',
		required: 1,
		sendCodeRequest: function (){
			return new Promise((resolve)=>{
				return resolve(1);
			});
		},
		name: 'cus_from_11'
	},
	{
		from_id: 1,
		title: '图片验证码',
		verifyCodeUrl: 'https://ruyuan.t4tstudio.com/home/index/verify.html',
		type: 'imgVerifyCode',
		options: '',
		value: '',
		tips: '请填写图片验证码',
		placeholder: '请认真填写验证码',
		required: 1,
		name: 'cus_from_101'
	},
	{
		from_id: 1,
		title: '图片上传',
		type: 'picture',
		options: '',
		value: '1986',
		tips: '请上传图片',
		placeholder: '',
		required: 1,
		name: 'cus_from_4'
	},
	{
		from_id: 1,
		title: '文件上传',
		type: 'file',
		options: '',
		value: '1451',
		tips: '请上传文件',
		placeholder: '',
		required: 1,
		name: 'cus_from_5'
	},
];


ReactCusForm('root', {
	formItems
});
