import React, { useState , useEffect} from 'react';
import {Link, useParams , useNavigate} from 'react-router-dom';
import {ContactService} from '../../../Services/ContactService';
import Spinner from "../../Spinner/Spinner";

let EditContact = () => {

  let navigate = useNavigate();

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
        let groupResponse = await ContactService.getGroups();
        console.log(response.data)
        setState({
              ...state,
              loading: false,
              contact: response.data,
              groups: groupResponse.data
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

  let upDateInput = (event) => {
    setState ({
      ...state, 
      contact:{
        ...state.contact,
        [event.target.name] : event.target.value
      }
    });
  };

  let submitForm = async (event) => {
      event.preventDefault();
      try {
        let response = await ContactService.updateContact(state.contact, contactId);
        if(response) {
          navigate('/contacts/list', {replace: false});
        }
      }
      catch (error) {
        setState({...state, errorMessage: error.message});
        navigate(`/contacts/edit/${contactId}`, {replace: false})
        
      }
  };

  let {loading , contact , groups , errorMessage} = state;


    return (
      <React.Fragment>
        {
          loading ? <spinner/> : <React.Fragment>
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
             <form onSubmit={submitForm}>
               <div className='mb-2'>
                 <input  
                  required ="true"
                  name = 'name'
                  value={contact.name}
                  onChange={upDateInput}
                  type='text' className='form-control' placeholder='Name'/>
               </div>
               <div className='mb-2'>
                 <input  
                  required ="true"
                  name = 'photo'
                  value={contact.photo}
                  onChange={upDateInput}
                  type='text' className='form-control' placeholder='photo Url'/>
               </div>
               <div className='mb-2'>
                 <input 
                  required ="true"
                  name = 'mobile'
                  value={contact.mobile}
                  onChange={upDateInput}
                  type='number' className='form-control' placeholder='Mobile'/>
               </div>
               <div className='mb-2'>
                 <input 
                  required ="true"
                  name = 'email'
                  value={contact.email}
                  onChange={upDateInput}
                  type='email' className='form-control' placeholder='Email'/>
               </div>
               <div className='mb-2'>
                 <input 
                  required ="true"
                  name = 'company'
                  value={contact.company}
                  onChange={upDateInput}
                  type='text' className='form-control' placeholder='Company'/>
               </div>
               <div className='mb-2'>
                 <input  
                  required ="true"
                  name = 'title'
                  value={contact.title}
                  onChange={upDateInput}
                  type='text' className='form-control' placeholder='Title'/>
               </div>
               <div className='mb-2'>
                 <select 
                  required ="true"
                  name = 'groupId'
                  value={contact.groupId}
                  onChange={upDateInput}
                  className='form-control'>
                   <option value=""> Select a Group</option>
                   {
                    groups.length > 0 &&
                    groups.map(group => {
                      return (
                        <option key={group.id} value={group.id}>{group.name}</option>
                      )
                    })
                   }
                 </select>
               </div>
               <div className='mb-2'>
                 <input  type='submit' className='btn btn-success' value='Update'/>
                 <Link to={'/contacts/list'} className='btn btn-danger ms-2'>Cancel</Link>
               </div>

             </form>
           </div>
           <div className='col-md-6'>
            <img src={contact.photo} alt='' className='img-fluid contact-img'/>
           </div>
         </div>
       </div>
      </section>
            </React.Fragment>
        }
   </React.Fragment>
    )
};

export default EditContact;