import React from 'react';
import './RecipeBox.css'
import {Link} from "react-router-dom";

const RecipeBox = (props) => (
    <Link to={`/item/${props.item.id}`} className="recipe-box">
        <img src={props.item.image} alt=""/>
        <div className="recipe-title">{props.item.title}</div>
        <div className="recipe-secondary-details">
            <div className="author-name">Rs. {props.item.price}</div>
        </div>
    </Link>
);

export default RecipeBox;