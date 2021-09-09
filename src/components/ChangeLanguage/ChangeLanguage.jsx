import React from "react";
import i18n from "i18next";


function ChangeLanguage(props) {

    function changeLanguage(e) {
        i18n.changeLanguage(e.target.options[e.target.options.selectedIndex].value);
    }

    return (<div className="ChangeLanguage">
        <select name="lang" onChange={changeLanguage}>
            <option value="en">en</option>
            <option value="ta">ta</option>
        </select>

    </div>);

}

export  default ChangeLanguage;