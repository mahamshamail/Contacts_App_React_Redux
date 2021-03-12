import { 
  FETCH_CONTACTS, NEW_CONTACT } from './types';


export const fetchContacts = () => dispatch => {
  console.log('fetchContacts');
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTUEFfU3lzdGVtIiwic3ViIjoiNzYiLCJleHAiOjE2MTQyNzgyMjJ9.3UDyEqJfU77Ff_Vvm9CIotHk2Chp5ddmKTrVT64rKu0");
  var formdata = new FormData();
  var d;
  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
  };
  fetch("https://mighty-thicket-01215.herokuapp.com/https://v1.stormapi.com/contacts/read-all", requestOptions)
  .then(response => response.json())
  .then(contacts => {
      console.log(contacts.data)
      var c = {
        type: FETCH_CONTACTS,
        payload: contacts.data
      };
      
      console.log('c.payload ' +c.payload)
      dispatch(c);
  });
 
};

export const createContact = contactData => dispatch => {
  console.log('createContacts');
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTUEFfU3lzdGVtIiwic3ViIjoiNzYiLCJleHAiOjE2MTQyNzgyMjJ9.3UDyEqJfU77Ff_Vvm9CIotHk2Chp5ddmKTrVT64rKu0");
  var formdata = new FormData();
  formdata.append('first_name',contactData.first_name);
  formdata.append('last_name',contactData.last_name);
  formdata.append('primary_email',contactData.primary_email);
  formdata.append('organization_name',contactData.organization_name);
  


  
  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
  };
  
   fetch('https://mighty-thicket-01215.herokuapp.com/https://v1.stormapi.com/contacts/create', requestOptions)
    .then(res => res.text())
    .then(contact => {
      const co = {
        type: NEW_CONTACT,
        payload: contact
      }
      console.log('co.payload '+co.payload);
      dispatch(co);
     
    }
    ).catch(e=>console.log(e));
};
