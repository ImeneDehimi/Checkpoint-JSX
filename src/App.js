import Card from "./Card";
import { useState } from 'react';
import './index.css';
import ColorPicker from './ColorPicker';
import pic1 from "./image/photo.jpg"
import pic2 from "./image/photo2.jpg"
import pic3 from "./image/photo3.jpg"


function App() {
  const [count, setCount] = useState(0)
  const increment = ()=>{
    setCount(count + 1);
  }
  const decrement = ()=>{
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
  <>
  <p>count: {count}</p>
  <button onClick={decrement}>-</button>
  <button onClick={increment}>+</button>
  <br/>
  <ColorPicker></ColorPicker>
  <div className="cards">
    <Card title="produit1" price="70$" Imagesrc={pic1}></Card>
    <Card title="produit2" price="50$" Imagesrc={pic2}></Card>
    <Card title="produit3" price="66$" Imagesrc={pic3}></Card>
    </div>
  </>
  );
}

export default App;
