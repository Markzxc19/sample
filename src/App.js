import { useState } from 'react';
import './App.css';

export default function App() {
    
    const [tshirtPrice, setTshirtPrice] = useState(0);
    const [pantsPrice, setPantsPrice] = useState(0);
    const [shoesPrice, setShoesPrice] = useState(0);
    const [slippersPrice, setSlippersPrice] = useState(0);
    const [eyeglassPrice, setEyeglassPrice] = useState(0);
    const [total, setTotalPrice] = useState(0);

    const computeTotal = () => {
        setTotalPrice(tshirtPrice + pantsPrice + shoesPrice + slippersPrice + eyeglassPrice);
    }

    return(
        <div className='main-container'>
            <h1>Simple POS</h1>
            <h2>Items</h2>
            <div className='container'>
                <div className='item-container'>
                    <p>Item</p>
                    <input type="text" defaultValue="T-shirt" />
                    <input type="text" defaultValue="Pants" />
                    <input type="text" defaultValue="Shoes" />
                    <input type="text" defaultValue="Slippers" />
                    <input type="text" defaultValue="Eyeglass" />
                </div>
                <div className='item-container'>
                    <p>Quantity</p>
                    <input type="number" onChange={text => {setTshirtPrice(text.target.value * 150)}}/>
                    <input type="number" onChange={text => {setPantsPrice(text.target.value * 500)}}/>
                    <input type="number" onChange={text => {setShoesPrice(text.target.value * 700)}}/>
                    <input type="number" onChange={text => {setSlippersPrice(text.target.value * 80)}}/>
                    <input type="number" onChange={text => {setEyeglassPrice(text.target.value * 350)}}/>
                </div>
                <div className='item-container'>
                    <p>Unit Price</p>
                    <input type="text" placeholder="150" disabled/>
                    <input type="text" placeholder="500" disabled/>
                    <input type="text" placeholder="700" disabled/>
                    <input type="text" placeholder="80" disabled/>
                    <input type="text" placeholder="350" disabled/>
                </div>
                <div className='item-container'>
                    <p>Extended Price</p>
                    <input type="text" placeholder={tshirtPrice.toString()} disabled/>
                    <input type="text" placeholder={pantsPrice.toString()} disabled/>
                    <input type="text" placeholder={shoesPrice.toString()} disabled/>
                    <input type="text" placeholder={slippersPrice.toString()} disabled/>
                    <input type="text" placeholder={eyeglassPrice.toString()} disabled/>
                </div>
            </div>
            <div className='total-container'>
                <span>Total:</span><input type="text" placeholder={total.toString()} disabled/>
            </div>
            <button onClick={computeTotal}>COMPUTE</button>
        </div>
    )
}