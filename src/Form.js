import React from 'react'

const Form=(props)=> {
    return (
        <form className="search-form" onSubmit={props.getRecipes}>
          <input className="search-bar" type="text" name="search"/>
          <button className="search-button" >Search</button>
        </form>
    )
}

export default Form

