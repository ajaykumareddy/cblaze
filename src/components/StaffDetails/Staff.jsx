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
                    <td>{ index + 1 }</td>
                    <td>00123</td>
                    <td>{staff}</td>
                    <td>Male</td>
                    <td>Staff</td>
                    <td>9874561230</td>
                    <td>Active</td>
                    <td>Staff</td>
                    <td>9874561230</td>
                    <td>Active</td>
                    <td>Staff</td>
                    <td>9874561230</td>
                    <td>Active</td>
                    <td>Staff</td>
                    <td>9874561230</td>
                    <td>Active</td>

                    <td> v e p d </td>
                </tr>
            })}
        </>
    }
}

export default Staff