import React, { Component } from 'react';
import allstar from '../img/allstar.png';

class Nails extends Component {
    render() {
        return(
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <p className="date-l mb-0">28/07</p>
                <div className="d-flex flex-column justify-content-between">
                    <img src= {allstar} alt="All Star 👟 " className="img-fluid"/>
                    <h3 className="text-uppercase">eos no <br/> 
                        liber <br/>
                        iudicabit
                    </h3>
                </div>
            </div>
        )
    }
}

export default Nails;