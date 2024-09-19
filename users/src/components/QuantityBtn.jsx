import axios from 'axios';
import React, { useEffect, useState } from 'react'

function QuantityBtn({productId,count,setCount}) {
    const [quantity, setQuantity] = useState(-1); 
    const [cart,setCart]=useState([]);
    
    

    useEffect(()=>{
        setCartQuantity();
    },[])
    
  //getCartQuantity
    async function setCartQuantity(){
        let result = await axios.get("http://localhost:8080/api/cart/"+productId)
        if(result.status===200){
            setQuantity(result.data.data.quantity)
            setCart(result.data.data)
        }
    }

    //updateQuantity And DeleteCart
async function updateQuantity(num) {
    
        if(num>0){
            let result = await axios.patch("http://localhost:8080/api/cart/get/"+productId,{
                quantity:num
            });
            if (result.status === 200) {
                setCartQuantity();
                setCount(count+1);
            }
        }
        else{
            let result = await axios.delete("http://localhost:8080/api/cart/"+cart._id)
            if(result.status===200){
                setCount(count-1)   
            }
        }
}


  return (
    <div className="qua">     
        <div class="value-button" id="decrease"  value="Decrease Value" onClick={()=>updateQuantity(quantity-1)} >-</div>
        <input type="number" id="number" value={quantity} />
        <div class="value-button" id="increase"  value="Increase Value" onClick={()=>updateQuantity(quantity+1)}  >+</div>
    </div>
  )
}

export default QuantityBtn