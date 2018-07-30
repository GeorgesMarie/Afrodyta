import React, { Component } from 'react';

class Sign extends Component {
    render() {
        return(
            <div className="sign d-flex justify-content-center align-items-center flex-column my-5">
                <h5 className="text-uppercase">sign up for newsletter</h5>
                <button type="button" className="sign-btn text-uppercase">sign up</button>
            </div>
        )
    }
}

export default Sign;