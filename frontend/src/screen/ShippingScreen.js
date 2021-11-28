import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveShipping } from '../actions/cartActions';
import CheckoutStep from '../components/CheckoutStep.js';

function ShippingScreen(props) {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  if (!userInfo) {
    props.history.push('/signin');
  }

  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postCode, setPostCode] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();
  
  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(saveShipping(
      {address, city, postCode, country, fullName}
    ));
    props.history.push('payment')
  }
  
  
  return <div>
    {/* <div className="d-flex flex-row">
      <div className="flex-row-fluid ml-lg-8">
        <div className="card card-custom card-transparent">
          <div className="card-body p-0">
            <div className="wizard wizard-4" id="kt_wizard" data-wizard-state="first" data-wizard-clickable="false">
              <div className="wizard-nav">
                <div className="wizard-steps" data-total-steps="3">
                  <div className="wizard-step" data-wizard-type="step" data-wizard-state="current">
                    <div className="wizard-wrapper">
                      <div className="wizard-number">1</div>
                      <div className="wizard-label">
                        <div className="wizard-title">Delivery Address</div>
                        <div className="wizard-desc">Setup Your Address</div>
                      </div>
                    </div>
                  </div>
                  <div className="wizard-step" data-wizard-type="step" data-wizard-state="pending">
                    <div className="wizard-wrapper">
                      <div className="wizard-number">2</div>
                      <div className="wizard-label">
                        <div className="wizard-title">Payment</div>
                        <div className="wizard-desc">Payment Options</div>
                      </div>
                    </div>
                  </div>
                  <div className="wizard-step" data-wizard-type="step" data-wizard-state="pending">
                    <div className="wizard-wrapper">
                      <div className="wizard-number">3</div>
                      <div className="wizard-label">
                        <div className="wizard-title">Purchase</div>
                        <div className="wizard-desc">Review and Submit</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-custom card-shadowless rounded-top-0">
                <div className="card-body p-0">
                  <div className="row justify-content-center py-8 px-8 py-lg-15 px-lg-10">
                    <div className="col-xl-12 col-xxl-7">
                      <form className="form mt-0 mt-lg-10 fv-plugins-bootstrap fv-plugins-framework" id="kt_form">
                        <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                          <h4 className="mb-10 font-weight-bold text-dark">Enter Your Address</h4>
                          <div className="form-group fv-plugins-icon-container">
                            <label>Address Line 1</label>
                            <input type="text" className="form-control form-control-solid form-control-lg" name="address1" placeholder="Address Line 1" value="Address Line 1"/>
                            <span className="form-text text-muted">Please enter your Address.</span>
                          <div className="fv-plugins-message-container"></div></div>
                          <div className="form-group">
                            <label>Address Line 2</label>
                            <input type="text" className="form-control form-control-solid form-control-lg" name="address2" placeholder="Address Line 2" value="Address Line 2" />
                            <span className="form-text text-muted">Please enter your Address.</span>
                          </div>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="form-group fv-plugins-icon-container">
                                <label>Postcode</label>
                                <input type="text" className="form-control form-control-solid form-control-lg" name="postcode" placeholder="Postcode" value="3000" />
                                <span className="form-text text-muted">Please enter your Postcode.</span>
                              <div className="fv-plugins-message-container"></div></div>
                            </div>
                            <div className="col-xl-6">
                              <div className="form-group fv-plugins-icon-container">
                                <label>City</label>
                                <input type="text" className="form-control form-control-solid form-control-lg" name="state" placeholder="City" value="Melbourne" />
                                <span className="form-text text-muted">Please enter your City.</span>
                              <div className="fv-plugins-message-container"></div></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="form-group fv-plugins-icon-container">
                                <label>State</label>
                                <input type="text" className="form-control form-control-solid form-control-lg" name="state" placeholder="State" value="VIC" / >
                                <span className="form-text text-muted">Please enter your State.</span>
                              <div className="fv-plugins-message-container"></div></div>
                            </div>
                            <div className="col-xl-6">
                              <div className="form-group fv-plugins-icon-container">
                                <label>Country</label>
                                <select name="country" className="form-control form-control-solid form-control-lg">
                                  <option value="">Select</option>
                                  <option value="AF">Afghanistan</option>
                                  
                                </select>
                              <div className="fv-plugins-message-container"></div></div>
                            </div>
                          </div>
                        </div>
                        <div className="pb-5" data-wizard-type="step-content">
                          <h4 className="mb-10 font-weight-bold text-dark">Enter your Payment Details</h4>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="form-group fv-plugins-icon-container">
                                <label>Name on Card</label>
                                <input type="text" className="form-control form-control-solid form-control-lg" name="ccname" placeholder="Card Name" value="John Wick" />
                                <span className="form-text text-muted">Please enter your Card Name.</span>
                              <div className="fv-plugins-message-container"></div></div>
                            </div>
                            <div className="col-xl-6">
                              <div className="form-group fv-plugins-icon-container">
                                <label>Card Number</label>
                                <input type="text" className="form-control form-control-solid form-control-lg" name="ccnumber" placeholder="Card Number" value="4444 3333 2222 1111" />
                                <span className="form-text text-muted">Please enter your Address.</span>
                              <div className="fv-plugins-message-container"></div></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-4">
                              <div className="form-group fv-plugins-icon-container">
                                <label>Card Expiry Month</label>
                                <input type="number" className="form-control form-control-solid form-control-lg" name="ccmonth" placeholder="Card Expiry Month" value="01" />
                                <span className="form-text text-muted">Please enter your Card Expiry Month.</span>
                              <div className="fv-plugins-message-container"></div></div>
                            </div>
                            <div className="col-xl-4">
                              <div className="form-group fv-plugins-icon-container">
                                <label>Card Expiry Year</label>
                                <input type="number" className="form-control form-control-solid form-control-lg" name="ccyear" placeholder="Card Expire Year" value="21" />
                                <span className="form-text text-muted">Please enter your Card Expiry Year.</span>
                              <div className="fv-plugins-message-container"></div></div>
                            </div>
                            <div className="col-xl-4">
                              <div className="form-group fv-plugins-icon-container">
                                <label>Card CVV Number</label>
                                <input type="password" className="form-control form-control-solid form-control-lg" name="cccvv" placeholder="Card CVV Number" value="123" />
                                <span className="form-text text-muted">Please enter your Card CVV Number.</span>
                              <div className="fv-plugins-message-container"></div></div>
                            </div>
                          </div>
                        </div>
                        <div className="pb-5" data-wizard-type="step-content">
                          <h4 className="mb-10 font-weight-bold text-dark">Review your Order and Submit</h4>
                          <h6 className="font-weight-bolder mb-3">Delivery Address:</h6>
                          <div className="text-dark-50 line-height-lg">
                            <div>Address Line 1</div>
                            <div>Address Line 2</div>
                            <div>Melbourne 3000, VIC, Australia</div>
                          </div>
                          <div className="separator separator-dashed my-5"></div>
                          <h6 className="font-weight-bolder mb-3">Order Details:</h6>
                          <div className="text-dark-50 line-height-lg">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th className="pl-0 font-weight-bold text-muted text-uppercase">Ordered Items</th>
                                    <th className="text-right font-weight-bold text-muted text-uppercase">Qty</th>
                                    <th className="text-right font-weight-bold text-muted text-uppercase">Unit Price</th>
                                    <th className="text-right pr-0 font-weight-bold text-muted text-uppercase">Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="font-weight-boldest">
                                    <td className="border-0 pl-0 pt-7 d-flex align-items-center">
                                    <div className="symbol symbol-40 flex-shrink-0 mr-4 bg-light">
                                      <div className="symbol-label" style={{backgroundImage: "url('/metronic/theme/html/demo1/dist/assets/media/products/11.png')"}}></div>
                                    </div>
                                    Street Sneakers</td>
                                    <td className="text-right pt-7 align-middle">2</td>
                                    <td className="text-right pt-7 align-middle">$90.00</td>
                                    <td className="text-primary pr-0 pt-7 text-right align-middle">$180.00</td>
                                  </tr>
                                  <tr className="font-weight-boldest border-bottom-0">
                                    <td className="border-top-0 pl-0 py-4 d-flex align-items-center">
                                    <div className="symbol symbol-40 flex-shrink-0 mr-4 bg-light">
                                      <div className="symbol-label" style={{backgroundImage: "url('/metronic/theme/html/demo1/dist/assets/media/products/2.png')"}}></div>
                                    </div>
                                    Headphones</td>
                                    <td className="border-top-0 text-right py-4 align-middle">1</td>
                                    <td className="border-top-0 text-right py-4 align-middle">$449.00</td>
                                    <td className="text-primary border-top-0 pr-0 py-4 text-right align-middle">$449.00</td>
                                  </tr>
                                  <tr className="font-weight-boldest border-bottom-0">
                                    <td className="border-top-0 pl-0 py-4 d-flex align-items-center">
                                    <div className="symbol symbol-40 flex-shrink-0 mr-4 bg-light">
                                      <div className="symbol-label" style={{backgroundImage: "url('/metronic/theme/html/demo1/dist/assets/media/products/1.png')"}}></div>
                                    </div>
                                    Smartwatch</td>
                                    <td className="border-top-0 text-right py-4 align-middle">1</td>
                                    <td className="border-top-0 text-right py-4 align-middle">$160.00</td>
                                    <td className="text-primary border-top-0 pr-0 py-4 text-right align-middle">$160.00</td>
                                  </tr>
                                  <tr>
                                    <td colspan="2"></td>
                                    <td className="font-weight-bolder text-right">Subtotal</td>
                                    <td className="font-weight-bolder text-right pr-0">$1538.00</td>
                                  </tr>
                                  <tr>
                                    <td colspan="2" className="border-0 pt-0"></td>
                                    <td className="border-0 pt-0 font-weight-bolder text-right">Delivery Fees</td>
                                    <td className="border-0 pt-0 font-weight-bolder text-right pr-0">$15.00</td>
                                  </tr>
                                  <tr>
                                    <td colspan="2" className="border-0 pt-0"></td>
                                    <td className="border-0 pt-0 font-weight-bolder font-size-h5 text-right">Grand Total</td>
                                    <td className="border-0 pt-0 font-weight-bolder font-size-h5 text-success text-right pr-0">$1553.00</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="separator separator-dashed my-5"></div>
                          <h6 className="font-weight-bolder mb-3">Delivery Service Type:</h6>
                          <div className="text-dark-50 line-height-lg">
                            <div>Overnight Delivery with Regular Packaging</div>
                            <div>Preferred Morning (8:00AM - 11:00AM) Delivery</div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between border-top mt-5 pt-10">
                          <div className="mr-2">
                            <button type="button" className="btn btn-light-primary font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-prev">Previous</button>
                          </div>
                          <div>
                            <button type="button" className="btn btn-success font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-submit">Submit</button>
                            <button type="button" className="btn btn-primary font-weight-bolder text-uppercase px-9 py-4" data-wizard-type="action-next">Next</button>
                          </div>
                        </div>
                      <div></div><div></div></form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <CheckoutStep step1 step2></CheckoutStep>
    <div classNameName="form">
      <form onSubmit={submitHandler}>
        <ul classNameName="form-container">
          <li>
            <h2>Shipping</h2>
          </li>
          <li>
            <label htmlFor="fullName">
                Full Name
            </label>
            <input
                type="text"
                id="fullName"
                placeholder="Enter full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
            ></input>
          </li>
          <li>
            <label htmlFor="address">
                Address
            </label>
            <input 
                type="text" 
                name="address" 
                id="address" 
                onChange={(e) => setAddress(e.target.value)}
                required
                >
            </input>
          </li>
          <li>
            <label htmlFor="city">
                City
            </label>
            <input type="text" 
                name="city" 
                id="city" 
                onChange={(e) => setCity(e.target.value)}
                required
                >
            </input>
          </li>
          <li>
            <label htmlFor="postCode">
                Post Code
            </label>
            <input type="text" 
                name="postCode" 
                id="postCode" 
                onChange={(e) => setPostCode(e.target.value)}
                required
                >
            </input>
          </li>
          <li>
            <label htmlFor="country">
                Country
            </label>
            <input 
                type="text" 
                name="country" 
                id="country" 
                onChange={(e) => setCountry(e.target.value)}
                required
                >
            </input>
          </li>
          <li>
            <button type="submit" classNameName="button">Continue</button>
          </li>
        </ul>
      </form>
    </div>
  </div>
}

export default ShippingScreen;