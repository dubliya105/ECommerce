import React, { useEffect } from 'react'
import './OrderDe.css'
import Cookies from 'universal-cookie';
function OrderDe() {
    const cookies=new Cookies();
    let user=cookies.get('user')
  return (
    <div>
       <div className=" w-100">
  <div className="row w-100">
    <div className="col-xl-12">
      <div className="card">
        <div className="card-body">
          <ol className="activity-checkout mb-0 px-4 mt-3">
            <li className="checkout-item">
              <div className="avatar checkout-icon p-1">
                <div className="avatar-title rounded-circle bg-primary">
                  <i className="bx bxs-receipt text-white font-size-20" />
                </div>
              </div>
              <div className="feed-item-list">
                <div>
                  <h5 className="font-size-16 mb-1">Billing Info</h5>
                  <p className="text-muted text-truncate mb-4">Sed ut perspiciatis unde omnis iste</p>
                  <div className="mb-3">
                    <form>
                      <div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="billing-name">Name</label>
                             <br /> <h6>{user.name}</h6>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="billing-email-address">Email Address</label>
                              <br /> <h6> {user.email}</h6>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="billing-phone">Phone</label>
                              <br /> <h6> {user.phone}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="billing-address">Address</label>
                          <br /> <h6> {user.address}</h6>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="mb-4 mb-lg-0">
                              <label className="form-label">Country</label>
                              <select className="form-control form-select" title="Country">
                                <option value={0}>Select Country</option>
                                <option value="AF">India</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>                                   
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="mb-4 mb-lg-0">
                              <label className="form-label" htmlFor="billing-city">City</label>
                              <input type="text" className="form-control" id="billing-city" placeholder="Enter City" />
                            </div>
                          </div>
                        
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </li>
            <li className="checkout-item">
              <div className="avatar checkout-icon p-1">
                <div className="avatar-title rounded-circle bg-primary">
                  <i className="bx bxs-truck text-white font-size-20" />
                </div>
              </div>
              <div className="feed-item-list">
                <div>
                  <h5 className="font-size-16 mb-1">Shipping Info</h5>
                  <p className="text-muted text-truncate mb-4">Neque porro quisquam est</p>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6">
                        <div data-bs-toggle="collapse">
                          <label className="card-radio-label mb-0">
                            <input type="radio" name="address" id="info-address1" className="card-radio-input" defaultChecked />
                            <div className="card-radio text-truncate p-3">
                              <span className="fs-14 mb-4 d-block">Address 1</span>
                              <span className="fs-14 mb-2 d-block"></span>
                              <span className="text-muted fw-normal text-wrap mb-1 d-block">{user.address}</span>
                              <span className="text-muted fw-normal d-block">   </span>
                            </div>
                          </label>
                          <div className="edit-btn bg-light  rounded">
                            <a href="#" data-bs-toggle="tooltip" data-placement="top" title data-bs-original-title="Edit">
                              <i className="bx bx-pencil font-size-16" />
                            </a>
                          </div>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="checkout-item">
              <div className="avatar checkout-icon p-1">
                <div className="avatar-title rounded-circle bg-primary">
                  <i className="bx bxs-wallet-alt text-white font-size-20" />
                </div>
              </div>
              <div className="feed-item-list">
                <div>
                  <h5 className="font-size-16 mb-1">Payment Info</h5>
                  <p className="text-muted text-truncate mb-4">Duis arcu tortor, suscipit eget</p>
                </div>
                <div>
                  <h5 className="font-size-14 mb-3">Payment method :</h5>
                  <div className="row">
                    <div className="col-lg-3 col-sm-6">
                      <div data-bs-toggle="collapse">
                        <label className="card-radio-label">
                          <input type="radio" name="pay-method" id="pay-methodoption1" className="card-radio-input" />
                          <span className="card-radio py-3 text-center text-truncate">
                            <i className="bx bx-credit-card d-block h2 mb-3" />
                            Credit / Debit Card
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div>
                        <label className="card-radio-label">
                          <input type="radio" name="pay-method" id="pay-methodoption2" className="card-radio-input" />
                          <span className="card-radio py-3 text-center text-truncate">
                            <i className="bx bxl-paypal d-block h2 mb-3" />
                            Paypal
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div>
                        <label className="card-radio-label">
                          <input type="radio" name="pay-method" id="pay-methodoption3" className="card-radio-input" defaultChecked />
                          <span className="card-radio py-3 text-center text-truncate">
                            <i className="bx bx-money d-block h2 mb-3" />
                            <span>Cash on Delivery</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      {/* <div className="row my-4">
        <div className="col">
          <a href="ecommerce-products.html" className="btn btn-link text-muted">
            <i className="mdi mdi-arrow-left me-1" /> Continue Shopping </a>
        </div>
        <div className="col">
          <div className="text-end mt-2 mt-sm-0">
            <a href="#" className="btn btn-success">
              <i className="mdi mdi-cart-outline me-1" /> Procced </a>
          </div>
        </div> 
      </div>*/}
    </div>  
  </div>
 
</div>

    </div>
  )
}

export default OrderDe