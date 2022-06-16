import React, { Component } from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default class Footer extends Component{
  render(){

    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <section className="" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                <br></br>
                <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto text-center">
                    <h6 className="mb-4">
                        <img src="../../dormfinder_logo.svg" alt="..." height="60"></img>
                        <p>Developed by Francis Quianzon</p>
                    </h6>
                        <a href='/about' className="">About Us</a>
                    </div>
                </div>

                </div>
            </section>

            <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                2022 DormFinder.All Rights Reserved
            </div>

            </footer>

  );
  }
}