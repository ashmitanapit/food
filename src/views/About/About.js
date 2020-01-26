import React, {Component} from 'react';
import './About.css';
import picture from '../../picture.jpeg';


class About extends Component {
    render() {
        return (
            <section className={'about'}>
            <img src ={picture} alt ="TABLE"/>

                <div className="About">
                <p>
                    Foodies is a norm for restaurants which offer takeout and delivery orders.
                    It allows the customer to choose from various categories.
                    And payment can be done through cash on delivery.
                    A customer can choose to have the food delivered or for pick-up.
                    </p>
                    <p4>
                    We know that your time is valuable and sometimes every minute in the day counts.
                    That’s why we deliver! So you can spend more time doing the things you love.
                </p4>
                </div>
            </section>
        );
    }
}

export default About;