import React from 'react';
import './App.css';
import { 
    Route,
    BrowserRouter as Router 
} from "react-router-dom";

// Import Components
import Therapy from './2093/Therapy';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';


class App extends React.Component {
    render() {
        return (
            <Router>
                <section>
                    <header>
                        <Header />
                    </header>

                    <main className="wrapper-container">
                        <Route exact={true} path="/" component={ Therapy } />
                    </main>

                    <footer className="my-5">
                        <Footer />
                    </footer>
                </section>
            </Router>
        );
    }
}

export default App;
