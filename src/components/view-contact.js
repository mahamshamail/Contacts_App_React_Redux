import React, {Component} from 'react';

class ContactView extends Component {


    constructor(props) {
        super(props);
        this.first_name = this.props.first_name;
        this.last_name  = this.props.last_name;
        this.primary_email = this.props.primary_email;
    }

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {

        }
    }


    render(){
        return (
            <table className="table table-striped">
                <tbody>
                <tr>
                    <th>First Name </th>
                    <th colSpan="3">{this.props.first_name}</th>
                </tr>
                <tr>
                    <th>Last Name </th>
                    <th colSpan="3">{this.props.last_name}</th>
                </tr>
                <tr>
                    <th>Email </th>
                    <th colSpan="3">{this.props.primary_email}</th>
                </tr>
               
                
               
                
                </tbody>
            </table>
        )
    }
}

export default ContactView;