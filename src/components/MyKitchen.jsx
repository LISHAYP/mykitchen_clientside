import React , {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
const apiUrl = 'http://localhost:56309/api/get/recipe';

export default function MyKitchen() {

  const {state} = useLocation();
  let recipeObj = state;
  console.log(recipeObj);

  const [arr, setArr] = useState([]);
useEffect(() => {
    btnGetAll();
},[]);
  

  const btnGetAll = async() =>{

    try {
      let res = await fetch(apiUrl);
      let data = await res.json();
      setArr(data);
    } catch (error) {
      console.error(error)
    }




  // fetch(apiUrl, {
  //   method: 'GET',
  //   headers: new Headers({
  //     'Accept': 'application/json; charset=UTF-8',
  //   'Content-Type': 'application/json; charset=UTF-8',
  //   })
  //   })
  //   .then(res => {
  //     console.log(res.json())
  //   return res.json()
  //   })
  //   .then(
  //   (result) => {
  //   setArr( result )
  //   },
  //   (error) => {
  //   console.log("err post=", error);
  //   });
  }
  
  return (
  <div >
    <h1 >MyKitchen</h1>
    <div className='repiceCss' >
      {arr.map((r, index) => (
          <div key={index} className="widthcard">
            <h2 className='recipeImage'>{r.name}</h2>
           <img src={r.image} alt={r.name} />
           <p>{r.method}</p>
           <span>{r.time}</span>
            <hr />
          </div>
        ))}  
        </div>
    </div>
  )
}


