import React,{useEffect,useState} from 'react'; 
import Recipe from './Recipe'
import './App.css';

const App=()=> {

  const APP_ID=process.env.ID;
  const APP_KEY=process.env.KEY;
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState("");

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes=async()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }
  
  return (
    <div className="App">
      <form className="search-form" onSubmit={(e)=>{
        e.preventDefault();
        setQuery(search);
        setSearch("");
      }}>
        <input className="search-bar" type="text" name="searchbox" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button className="search-button" >
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
