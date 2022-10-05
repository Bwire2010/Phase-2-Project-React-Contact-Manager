import React from 'react';
import {Link} from 'react-router-dom';

let ViewContact = () => {
    return (
        <React.Fragment>
          <section className='view-contact-intro p-3'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <p className='h3 text-success fw-bold'>View Contact</p>
                  <p className='fst-italic'> Contacts details of a specific person.</p>
                </div>
              </div>
            </div>
          </section>
          <section className='view-contact mt-3'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-md-4'>
                <img src='https://cdn-icons-png.flaticon.com/512/747/747376.png' alt='' className='contact-img'/>
                </div>
                <div className='col-md-8'>
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-action">
                      Name : <span className="fw-bold">Patrobas Bwire</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Mobile : <span className="fw-bold">0712290167</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Email : <span className="fw-bold">patrobasbwire@gmail.com</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Company : <span className="fw-bold">Fiverr</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Title : <span className="fw-bold">Software Engineer</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Group : <span className="fw-bold">Junior</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <Link to={'/contacts/list'} className='btn btn-warning'>Back</Link> 
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
    )
};

export default ViewContact;