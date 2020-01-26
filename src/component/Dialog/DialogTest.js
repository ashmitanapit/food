import React from 'react';
import './Dialog.css';


class DialogTest extends React.Component {
	state = {
		name:'',
		address: '',
		contact: '',
		valid: false,
		displayValid: false,
	}

	handleChange = (e) => {
		this.setState ( {
			[e.target.name]: [e.target.value]
		})
	}

	validate = (event) => {
		event.preventDefault();

		this.setState({ displayValid: true})

		const { name, address, contact } = this.state;

		if ( name === '' || address === '' || contact === '') {
			this.setState({ valid: false});
		} else {
			this.setState({ valid: true});
		}
	}


	render () {
		return (
			<div className = "modal">
				<div className = "modal-box">
					<div className = "form-area">
						{ this.state.displayValid ? (
							this.state.valid ? <p>Ready to be delivered</p> : <p>       Invalid</p>
						) : <p></p> }
						<h1>Do you want to place your order</h1>
						<form>
							<label  >Name:</label>
		                   	<input type="text-area" id="name" value={this.state.name} name="name" placeholder="Enter name.." required={true} onChange={this.handleChange}/><br/>
		                   	<label  >Address:</label>
		                   	<input type="text-area" id="address" value={this.state.address} name="address" placeholder="Delivery location" onChange={this.handleChange}/><br/>
		                   	<label  >Contact:</label>
		                   	<input type="number" id="contact" value={this.state.contact} name="contact" placeholder="your contact"  maxlength="10" onChange={this.handleChange}/><br/>
		   					<input type="submit" onClick = {this.validate}/>                	

						</form>
						<button onClick={() => this.props.toggleShowDialog()}>Close</button>
					</div>
				</div>
			</div>
		);
	}
} 

export default DialogTest;