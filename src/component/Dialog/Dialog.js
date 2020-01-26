import React, {Component} from 'react';
import './Dialog.css'

class Dialog extends Component {

    submitForm=()=>{
        console.log('form has been submitted');
        this.props.modalToggle();
    };
    render() {
        return (
            <div className={'modal'}>
                <div className="modal-box">
                    <div className="form-area">
                        <h1>Do you want to place your order</h1>
                        <form>
                            <label  >Name:</label>
                            <input type="texr-area" id="name" name="name" placeholder="Enter name.."/><br/>
                            <label  >Address:</label>
                            <input type="text-area" id="address" name="adress" placeholder="Delivery location"/><br/>
                            <label  >Contact:</label>
                            <input type="number" id="contact" name="contact" placeholder="your contact"  maxlength="10"/><br/>
                        </form>

                    </div>
                    <div className="button-area">
                    <button onClick={this.submitForm} className={'btn primary-btn'}>Submit</button>
                    <button onClick={this.props.modalToggle}  className={'btn primary-btn-outline'}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;