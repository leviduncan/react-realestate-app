import React from 'react'; 

const Recipe = ({title,calories,image,info,ingredients}) => {
    return (
        <div className="recipe-info">
            <div className="food-img">
                <img src={image} alt={title} />
            </div>
            <div className="txt">
                <h1>{title}</h1>
                <p><strong>Calories: </strong>{calories}</p>
                <h3>{info}</h3>
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
            </div>   
        </div>
    );
};

export default Recipe;