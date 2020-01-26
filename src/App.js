import React, {Component} from 'react';
import Logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Topnav from "./containers/Topnav/Topnav";
// import Login from "./views/Login/Login";
import './assets/css/variables.css'
import './assets/css/theme.css';
import './assets/css/page.css';
import Home from './views/Home/Home';
import FoodItems from "./views/FoodItems/FoodItems";
import About from "./views/About/About";
import Contacts from "./views/Contacts/Contacts";
import Welcome from "./views/Welcome/Welcome";
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meal: ""
        }
    }
    // componentDidMount() {
    //     const URL = 'https://developers.zomato.com/api/v2.1/cuisines';
    //     axios.get(URL)
    //         .then(res => {
    //             const meal = res.data.meals; //Taking just the required data
    //             if (typeof meal === 'object') {
    //                 this.setState({meal});// setting it to state of our app
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }



    render() {
        let data = this.state.meal;
        return (
            <main>
                <div className="App">
                    {data.length > 0 && <Home meals={data} />}
                </div>
                <Topnav/>
                    <Switch>
                        <Route exact path="/" component={Welcome}/>
                        <Route exact path="/explore/" component={Home}/>
                        <Route exact path="/search/:query" component={Home}/>
                        <Route exact path="/search/" component={Home}/>
                        {/*<Route exact path="/login/" component={Login}/>*/}
                        <Route exact path="/about/" component={About}/>
                        <Route exact path="/item/:id" component={FoodItems}/>
                        <Route exact path="/contacts/" component={Contacts}/>
                    </Switch>
            </main>
        );
    }
}
export default App;
