import React, {useState} from "react";
import i18n from "i18next";


function ChangeLanguage(props) {


    function changeLanguage(e) {
        i18n.changeLanguage(e.target.options[e.target.options.selectedIndex].value);
    }
    const [options, addOptions] = useState([{ name: 'EN' ,value:"en" }, { name: 'TA' ,value:"ta" }]);

    return (<div className="ChangeLanguage">
        <select name="lang" onChange={changeLanguage}>
            {options.map((option,index)=>{
                return <option key={index} value={option.value}>{option.name}</option>
            })}
        </select>

    </div>);

}

export  default ChangeLanguage;