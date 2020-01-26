import React, {Component} from 'react';
import Logo from "../../component/Logo/Logo";
import {Link, NavLink} from 'react-router-dom';
import './TopNav.css'


class Topnav extends Component {
    state={
        navitems:[
            {link:'/explore', label:'Explore' },
            {link:'/about', label:'About' },
            // {link:'/fooditems', label:'FoodItems' },
            {link:'/contacts', label:'Contacts' },
            // {link:'/Login', label:'Login' },
        ]
    }
    render() {
        return (
            <nav>
                <Logo/>
                <div className="nav-items flex-between">
                    {this.state.navitems.map(item=>(
                        <NavItem link={item.link} label={item.label}/>
                    ))}
                </div>
            </nav>
        );
    }
}

const NavItem= (props)=>(<div className={'nav-item'}><NavLink activeClassName={'active'} to={props.link}>{props.label}</NavLink></div>)
export default Topnav;