import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  
  createContact } from '../actions/postActions';
  import './Postform.css'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        first_name:'', 
      last_name:'', 
      organization_name:'', 
      primary_email:'', 
      date_of_birth:'', 
      reports_to:'', 
      email_opt_out:'', 
      do_not_call:'', 
      assigned_to:'', 
      support_start_date:'',
      support_last_date:'', 
      twitter_username: '', 
      address_details:'', 
      id:''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log('e.target.name '+e.target.name);
    console.log('e.target.value '+e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
    const contact = {
      first_name: this.state.first_name, 
      last_name: this.state.last_name, 
      organization_name: this.state.organization_name, 
      primary_email: this.state.primary_email, 
      date_of_birth: this.state.date_of_birth, 
      reports_to: this.state.reports_to, 
      email_opt_out: this.state.email_opt_out , 
      do_not_call: this.state.do_not_call, 
      assigned_to: this.state.assigned_to, 
      support_start_date: this.state.support_start_date,
      support_last_date: this.state.support_last_date, 
      twitter_username: this.state.twitter_username, 
      address_details: this.state.address_details, 
      id: this.state.id
    };
    this.props.createContact(contact);
    
  }
   sayHello() {
    alert(`list updated refresh page`);
  }

  render() {
    return (
      <div className='formed'>
        <h1>Add New Contact</h1>
        
        <form className='contact-form' onSubmit={this.onSubmit}>
                <input name="id" type="hidden" className="form-control" value={this.state.id}/>

                <div className="form-group">
                    <label htmlFor="first_name">First Name (Required)</label>
                    <input name="first_name" type="text" className="form-control"
                          onChange={this.onChange}
                           placeholder="Jane" value={this.state.first_name} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name (Required)</label>
                    <input name="last_name" type="text" className="form-control"
                           onChange={this.onChange}
                           placeholder="Doe" value={this.state.last_name} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="organization_name">Organization Name</label>
                    <input name="organization_name" type="text" className="form-control"
                           onChange={this.onChange}
                           placeholder="Canada Start Up Co." value={this.state.organization_name} />
                </div>
                <div className="form-group">
                    <label htmlFor="primary_email">Email (Required)</label>
                    <input name="primary_email" className="form-control" value={this.state.primary_email}
                           onChange={this.onChange}
                           placeholder="email@test.com" required/>
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input name="date_of_birth" className="form-control"
                           onChange={this.onChange}
                           placeholder="2006-03-04"
                           value={this.state.date_of_birth}/>
                </div>
                <div className="form-group">
                    <label>Reports To</label>
                    <input name="reports_to" className="form-control"
                           onChange={this.onChange}
                           placeholder="James"
                           value={this.state.reports_to}/>
                </div>
             
                <div className="form-group">
                <label className="check_1">Email opt out: 
                    <input className="email_opt_out" type="checkbox" checked={false} 
                    onChange={this.onChange}
                     value={this.state.email_opt_out}/> 
                    </label>
                    <label className="check_2">Do not call: 
                    <input className="do_not_call" type="checkbox" checked={false} 
                    onChange={this.onChange}
                     value={this.state.do_not_call} /> 
                    </label>
                </div>

                <div className="form-group">
                    <label>Support Start Date</label>
                    <input name="support_start_date" className="form-control"
                           onChange={this.onChange}
                           placeholder="2006-03-04"
                           value={this.state.support_start_date}/>
                </div>
                <div className="form-group">
                    <label>Support End Date</label>
                    <input name="support_end_date" className="form-control"
                           onChange={this.onChange}
                           placeholder="2006-03-04"
                           value={this.state.support_end_date}/>
                </div>

                <div className="form-group">
                    <label htmlFor="twitter_username">Twitter Handle</label>
                    <input name="twitter_username" type="text" className="form-control" 
                           onChange={this.onChange}
                           placeholder="@janedo3" value={this.state.twitter_username} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Address Details</label>
                    <input name="address_details" type="text" className="form-control"
                           onChange={this.onChange}
                           placeholder="10 Wimbledon Street, " value={this.state.address_details} />
                </div>
                
                <button type="submit" className="btn" onClick={this.sayHello}> Save Contact</button>
            </form>

      </div>
    );
  }
}

PostForm.propTypes = {
  createContact: PropTypes.func.isRequired
};

export default connect(null, { 
 
  createContact
})(PostForm);
