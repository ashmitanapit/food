import React from 'react';
import item from '../../utils/foods';
import DialogTest  from "../../component/Dialog/DialogTest";

class FooditemsTest extends React.Component{
    state = {
        name: '',
        address: '',
        contact: '',
        item: {},
        showDialog: false
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        let itemGot = item.filter(item => item.id === id);
        this.setState({
            item: item[id-1]
        });
    }

    handleChange = () => {

    }

    toggleShowDialog = () => {
        this.setState({
            showDialog: !this.state.showDialog
        })
    }

    render () {
        return (
            <div className="foot-item">
                <div className="image-area"><img src={this.state.item.image} alt=""/></div>
                <div className="description-area">
                    <div className="title">{this.state.item.title}</div>
                    <div className="description">{this.state.item.description}</div>
                    <div className="price">Rs {this.state.item.price}</div>
                    <input type="number" placeholder={'Enter quantity'}/>
                    <button onClick={this.toggleShowDialog}>Order</button>
                </div>
                {this.state.showDialog ? <DialogTest toggleShowDialog={this.toggleShowDialog}/>:<p></p>}
            </div>
        );
    }

}

export default FooditemsTest;