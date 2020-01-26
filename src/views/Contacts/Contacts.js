import React, {Component} from 'react';
import './Contacts.css'
import contactus from "../../contactus.jpg";

class Contacts extends Component{
    render(){
        return (

            <div>

                    <div className="Contacts">
                        <h1 className="heading">  Please inform all your queries,complains or doubts!! </h1>
                    </div>
                <img src ={contactus} alt ="Contact" height={'80%'} width={'100%'}/>
                <section className={'contactss'}>
                    <div>
                        <form>
                        <table border="1" className='tbl' width={'150%'}>
                            <h1 style={{color:'blue'}}>Information:<br/></h1>
                        <label  >First Name</label>

                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/><br/>

                        <label>Last Name</label>

                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." /><br/>

                        <label>Email</label>

                        <input type="email" id="email" name="email" placeholder="Your email" /><br/>

                        <label>Message</label>

                        <textarea id="message" name="subject" placeholder="Write something.." rows ="3" cols="5"  ></textarea><br/>

                        <input type="submit" value="Submit" />

                        </table>
                    </form>
                    </div>
                <div>
                    <h3 id="phone">For further details:<br/></h3>
                    <h4>Contact no.:9813442278</h4>

                </div>


            </section>
            </div>
        );
    }
}

export default Contacts;