import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import {ContactService} from '../../../Services/ContactService';
import Spinner from "../../Spinner/Spinner";

let ContactList = () => {

  let [state, setState] =useState({
    loading : false,
    contacts : [],
    errorMessage : ''
  });

  useEffect (() => {
    (async function () {
      try{
        setState({...state, loading: true});
        let response = await ContactService.getAllContacts();
        setState({
              ...state,
              loading: false,
              contacts: response.data
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

  let {loading ,contacts , errorMessage} = state;

  return (
    <React.Fragment>
      <section className="contact-search p-3">
        <div className="container">
            <div className="grid">
              <div className="row">
                <div className="col">
                    <p className="h3 fw-bold">Contact Manager
                      <Link to={'/contacts/add'} className='btn btn-success ms-2'>
                        <i className="fa fa-plus-circle me-2"/>
                        New</Link>
                    </p>
                    <p className='fst-italic'> In the search bar, enter the contact name, initials, phone number, or email address. The results will be displayed below. You can also enter multiple keywords for your search, such as "John London", and the system will quickly find all matching contacts. </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <form className="row">
                    <div className="col">
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Search Names"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-2">
                            <input type="Submit" className="btn btn-outline-dark" value="Search"/>
                        </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </section>

      {
          loading ? <Spinner /> : <React.Fragment>
      <section className="contact-list">
        <div className="container">
            <div className="row">
              {
                contacts.length > 0 &&
                contacts.map(contact => {
                  return(
                  <div className="col-md-6" key={contact.id}>
                    <div className="card my-2">
                      <div className="card-body">
                        <div className="row align-items-center d-flex justify-content-around">
                          <div className="col-md-4">
                            <img src={contact.photo} alt="" className="contact-img"/>
                          </div>
                          <div className="col-md-7">
                            <ul className="list-group">
                              <li className="list-group-item list-group-item-action">
                                Name : <span className="fw-bold">{contact.name}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                Mobile : <span className="fw-bold">{contact.mobile}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                Email : <span className="fw-bold">{contact.email}</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-1 d-flex flex-column align-items-center">
                            <Link to= {`/contacts/view/${contact.id}`}className="btn btn-warning my-1">
                              <i className="fa fa-eye"/>
                            </Link>
                            <Link to= {`/contacts/edit/${contact.id}`}className="btn btn-success my-1">
                              <i className="fa fa-pen"/>
                            </Link>
                            <button className="btn btn-danger my-1">
                              <i className="fa fa-trash"/>
                            </button>
                          </div>
                        </div>         
                      </div>
                    </div>
                  </div>
                  )
                })
              }
             
            </div>
        </div>
      </section>
            </React.Fragment>
      }

   
    </React.Fragment>
  );
};

export default ContactList;
