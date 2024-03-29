import { data } from "./data";
import { useState } from "react";
import './App.css';
import Carousel from "./Carousel";


function App() {
  const [register, setRegister] = useState(data)
  const [showText, setShowText] = useState(false)
  
    const removeGift = (id) => {
    let newGifts = register.filter(gift => gift.id !==id)
    setRegister(newGifts)
  }

  return (
    <div>
    <div className="container">
    <h1>Baby Shower Registration</h1>
    {register.map((element => {
      const {id, name, description, price, image, showMore} = element

      const showTextClick = (element) => {
        element.showMore = !element.showMore
       setShowText(!showText)
      }

       return(
        <div key={id}>
          <div className="header">
            <h2 className="name">{name}</h2>
          </div>

          <div className="header">
            <h2 className="price">${price}</h2>
          </div>

          <div className="header">
            <Carousel image = {image}/>
          </div>

        <div className="header">
          <p>{showMore ? description : description.substring(0, 100) + "..."}
           <button className="cta" onClick={() => showTextClick(element)}>{showMore ? "Show less" : "Show more"}</button></p>
          </div>

          <div className="header">
            <button className="buyNow" onClick={() => removeGift(id)}>Buy Now</button>
          </div>
        </div>
      )
    }))}
  </div>
     <div className="header">
      <button className="btn" onClick={() => setRegister([])}>Delete All</button>
     </div>

  </div>
  );
}

export default App;
