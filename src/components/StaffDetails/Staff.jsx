import React from "react";

class Staff extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {data} = this.props;
        return <>
            {data.map((staff,index) => {
                return <tr>
                    <td>{staff.slno }</td>
                    <td>{staff.employee_id}</td>
                    <td>{staff.name}</td>
                    <td>{staff.gender}</td>
                    <td>{staff.designation}</td>
                    <td>{staff.phone_number}</td>
                    <td>{staff.status}</td>
                    <td> v e p d </td>
                </tr>
            })}
        </>
    }
}

export default Staff