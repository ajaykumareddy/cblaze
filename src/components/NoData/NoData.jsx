import React, {useEffect, useState} from "react";
import {COLOR_CODE_NAME} from "../../constants/Theme";
import NoDataBLUE from '../../assets/png/no_data_blue_theme.png';
import './NoData.scss';


class NoData extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            theme: NoDataBLUE
        };
    }

     componentDidMount() {
        if(window.localStorage.getItem('settings')) {
            let theme = JSON.parse(window.localStorage.getItem('settings')).theme;
            let val = COLOR_CODE_NAME[theme];
            import('../../assets/png/no_data_'+ val.toLowerCase() +'_theme.png').then((module) => {
               this.setState({theme: module.default });
           }).catch(function () {
               this.setState(NoDataBLUE);
           })

        }
    }

    render() {
        let { theme } = this.state;
        return <div className="NoData">
            <img src={theme}  alt='No Data' />
        </div>;
    }
}

export default NoData;
