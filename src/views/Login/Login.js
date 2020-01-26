import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <section id={"Login"} className="flex-centered view">
                <div className="login-area card flex-column">
                    <input type="text" className="text-input" placeholder={"Username"}/>
                    <input type="password" className="text-input" placeholder={"Password"}/>
                    <button className={"btn primary-btn"}>Sign In</button>
                    <button className={"btn primary-btn"}>Sign up</button>


                        {/*/!*<label>*!/LOGIN<br/>*/}
                        {/*User-Id: <input type="text" name="name" /><br/>*/}
                        {/*Password:<input type="Password" name ="password"/><br/>*/}
                        {/*    <button className={"btn primary-btn"} >Sign In</button>*/}
                        {/*    <button className={"btn primary-btn"}>Log in </button>*/}

                        {/*</label>*/}
                        {/*<input type="submit" value="Submit" />*/}

                </div>
            </section>
        );
    }
}

export default Login;