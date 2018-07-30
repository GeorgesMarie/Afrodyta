import React, { Component } from 'react';
import sublime from '../img/sublime.png';

class Sublime extends Component {
    render() {
        return(
            <div className="d-flex justify-content-between align-items-start flex-wrap mt-5">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <img src= { sublime } alt="Sublime Girl 😍" className="img-fluid" />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <h6 className="text-uppercase text-right">pri att mediocrem <br/>
                        <span>corrumpit</span>
                    </h6>

                    <p className="paragraph">Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae <br/>
                        ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt <br/>
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut <br/>
                        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione <br/>
                        voluptatem sequi nesciunt. 
                    </p>

                    <p className="paragraph">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, <br/>
                        consectetur, adipisci velit, sed quia non numquam eius modi tempora <br/>
                        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>

                    <a href="/" className="read-more">read more...</a>
                </div>
            </div>
        )
    }
}

export default Sublime;