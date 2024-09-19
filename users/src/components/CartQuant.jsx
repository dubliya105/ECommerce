import React, { useContext} from "react";
import { counterContext } from "./context/CartContext";


function  CartQuant() {
  const value=useContext(counterContext);

  return (
    <div>
        <div className="position-relative">
              <i class="bi bi-cart-plus-fill"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                 {value.cartCount.length}
                <span class="visually-hidden">unread messages</span>
              </span>
        </div>
    </div>
  )
}

export default CartQuant