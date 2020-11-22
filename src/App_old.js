// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import '../src/bootstrap/css/bootstrap.min.css';
import '../src/fonts/simple-line-icons.min.css';

const App = () => {

  const APP_ID = 'c019aa98';
  const APP_KEY = '4b7b1ced1e8cd6539b5242ed038fc98c';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    
    <div className="App">
      <Nav />
      <Main />
      <Footer />
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="top-spacer"></div>
     <div className="recipe-container">
      {recipes.map(recipe => ( 
        
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={Math.floor(recipe.recipe.calories)}
          image={recipe.recipe.image}
          info={recipe.recipe.healthLabel}
          ingredients={recipe.recipe.ingredients}

          />
        
      ))}
      </div>
      
    </div>
    
  )
}

export default App;

