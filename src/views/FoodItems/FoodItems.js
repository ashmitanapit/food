import React, {Component} from 'react';
import item from '../../utils/foods';
import Dialog from "../../component/Dialog/Dialog";
import './FoodItems.css'


class FoodItems extends Component {
    state = {
        item: {},
        isOpen: false
    };

    componentDidMount() {
        let id = this.props.match.params.id;
        let itemGot = item.filter(item => item.id == id);
        this.setState({
            item: item[id-1]
        })
    }

    modalToggleHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return (

            <div className="FoodItems">
                <div className={"foodie"}>
                <div className="image-area">
                    <img src={this.state.item.image} alt=""/>
                </div>
                <div className="description-area">
                    <div className="title">{this.state.item.title}</div>
                    <div className="description">{this.state.item.description}</div>
                    <div className="price">Price : Rs {this.state.item.price}</div>
                    <input type="number" placeholder={'Enter quantity'}/>
                    <button onClick={this.modalToggleHandler}>Order</button>
                </div>
                {this.state.isOpen ?<Dialog modalToggle={this.modalToggleHandler}/> : ''}

            </div>
            </div>
        );
    }
}

export default FoodItems;