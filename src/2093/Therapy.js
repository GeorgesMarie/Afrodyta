import React from 'react';

// Import Components
import Nails from '../components/Nails';
import Sunset from '../components/Sunset';
import Sign from '../components/Sign';
import Triplets from '../components/Triplets';
import Sublime from '../components/Sublime';

// Import Images
import journey from '../img/journey.png';



class Therapy extends React.Component {
    render() {
      return (
          <section>
              <div className="top-background d-flex justify-content-center align-items-center">
                <h1 className="text-uppercase text-center text-white ">
                    free <br/>
                    template
                </h1>
              </div>

              <section className="my-5">
                <p className="date text-right mb-0">07/08</p>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h3 className="text-uppercase">hinc nobis <br/>
                            duo ut
                        </h3>
                        <p className="description">Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        </p>
                        <a href="/" className="read-more">read more...</a>
                    </div>

                    <div className="position-relative col-lg-6 col-md-6 col-sm-12 col-12">
                        <span className="line"></span>
                        <img src = {journey} alt="Journey 🌞" className="img-fluid"/>
                    </div>
                </div>
              </section>
            
            <section>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <Nails />
                    <Sunset />
                </div>

                <div id="sign">
                    <Sign />
                </div>
            </section>

            <section>
                <Triplets />
                <Sublime />
            </section>

          </section>
      )
    }
  }

  export default Therapy;