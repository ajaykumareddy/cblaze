import React from "react";
import NoDataImg from '../../assets/png/no_data_blue_theme.png';
import './NoData.scss';

function NoData() {
    return <div className="NoData">
        <img src={NoDataImg}  alt='No Data' />
    </div>;
}

export default NoData;
