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
        <CheckoutStep step1 step2></CheckoutStep>
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
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
                        <button type="submit" className="button">Continue</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
}

export default ShippingScreen;