import React, { Component } from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default class Footer extends Component{
  render(){

    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
            <span>Developed by Francis Quianzon</span>
            </div>

            <div>
            <a href='' className='me-4 text-reset'>
                <i className='fab fa-facebook-f'></i>
            </a>
            <a href='' className='me-4 text-reset'>
                <i className='fab fa-twitter'></i>
            </a>
            <a href='' className='me-4 text-reset'>
                <i className='fab fa-google'></i>
            </a>
            <a href='' className='me-4 text-reset'>
                <i className='fab fa-instagram'></i>
            </a>
            <a href='' className='me-4 text-reset'>
                <i className='fab fa-linkedin'></i>
            </a>
            <a href='' className='me-4 text-reset'>
                <i className='fab fa-github'></i>
            </a>
            </div>
        </section>

        </MDBFooter>
  );
  }
}