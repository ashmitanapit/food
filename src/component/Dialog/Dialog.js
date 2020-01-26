import React, {Component} from 'react';
import './Dialog.css'

class Dialog extends Component {
    state = {
        name: '',
        address: '',
        contact: '',
        error: true
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    submitForm=(e)=>{
        e.preventDefault();
        const { name, address, contact } = this.state;
        
        if ( name === '' || address === '' || contact === '') {
            this.setState({error: true})
        }
    };
    render() {
        return (
            <div className={'modal'}>
                <div className="modal-box">
                    <div className="form-area">
                        <h1>Do you want to place your order?</h1>
                        <form >
                            <label  >Name:</label>
                            <input type="text-area" id="name" value={this.state.name} name="name" placeholder="Enter name.." required={true} onChange={this.handleChange}/><br/>
                            <label  >Address:</label>
                            <input type="text-area" id="address" value={this.state.address} name="address" placeholder="Delivery location" onChange={this.handleChange}/><br/>
                            <label  >Contact:</label>
                            <input type="number" id="contact" value={this.state.contact} name="contact" placeholder="your contact"  maxlength="10" onChange={this.handleChange}/><br/>
                            { this.state.error ? <p>Please enter all the valid fields.</p> : <p>done!</p>}
                            <button onClick={this.submitForm} className={'btn primary-btn'}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;