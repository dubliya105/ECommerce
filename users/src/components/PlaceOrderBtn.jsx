import React from "react";
import Order from "./Order";
import OrderDe from "./OrderDe";

function PlaceOrderBtn({ addToOrder,cart,allPrice }) {

  return (
    <div>
      <div
        className="text-right me-3 p-3 placebtn"
      >
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn btnplace w-25"
          style={{ background: "#fb641b"}}
        >
          <span>Place Order</span>
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               Place Order
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <OrderDe></OrderDe>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary w-25"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{width:'30%'}}
                data-bs-dismiss="modal"
                onClick={addToOrder}
              >
                <i className="mdi mdi-cart-outline me-1" /> Procced 
              </button>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
}

export default PlaceOrderBtn;
