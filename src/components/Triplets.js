import React, { Component } from 'react';
import mei from '../img/mei.png';
import cibo from '../img/cibo.png';
import eum from '../img/eum.png';

class Triplets extends Component {
    render() {
        return(
            <div>
                <div className="text-center">
                    <span className="text-uppercase font-weight-bold">vitae</span> &nbsp; &nbsp;
                    <i className="fas fa-circle"></i> &nbsp; &nbsp;
                    <span className="text-uppercase font-weight-bold">audiam</span> &nbsp; &nbsp;
                    <i className="fas fa-circle"></i> &nbsp; &nbsp;
                    <span className="text-uppercase font-weight-bold">dican</span> &nbsp; &nbsp;
                    <i className="fas fa-circle"></i> &nbsp; &nbsp;
                    <span className="text-uppercase font-weight-bold">inermis</span>

                    <p className="my-4 description">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                    </p>
                </div>

                <div className="d-flex justify-content-between align-items-center flex-wrap salade">

                    <div className="salade col-lg-4 col-md-4 col-sm-12 col-12">
                        <img src = { mei } alt="Young Boy 👦" className="img-fluid"/>
                        <h5 className="centered font-weight-bold text-uppercase">mei</h5>
                    </div>

                    <div className="salade col-lg-4 col-md-4 col-sm-12 col-12 my-3 my-sm-3">
                        <img src = { cibo } alt="Young Girl 👧" className="img-fluid"/>
                        <h5 className="centered font-weight-bold text-uppercase">cibo</h5>
                    </div>

                    <div className="salade col-lg-4 col-md-4 col-sm-12 col-12">
                        <img src = { eum } alt="Young Boy 👦" className="img-fluid"/>
                        <h5 className="centered font-weight-bold text-uppercase">eum</h5>
                    </div>

                </div>
            </div>
        )
    }
}

export default Triplets;