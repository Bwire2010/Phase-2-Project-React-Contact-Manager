import React, { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ContactService} from '../../../Services/ContactService';

let AddContact = () => {

  let [state, setState] = useState({
    loading: false,
    contact: {
        name: '',
        photo: '',
        mobile: '',
        email: '', 
        company: '',
        title: '',
        groupId: ''
    },
    groups: [],
    errorMessage: ''
  });

  let updateInput = (event) => {
      setState({
        ...state,
        contact: {
          ...state.contact,
          [event.target.name] : event.target.value
        }
      });
  };

  useEffect (() => {
    (async function () {
      try{
        setState({...state, loading: true});
        let response = await ContactService.getGroups();
        setState({
              ...state,
              loading: false,
              groups: response.data
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
  }, []);

 let{loading, contact, groups , errorMessage} = state;

    return (
        <React.Fragment>
           <section className='add-contact p-3'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <p className='h4 text-dark fw-bold'> Create Contact</p>
                  < p className='fst-italic'> Enter the contact name, email, and phone number.</p>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4'>
                  <form>
                    <div className='mb-2'>
                      <input  
                        required={true}
                        name='name'
                        value={contact.name}
                        onChange ={updateInput}
                        type='text' className='form-control' placeholder='Name'/>
                    </div>
                    <div className='mb-2'>
                      <input  
                        required={true}
                        name='photo'
                        value={contact.photo}
                        onChange ={updateInput}
                        type='text' className='form-control' placeholder='photo Url'/>
                    </div>
                    <div className='mb-2'>
                      <input 
                          required={true}
                          name='mobile'
                          value={contact.mobile}
                          onChange ={updateInput}
                         type='number' className='form-control' placeholder='Mobile'/>
                    </div>
                    <div className='mb-2'>
                      <input  
                        required={true}
                        name='email'
                        value={contact.email}
                        onChange ={updateInput}
                        type='email' className='form-control' placeholder='Email'/>
                    </div>
                    <div className='mb-2'>
                      <input  
                        required={true}
                        name='company'
                        value={contact.company}
                        onChange ={updateInput}
                        type='text' className='form-control' placeholder='Company'/>
                    </div>
                    <div className='mb-2'>
                      <input  
                        required={true}
                        name='title'
                        value={contact.title}
                        onChange ={updateInput}
                        type='text' className='form-control' placeholder='Title'/>
                    </div>
                    <div className='mb-2'>
                      <select 
                        required={true}
                        name='groupId'
                        value={contact.groupId}
                        onChange ={updateInput}
                        className='form-control'>
                        <option value=""> Select a Group</option>
                        {
                          groups.length > 0 &&
                          groups.map(group => {
                            return(
                              <option key={group.id} value={group.id}>{group.name}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className='mb-2'>
                      <input  type='submit' className='btn btn-dark' value='create'/>
                      <Link to={'/contacts/list'} className='btn btn-danger ms-2'>Cancel</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
           </section>
        </React.Fragment>
    )
};

export default AddContact;