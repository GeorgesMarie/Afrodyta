import React, { Component } from 'react';

// Import Images
import fb from '../img/socialmedia/fb.png';
import twitter from '../img/socialmedia/twitter.png';
import yt from '../img/socialmedia/yt.png';
import dribbble from '../img/socialmedia/dribbble.png';
import inst from '../img/socialmedia/inst.png';

class Footer extends Component {
    render() {
        return(
            <div className="text-center">
                <span className="text-uppercase font-weight-bold">about</span> &nbsp; &nbsp;
                <i className="fas fa-circle"></i> &nbsp; &nbsp;
                <span className="text-uppercase font-weight-bold">terms and conditions</span> &nbsp; &nbsp;
                <i className="fas fa-circle"></i> &nbsp; &nbsp;
                <span className="text-uppercase font-weight-bold">symu freebies</span> &nbsp; &nbsp;
                <i className="fas fa-circle"></i> &nbsp; &nbsp;
                <span className="text-uppercase font-weight-bold">contact us</span>

                <p className="my-4 description">This tempalte is free to use for personal or commercial projects, attribution is appreciated but not required.
                    If you have any additional questions that may not have been answered above, please don't hesitate to contact us at contact@symu.co
                </p>

                <a href="/" target="_blank">
                    <img src= { fb } alt="Facebook Icon 📱" className="m-2"/>
                </a>
                <a href="/" target="_blank">
                    <img src= { twitter } alt="Twitter Icon 📱" className="m-2"/>
                </a>
                <a href="/" target="_blank">
                    <img src= { yt } alt="Youtube Icon 📱" className="m-2"/>
                </a>
                <a href="/" target="_blank">
                    <img src= { dribbble } alt="Dribbble Icon 📱" className="m-2"/>
                </a>
                <a href="/" target="_blank">
                    <img src= { inst } alt="Instagram Icon 📱" className="m-2"/>
                </a>
            </div>
        )
    }
}

export default Footer;