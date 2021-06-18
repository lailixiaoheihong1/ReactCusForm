

# 自定义表单生成器 ReactCusForm

	通过用户传入的配置,自动生成表单组件
	组件自带样式

### 可生成表单 :

- 文本输入框

  - type => 'text',
  - unitText 字段单位文本
  - inputType 输入框类型 默认为 'text',可选 number,email,search 等html5支持的输入框类型

- 选择输入框 select

  - type => 'select',
  - options => 见下文 "options配置说明"

- 单选框

  - type => 'radio',
  - options => 见下文 "options配置说明"
  - showTextField 是否在最后展示文本字段,当该字段开启时,以下字段可用
    - textFieldName  => String 字段名
    - textFieldVal  => String 字段值
    - textFieldPlaceHolder  => String 占位符

- 多选框

  - type => 'checkbox',
  - options => 见下文 "options配置说明"
  - showTextField 是否在最后展示文本字段,当该字段开启时,以下字段可用
    - textFieldName => String 字段名
    - textFieldVal => String 字段值
    - textFieldPlaceHolder => String 占位符

- 多行文本框

  - type => 'textarea',
  - maxTextNumber => number 最大数字限制

- 隐藏域

  - type => 'hiddenField', 可作初始化插件,在onMount中调用

- 地址选择框

  - type => 'addrSelect',
  - showDetailAddress => Boolean 是否展示详细地址,当该字段开启时,以下字段可用
    - textFieldName => String  字段名
    - textFieldVal  => String 字段值
    - textFieldPlaceHolder  => String 占位符

- 图片验证码

  - type => 'imgVerifyCode',
  - verifyCodeUrl  => String

- 手机验证码

  - type => 'verifyCode',
  - sendCodeRequest => function 可进行自定义获取验证码操作

- 三级地址联动

  - type => 'city', 必须引入ReactFullAreaSelect

- 纯文本

  - type => 'plainText',
  - type => 'description',
  - value => string

- 多选框 + 文本描述

  - type => 'checkboxWithTitle',
  - onClickCheckboxTitleDesc => function

- 单选框 switch

  - type => 'switch',

- 单选 + 文本框 radio-text(后端自定义表单)

  - type => 'radio-text',
  - onClickCheckboxTitleDesc => function

- 单选 + 文本框 checkbox-text(后端自定义表单)

  - type => 'checkbox-text',
  - onClickCheckboxTitleDesc => function

  tips: type字段均可接收 "-" 分割,eg: plainText 可传 'plain-text';


### 用法:

```javascript
var reactCusFormDemo;
var formItems = [
  {
    title: '每个人捐赠多少钱',
    type: 'text',
    value: '20',
    placeholder: '请填写数字',
    required: true,
    unitText: '个',
    inputType: 'number',
    name: 'theme',
    onMount: function (el ,input){
      reactCusFormDemo.hideItemByName('sex'); //下面的 '性别' 字段将被隐藏
    }
  },
  {
    type: 'hiddenField',
    value: '20',
    onMount: function (el ,input){
      console.log(input) //hiddenField可用于初始化各种插件
    }
  },
  {
    title: '性别',
    type: 'select',
    options: [
      {"title": "男 ","value":1},
      {"title": "女","value":2},
      {"title": "未知","value":0}
    ],
    value: '女',
    tips: '请填写性别',
    placeholder: '请认真填写',
    required: 1,
    name: 'sex',
    onMount: function (el ,input){
    }
  },
  {
    title: '我已阅读并同意',
    desc: '《服务协议》',
    onClickCheckboxTitleDesc(){
    },
    type: 'checkboxWithTitle',
    options: '',
    value: '',
    extraClassName: '',
    tips: '请勾选服务协议',
    required: 1,
    name: 'agreement',
    onMount: function (el ,input){
    }
  },
];

reactCusFormDemo = ReactCusForm('form', {
  fromItems: fromItems,
  onMount: function(){

  }
});

```

### 通用配置字段:

- 通用属性:
  - title => string 标题
  - subTitle => string 子标题
  - desc => string 标题右侧
    - onClickDesc => function  desc必须传入
  - type => string 字段类型
  - value => string 字段值
  - extraClassName => string 自定义的样式名
  - required => boolean 是否必填(将有* 号标记, 且表单元素 有require属性)
  - name => string 字符名
  - placeholder => string 占位符(隐藏域等类型将不显示)
  - tips => string 底部输入提示
  - readonly => boolean 是否只读 该字段开启  样式&结构 跟原来不同

- 方法:
  - onMount => function(el, input) el为整个项的dom元素  input可能为空

### options配置说明:

- options: string | Array[object] | object 表单选项配置

  eg:

```javascript
 string: (key,value 均为字符串本身,一般用于后台生成的自定义表单)
```

```javascript
 '大专,本科,无',
```

    - Array[object]:

```javascript
[
  {"title": "男 ","value":1},
  {"title": "女","value":2},
  {"title": "未知","value":0}
]
```

	- object: (排序按浏览器默认排序)

```javascript
{
  1: '党员',
          2: '团员',
          3: '无',
}
```

------------



## 扩展

可以把不存在的type 转成 存在的类型,在初始化前后统一进行自定义操作

使用方法

```javascript
ReactCusForm.registerItemType(type: String, function: conifg):config
```

type为新的自定义类型

function (config) =>  config 为原配置config;

返回值: 返回新的config配置

可用一个js文件 在ReactCusForm后引入

eg:  在hiddenField 基础上 , 新增 oss上传 picture类型

```javascript
ReactCusForm.registerItemType('picture',function (config) {
  return Object.assign({}, config, {
    type: 'hiddenField',
    onMount: function (el, input) {
      var uploadOptions = {};
      try{
        uploadOptions = JSON.parse(config.options) || {};
      }catch (e){
      }

      $(input).attr('data-srcjson', config.srcjson)
              .ossuploaderWrapper({
                url: '/extends/AliyunOss/policyGet/type/image.html',
                multi_selection: false,
                oss: true,
                type: 'image',
                limit: uploadOptions.max_upload_count || undefined,
                show_msg: showMsg,
              });
    }
  });
});
```



## 返回值

instance: react 实例属性

方法: (依赖jquery)

- showItemByName => [function: name=>string]
- hideItemByName => [function: name=>string]

根据 表单字段 name 隐藏/显示 字段



## css

```css
--cus-form__input-bg-color: #f1f1f1; //输入框背景色
                                       --cus-form__active-color: #1890ff;  //插件主题色,如switch背景,采用该颜色
```






------------

# 调试

1.  运行yarn
2.  yarn run start
3.  调试代码在 src/app.js

## 打包

1. yarn run build
2. src/index.js 将被打包

