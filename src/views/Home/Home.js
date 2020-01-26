import React, {Component} from 'react';
import banner from '../../assets/images/banner.webp';
import './Home.css';
import Search from "../../views/Home/Search";
import RecipeBox from "../../component/RecipeBox/RecipeBox";
import categories from "../../utils/categories";
import foods from "../../utils/foods";
import {Route, Switch} from 'react-router-dom';

class Home extends Component {
    state = {
        filteredFoodItems: []
    };

    componentDidMount() {
        this.setState({
            filteredFoodItems: [...foods]
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.query != this.props.match.params.query ){
            if(this.props.match.params.query){
                const searchTxt = this.props.match.params.query
                const searchFoodsItems = this.state.filteredFoodItems.filter(food => {

                    return food.title.toLowerCase() == searchTxt.toLowerCase()
                })
                this.setState({
                    filteredFoodItems: searchFoodsItems
                })
            }else{
             this.setState({
                        filteredFoodItems: [...foods]
                    })
            }
        }
    }

    selectCategoryHandler = (cat) => {
        const itemsSelected = foods.filter(food => food.category === cat);
        console.log(cat);
        console.log(itemsSelected);
        this.setState({
            filteredFoodItems: itemsSelected
        })
    };

    render() {

        return (
            <section className={'home'}>
                <div className="banner">
                    <img src={banner} alt=""/>
                </div>
                <div className="recipe-area">
                    <div className="recipe-side-bar">
                        <div className="recipe-bar-title">Categories</div>
                        {categories.map(type => (
                            <div className='recipe-side-bar-item'
                                 onClick={() => this.selectCategoryHandler(type.name)}>{type.name}</div>
                        ))}
                    </div>
                    <div className="recipe-list">
                        <div className="search-bar">
                            <div className="search-box">


                                <Search>
                                    >

                                    <Route path="/does-not-match"
                                           children={({ item }) => (
                                               // item === null
                                               <Route
                                                   render={({ match: pathlessMatch }) =>
                                                       (
                                                           pathlessMatch === categories
                                                       )}
                                               />
                                           )}
                                    />
                                </Search>

                                {/*<input type="text" placeholder={'Search'}/>*/}

                            </div>

                        </div>
                        <div className="recipe-items">
                            {this.state.filteredFoodItems.length == 0 ?( <h1>The category does not have items yet</h1> ):
                                (
                                    this.state.filteredFoodItems.map(item => (
                                        <RecipeBox item={item}/>
                                    ))
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;