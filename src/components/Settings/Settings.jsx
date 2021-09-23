import React, {useState} from "react";
import i18n from "i18next";
import './Settings.scss';


function Settings(props) {


    function changeLanguage(e) {
        i18n.changeLanguage(e.target.options[e.target.options.selectedIndex].value);
    }

    function changeTheme(e) {
        document.documentElement.style.setProperty('--theme',e.target.options[e.target.options.selectedIndex].value)

    }

    const [options, addOptions] = useState([{ name: 'EN' ,value:"en" }, { name: 'TA' ,value:"ta" }]);
    const [themes, addTheme] = useState([{ name: 'BLUE' ,value:"#116AE7" }, { name: 'RED' ,value:"#E71B2A" } ,{ name: 'GREEN' ,value:"#00703C" },{ name: 'BLACK' ,value:"#0E1013" },{ name: 'YELLOW' ,value:"#E9CD29" } ]);

    return (<div className="Settings">
        <select name="lang" onChange={changeLanguage}>
            {options.map((option,index)=>{
                return <option key={index} value={option.value}>{option.name}</option>
            })}
        </select>

        <select name="theme" onChange={changeTheme}>
            {themes.map((theme,index)=>{
                return <option key={index} value={theme.value}>{theme.name}</option>
            })}
        </select>



    </div>);

}

export  default Settings;