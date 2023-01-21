import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
const apiUrl = 'http://localhost:56309/api/Ingredient';

export default function IngrediantForm() {
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const [calories,setCalories] = useState('');

    const inputNameHandler = (e) => {
        console.log("Name entered " + e.target.value);
        setName(e.target.value);
      }; 
      const enteredURLHandler = (e) => {
        console.log("url - " + e.target.value);
        setImage(e.target.value);
      };
      const caloriesHandler = (e) => {
        console.log("entered calories " + e.target.value);
        setCalories(e.target.value);
      };
    const clearForm=()=>{
        setName('');
        setImage('');
        setCalories('');
    }

        const [ingList, setIngList] = useState('')
        const submitHandleInput=(e)=>{
            e.preventDefault();
            let ingredientInfo ={
                name:  name,
                image:  image,
                calories: calories
            }
            if (name==='' || image ==='' || calories === '') {
                alert("missing some values, please fill the entire form.");
            }
            else{
                setIngList({...ingList, ingredientInfo});
                console.log(ingredientInfo);

                const i = { 
                    name: name,
                    image: image,
                    calories: calories
                    };
                    fetch(apiUrl, {
                    method: 'POST',
                    body: JSON.stringify(i),
                    headers: new Headers({
                        'Accept': 'application/json; charset=UTF-8',
                    'Content-type': 'application/json; charset=UTF-8' 
                    })
                    })
                    .then(res => {
                    console.log('res=', res);
                    return res.json()
                    })
                    .then(
                    (result) => {
                    console.log("fetch POST= ", result);
                    console.log(result.Avg);
                    clearForm();
                    },
                    (error) => {
                    console.log("err post=", error);
                });
                alert("ingredient was added! :) ")

                //************************** */
            }
        }

        


  return (
    <>
   
<Form className='ingForm' onSubmit={ submitHandleInput} onReset={clearForm} >
     <h1>New Ingrediant</h1><br />
<span className='headers'>Name</span>
<br />
<input className='ingForminput' onChange={inputNameHandler} value={ingList.name} type="text" name="ingrediant"  placeholder="enter ingredient name"  />
<br />
 <span className='headers'>Image</span>
<br />    
<input className='ingForminput'onChange={enteredURLHandler} type="text" name="image"  placeholder="enter image url" />
<br />
<span className='headers'>Calories</span> 
<br />   
<input className='ingForminput' onChange={caloriesHandler} type="number" name="calories" placeholder="enter dish calories" />
<br />
<button type="submit" className='button' style={{border:"azure solid 1px"}} >Create new ingredient </button>
<button type="reset" className='button' style={{border:"azure solid 1px"}}> clear</button>
</Form></>
  )
}



