import React from "react";
import {Link} from 'react-router-dom';

let ContactList = () => {
  return (
    <React.Fragment>
      <section className="contact-search p-3">
        <div className="container">
            <div className="grid">
              <div className="row">
                <div className="col">
                    <p className="h3">Contact Manager
                      <Link to={'/contacts/add'} className='btn btn-primary ms-2'>
                        <i className="fa fa-plus-circle me-2"/>
                        New</Link>
                    </p>
                    <p className='fst-italic'> In the search bar, enter the contact name, initials, phone number, or email address. The results will be displayed below. You can also enter multiple keywords for your search, such as "John London", and the system will quickly find all matching contacts. </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <form>
                      <div className="mb-2">
                        <input type="text" className="form-control" placeholder="Search Names"/>
                      </div>
                      <div className="mb-2">
                      <input type="Submit" className="btn btn-outline-dark" value="Search"/>
                      </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactList;
