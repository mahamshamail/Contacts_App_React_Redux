import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  fetchContacts } from '../actions/postActions';
import './Contact.css';
import ContactView from "./view-contact";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {num:0}
    this.handleClick = this.handleClick.bind(this);
}
  componentWillMount() {
   
    this.props.fetchContacts();

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newContact) {
      this.props.contacts.unshift(nextProps.newContact);
    }
  }
  

  handleClick(id) {
      this.setState(state => ({
        num: id-1
      }));
   
  }
  
  
  
  render() {
 
    var num = 0;
    const postContacts = this.props.contacts.map(contact => (
      <div id={contact.id} className='contact' key={contact.id}>
        
        <div className="contact_1" >
          <p onClick={() => this.handleClick(contact.id)}>{contact.first_name +" "+ contact.last_name + "  |  "+ contact.primary_email}</p>
        </div>

       
        
      </div>

      
    ));
    
    const contactViewViewable = this.props.contacts.map(contact => (
     
     <table id={contact.id + '_table'} className="table table-striped">
     <tbody>
     <tr>
         <th>First Name </th>
         <th colSpan="3">{contact.first_name}</th>
     </tr>
     <tr>
         <th>Last Name </th>
         <th colSpan="3">{contact.last_name}</th>
     </tr>
     <tr>
         <th>Email </th>
         <th colSpan="3">{contact.primary_email}</th>
     </tr>
     </tbody>
 </table>
     
    ));
    return (
      <div className='contactList'>
        <hr></hr>
        <h1>Contacts List</h1>
        <hr></hr>
        
        {postContacts}
        <br></br>
        <div>

          <hr></hr>
          <h1>Contact View</h1>
          <hr></hr>
          <div className='you'>
          {contactViewViewable[this.state.num]}
          
          
          
          
          </div>
      
        </div>
      </div>
    );
  }
}

Contacts.propTypes = {
 

  fetchContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  newContact: PropTypes.object

};

const mapStateToProps = state => ({

  contacts: state.contacts.items,
  newcontact: state.contacts.contactItem
});

export default connect(mapStateToProps, { 

  fetchContacts })(Contacts);
