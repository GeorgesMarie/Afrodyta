import React, { Component } from 'react';
import sunset from '../img/sunset.png';

class Sunset extends Component {
    render() {
        return(
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <h6 className="text-uppercase text-right">ea eum cibot<br/>
                <span>graece</span></h6>

                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut 
                    perspiciatis unde omnis iste natus error sit voluptatem accusantium
                </p>

                <a href="/" className="read-more">read more...</a>
                <p className="date text-right mb-0">15/07</p>
                <img src= {sunset} alt="Sunset 👚" className="img-fluid"/>
            </div>
        )
    }
}

export default Sunset;