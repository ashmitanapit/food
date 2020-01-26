import React, {Component} from 'react';
import './About.css';
import picture from '../../picture.jpeg';


class About extends Component {
    render() {
        return (
            <section className={'about'}>
                <div className="picture">
                    <img src={picture} alt ="Table" height={2000} width={2000}/>
                </div>

                <div className="info">
                <p id="abc">
                    Foodies is a norm for restaurants which offer takeout and delivery orders.
                    It allows the customer to choose from various categories.
                    And payment can be done through cash on delivery.
                    A customer can choose to have the food delivered or for pick-up.
                    </p>
                    <p id='cd'>
                    We know that your time is valuable and sometimes every minute in the day counts.
                    That’s why we deliver! So you can spend more time doing the things you love.
                </p>
                </div>
            </section>
        );
    }
}

export default About;