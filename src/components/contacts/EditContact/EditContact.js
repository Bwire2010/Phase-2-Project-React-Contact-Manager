import React, { useState , useEffect} from 'react';
import {json, Link, useParams} from 'react-router-dom';
import {ContactService} from '../../../Services/ContactService';

let EditContact = () => {

  let {contactId} = useParams();

  let [state, setState] =useState({
    loading : false,
    contact: {
      name: '',
      photo: '',
      mobile:'',
      email:'',
      company: '',
      title: '',
      groupId:''
    },
    groups: [],
    errorMessage: ''
  });


 useEffect (() => {
    (async function () {
      try{
        setState({...state, loading: true});
        let response = await ContactService.getContact(contactId);
        console.log(response.data)
        setState({
              ...state,
              loading: false,
              contact: response.data
        });
      }
      catch (error) {
          setState({
            ...state,
            loading: false,
            errorMessage: error.message
          });
      }
    })();
  }, [contactId]);

  let upDateInput = () => {

  };

  let {loading , contact , groups , errorMessage} = state;


    return (
      <React.Fragment>
        <pre>{JSON.stringify(contact)}</pre>
      <section className='add-contact p-3'>
       <div className='container'>
         <div className='row'>
           <div className='col'>
             <p className='h4 text-success fw-bold'> Edit Contact</p>
             < p className='fst-italic'> Enter the contact name, email, and phone number.</p>
           </div>
         </div>
         <div className='row align-items-center'>
           <div className='col-md-4'>
             <form>
               <div className='mb-2'>
                 <input  
                  value={contact.name}
                  type='text' className='form-control' placeholder='Name'/>
               </div>
               <div className='mb-2'>
                 <input  type='text' className='form-control' placeholder='photo Url'/>
               </div>
               <div className='mb-2'>
                 <input  type='number' className='form-control' placeholder='Mobile'/>
               </div>
               <div className='mb-2'>
                 <input  type='email' className='form-control' placeholder='Email'/>
               </div>
               <div className='mb-2'>
                 <input  type='text' className='form-control' placeholder='Company'/>
               </div>
               <div className='mb-2'>
                 <input  type='text' className='form-control' placeholder='Title'/>
               </div>
               <div className='mb-2'>
                 <select className='form-control'>
                   <option value=""> Select a Group</option>
                 </select>
               </div>
               <div className='mb-2'>
                 <input  type='submit' className='btn btn-success' value='Update'/>
                 <Link to={'/contacts/list'} className='btn btn-danger ms-2'>Cancel</Link>
               </div>

             </form>
           </div>
           <div className='col-md-6'>
            <img src='https://cdn-icons-png.flaticon.com/512/747/747376.png' alt='' className='img-fluid contact-img'/>
           </div>
         </div>
       </div>
      </section>
   </React.Fragment>
    )
};

export default EditContact;