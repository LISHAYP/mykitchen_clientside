import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
const apiUrl = 'http://localhost:56309/api/post/recipe';
const apiUrlI = 'http://localhost:56309/api/Ingredient';

export default function RecipeForm() {

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [cookingMethod, setMethod] = useState('');
  const [time, setTime] = useState('');
  const [ingredients, setIngredients] = useState([]);


  const [ingredients1, setIngredients1] = useState([]);
  const [recipeList, setRecipeList] = useState('');
  const clearForm = () => {
    setName('');
    setImage('');
    setMethod('');
    setTime('');
  }
  const recipeNameHandler = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const cookingMethodHandler = (e) => {
    console.log(e.target.value);
    setMethod(e.target.value);
  };
  const cookingTimeHandler = (e) => {
    console.log(e.target.value);
    setTime(e.target.value);
  };
  const enteredURLHandler = (e) => {
    console.log(e.target.value);
    setImage(e.target.value);
  };

  const submitHandleInput = async (e) => {
    e.preventDefault();
    let recipeInfo = {
      name: name,
      image: image,
      cookingMethod: cookingMethod,
      time: time,
      ingredients: ingredients
    }
    if (name === '' || image === '' || cookingMethod === '' || time === '') {
      alert("missing some values, please fill the entire form.");
    }
    else {
      setRecipeList({ ...recipeList, recipeInfo });
      console.log(recipeInfo)

      const r = {
        name: name,
        image: image,
        cookingMethod: cookingMethod,
        time: time,
        ingredients: ingredients
      };

      try {
        let res = await fetch(apiUrl, {
          method: 'POST',
          body: JSON.stringify(r),
          headers: new Headers({
            'Content-type': 'application/json'
          })
        })
        let data = await res.json();
      console.log('data', data)
      } catch (error) {
        console.error(error);
      }

    alert("recipe was added! :) ")

    }

  };
  useEffect(() => {
    btnGetAll();
  }, []);

  const btnGetAll = () => {
    fetch(apiUrlI, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json; charset=UTF-8',
        'Content-Type': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        return res.json()
      })
      .then(
        (result) => {
          setIngredients1(result)
        },
        (error) => {
          console.log("err post=", error);
        });
  }
  const markAsIng = (e) => {
    setIngredients(ingredients => [...ingredients, ingredients1[e]])
  }
  return (
    <>
      <Form className='ingForm' onSubmit={submitHandleInput} onReset={clearForm} >
        <h1>New recipe</h1><br />
        <span className='headers'>Name</span>
        <br />
        <input className='ingForminput' type="text" name="name" value={recipeList.ingrediant} placeholder="enter ingredient name" onChange={recipeNameHandler} />
        <br />
        <span className='headers'>Image</span>
        <br />
        <input className='ingForminput' type="text" name="image" value={recipeList.image} placeholder="enter image url" onChange={enteredURLHandler} />
        <br />
        <span className='headers'>method</span>
        <br />
        <input className='ingForminput' type="text" name="method" value={recipeList.cookingMethod} placeholder="enter cookingMethod " onChange={cookingMethodHandler} />
        <br />
        <span className='headers'>time</span>
        <br />
        <input className='ingForminput' type="text" name="time" value={recipeList.time} placeholder="enter cooking time" onChange={cookingTimeHandler} />
        <br />
        <button type="submit" className='button' style={{ border: "azure solid 1px" }} >Create new recipe </button>
        <button type="reset" className='button' style={{ border: "azure solid 1px" }}> clear</button>
      </Form>

      <div className='ingCss' >
        {ingredients1.map((r, index) => (
          <div key={index} className="widthcarding">
            <h2 className='ingImage'> {r.IngredientId} {r.name}</h2>
            <img src={r.image} alt={r.name} />
            <p>{r.method}</p>
            <span>{r.time}</span>
            <input type="checkbox" className='checkIng' onChange={e => markAsIng(e.target.value)} value={r.IngredientId} />
            <hr />
          </div>
        ))}
      </div>
    </>
  )
}
