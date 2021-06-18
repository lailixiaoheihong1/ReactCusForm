import CusForm from "@/components/CusForm";
import React from 'react';
import ReactDOM from 'react-dom';
import defaultRegisterType from "@/config/index";

const REGISTER_CONFIG = {};

function ReactCusForm(id, opt){
    if(!document.getElementById(id)){
        throw new Error(`${id} is not found at document!`);
        return false;
    }
    const defaultOpt = { formItems: []};
    let options = Object.assign({}, defaultOpt, opt);

    options.formItems = options.formItems.map((item)=>{
        if(item.type in REGISTER_CONFIG){
            return REGISTER_CONFIG[item.type](item);
        }else{
            return item;
        }
    });

    const instance = ReactDOM.render(<CusForm {...options} />, document.getElementById(id));

    return {
        instance,
        showItemByName(name){
            const $el = $(`.form-group__${name}`),
                $INPUT = $el.find(`[name=${name}]`),
                IS_REQUIRE = $el.data('data-form-require');

            $INPUT.attr('required', IS_REQUIRE);

            return $el.show(300);
        },
        hideItemByName(name){
            const $el = $(`.form-group__${name}`),
                $INPUT = $el.find(`[name=${name}]`);

            $INPUT.attr('required', false);

            return $el.hide(300);
        },
    };
}

ReactCusForm.registerItemType = (type, configFn)=>{
    REGISTER_CONFIG[type] = (config)=>{
        return {...configFn(config)};
    };
};

for(let key in defaultRegisterType){
    ReactCusForm.registerItemType(key, defaultRegisterType[key]);
}


export default ReactCusForm;


