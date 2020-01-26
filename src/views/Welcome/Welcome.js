import React, {Component} from 'react';
import './Welcome.css'
import {Link} from "react-router-dom";

class Welcome extends Component {
    render() {
        return (
            <main>
                <section className="welcome content">
                    <div className="title">
                        Explore the new taste
                    </div>
                    <div className="sub-title">
                        Get your comfort food at your doorstep
                    </div>
                    <Link to={'explore'}>
                        <button>Explore</button>
                    </Link>
                </section>
            </main>
        );
    }
}

export default Welcome;