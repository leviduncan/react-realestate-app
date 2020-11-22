import React,{useEffect, useState} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Filtered from './Filtered';
import Results from './Results';
import './App.css';
import '../src/bootstrap/css/bootstrap.min.css';
import '../src/fonts/simple-line-icons.min.css';

const App = () => {

  // const APP_ID = 'c019aa98';
  const APP_KEY = '5b154f89b5msha8786097e4e3804p1df7b1jsna8ec570e4922';

  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Philadelphia");
  const [qstate, setQstate] = useState("PA");

  useEffect(() => {
    getProperties();
  }, [query,qstate]);

  const getProperties = async () => {
    //const response = await fetch(`https://realtor.p.rapidapi.com/properties/v2/list-for-sale?q=${query}&rapidapi-key=${APP_KEY}`);
    const response = await fetch(`https://realtor.p.rapidapi.com/properties/list-for-sale?sort=relevance&city=${query}&offset=0&limit=200&state_code=${qstate}&rapidapi-key=${APP_KEY}`)
    const data = await response.json();
    setProperties(data.listings);
    console.log(data.listings);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setQstate(qstate);
    setSearch("");
  }

  return(
    
    <div className="App">
      <main className="page landing-page">
        <Nav />
        <section className="clean-block clean-hero hero">
          <div className="text">
            <h2><strong>
              Serving Allentown, Bethlehem, Easton and Other Pennsylvania Communities</strong></h2>
            <form onSubmit={getSearch} className="search-form">
              <input type="text" className="" value={search} onChange={updateSearch}/>
              <select name="state" id="state">
                <option value="" selected="selected">Select a State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
</select><a href="#results"><button className="btn btn-primary btn-lg">Search</button></a>
              
            </form>
          </div>
        </section>
        {/* <Filtered/> */}
        <section className="clean-block about-us">
        <a id="results"></a>
        <div className="container">
          <div className="block-heading">
  <h2 className="text-info"><strong>{query} Properties</strong></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis
              vitae leo.</p>
          </div>
          <div className="row justify-content-center">
            
            {properties.map(property => ( 
        
        <Results
          price= {property.price}
          photo= {property.photo}
          address = {property.address_new.line} 
          city={property.address_new.city} 
          stateCode={property.address_new.state_code} 
          zip={property.address_new.postal_code}
          beds={property.beds} 
          baths={property.baths} 
          sqft={property.sqft_raw}
          type={property.prop_type} 
          status={property.prop_status}
          office={property.office_name}
        />
      
    ))}

          </div>
        </div>
      </section>
        
        {/* <Results/> */}
      </main>
      <Footer />
     {/*  <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="top-spacer"></div>
     <div className="recipe-container">
      {properties.map(property => ( 
        
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={Math.floor(recipe.recipe.calories)}
          image={recipe.recipe.image}
          info={recipe.recipe.healthLabel}
          ingredients={recipe.recipe.ingredients}

          />
        
      ))}
      </div> */}
      
    </div>
    
  )
}

export default App;

