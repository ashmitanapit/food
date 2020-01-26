import React, {Component} from 'react';
import banner from '../../assets/images/banner.webp';
import './Home.css';
import burger from '../../assets/images/Pages/burger.jpg'
import pizza from '../../assets/images/Pages/pizza.jpg'
import momo from "../../assets/images/Pages/momo.jpg"
import RecipeBox from "../../component/RecipeBox/RecipeBox";
import categories from "../../utils/categories";
import foods from "../../utils/foods";

class Home extends Component {
    state = {
        filteredFoodItems: []
    };

    componentDidMount() {
        this.setState({
            filteredFoodItems: [...foods]
        })
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
                    {/*<div className="recipe-list">*/}
                    {/*    <div className="search-bar">*/}
                    {/*        <div className="search-box">*/}
                    {/*            <input type="text" placeholder={'Search'}/>*/}
                    {/*            <i className="material-icons">search</i>*/}
                    {/*        </div>*/}
                    {/*        <div className="sort-by">*/}
                    {/*            Sort by : newest*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
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
                {/*</div>*/}
            </section>
        );
    }
}

export default Home;